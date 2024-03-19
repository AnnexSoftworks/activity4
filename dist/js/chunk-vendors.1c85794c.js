"use strict";(self["webpackChunksubscriptions"]=self["webpackChunksubscriptions"]||[]).push([[504],{7736:function(e,t,n){n.d(t,{Am:function(){return j},Bd:function(){return T},FA:function(){return R},Fy:function(){return w},I9:function(){return $},Im:function(){return F},Ku:function(){return W},Ll:function(){return E},T9:function(){return y},Uj:function(){return c},XA:function(){return v},ZQ:function(){return b},bD:function(){return V},cY:function(){return _},eX:function(){return N},g:function(){return D},gR:function(){return M},hp:function(){return B},jZ:function(){return I},lT:function(){return C},lV:function(){return A},nr:function(){return k},sr:function(){return S},tD:function(){return q},u:function(){return u},zW:function(){return x},zw:function(){return l}});n(5724),n(6409);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&h(n)&&(e[n]=l(e[n],t[n]));return e}function h(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>d().__FIREBASE_DEFAULTS__,p=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},g=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},m=()=>{try{return f()||p()||g()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},y=()=>{var e;return null===(e=m())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=m())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function I(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function E(){var e;const t=null===(e=m())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function T(){return"object"===typeof self&&self.self===self}function S(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function A(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){return!E()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x(){try{return"object"===typeof indexedDB}catch(e){return!1}}function N(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O="FirebaseError";class D extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=O,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?P(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new D(r,o,n);return a}}function P(e,t){return e.replace(L,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const L=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function F(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function V(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(U(n)&&U(s)){if(!V(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function U(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function $(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function B(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t){const n=new z(e,t);return n.subscribe.bind(n)}class z{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=K(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=G),void 0===r.error&&(r.error=G),void 0===r.complete&&(r.complete=G);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function K(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function G(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e){return e&&e._delegate?e._delegate:e}},5411:function(e,t,n){var r={};n.r(r),n.d(r,{afterMain:function(){return E},afterRead:function(){return w},afterWrite:function(){return A},applyStyles:function(){return L},arrow:function(){return ae},auto:function(){return c},basePlacements:function(){return u},beforeMain:function(){return b},beforeRead:function(){return v},beforeWrite:function(){return T},bottom:function(){return s},clippingParents:function(){return d},computeStyles:function(){return fe},createPopper:function(){return lt},createPopperBase:function(){return ct},createPopperLite:function(){return dt},detectOverflow:function(){return Pe},end:function(){return h},eventListeners:function(){return me},flip:function(){return Ve},hide:function(){return Be},left:function(){return a},main:function(){return I},modifierPhases:function(){return C},offset:function(){return Ke},placements:function(){return y},popper:function(){return p},popperGenerator:function(){return at},popperOffsets:function(){return We},preventOverflow:function(){return Ye},read:function(){return _},reference:function(){return g},right:function(){return o},start:function(){return l},top:function(){return i},variationPlacements:function(){return m},viewport:function(){return f},write:function(){return S}});n(5724);var i="top",s="bottom",o="right",a="left",c="auto",u=[i,s,o,a],l="start",h="end",d="clippingParents",f="viewport",p="popper",g="reference",m=u.reduce((function(e,t){return e.concat([t+"-"+l,t+"-"+h])}),[]),y=[].concat(u,[c]).reduce((function(e,t){return e.concat([t,t+"-"+l,t+"-"+h])}),[]),v="beforeRead",_="read",w="afterRead",b="beforeMain",I="main",E="afterMain",T="beforeWrite",S="write",A="afterWrite",C=[v,_,w,b,I,E,T,S,A];function k(e){return e?(e.nodeName||"").toLowerCase():null}function x(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function N(e){var t=x(e).Element;return e instanceof t||e instanceof Element}function O(e){var t=x(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function D(e){if("undefined"===typeof ShadowRoot)return!1;var t=x(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function R(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];O(i)&&k(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))}function P(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),o=s.reduce((function(e,t){return e[t]="",e}),{});O(r)&&k(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}}var L={name:"applyStyles",enabled:!0,phase:"write",fn:R,effect:P,requires:["computeStyles"]};function M(e){return e.split("-")[0]}var F=Math.max,V=Math.min,U=Math.round;function j(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function $(){return!/^((?!chrome|android).)*safari/i.test(j())}function B(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),i=1,s=1;t&&O(e)&&(i=e.offsetWidth>0&&U(r.width)/e.offsetWidth||1,s=e.offsetHeight>0&&U(r.height)/e.offsetHeight||1);var o=N(e)?x(e):window,a=o.visualViewport,c=!$()&&n,u=(r.left+(c&&a?a.offsetLeft:0))/i,l=(r.top+(c&&a?a.offsetTop:0))/s,h=r.width/i,d=r.height/s;return{width:h,height:d,top:l,right:u+h,bottom:l+d,left:u,x:u,y:l}}function q(e){var t=B(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function z(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&D(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function K(e){return x(e).getComputedStyle(e)}function G(e){return["table","td","th"].indexOf(k(e))>=0}function W(e){return((N(e)?e.ownerDocument:e.document)||window.document).documentElement}function H(e){return"html"===k(e)?e:e.assignedSlot||e.parentNode||(D(e)?e.host:null)||W(e)}function Q(e){return O(e)&&"fixed"!==K(e).position?e.offsetParent:null}function Y(e){var t=/firefox/i.test(j()),n=/Trident/i.test(j());if(n&&O(e)){var r=K(e);if("fixed"===r.position)return null}var i=H(e);D(i)&&(i=i.host);while(O(i)&&["html","body"].indexOf(k(i))<0){var s=K(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||t&&"filter"===s.willChange||t&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}function X(e){var t=x(e),n=Q(e);while(n&&G(n)&&"static"===K(n).position)n=Q(n);return n&&("html"===k(n)||"body"===k(n)&&"static"===K(n).position)?t:n||Y(e)||t}function J(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Z(e,t,n){return F(e,V(t,n))}function ee(e,t,n){var r=Z(e,t,n);return r>n?n:r}function te(){return{top:0,right:0,bottom:0,left:0}}function ne(e){return Object.assign({},te(),e)}function re(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var ie=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,ne("number"!==typeof e?e:re(e,u))};function se(e){var t,n=e.state,r=e.name,c=e.options,u=n.elements.arrow,l=n.modifiersData.popperOffsets,h=M(n.placement),d=J(h),f=[a,o].indexOf(h)>=0,p=f?"height":"width";if(u&&l){var g=ie(c.padding,n),m=q(u),y="y"===d?i:a,v="y"===d?s:o,_=n.rects.reference[p]+n.rects.reference[d]-l[d]-n.rects.popper[p],w=l[d]-n.rects.reference[d],b=X(u),I=b?"y"===d?b.clientHeight||0:b.clientWidth||0:0,E=_/2-w/2,T=g[y],S=I-m[p]-g[v],A=I/2-m[p]/2+E,C=Z(T,A,S),k=d;n.modifiersData[r]=(t={},t[k]=C,t.centerOffset=C-A,t)}}function oe(e){var t=e.state,n=e.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&z(t.elements.popper,i)&&(t.elements.arrow=i)}var ae={name:"arrow",enabled:!0,phase:"main",fn:se,effect:oe,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ce(e){return e.split("-")[1]}var ue={top:"auto",right:"auto",bottom:"auto",left:"auto"};function le(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:U(n*i)/i||0,y:U(r*i)/i||0}}function he(e){var t,n=e.popper,r=e.popperRect,c=e.placement,u=e.variation,l=e.offsets,d=e.position,f=e.gpuAcceleration,p=e.adaptive,g=e.roundOffsets,m=e.isFixed,y=l.x,v=void 0===y?0:y,_=l.y,w=void 0===_?0:_,b="function"===typeof g?g({x:v,y:w}):{x:v,y:w};v=b.x,w=b.y;var I=l.hasOwnProperty("x"),E=l.hasOwnProperty("y"),T=a,S=i,A=window;if(p){var C=X(n),k="clientHeight",N="clientWidth";if(C===x(n)&&(C=W(n),"static"!==K(C).position&&"absolute"===d&&(k="scrollHeight",N="scrollWidth")),c===i||(c===a||c===o)&&u===h){S=s;var O=m&&C===A&&A.visualViewport?A.visualViewport.height:C[k];w-=O-r.height,w*=f?1:-1}if(c===a||(c===i||c===s)&&u===h){T=o;var D=m&&C===A&&A.visualViewport?A.visualViewport.width:C[N];v-=D-r.width,v*=f?1:-1}}var R,P=Object.assign({position:d},p&&ue),L=!0===g?le({x:v,y:w},x(n)):{x:v,y:w};return v=L.x,w=L.y,f?Object.assign({},P,(R={},R[S]=E?"0":"",R[T]=I?"0":"",R.transform=(A.devicePixelRatio||1)<=1?"translate("+v+"px, "+w+"px)":"translate3d("+v+"px, "+w+"px, 0)",R)):Object.assign({},P,(t={},t[S]=E?w+"px":"",t[T]=I?v+"px":"",t.transform="",t))}function de(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,u={placement:M(t.placement),variation:ce(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,he(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,he(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var fe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:de,data:{}},pe={passive:!0};function ge(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,s=void 0===i||i,o=r.resize,a=void 0===o||o,c=x(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&u.forEach((function(e){e.addEventListener("scroll",n.update,pe)})),a&&c.addEventListener("resize",n.update,pe),function(){s&&u.forEach((function(e){e.removeEventListener("scroll",n.update,pe)})),a&&c.removeEventListener("resize",n.update,pe)}}var me={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ge,data:{}},ye={left:"right",right:"left",bottom:"top",top:"bottom"};function ve(e){return e.replace(/left|right|bottom|top/g,(function(e){return ye[e]}))}var _e={start:"end",end:"start"};function we(e){return e.replace(/start|end/g,(function(e){return _e[e]}))}function be(e){var t=x(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Ie(e){return B(W(e)).left+be(e).scrollLeft}function Ee(e,t){var n=x(e),r=W(e),i=n.visualViewport,s=r.clientWidth,o=r.clientHeight,a=0,c=0;if(i){s=i.width,o=i.height;var u=$();(u||!u&&"fixed"===t)&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:o,x:a+Ie(e),y:c}}function Te(e){var t,n=W(e),r=be(e),i=null==(t=e.ownerDocument)?void 0:t.body,s=F(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=F(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+Ie(e),c=-r.scrollTop;return"rtl"===K(i||n).direction&&(a+=F(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Se(e){var t=K(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Ae(e){return["html","body","#document"].indexOf(k(e))>=0?e.ownerDocument.body:O(e)&&Se(e)?e:Ae(H(e))}function Ce(e,t){var n;void 0===t&&(t=[]);var r=Ae(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),s=x(r),o=i?[s].concat(s.visualViewport||[],Se(r)?r:[]):r,a=t.concat(o);return i?a:a.concat(Ce(H(o)))}function ke(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function xe(e,t){var n=B(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Ne(e,t,n){return t===f?ke(Ee(e,n)):N(t)?xe(t,n):ke(Te(W(e)))}function Oe(e){var t=Ce(H(e)),n=["absolute","fixed"].indexOf(K(e).position)>=0,r=n&&O(e)?X(e):e;return N(r)?t.filter((function(e){return N(e)&&z(e,r)&&"body"!==k(e)})):[]}function De(e,t,n,r){var i="clippingParents"===t?Oe(e):[].concat(t),s=[].concat(i,[n]),o=s[0],a=s.reduce((function(t,n){var i=Ne(e,n,r);return t.top=F(i.top,t.top),t.right=V(i.right,t.right),t.bottom=V(i.bottom,t.bottom),t.left=F(i.left,t.left),t}),Ne(e,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Re(e){var t,n=e.reference,r=e.element,c=e.placement,u=c?M(c):null,d=c?ce(c):null,f=n.x+n.width/2-r.width/2,p=n.y+n.height/2-r.height/2;switch(u){case i:t={x:f,y:n.y-r.height};break;case s:t={x:f,y:n.y+n.height};break;case o:t={x:n.x+n.width,y:p};break;case a:t={x:n.x-r.width,y:p};break;default:t={x:n.x,y:n.y}}var g=u?J(u):null;if(null!=g){var m="y"===g?"height":"width";switch(d){case l:t[g]=t[g]-(n[m]/2-r[m]/2);break;case h:t[g]=t[g]+(n[m]/2-r[m]/2);break;default:}}return t}function Pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,a=void 0===r?e.placement:r,c=n.strategy,l=void 0===c?e.strategy:c,h=n.boundary,m=void 0===h?d:h,y=n.rootBoundary,v=void 0===y?f:y,_=n.elementContext,w=void 0===_?p:_,b=n.altBoundary,I=void 0!==b&&b,E=n.padding,T=void 0===E?0:E,S=ne("number"!==typeof T?T:re(T,u)),A=w===p?g:p,C=e.rects.popper,k=e.elements[I?A:w],x=De(N(k)?k:k.contextElement||W(e.elements.popper),m,v,l),O=B(e.elements.reference),D=Re({reference:O,element:C,strategy:"absolute",placement:a}),R=ke(Object.assign({},C,D)),P=w===p?R:O,L={top:x.top-P.top+S.top,bottom:P.bottom-x.bottom+S.bottom,left:x.left-P.left+S.left,right:P.right-x.right+S.right},M=e.modifiersData.offset;if(w===p&&M){var F=M[a];Object.keys(L).forEach((function(e){var t=[o,s].indexOf(e)>=0?1:-1,n=[i,s].indexOf(e)>=0?"y":"x";L[e]+=F[n]*t}))}return L}function Le(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?y:c,h=ce(r),d=h?a?m:m.filter((function(e){return ce(e)===h})):u,f=d.filter((function(e){return l.indexOf(e)>=0}));0===f.length&&(f=d);var p=f.reduce((function(t,n){return t[n]=Pe(e,{placement:n,boundary:i,rootBoundary:s,padding:o})[M(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}function Me(e){if(M(e)===c)return[];var t=ve(e);return[we(e),t,we(t)]}function Fe(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var u=n.mainAxis,h=void 0===u||u,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,g=n.padding,m=n.boundary,y=n.rootBoundary,v=n.altBoundary,_=n.flipVariations,w=void 0===_||_,b=n.allowedAutoPlacements,I=t.options.placement,E=M(I),T=E===I,S=p||(T||!w?[ve(I)]:Me(I)),A=[I].concat(S).reduce((function(e,n){return e.concat(M(n)===c?Le(t,{placement:n,boundary:m,rootBoundary:y,padding:g,flipVariations:w,allowedAutoPlacements:b}):n)}),[]),C=t.rects.reference,k=t.rects.popper,x=new Map,N=!0,O=A[0],D=0;D<A.length;D++){var R=A[D],P=M(R),L=ce(R)===l,F=[i,s].indexOf(P)>=0,V=F?"width":"height",U=Pe(t,{placement:R,boundary:m,rootBoundary:y,altBoundary:v,padding:g}),j=F?L?o:a:L?s:i;C[V]>k[V]&&(j=ve(j));var $=ve(j),B=[];if(h&&B.push(U[P]<=0),f&&B.push(U[j]<=0,U[$]<=0),B.every((function(e){return e}))){O=R,N=!1;break}x.set(R,B)}if(N)for(var q=w?3:1,z=function(e){var t=A.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return O=t,"break"},K=q;K>0;K--){var G=z(K);if("break"===G)break}t.placement!==O&&(t.modifiersData[r]._skip=!0,t.placement=O,t.reset=!0)}}var Ve={name:"flip",enabled:!0,phase:"main",fn:Fe,requiresIfExists:["offset"],data:{_skip:!1}};function Ue(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function je(e){return[i,o,s,a].some((function(t){return e[t]>=0}))}function $e(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,o=Pe(t,{elementContext:"reference"}),a=Pe(t,{altBoundary:!0}),c=Ue(o,r),u=Ue(a,i,s),l=je(c),h=je(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}var Be={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:$e};function qe(e,t,n){var r=M(e),s=[a,i].indexOf(r)>=0?-1:1,c="function"===typeof n?n(Object.assign({},t,{placement:e})):n,u=c[0],l=c[1];return u=u||0,l=(l||0)*s,[a,o].indexOf(r)>=0?{x:l,y:u}:{x:u,y:l}}function ze(e){var t=e.state,n=e.options,r=e.name,i=n.offset,s=void 0===i?[0,0]:i,o=y.reduce((function(e,n){return e[n]=qe(n,t.rects,s),e}),{}),a=o[t.placement],c=a.x,u=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=o}var Ke={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ze};function Ge(e){var t=e.state,n=e.name;t.modifiersData[n]=Re({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var We={name:"popperOffsets",enabled:!0,phase:"read",fn:Ge,data:{}};function He(e){return"x"===e?"y":"x"}function Qe(e){var t=e.state,n=e.options,r=e.name,c=n.mainAxis,u=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,g=n.altBoundary,m=n.padding,y=n.tether,v=void 0===y||y,_=n.tetherOffset,w=void 0===_?0:_,b=Pe(t,{boundary:f,rootBoundary:p,padding:m,altBoundary:g}),I=M(t.placement),E=ce(t.placement),T=!E,S=J(I),A=He(S),C=t.modifiersData.popperOffsets,k=t.rects.reference,x=t.rects.popper,N="function"===typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,O="number"===typeof N?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(C){if(u){var P,L="y"===S?i:a,U="y"===S?s:o,j="y"===S?"height":"width",$=C[S],B=$+b[L],z=$-b[U],K=v?-x[j]/2:0,G=E===l?k[j]:x[j],W=E===l?-x[j]:-k[j],H=t.elements.arrow,Q=v&&H?q(H):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:te(),ne=Y[L],re=Y[U],ie=Z(0,k[j],Q[j]),se=T?k[j]/2-K-ie-ne-O.mainAxis:G-ie-ne-O.mainAxis,oe=T?-k[j]/2+K+ie+re+O.mainAxis:W+ie+re+O.mainAxis,ae=t.elements.arrow&&X(t.elements.arrow),ue=ae?"y"===S?ae.clientTop||0:ae.clientLeft||0:0,le=null!=(P=null==D?void 0:D[S])?P:0,he=$+se-le-ue,de=$+oe-le,fe=Z(v?V(B,he):B,$,v?F(z,de):z);C[S]=fe,R[S]=fe-$}if(d){var pe,ge="x"===S?i:a,me="x"===S?s:o,ye=C[A],ve="y"===A?"height":"width",_e=ye+b[ge],we=ye-b[me],be=-1!==[i,a].indexOf(I),Ie=null!=(pe=null==D?void 0:D[A])?pe:0,Ee=be?_e:ye-k[ve]-x[ve]-Ie+O.altAxis,Te=be?ye+k[ve]+x[ve]-Ie-O.altAxis:we,Se=v&&be?ee(Ee,ye,Te):Z(v?Ee:_e,ye,v?Te:we);C[A]=Se,R[A]=Se-ye}t.modifiersData[r]=R}}var Ye={name:"preventOverflow",enabled:!0,phase:"main",fn:Qe,requiresIfExists:["offset"]};function Xe(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Je(e){return e!==x(e)&&O(e)?Xe(e):be(e)}function Ze(e){var t=e.getBoundingClientRect(),n=U(t.width)/e.offsetWidth||1,r=U(t.height)/e.offsetHeight||1;return 1!==n||1!==r}function et(e,t,n){void 0===n&&(n=!1);var r=O(t),i=O(t)&&Ze(t),s=W(t),o=B(e,i,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==k(t)||Se(s))&&(a=Je(t)),O(t)?(c=B(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=Ie(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function tt(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name);var s=[].concat(e.requires||[],e.requiresIfExists||[]);s.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function nt(e){var t=tt(e);return C.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function rt(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function it(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var st={placement:"bottom",modifiers:[],strategy:"absolute"};function ot(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function at(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,s=void 0===i?st:i;return function(e,t,n){void 0===n&&(n=s);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},st,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,c={state:i,setOptions:function(n){var o="function"===typeof n?n(i.options):n;l(),i.options=Object.assign({},s,i.options,o),i.scrollParents={reference:N(e)?Ce(e):e.contextElement?Ce(e.contextElement):[],popper:Ce(t)};var a=nt(it([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter((function(e){return e.enabled})),u(),c.update()},forceUpdate:function(){if(!a){var e=i.elements,t=e.reference,n=e.popper;if(ot(t,n)){i.rects={reference:et(t,X(n),"fixed"===i.options.strategy),popper:q(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var s=i.orderedModifiers[r],o=s.fn,u=s.options,l=void 0===u?{}:u,h=s.name;"function"===typeof o&&(i=o({state:i,options:l,name:h,instance:c})||i)}else i.reset=!1,r=-1}}},update:rt((function(){return new Promise((function(e){c.forceUpdate(),e(i)}))})),destroy:function(){l(),a=!0}};if(!ot(e,t))return c;function u(){i.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,s=e.effect;if("function"===typeof s){var a=s({state:i,name:t,instance:c,options:r}),u=function(){};o.push(a||u)}}))}function l(){o.forEach((function(e){return e()})),o=[]}return c.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var ct=at(),ut=[me,We,fe,L,Ke,Ve,Ye,ae,Be],lt=at({defaultModifiers:ut}),ht=[me,We,fe,L],dt=at({defaultModifiers:ht});
/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const ft=new Map,pt={set(e,t,n){ft.has(e)||ft.set(e,new Map);const r=ft.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(e,t){return ft.has(e)&&ft.get(e).get(t)||null},remove(e,t){if(!ft.has(e))return;const n=ft.get(e);n.delete(t),0===n.size&&ft.delete(e)}},gt=1e6,mt=1e3,yt="transitionend",vt=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,((e,t)=>`#${CSS.escape(t)}`))),e),_t=e=>null===e||void 0===e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),wt=e=>{do{e+=Math.floor(Math.random()*gt)}while(document.getElementById(e));return e},bt=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),i=Number.parseFloat(n);return r||i?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*mt):0},It=e=>{e.dispatchEvent(new Event(yt))},Et=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),Tt=e=>Et(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(vt(e)):null,St=e=>{if(!Et(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},At=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),Ct=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?Ct(e.parentNode):null},kt=()=>{},xt=e=>{e.offsetHeight},Nt=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Ot=[],Dt=e=>{"loading"===document.readyState?(Ot.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of Ot)e()})),Ot.push(e)):e()},Rt=()=>"rtl"===document.documentElement.dir,Pt=e=>{Dt((()=>{const t=Nt();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}}))},Lt=(e,t=[],n=e)=>"function"===typeof e?e(...t):n,Mt=(e,t,n=!0)=>{if(!n)return void Lt(e);const r=5,i=bt(t)+r;let s=!1;const o=({target:n})=>{n===t&&(s=!0,t.removeEventListener(yt,o),Lt(e))};t.addEventListener(yt,o),setTimeout((()=>{s||It(t)}),i)},Ft=(e,t,n,r)=>{const i=e.length;let s=e.indexOf(t);return-1===s?!n&&r?e[i-1]:e[0]:(s+=n?1:-1,r&&(s=(s+i)%i),e[Math.max(0,Math.min(s,i-1))])},Vt=/[^.]*(?=\..*)\.|.*/,Ut=/\..*/,jt=/::\d+$/,$t={};let Bt=1;const qt={mouseenter:"mouseover",mouseleave:"mouseout"},zt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Kt(e,t){return t&&`${t}::${Bt++}`||e.uidEvent||Bt++}function Gt(e){const t=Kt(e);return e.uidEvent=t,$t[t]=$t[t]||{},$t[t]}function Wt(e,t){return function n(r){return nn(r,{delegateTarget:e}),n.oneOff&&tn.off(e,r.type,t),t.apply(e,[r])}}function Ht(e,t,n){return function r(i){const s=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of s)if(a===o)return nn(i,{delegateTarget:o}),r.oneOff&&tn.off(e,i.type,t,n),n.apply(o,[i])}}function Qt(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function Yt(e,t,n){const r="string"===typeof t,i=r?n:t||n;let s=en(e);return zt.has(s)||(s=e),[r,i,s]}function Xt(e,t,n,r,i){if("string"!==typeof t||!e)return;let[s,o,a]=Yt(t,n,r);if(t in qt){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o=e(o)}const c=Gt(e),u=c[a]||(c[a]={}),l=Qt(u,o,s?n:null);if(l)return void(l.oneOff=l.oneOff&&i);const h=Kt(o,t.replace(Vt,"")),d=s?Ht(e,n,o):Wt(e,o);d.delegationSelector=s?n:null,d.callable=o,d.oneOff=i,d.uidEvent=h,u[h]=d,e.addEventListener(a,d,s)}function Jt(e,t,n,r,i){const s=Qt(t[n],r,i);s&&(e.removeEventListener(n,s,Boolean(i)),delete t[n][s.uidEvent])}function Zt(e,t,n,r){const i=t[n]||{};for(const[s,o]of Object.entries(i))s.includes(r)&&Jt(e,t,n,o.callable,o.delegationSelector)}function en(e){return e=e.replace(Ut,""),qt[e]||e}const tn={on(e,t,n,r){Xt(e,t,n,r,!1)},one(e,t,n,r){Xt(e,t,n,r,!0)},off(e,t,n,r){if("string"!==typeof t||!e)return;const[i,s,o]=Yt(t,n,r),a=o!==t,c=Gt(e),u=c[o]||{},l=t.startsWith(".");if("undefined"===typeof s){if(l)for(const n of Object.keys(c))Zt(e,c,n,t.slice(1));for(const[n,r]of Object.entries(u)){const i=n.replace(jt,"");a&&!t.includes(i)||Jt(e,c,o,r.callable,r.delegationSelector)}}else{if(!Object.keys(u).length)return;Jt(e,c,o,s,i?n:null)}},trigger(e,t,n){if("string"!==typeof t||!e)return null;const r=Nt(),i=en(t),s=t!==i;let o=null,a=!0,c=!0,u=!1;s&&r&&(o=r.Event(t,n),r(e).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),u=o.isDefaultPrevented());const l=nn(new Event(t,{bubbles:a,cancelable:!0}),n);return u&&l.preventDefault(),c&&e.dispatchEvent(l),l.defaultPrevented&&o&&o.preventDefault(),l}};function nn(e,t={}){for(const[r,i]of Object.entries(t))try{e[r]=i}catch(n){Object.defineProperty(e,r,{configurable:!0,get(){return i}})}return e}function rn(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!==typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function sn(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const on={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${sn(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${sn(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const r of n){let n=r.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=rn(e.dataset[r])}return t},getDataAttribute(e,t){return rn(e.getAttribute(`data-bs-${sn(t)}`))}};class an{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=Et(t)?on.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"===typeof n?n:{},...Et(t)?on.getDataAttributes(t):{},..."object"===typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[n,r]of Object.entries(t)){const t=e[n],i=Et(t)?"element":_t(t);if(!new RegExp(r).test(i))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${i}" but expected type "${r}".`)}}}const cn="5.3.3";class un extends an{constructor(e,t){super(),e=Tt(e),e&&(this._element=e,this._config=this._getConfig(t),pt.set(this._element,this.constructor.DATA_KEY,this))}dispose(){pt.remove(this._element,this.constructor.DATA_KEY),tn.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){Mt(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return pt.get(Tt(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return cn}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const ln=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t?t.split(",").map((e=>vt(e))).join(","):null},hn={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(e,t){const n=[];let r=e.parentNode.closest(t);while(r)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(t,e).filter((e=>!At(e)&&St(e)))},getSelectorFromElement(e){const t=ln(e);return t&&hn.findOne(t)?t:null},getElementFromSelector(e){const t=ln(e);return t?hn.findOne(t):null},getMultipleElementsFromSelector(e){const t=ln(e);return t?hn.find(t):[]}},dn=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;tn.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),At(this))return;const i=hn.getElementFromSelector(this)||this.closest(`.${r}`),s=e.getOrCreateInstance(i);s[t]()}))},fn="alert",pn="bs.alert",gn=`.${pn}`,mn=`close${gn}`,yn=`closed${gn}`,vn="fade",_n="show";class wn extends un{static get NAME(){return fn}close(){const e=tn.trigger(this._element,mn);if(e.defaultPrevented)return;this._element.classList.remove(_n);const t=this._element.classList.contains(vn);this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),tn.trigger(this._element,yn),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=wn.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}dn(wn,"close"),Pt(wn);const bn="button",In="bs.button",En=`.${In}`,Tn=".data-api",Sn="active",An='[data-bs-toggle="button"]',Cn=`click${En}${Tn}`;class kn extends un{static get NAME(){return bn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Sn))}static jQueryInterface(e){return this.each((function(){const t=kn.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}tn.on(document,Cn,An,(e=>{e.preventDefault();const t=e.target.closest(An),n=kn.getOrCreateInstance(t);n.toggle()})),Pt(kn);const xn="swipe",Nn=".bs.swipe",On=`touchstart${Nn}`,Dn=`touchmove${Nn}`,Rn=`touchend${Nn}`,Pn=`pointerdown${Nn}`,Ln=`pointerup${Nn}`,Mn="touch",Fn="pen",Vn="pointer-event",Un=40,jn={endCallback:null,leftCallback:null,rightCallback:null},$n={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Bn extends an{constructor(e,t){super(),this._element=e,e&&Bn.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return jn}static get DefaultType(){return $n}static get NAME(){return xn}dispose(){tn.off(this._element,Nn)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Lt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=Un)return;const t=e/this._deltaX;this._deltaX=0,t&&Lt(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(tn.on(this._element,Pn,(e=>this._start(e))),tn.on(this._element,Ln,(e=>this._end(e))),this._element.classList.add(Vn)):(tn.on(this._element,On,(e=>this._start(e))),tn.on(this._element,Dn,(e=>this._move(e))),tn.on(this._element,Rn,(e=>this._end(e))))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===Fn||e.pointerType===Mn)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const qn="carousel",zn="bs.carousel",Kn=`.${zn}`,Gn=".data-api",Wn="ArrowLeft",Hn="ArrowRight",Qn=500,Yn="next",Xn="prev",Jn="left",Zn="right",er=`slide${Kn}`,tr=`slid${Kn}`,nr=`keydown${Kn}`,rr=`mouseenter${Kn}`,ir=`mouseleave${Kn}`,sr=`dragstart${Kn}`,or=`load${Kn}${Gn}`,ar=`click${Kn}${Gn}`,cr="carousel",ur="active",lr="slide",hr="carousel-item-end",dr="carousel-item-start",fr="carousel-item-next",pr="carousel-item-prev",gr=".active",mr=".carousel-item",yr=gr+mr,vr=".carousel-item img",_r=".carousel-indicators",wr="[data-bs-slide], [data-bs-slide-to]",br='[data-bs-ride="carousel"]',Ir={[Wn]:Zn,[Hn]:Jn},Er={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Tr={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Sr extends un{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=hn.findOne(_r,this._element),this._addEventListeners(),this._config.ride===cr&&this.cycle()}static get Default(){return Er}static get DefaultType(){return Tr}static get NAME(){return qn}next(){this._slide(Yn)}nextWhenVisible(){!document.hidden&&St(this._element)&&this.next()}prev(){this._slide(Xn)}pause(){this._isSliding&&It(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?tn.one(this._element,tr,(()=>this.cycle())):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void tn.one(this._element,tr,(()=>this.to(e)));const n=this._getItemIndex(this._getActive());if(n===e)return;const r=e>n?Yn:Xn;this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&tn.on(this._element,nr,(e=>this._keydown(e))),"hover"===this._config.pause&&(tn.on(this._element,rr,(()=>this.pause())),tn.on(this._element,ir,(()=>this._maybeEnableCycle()))),this._config.touch&&Bn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of hn.find(vr,this._element))tn.on(n,sr,(e=>e.preventDefault()));const e=()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),Qn+this._config.interval))},t={leftCallback:()=>this._slide(this._directionToOrder(Jn)),rightCallback:()=>this._slide(this._directionToOrder(Zn)),endCallback:e};this._swipeHelper=new Bn(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Ir[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=hn.findOne(gr,this._indicatorsElement);t.classList.remove(ur),t.removeAttribute("aria-current");const n=hn.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(ur),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),r=e===Yn,i=t||Ft(this._getItems(),n,r,this._config.wrap);if(i===n)return;const s=this._getItemIndex(i),o=t=>tn.trigger(this._element,t,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:s}),a=o(er);if(a.defaultPrevented)return;if(!n||!i)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(s),this._activeElement=i;const u=r?dr:hr,l=r?fr:pr;i.classList.add(l),xt(i),n.classList.add(u),i.classList.add(u);const h=()=>{i.classList.remove(u,l),i.classList.add(ur),n.classList.remove(ur,l,u),this._isSliding=!1,o(tr)};this._queueCallback(h,n,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(lr)}_getActive(){return hn.findOne(yr,this._element)}_getItems(){return hn.find(mr,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return Rt()?e===Jn?Xn:Yn:e===Jn?Yn:Xn}_orderToDirection(e){return Rt()?e===Xn?Jn:Zn:e===Xn?Zn:Jn}static jQueryInterface(e){return this.each((function(){const t=Sr.getOrCreateInstance(this,e);if("number"!==typeof e){if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}}tn.on(document,ar,wr,(function(e){const t=hn.getElementFromSelector(this);if(!t||!t.classList.contains(cr))return;e.preventDefault();const n=Sr.getOrCreateInstance(t),r=this.getAttribute("data-bs-slide-to");return r?(n.to(r),void n._maybeEnableCycle()):"next"===on.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())})),tn.on(window,or,(()=>{const e=hn.find(br);for(const t of e)Sr.getOrCreateInstance(t)})),Pt(Sr);const Ar="collapse",Cr="bs.collapse",kr=`.${Cr}`,xr=".data-api",Nr=`show${kr}`,Or=`shown${kr}`,Dr=`hide${kr}`,Rr=`hidden${kr}`,Pr=`click${kr}${xr}`,Lr="show",Mr="collapse",Fr="collapsing",Vr="collapsed",Ur=`:scope .${Mr} .${Mr}`,jr="collapse-horizontal",$r="width",Br="height",qr=".collapse.show, .collapse.collapsing",zr='[data-bs-toggle="collapse"]',Kr={parent:null,toggle:!0},Gr={parent:"(null|element)",toggle:"boolean"};class Wr extends un{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=hn.find(zr);for(const r of n){const e=hn.getSelectorFromElement(r),t=hn.find(e).filter((e=>e===this._element));null!==e&&t.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Kr}static get DefaultType(){return Gr}static get NAME(){return Ar}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(qr).filter((e=>e!==this._element)).map((e=>Wr.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;const t=tn.trigger(this._element,Nr);if(t.defaultPrevented)return;for(const o of e)o.hide();const n=this._getDimension();this._element.classList.remove(Mr),this._element.classList.add(Fr),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Fr),this._element.classList.add(Mr,Lr),this._element.style[n]="",tn.trigger(this._element,Or)},i=n[0].toUpperCase()+n.slice(1),s=`scroll${i}`;this._queueCallback(r,this._element,!0),this._element.style[n]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const e=tn.trigger(this._element,Dr);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,xt(this._element),this._element.classList.add(Fr),this._element.classList.remove(Mr,Lr);for(const r of this._triggerArray){const e=hn.getElementFromSelector(r);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(Fr),this._element.classList.add(Mr),tn.trigger(this._element,Rr)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Lr)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=Tt(e.parent),e}_getDimension(){return this._element.classList.contains(jr)?$r:Br}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(zr);for(const t of e){const e=hn.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=hn.find(Ur,this._config.parent);return hn.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle(Vr,!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=Wr.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}tn.on(document,Pr,zr,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();for(const t of hn.getMultipleElementsFromSelector(this))Wr.getOrCreateInstance(t,{toggle:!1}).toggle()})),Pt(Wr);const Hr="dropdown",Qr="bs.dropdown",Yr=`.${Qr}`,Xr=".data-api",Jr="Escape",Zr="Tab",ei="ArrowUp",ti="ArrowDown",ni=2,ri=`hide${Yr}`,ii=`hidden${Yr}`,si=`show${Yr}`,oi=`shown${Yr}`,ai=`click${Yr}${Xr}`,ci=`keydown${Yr}${Xr}`,ui=`keyup${Yr}${Xr}`,li="show",hi="dropup",di="dropend",fi="dropstart",pi="dropup-center",gi="dropdown-center",mi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',yi=`${mi}.${li}`,vi=".dropdown-menu",_i=".navbar",wi=".navbar-nav",bi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ii=Rt()?"top-end":"top-start",Ei=Rt()?"top-start":"top-end",Ti=Rt()?"bottom-end":"bottom-start",Si=Rt()?"bottom-start":"bottom-end",Ai=Rt()?"left-start":"right-start",Ci=Rt()?"right-start":"left-start",ki="top",xi="bottom",Ni={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Oi={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Di extends un{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=hn.next(this._element,vi)[0]||hn.prev(this._element,vi)[0]||hn.findOne(vi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Ni}static get DefaultType(){return Oi}static get NAME(){return Hr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(At(this._element)||this._isShown())return;const e={relatedTarget:this._element},t=tn.trigger(this._element,si,e);if(!t.defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(wi))for(const e of[].concat(...document.body.children))tn.on(e,"mouseover",kt);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(li),this._element.classList.add(li),tn.trigger(this._element,oi,e)}}hide(){if(At(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=tn.trigger(this._element,ri,e);if(!t.defaultPrevented){if("ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))tn.off(e,"mouseover",kt);this._popper&&this._popper.destroy(),this._menu.classList.remove(li),this._element.classList.remove(li),this._element.setAttribute("aria-expanded","false"),on.removeDataAttribute(this._menu,"popper"),tn.trigger(this._element,ii,e)}}_getConfig(e){if(e=super._getConfig(e),"object"===typeof e.reference&&!Et(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(`${Hr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if("undefined"===typeof r)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=this._parent:Et(this._config.reference)?e=Tt(this._config.reference):"object"===typeof this._config.reference&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=lt(e,this._menu,t)}_isShown(){return this._menu.classList.contains(li)}_getPlacement(){const e=this._parent;if(e.classList.contains(di))return Ai;if(e.classList.contains(fi))return Ci;if(e.classList.contains(pi))return ki;if(e.classList.contains(gi))return xi;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(hi)?t?Ei:Ii:t?Si:Ti}_detectNavbar(){return null!==this._element.closest(_i)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(on.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...Lt(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:t}){const n=hn.find(bi,this._menu).filter((e=>St(e)));n.length&&Ft(n,t,e===ti,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=Di.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e.button===ni||"keyup"===e.type&&e.key!==Zr)return;const t=hn.find(yi);for(const n of t){const t=Di.getInstance(n);if(!t||!1===t._config.autoClose)continue;const r=e.composedPath(),i=r.includes(t._menu);if(r.includes(t._element)||"inside"===t._config.autoClose&&!i||"outside"===t._config.autoClose&&i)continue;if(t._menu.contains(e.target)&&("keyup"===e.type&&e.key===Zr||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const s={relatedTarget:t._element};"click"===e.type&&(s.clickEvent=e),t._completeHide(s)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n=e.key===Jr,r=[ei,ti].includes(e.key);if(!r&&!n)return;if(t&&!n)return;e.preventDefault();const i=this.matches(mi)?this:hn.prev(this,mi)[0]||hn.next(this,mi)[0]||hn.findOne(mi,e.delegateTarget.parentNode),s=Di.getOrCreateInstance(i);if(r)return e.stopPropagation(),s.show(),void s._selectMenuItem(e);s._isShown()&&(e.stopPropagation(),s.hide(),i.focus())}}tn.on(document,ci,mi,Di.dataApiKeydownHandler),tn.on(document,ci,vi,Di.dataApiKeydownHandler),tn.on(document,ai,Di.clearMenus),tn.on(document,ui,Di.clearMenus),tn.on(document,ai,mi,(function(e){e.preventDefault(),Di.getOrCreateInstance(this).toggle()})),Pt(Di);const Ri="backdrop",Pi="fade",Li="show",Mi=`mousedown.bs.${Ri}`,Fi={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Vi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ui extends an{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Fi}static get DefaultType(){return Vi}static get NAME(){return Ri}show(e){if(!this._config.isVisible)return void Lt(e);this._append();const t=this._getElement();this._config.isAnimated&&xt(t),t.classList.add(Li),this._emulateAnimation((()=>{Lt(e)}))}hide(e){this._config.isVisible?(this._getElement().classList.remove(Li),this._emulateAnimation((()=>{this.dispose(),Lt(e)}))):Lt(e)}dispose(){this._isAppended&&(tn.off(this._element,Mi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Pi),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Tt(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),tn.on(e,Mi,(()=>{Lt(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(e){Mt(e,this._getElement(),this._config.isAnimated)}}const ji="focustrap",$i="bs.focustrap",Bi=`.${$i}`,qi=`focusin${Bi}`,zi=`keydown.tab${Bi}`,Ki="Tab",Gi="forward",Wi="backward",Hi={autofocus:!0,trapElement:null},Qi={autofocus:"boolean",trapElement:"element"};class Yi extends an{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Hi}static get DefaultType(){return Qi}static get NAME(){return ji}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),tn.off(document,Bi),tn.on(document,qi,(e=>this._handleFocusin(e))),tn.on(document,zi,(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,tn.off(document,Bi))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=hn.focusableChildren(t);0===n.length?t.focus():this._lastTabNavDirection===Wi?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===Ki&&(this._lastTabNavDirection=e.shiftKey?Wi:Gi)}}const Xi=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ji=".sticky-top",Zi="padding-right",es="margin-right";class ts{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Zi,(t=>t+e)),this._setElementAttributes(Xi,Zi,(t=>t+e)),this._setElementAttributes(Ji,es,(t=>t-e))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Zi),this._resetElementAttributes(Xi,Zi),this._resetElementAttributes(Ji,es)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const r=this.getWidth(),i=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);const i=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(i))}px`)};this._applyManipulationCallback(e,i)}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&on.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=on.getDataAttribute(e,t);null!==n?(on.removeDataAttribute(e,t),e.style.setProperty(t,n)):e.style.removeProperty(t)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){if(Et(e))t(e);else for(const n of hn.find(e,this._element))t(n)}}const ns="modal",rs="bs.modal",is=`.${rs}`,ss=".data-api",os="Escape",as=`hide${is}`,cs=`hidePrevented${is}`,us=`hidden${is}`,ls=`show${is}`,hs=`shown${is}`,ds=`resize${is}`,fs=`click.dismiss${is}`,ps=`mousedown.dismiss${is}`,gs=`keydown.dismiss${is}`,ms=`click${is}${ss}`,ys="modal-open",vs="fade",_s="show",ws="modal-static",bs=".modal.show",Is=".modal-dialog",Es=".modal-body",Ts='[data-bs-toggle="modal"]',Ss={backdrop:!0,focus:!0,keyboard:!0},As={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Cs extends un{constructor(e,t){super(e,t),this._dialog=hn.findOne(Is,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ts,this._addEventListeners()}static get Default(){return Ss}static get DefaultType(){return As}static get NAME(){return ns}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=tn.trigger(this._element,ls,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ys),this._adjustDialog(),this._backdrop.show((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;const e=tn.trigger(this._element,as);e.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(_s),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){tn.off(window,is),tn.off(this._dialog,is),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ui({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Yi({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=hn.findOne(Es,this._dialog);t&&(t.scrollTop=0),xt(this._element),this._element.classList.add(_s);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,tn.trigger(this._element,hs,{relatedTarget:e})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){tn.on(this._element,gs,(e=>{e.key===os&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),tn.on(window,ds,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),tn.on(this._element,ps,(e=>{tn.one(this._element,fs,(t=>{this._element===e.target&&this._element===t.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(ys),this._resetAdjustments(),this._scrollBar.reset(),tn.trigger(this._element,us)}))}_isAnimated(){return this._element.classList.contains(vs)}_triggerBackdropTransition(){const e=tn.trigger(this._element,cs);if(e.defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;"hidden"===n||this._element.classList.contains(ws)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(ws),this._queueCallback((()=>{this._element.classList.remove(ws),this._queueCallback((()=>{this._element.style.overflowY=n}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const e=Rt()?"paddingLeft":"paddingRight";this._element.style[e]=`${t}px`}if(!n&&e){const e=Rt()?"paddingRight":"paddingLeft";this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=Cs.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}tn.on(document,ms,Ts,(function(e){const t=hn.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),tn.one(t,ls,(e=>{e.defaultPrevented||tn.one(t,us,(()=>{St(this)&&this.focus()}))}));const n=hn.findOne(bs);n&&Cs.getInstance(n).hide();const r=Cs.getOrCreateInstance(t);r.toggle(this)})),dn(Cs),Pt(Cs);const ks="offcanvas",xs="bs.offcanvas",Ns=`.${xs}`,Os=".data-api",Ds=`load${Ns}${Os}`,Rs="Escape",Ps="show",Ls="showing",Ms="hiding",Fs="offcanvas-backdrop",Vs=".offcanvas.show",Us=`show${Ns}`,js=`shown${Ns}`,$s=`hide${Ns}`,Bs=`hidePrevented${Ns}`,qs=`hidden${Ns}`,zs=`resize${Ns}`,Ks=`click${Ns}${Os}`,Gs=`keydown.dismiss${Ns}`,Ws='[data-bs-toggle="offcanvas"]',Hs={backdrop:!0,keyboard:!0,scroll:!1},Qs={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ys extends un{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Hs}static get DefaultType(){return Qs}static get NAME(){return ks}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=tn.trigger(this._element,Us,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new ts).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ls);const n=()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ps),this._element.classList.remove(Ls),tn.trigger(this._element,js,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=tn.trigger(this._element,$s);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ms),this._backdrop.hide();const t=()=>{this._element.classList.remove(Ps,Ms),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new ts).reset(),tn.trigger(this._element,qs)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{"static"!==this._config.backdrop?this.hide():tn.trigger(this._element,Bs)},t=Boolean(this._config.backdrop);return new Ui({className:Fs,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new Yi({trapElement:this._element})}_addEventListeners(){tn.on(this._element,Gs,(e=>{e.key===Rs&&(this._config.keyboard?this.hide():tn.trigger(this._element,Bs))}))}static jQueryInterface(e){return this.each((function(){const t=Ys.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}tn.on(document,Ks,Ws,(function(e){const t=hn.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),At(this))return;tn.one(t,qs,(()=>{St(this)&&this.focus()}));const n=hn.findOne(Vs);n&&n!==t&&Ys.getInstance(n).hide();const r=Ys.getOrCreateInstance(t);r.toggle(this)})),tn.on(window,Ds,(()=>{for(const e of hn.find(Vs))Ys.getOrCreateInstance(e).show()})),tn.on(window,zs,(()=>{for(const e of hn.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&Ys.getOrCreateInstance(e).hide()})),dn(Ys),Pt(Ys);const Xs=/^aria-[\w-]*$/i,Js={"*":["class","dir","id","lang","role",Xs],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Zs=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),eo=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,to=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?!Zs.has(n)||Boolean(eo.test(e.nodeValue)):t.filter((e=>e instanceof RegExp)).some((e=>e.test(n)))};function no(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const r=new window.DOMParser,i=r.parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const o of s){const e=o.nodeName.toLowerCase();if(!Object.keys(t).includes(e)){o.remove();continue}const n=[].concat(...o.attributes),r=[].concat(t["*"]||[],t[e]||[]);for(const t of n)to(t,r)||o.removeAttribute(t.nodeName)}return i.body.innerHTML}const ro="TemplateFactory",io={allowList:Js,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},so={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},oo={entry:"(string|element|function|null)",selector:"(string|element)"};class ao extends an{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return io}static get DefaultType(){return so}static get NAME(){return ro}getContent(){return Object.values(this._config.content).map((e=>this._resolvePossibleFunction(e))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[r,i]of Object.entries(this._config.content))this._setContent(e,i,r);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},oo)}_setContent(e,t,n){const r=hn.findOne(n,e);r&&(t=this._resolvePossibleFunction(t),t?Et(t)?this._putElementInTemplate(Tt(t),r):this._config.html?r.innerHTML=this._maybeSanitize(t):r.textContent=t:r.remove())}_maybeSanitize(e){return this._config.sanitize?no(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return Lt(e,[this])}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML="",void t.append(e);t.textContent=e.textContent}}const co="tooltip",uo=new Set(["sanitize","allowList","sanitizeFn"]),lo="fade",ho="modal",fo="show",po=".tooltip-inner",go=`.${ho}`,mo="hide.bs.modal",yo="hover",vo="focus",_o="click",wo="manual",bo="hide",Io="hidden",Eo="show",To="shown",So="inserted",Ao="click",Co="focusin",ko="focusout",xo="mouseenter",No="mouseleave",Oo={AUTO:"auto",TOP:"top",RIGHT:Rt()?"left":"right",BOTTOM:"bottom",LEFT:Rt()?"right":"left"},Do={allowList:Js,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Ro={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Po extends un{constructor(e,t){if("undefined"===typeof r)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Do}static get DefaultType(){return Ro}static get NAME(){return co}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),tn.off(this._element.closest(go),mo,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const e=tn.trigger(this._element,this.constructor.eventName(Eo)),t=Ct(this._element),n=(t||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!n)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(r),tn.trigger(this._element,this.constructor.eventName(So))),this._popper=this._createPopper(r),r.classList.add(fo),"ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))tn.on(o,"mouseover",kt);const s=()=>{tn.trigger(this._element,this.constructor.eventName(To)),!1===this._isHovered&&this._leave(),this._isHovered=!1};this._queueCallback(s,this.tip,this._isAnimated())}hide(){if(!this._isShown())return;const e=tn.trigger(this._element,this.constructor.eventName(bo));if(e.defaultPrevented)return;const t=this._getTipElement();if(t.classList.remove(fo),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))tn.off(r,"mouseover",kt);this._activeTrigger[_o]=!1,this._activeTrigger[vo]=!1,this._activeTrigger[yo]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),tn.trigger(this._element,this.constructor.eventName(Io)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(lo,fo),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=wt(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(lo),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new ao({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[po]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(lo)}_isShown(){return this.tip&&this.tip.classList.contains(fo)}_createPopper(e){const t=Lt(this._config.placement,[this,e,this._element]),n=Oo[t.toUpperCase()];return lt(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return Lt(e,[this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,...Lt(this._config.popperConfig,[t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if("click"===t)tn.on(this._element,this.constructor.eventName(Ao),this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t.toggle()}));else if(t!==wo){const e=t===yo?this.constructor.eventName(xo):this.constructor.eventName(Co),n=t===yo?this.constructor.eventName(No):this.constructor.eventName(ko);tn.on(this._element,e,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?vo:yo]=!0,t._enter()})),tn.on(this._element,n,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?vo:yo]=t._element.contains(e.relatedTarget),t._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},tn.on(this._element.closest(go),mo,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=on.getDataAttributes(this._element);for(const n of Object.keys(t))uo.has(n)&&delete t[n];return e={...t,..."object"===typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:Tt(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each((function(){const t=Po.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Pt(Po);const Lo="popover",Mo=".popover-header",Fo=".popover-body",Vo={...Po.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Uo={...Po.DefaultType,content:"(null|string|element|function)"};class jo extends Po{static get Default(){return Vo}static get DefaultType(){return Uo}static get NAME(){return Lo}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Mo]:this._getTitle(),[Fo]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each((function(){const t=jo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Pt(jo);const $o="scrollspy",Bo="bs.scrollspy",qo=`.${Bo}`,zo=".data-api",Ko=`activate${qo}`,Go=`click${qo}`,Wo=`load${qo}${zo}`,Ho="dropdown-item",Qo="active",Yo='[data-bs-spy="scroll"]',Xo="[href]",Jo=".nav, .list-group",Zo=".nav-link",ea=".nav-item",ta=".list-group-item",na=`${Zo}, ${ea} > ${Zo}, ${ta}`,ra=".dropdown",ia=".dropdown-toggle",sa={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},oa={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class aa extends un{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return sa}static get DefaultType(){return oa}static get NAME(){return $o}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Tt(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,"string"===typeof e.threshold&&(e.threshold=e.threshold.split(",").map((e=>Number.parseFloat(e)))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(tn.off(this._config.target,Go),tn.on(this._config.target,Go,Xo,(e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,r=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:r,behavior:"smooth"});n.scrollTop=r}})))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((e=>this._observerCallback(e)),e)}_observerCallback(e){const t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const s of e){if(!s.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(s));continue}const e=s.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&e){if(n(s),!r)return}else i||e||n(s)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=hn.find(Xo,this._config.target);for(const t of e){if(!t.hash||At(t))continue;const e=hn.findOne(decodeURI(t.hash),this._element);St(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Qo),this._activateParents(e),tn.trigger(this._element,Ko,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(Ho))hn.findOne(ia,e.closest(ra)).classList.add(Qo);else for(const t of hn.parents(e,Jo))for(const e of hn.prev(t,na))e.classList.add(Qo)}_clearActiveClass(e){e.classList.remove(Qo);const t=hn.find(`${Xo}.${Qo}`,e);for(const n of t)n.classList.remove(Qo)}static jQueryInterface(e){return this.each((function(){const t=aa.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}tn.on(window,Wo,(()=>{for(const e of hn.find(Yo))aa.getOrCreateInstance(e)})),Pt(aa);const ca="tab",ua="bs.tab",la=`.${ua}`,ha=`hide${la}`,da=`hidden${la}`,fa=`show${la}`,pa=`shown${la}`,ga=`click${la}`,ma=`keydown${la}`,ya=`load${la}`,va="ArrowLeft",_a="ArrowRight",wa="ArrowUp",ba="ArrowDown",Ia="Home",Ea="End",Ta="active",Sa="fade",Aa="show",Ca="dropdown",ka=".dropdown-toggle",xa=".dropdown-menu",Na=`:not(${ka})`,Oa='.list-group, .nav, [role="tablist"]',Da=".nav-item, .list-group-item",Ra=`.nav-link${Na}, .list-group-item${Na}, [role="tab"]${Na}`,Pa='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',La=`${Ra}, ${Pa}`,Ma=`.${Ta}[data-bs-toggle="tab"], .${Ta}[data-bs-toggle="pill"], .${Ta}[data-bs-toggle="list"]`;class Fa extends un{constructor(e){super(e),this._parent=this._element.closest(Oa),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),tn.on(this._element,ma,(e=>this._keydown(e))))}static get NAME(){return ca}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?tn.trigger(t,ha,{relatedTarget:e}):null,r=tn.trigger(e,fa,{relatedTarget:t});r.defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(Ta),this._activate(hn.getElementFromSelector(e));const n=()=>{"tab"===e.getAttribute("role")?(e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),tn.trigger(e,pa,{relatedTarget:t})):e.classList.add(Aa)};this._queueCallback(n,e,e.classList.contains(Sa))}_deactivate(e,t){if(!e)return;e.classList.remove(Ta),e.blur(),this._deactivate(hn.getElementFromSelector(e));const n=()=>{"tab"===e.getAttribute("role")?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),tn.trigger(e,da,{relatedTarget:t})):e.classList.remove(Aa)};this._queueCallback(n,e,e.classList.contains(Sa))}_keydown(e){if(![va,_a,wa,ba,Ia,Ea].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter((e=>!At(e)));let n;if([Ia,Ea].includes(e.key))n=t[e.key===Ia?0:t.length-1];else{const r=[_a,ba].includes(e.key);n=Ft(t,e.target,r,!0)}n&&(n.focus({preventScroll:!0}),Fa.getOrCreateInstance(n).show())}_getChildren(){return hn.find(La,this._parent)}_getActiveElem(){return this._getChildren().find((e=>this._elemIsActive(e)))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const n of t)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=hn.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const n=this._getOuterElement(e);if(!n.classList.contains(Ca))return;const r=(e,r)=>{const i=hn.findOne(e,n);i&&i.classList.toggle(r,t)};r(ka,Ta),r(xa,Aa),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(Ta)}_getInnerElement(e){return e.matches(La)?e:hn.findOne(La,e)}_getOuterElement(e){return e.closest(Da)||e}static jQueryInterface(e){return this.each((function(){const t=Fa.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}tn.on(document,ga,Pa,(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),At(this)||Fa.getOrCreateInstance(this).show()})),tn.on(window,ya,(()=>{for(const e of hn.find(Ma))Fa.getOrCreateInstance(e)})),Pt(Fa);const Va="toast",Ua="bs.toast",ja=`.${Ua}`,$a=`mouseover${ja}`,Ba=`mouseout${ja}`,qa=`focusin${ja}`,za=`focusout${ja}`,Ka=`hide${ja}`,Ga=`hidden${ja}`,Wa=`show${ja}`,Ha=`shown${ja}`,Qa="fade",Ya="hide",Xa="show",Ja="showing",Za={animation:"boolean",autohide:"boolean",delay:"number"},ec={animation:!0,autohide:!0,delay:5e3};class tc extends un{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ec}static get DefaultType(){return Za}static get NAME(){return Va}show(){const e=tn.trigger(this._element,Wa);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Qa);const t=()=>{this._element.classList.remove(Ja),tn.trigger(this._element,Ha),this._maybeScheduleHide()};this._element.classList.remove(Ya),xt(this._element),this._element.classList.add(Xa,Ja),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown())return;const e=tn.trigger(this._element,Ka);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(Ya),this._element.classList.remove(Ja,Xa),tn.trigger(this._element,Ga)};this._element.classList.add(Ja),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Xa),super.dispose()}isShown(){return this._element.classList.contains(Xa)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){tn.on(this._element,$a,(e=>this._onInteraction(e,!0))),tn.on(this._element,Ba,(e=>this._onInteraction(e,!1))),tn.on(this._element,qa,(e=>this._onInteraction(e,!0))),tn.on(this._element,za,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=tc.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}dn(tc),Pt(tc)},144:function(e,t,n){n.d(t,{C4:function(){return y},EW:function(){return Ce},Gc:function(){return ge},IG:function(){return Ee},IJ:function(){return De},KR:function(){return Oe},Kh:function(){return pe},Pr:function(){return Fe},R1:function(){return Le},X2:function(){return u},bl:function(){return v},fE:function(){return we},g8:function(){return ve},hZ:function(){return x},i9:function(){return Ne},ju:function(){return be},o5:function(){return c},u4:function(){return k},ux:function(){return Ie},yC:function(){return o}});n(4114);var r=n(4232);let i,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(e,t=i){t&&t.active&&t.effects.push(e)}function c(){return i}class u{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,a(this,r)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,y();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(l(t.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),v()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=p,t=s;try{return p=!0,s=this,this._runnings++,h(this),this.fn()}finally{d(this),this._runnings--,s=t,p=e}}stop(){var e;this.active&&(h(this),d(this),null==(e=this.onStop)||e.call(this),this.active=!1)}}function l(e){return e.value}function h(e){e._trackId++,e._depsLength=0}function d(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)f(e.deps[t],e);e.deps.length=e._depsLength}}function f(e,t){const n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}let p=!0,g=0;const m=[];function y(){m.push(p),p=!1}function v(){const e=m.pop();p=void 0===e||e}function _(){g++}function w(){g--;while(!g&&I.length)I.shift()()}function b(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const n=e.deps[e._depsLength];n!==t?(n&&f(n,e),e.deps[e._depsLength++]=t):e._depsLength++}}const I=[];function E(e,t,n){_();for(const r of e.keys()){let n;r._dirtyLevel<t&&(null!=n?n:n=e.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r._dirtyLevel=t),r._shouldSchedule&&(null!=n?n:n=e.get(r)===r._trackId)&&(r.trigger(),r._runnings&&!r.allowRecurse||2===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&I.push(r.scheduler)))}w()}const T=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},S=new WeakMap,A=Symbol(""),C=Symbol("");function k(e,t,n){if(p&&s){let t=S.get(e);t||S.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=T((()=>t.delete(n)))),b(s,r,void 0)}}function x(e,t,n,i,s,o){const a=S.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.cy)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||!(0,r.Bm)(n)&&n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.cy)(e)?(0,r.yI)(n)&&c.push(a.get("length")):(c.push(a.get(A)),(0,r.CE)(e)&&c.push(a.get(C)));break;case"delete":(0,r.cy)(e)||(c.push(a.get(A)),(0,r.CE)(e)&&c.push(a.get(C)));break;case"set":(0,r.CE)(e)&&c.push(a.get(A));break}_();for(const r of c)r&&E(r,4,void 0);w()}const N=(0,r.pD)("__proto__,__v_isRef,__isVue"),O=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm)),D=R();function R(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ie(this);for(let t=0,i=this.length;t<i;t++)k(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ie)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){y(),_();const n=Ie(this)[t].apply(this,e);return w(),v(),n}})),e}function P(e){const t=Ie(this);return k(t,"has",e),t.hasOwnProperty(e)}class L{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(i?s?he:le:s?ue:ce).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,r.cy)(e);if(!i){if(o&&(0,r.$3)(D,t))return Reflect.get(D,t,n);if("hasOwnProperty"===t)return P}const a=Reflect.get(e,t,n);return((0,r.Bm)(t)?O.has(t):N(t))?a:(i||k(e,"get",t),s?a:Ne(a)?o&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?i?me(a):pe(a):a)}}class M extends L{constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];if(!this._isShallow){const t=_e(s);if(we(n)||_e(n)||(s=Ie(s),n=Ie(n)),!(0,r.cy)(e)&&Ne(s)&&!Ne(n))return!t&&(s.value=n,!0)}const o=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,i);return e===Ie(i)&&(o?(0,r.$H)(n,s)&&x(e,"set",t,n,s):x(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&x(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&O.has(t)||k(e,"has",t),n}ownKeys(e){return k(e,"iterate",(0,r.cy)(e)?"length":A),Reflect.ownKeys(e)}}class F extends L{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const V=new M,U=new F,j=new M(!0),$=e=>e,B=e=>Reflect.getPrototypeOf(e);function q(e,t,n=!1,i=!1){e=e["__v_raw"];const s=Ie(e),o=Ie(t);n||((0,r.$H)(t,o)&&k(s,"get",t),k(s,"get",o));const{has:a}=B(s),c=i?$:n?Se:Te;return a.call(s,t)?c(e.get(t)):a.call(s,o)?c(e.get(o)):void(e!==s&&e.get(t))}function z(e,t=!1){const n=this["__v_raw"],i=Ie(n),s=Ie(e);return t||((0,r.$H)(e,s)&&k(i,"has",e),k(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function K(e,t=!1){return e=e["__v_raw"],!t&&k(Ie(e),"iterate",A),Reflect.get(e,"size",e)}function G(e){e=Ie(e);const t=Ie(this),n=B(t),r=n.has.call(t,e);return r||(t.add(e),x(t,"add",e,e)),this}function W(e,t){t=Ie(t);const n=Ie(this),{has:i,get:s}=B(n);let o=i.call(n,e);o||(e=Ie(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.$H)(t,a)&&x(n,"set",e,t,a):x(n,"add",e,t),this}function H(e){const t=Ie(this),{has:n,get:r}=B(t);let i=n.call(t,e);i||(e=Ie(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&x(t,"delete",e,void 0,s),o}function Q(){const e=Ie(this),t=0!==e.size,n=void 0,r=e.clear();return t&&x(e,"clear",void 0,void 0,n),r}function Y(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ie(s),a=t?$:e?Se:Te;return!e&&k(o,"iterate",A),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function X(e,t,n){return function(...i){const s=this["__v_raw"],o=Ie(s),a=(0,r.CE)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?$:t?Se:Te;return!t&&k(o,"iterate",u?C:A),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function J(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function Z(){const e={get(e){return q(this,e)},get size(){return K(this)},has:z,add:G,set:W,delete:H,clear:Q,forEach:Y(!1,!1)},t={get(e){return q(this,e,!1,!0)},get size(){return K(this)},has:z,add:G,set:W,delete:H,clear:Q,forEach:Y(!1,!0)},n={get(e){return q(this,e,!0)},get size(){return K(this,!0)},has(e){return z.call(this,e,!0)},add:J("add"),set:J("set"),delete:J("delete"),clear:J("clear"),forEach:Y(!0,!1)},r={get(e){return q(this,e,!0,!0)},get size(){return K(this,!0)},has(e){return z.call(this,e,!0)},add:J("add"),set:J("set"),delete:J("delete"),clear:J("clear"),forEach:Y(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=X(i,!1,!1),n[i]=X(i,!0,!1),t[i]=X(i,!1,!0),r[i]=X(i,!0,!0)})),[e,n,t,r]}const[ee,te,ne,re]=Z();function ie(e,t){const n=t?e?re:ne:e?te:ee;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.$3)(n,i)&&i in t?n:t,i,s)}const se={get:ie(!1,!1)},oe={get:ie(!1,!0)},ae={get:ie(!0,!1)};const ce=new WeakMap,ue=new WeakMap,le=new WeakMap,he=new WeakMap;function de(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:de((0,r.Zf)(e))}function pe(e){return _e(e)?e:ye(e,!1,V,se,ce)}function ge(e){return ye(e,!1,j,oe,ue)}function me(e){return ye(e,!0,U,ae,le)}function ye(e,t,n,i,s){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=fe(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function ve(e){return _e(e)?ve(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function _e(e){return!(!e||!e["__v_isReadonly"])}function we(e){return!(!e||!e["__v_isShallow"])}function be(e){return ve(e)||_e(e)}function Ie(e){const t=e&&e["__v_raw"];return t?Ie(t):e}function Ee(e){return Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Te=e=>(0,r.Gv)(e)?pe(e):e,Se=e=>(0,r.Gv)(e)?me(e):e;class Ae{constructor(e,t,n,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new u((()=>e(this._value)),(()=>xe(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ie(this);return e._cacheable&&!e.effect.dirty||!(0,r.$H)(e._value,e._value=e.effect.run())||xe(e,4),ke(e),e.effect._dirtyLevel>=2&&xe(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ce(e,t,n=!1){let i,s;const o=(0,r.Tn)(e);o?(i=e,s=r.tE):(i=e.get,s=e.set);const a=new Ae(i,s,o||!s,n);return a}function ke(e){var t;p&&s&&(e=Ie(e),b(s,null!=(t=e.dep)?t:e.dep=T((()=>e.dep=void 0),e instanceof Ae?e:void 0),void 0))}function xe(e,t=4,n){e=Ie(e);const r=e.dep;r&&E(r,t,void 0)}function Ne(e){return!(!e||!0!==e.__v_isRef)}function Oe(e){return Re(e,!1)}function De(e){return Re(e,!0)}function Re(e,t){return Ne(e)?e:new Pe(e,t)}class Pe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ie(e),this._value=t?e:Te(e)}get value(){return ke(this),this._value}set value(e){const t=this.__v_isShallow||we(e)||_e(e);e=t?e:Ie(e),(0,r.$H)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Te(e),xe(this,4,e))}}function Le(e){return Ne(e)?e.value:e}const Me={get:(e,t,n)=>Le(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Fe(e){return ve(e)?e:new Proxy(e,Me)}},6768:function(e,t,n){n.d(t,{$u:function(){return Re},CE:function(){return Jt},Df:function(){return ye},EW:function(){return $n},FK:function(){return $t},Fv:function(){return dn},Gt:function(){return ht},Gy:function(){return ae},K9:function(){return Dt},Lk:function(){return on},MZ:function(){return me},OW:function(){return fe},Q3:function(){return fn},QP:function(){return ue},WQ:function(){return dt},bF:function(){return an},bo:function(){return re},dY:function(){return v},eW:function(){return hn},g2:function(){return q},h:function(){return Bn},k6:function(){return L},nI:function(){return En},pI:function(){return je},pM:function(){return ve},pR:function(){return he},qL:function(){return o},uX:function(){return Wt},wB:function(){return J}});n(4114);var r=n(144),i=n(4232);function s(e,t,n,r){try{return r?e(...r):e()}catch(i){a(i,t,n)}}function o(e,t,n,r){if((0,i.Tn)(e)){const o=s(e,t,n,r);return o&&(0,i.yL)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=Promise.resolve();let y=null;function v(e){const t=y||m;return e?t.then(this?e.bind(this):e):t}function _(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=h[r],s=A(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}function w(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(_(e.id),0,e),b())}function b(){u||l||(l=!0,y=m.then(k))}function I(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function E(e){(0,i.cy)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?g+1:g)||f.push(e),b()}function T(e,t,n=(u?d+1:0)){for(0;n<h.length;n++){const t=h[n];if(t&&t.pre){if(e&&t.id!==e.uid)continue;0,h.splice(n,1),n--,t()}}}function S(e){if(f.length){const e=[...new Set(f)].sort(((e,t)=>A(e)-A(t)));if(f.length=0,p)return void p.push(...e);for(p=e,g=0;g<p.length;g++)p[g]();p=null,g=0}}const A=e=>null==e.id?1/0:e.id,C=(e,t)=>{const n=A(e)-A(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function k(e){l=!1,u=!0,h.sort(C);i.tE;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,S(e),u=!1,y=null,(h.length||f.length)&&k(e)}}function x(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.MZ;o&&(s=n.map((e=>(0,i.Kg)(e)?e.trim():e))),t&&(s=n.map(i.bB))}let u;let l=r[u=(0,i.rU)(t)]||r[u=(0,i.rU)((0,i.PT)(t))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function N(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=N(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach((e=>a[e]=null)):(0,i.X$)(a,o),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function O(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}let D=null,R=null;function P(e){const t=D;return D=e,R=e&&e.type.__scopeId||null,t}function L(e,t=D,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Yt(-1);const i=P(t);let s;try{s=e(...n)}finally{P(i),r._d&&Yt(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function M(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:g,ctx:m,inheritAttrs:y}=e;let v,_;const w=P(e);try{if(4&n.shapeFlag){const e=s||r,t=e;v=pn(d.call(t,e,f,o,g,p,m)),_=l}else{const e=t;0,v=pn(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),_=t.props?l:F(l)}}catch(I){Kt.length=0,a(I,e,1),v=an(qt)}let b=v;if(_&&!1!==y){const e=Object.keys(_),{shapeFlag:t}=b;e.length&&7&t&&(c&&e.some(i.CP)&&(_=V(_,c)),b=ln(b,_))}return n.dirs&&(b=ln(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),v=b,P(w),v}const F=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},V=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function U(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||j(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?j(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!O(u,n))return!0}}return!1}function j(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!O(n,s))return!0}return!1}function $({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const B="components";function q(e,t){return K(B,e,!0,t)||e}const z=Symbol.for("v-ndc");function K(e,t,n=!0,r=!1){const s=D||In;if(s){const n=s.type;if(e===B){const e=Un(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const o=G(s[e]||n[e],t)||G(s.appContext[e],t);return!o&&r?n:o}}function G(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}const W=e=>e.__isSuspense;function H(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):E(e)}const Q=Symbol.for("v-scx"),Y=()=>{{const e=dt(Q);return e}};const X={};function J(e,t,n){return Z(e,t,n)}function Z(e,t,{immediate:n,deep:a,flush:c,once:u,onTrack:l,onTrigger:h}=i.MZ){if(t&&u){const e=t;t=(...t)=>{e(...t),A()}}const d=In,f=e=>!0===a?e:ne(e,!1===a?1:void 0);let p,g,m=!1,y=!1;if((0,r.i9)(e)?(p=()=>e.value,m=(0,r.fE)(e)):(0,r.g8)(e)?(p=()=>f(e),m=!0):(0,i.cy)(e)?(y=!0,m=e.some((e=>(0,r.g8)(e)||(0,r.fE)(e))),p=()=>e.map((e=>(0,r.i9)(e)?e.value:(0,r.g8)(e)?f(e):(0,i.Tn)(e)?s(e,d,2):void 0))):p=(0,i.Tn)(e)?t?()=>s(e,d,2):()=>(g&&g(),o(e,d,3,[_])):i.tE,t&&a){const e=p;p=()=>ne(e())}let v,_=e=>{g=T.onStop=()=>{s(e,d,4),g=T.onStop=void 0}};if(On){if(_=i.tE,t?n&&o(t,d,3,[p(),y?[]:void 0,_]):p(),"sync"!==c)return i.tE;{const e=Y();v=e.__watcherHandles||(e.__watcherHandles=[])}}let b=y?new Array(e.length).fill(X):X;const I=()=>{if(T.active&&T.dirty)if(t){const e=T.run();(a||m||(y?e.some(((e,t)=>(0,i.$H)(e,b[t]))):(0,i.$H)(e,b)))&&(g&&g(),o(t,d,3,[e,b===X?void 0:y&&b[0]===X?[]:b,_]),b=e)}else T.run()};let E;I.allowRecurse=!!t,"sync"===c?E=I:"post"===c?E=()=>Ot(I,d&&d.suspense):(I.pre=!0,d&&(I.id=d.uid),E=()=>w(I));const T=new r.X2(p,i.tE,E),S=(0,r.o5)(),A=()=>{T.stop(),S&&(0,i.TF)(S.effects,T)};return t?n?I():b=T.run():"post"===c?Ot(T.run.bind(T),d&&d.suspense):T.run(),v&&v.push(A),A}function ee(e,t,n){const r=this.proxy,s=(0,i.Kg)(e)?e.includes(".")?te(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.Tn)(t)?o=t:(o=t.handler,n=t);const a=An(this),c=Z(s,o.bind(r),n);return a(),c}function te(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ne(e,t,n=0,s){if(!(0,i.Gv)(e)||e["__v_skip"])return e;if(t&&t>0){if(n>=t)return e;n++}if(s=s||new Set,s.has(e))return e;if(s.add(e),(0,r.i9)(e))ne(e.value,t,n,s);else if((0,i.cy)(e))for(let r=0;r<e.length;r++)ne(e[r],t,n,s);else if((0,i.vM)(e)||(0,i.CE)(e))e.forEach((e=>{ne(e,t,n,s)}));else if((0,i.Qd)(e))for(const r in e)ne(e[r],t,n,s);return e}function re(e,t){if(null===D)return e;const n=Vn(D)||D.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,o,a,c=i.MZ]=t[s];e&&((0,i.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&ne(o),r.push({dir:e,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function ie(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),o(l,n,8,[e.el,u,e,t]),(0,r.bl)())}}const se=Symbol("_leaveCb"),oe=Symbol("_enterCb");function ae(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Oe((()=>{e.isMounted=!0})),Pe((()=>{e.isUnmounting=!0})),e}const ce=[Function,Array],ue={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ce,onEnter:ce,onAfterEnter:ce,onEnterCancelled:ce,onBeforeLeave:ce,onLeave:ce,onAfterLeave:ce,onLeaveCancelled:ce,onBeforeAppear:ce,onAppear:ce,onAfterAppear:ce,onAppearCancelled:ce},le={name:"BaseTransition",props:ue,setup(e,{slots:t}){const n=En(),i=ae();return()=>{const s=t.default&&ye(t.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==qt){0,o=t,e=!0;break}}const a=(0,r.ux)(e),{mode:c}=a;if(i.isLeaving)return pe(o);const u=ge(o);if(!u)return pe(o);const l=fe(u,a,i,n);me(u,l);const h=n.subTree,d=h&&ge(h);if(d&&d.type!==qt&&!tn(u,d)){const e=fe(d,a,i,n);if(me(d,e),"out-in"===c)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},pe(o);"in-out"===c&&u.type!==qt&&(e.delayLeave=(e,t,n)=>{const r=de(i,d);r[String(d.key)]=d,e[se]=()=>{t(),e[se]=void 0,delete l.delayedLeave},l.delayedLeave=n})}return o}}},he=le;function de(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function fe(e,t,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:_,onAppearCancelled:w}=t,b=String(e.key),I=de(n,e),E=(e,t)=>{e&&o(e,r,9,t)},T=(e,t)=>{const n=t[1];E(e,t),(0,i.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!s)return;r=y||u}t[se]&&t[se](!0);const i=I[b];i&&tn(e,i)&&i.el[se]&&i.el[se](),E(r,[t])},enter(e){let t=l,r=h,i=d;if(!n.isMounted){if(!s)return;t=v||l,r=_||h,i=w||d}let o=!1;const a=e[oe]=t=>{o||(o=!0,E(t?i:r,[e]),S.delayedLeave&&S.delayedLeave(),e[oe]=void 0)};t?T(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t[oe]&&t[oe](!0),n.isUnmounting)return r();E(f,[t]);let s=!1;const o=t[se]=n=>{s||(s=!0,r(),E(n?m:g,[t]),t[se]=void 0,I[i]===e&&delete I[i])};I[i]=e,p?T(p,[t,o]):o()},clone(e){return fe(e,t,n,r)}};return S}function pe(e){if(we(e))return e=ln(e),e.children=null,e}function ge(e){return we(e)?e.children?e.children[0]:void 0:e}function me(e,t){6&e.shapeFlag&&e.component?me(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ye(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===$t?(128&o.patchFlag&&i++,r=r.concat(ye(o.children,t,a))):(t||o.type!==qt)&&r.push(null!=a?ln(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function ve(e,t){return(0,i.Tn)(e)?(()=>(0,i.X$)({name:e.name},t,{setup:e}))():e}const _e=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const we=e=>e.type.__isKeepAlive;RegExp,RegExp;function be(e,t){return(0,i.cy)(e)?e.some((e=>be(e,t))):(0,i.Kg)(e)?e.split(",").includes(t):!!(0,i.gd)(e)&&e.test(t)}function Ie(e,t){Te(e,"a",t)}function Ee(e,t){Te(e,"da",t)}function Te(e,t,n=In){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ke(t,r,n),n){let e=n.parent;while(e&&e.parent)we(e.parent.vnode)&&Se(r,t,n,e),e=e.parent}}function Se(e,t,n,r){const s=ke(t,e,r,!0);Le((()=>{(0,i.TF)(r[t],s)}),n)}function Ae(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ce(e){return 128&e.shapeFlag?e.ssContent:e}function ke(e,t,n=In,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.C4)();const s=An(n),a=o(t,n,e,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const xe=e=>(t,n=In)=>(!On||"sp"===e)&&ke(e,((...e)=>t(...e)),n),Ne=xe("bm"),Oe=xe("m"),De=xe("bu"),Re=xe("u"),Pe=xe("bum"),Le=xe("um"),Me=xe("sp"),Fe=xe("rtg"),Ve=xe("rtc");function Ue(e,t=In){ke("ec",e,t)}function je(e,t,n,r){let s;const o=n&&n[r];if((0,i.cy)(e)||(0,i.Kg)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Gv)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const $e=e=>e?kn(e)?Vn(e)||e.proxy:$e(e.parent):null,Be=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$e(e.parent),$root:e=>$e(e.root),$emit:e=>e.emit,$options:e=>Xe(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,w(e.update)}),$nextTick:e=>e.n||(e.n=v.bind(e.proxy)),$watch:e=>ee.bind(e)}),qe=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),ze={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(qe(s,t))return c[t]=1,s[t];if(o!==i.MZ&&(0,i.$3)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.$3)(h,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];Ge&&(c[t]=0)}}const d=Be[t];let f,p;return d?("$attrs"===t&&(0,r.u4)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return qe(s,t)?(s[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.MZ&&(0,i.$3)(e,a)||qe(t,a)||(c=o[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(Be,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ke(e){return(0,i.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ge=!0;function We(e){const t=Xe(e),n=e.proxy,s=e.ctx;Ge=!1,t.beforeCreate&&Qe(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:_,beforeUnmount:w,destroyed:b,unmounted:I,render:E,renderTracked:T,renderTriggered:S,errorCaptured:A,serverPrefetch:C,expose:k,inheritAttrs:x,components:N,directives:O,filters:D}=t,R=null;if(h&&He(h,s,R),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Ge=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=$n({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Ye(u[r],s,n,r);if(l){const e=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{ht(t,e[t])}))}function P(e,t){(0,i.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Qe(d,e,"c"),P(Ne,f),P(Oe,p),P(De,g),P(Re,m),P(Ie,y),P(Ee,v),P(Ue,A),P(Ve,T),P(Fe,S),P(Pe,w),P(Le,I),P(Me,C),(0,i.cy)(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.tE&&(e.render=E),null!=x&&(e.inheritAttrs=x),N&&(e.components=N),O&&(e.directives=O)}function He(e,t,n=i.tE){(0,i.cy)(e)&&(e=nt(e));for(const s in e){const n=e[s];let o;o=(0,i.Gv)(n)?"default"in n?dt(n.from||s,n.default,!0):dt(n.from||s):dt(n),(0,r.i9)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Qe(e,t,n){o((0,i.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ye(e,t,n,r){const s=r.includes(".")?te(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&J(s,n)}else if((0,i.Tn)(e))J(s,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach((e=>Ye(e,t,n,r)));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&J(s,r,e)}else 0}function Xe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>Je(u,e,a,!0))),Je(u,t,a)):u=t,(0,i.Gv)(t)&&o.set(t,u),u}function Je(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Je(e,s,n,!0),i&&i.forEach((t=>Je(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Ze[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Ze={data:et,props:st,emits:st,methods:it,computed:it,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:it,directives:it,watch:ot,provide:et,inject:tt};function et(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function tt(e,t){return it(nt(e),nt(t))}function nt(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function rt(e,t){return e?[...new Set([].concat(e,t))]:t}function it(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function st(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),Ke(e),Ke(null!=t?t:{})):t}function ot(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=rt(e[r],t[r]);return n}function at(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ct=0;function ut(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=at(),o=new WeakSet;let a=!1;const c=s.app={_uid:ct++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:qn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.Tn)(e.install)?(o.add(e),e.install(c,...t)):(0,i.Tn)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=an(n,r);return l.appContext=s,!0===u?u="svg":!1===u&&(u=void 0),o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Vn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c},runWithContext(e){const t=lt;lt=c;try{return e()}finally{lt=t}}};return c}}let lt=null;function ht(e,t){if(In){let n=In.provides;const r=In.parent&&In.parent.provides;r===n&&(n=In.provides=Object.create(r)),n[e]=t}else 0}function dt(e,t,n=!1){const r=In||D;if(r||lt){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:lt._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}function ft(e,t,n,s=!1){const o={},a={};(0,i.yQ)(a,nn,1),e.propsDefaults=Object.create(null),gt(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Gc)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function pt(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.ux)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;gt(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.$3)(t,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=mt(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(O(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i.PT)(s);o[t]=mt(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(e,"set","$attrs")}function gt(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const l=t[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:O(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=mt(o,t,c,s[c],e,!(0,i.$3)(s,c))}}return u}function mt(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=An(s);r=i[n]=e.call(null,t),o()}}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}function yt(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.Tn)(e)){const r=e=>{u=!0;const[n,r]=yt(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const e=(0,i.PT)(o[h]);vt(e)&&(a[e]=i.MZ)}else if(o){0;for(const e in o){const t=(0,i.PT)(e);if(vt(t)){const n=o[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n);if(r){const e=bt(Boolean,r.type),n=bt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.$3)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Gv)(e)&&r.set(e,l),l}function vt(e){return"$"!==e[0]&&!(0,i.SU)(e)}function _t(e){if(null===e)return"null";if("function"===typeof e)return e.name||"";if("object"===typeof e){const t=e.constructor&&e.constructor.name;return t||""}return""}function wt(e,t){return _t(e)===_t(t)}function bt(e,t){return(0,i.cy)(t)?t.findIndex((t=>wt(t,e))):(0,i.Tn)(t)&&wt(t,e)?0:-1}const It=e=>"_"===e[0]||"$stable"===e,Et=e=>(0,i.cy)(e)?e.map(pn):[pn(e)],Tt=(e,t,n)=>{if(t._n)return t;const r=L(((...e)=>Et(t(...e))),n);return r._c=!1,r},St=(e,t,n)=>{const r=e._ctx;for(const s in e){if(It(s))continue;const n=e[s];if((0,i.Tn)(n))t[s]=Tt(s,n,r);else if(null!=n){0;const e=Et(n);t[s]=()=>e}}},At=(e,t)=>{const n=Et(t);e.slots.default=()=>n},Ct=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.ux)(t),(0,i.yQ)(t,"_",n)):St(t,e.slots={})}else e.slots={},t&&At(e,t);(0,i.yQ)(e.slots,nn,1)},kt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.X$)(s,t),n||1!==e||delete s._):(o=!t.$stable,St(t,s)),a=t}else t&&(At(e,t),a={default:1});if(o)for(const i in s)It(i)||null!=a[i]||delete s[i]};function xt(e,t,n,o,a=!1){if((0,i.cy)(e))return void e.forEach(((e,r)=>xt(e,t&&((0,i.cy)(t)?t[r]:t),n,o,a)));if(_e(o)&&!a)return;const c=4&o.shapeFlag?Vn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.Kg)(d)?(f[d]=null,(0,i.$3)(p,d)&&(p[d]=null)):(0,r.i9)(d)&&(d.value=null)),(0,i.Tn)(h))s(h,l,12,[u,f]);else{const t=(0,i.Kg)(h),s=(0,r.i9)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.$3)(p,h)?p[h]:f[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.$3)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.$3)(p,h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,Ot(r,n)):r()}else 0}}function Nt(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Ot=H;function Dt(e){return Rt(e)}function Rt(e,t){Nt();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=e,y=(e,t,n,r=null,i=null,s=null,o=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!tn(e,t)&&(r=J(e),W(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Bt:v(e,t,n,r);break;case qt:_(e,t,n,r);break;case zt:null==e&&b(t,n,r,o);break;case $t:P(e,t,n,r,i,s,o,a,c);break;default:1&h?C(e,t,n,r,i,s,o,a,c):6&h?L(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,te)}null!=l&&i&&xt(l,e&&e.ref,s,t||e,!t)},v=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},_=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},b=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},A=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},C=(e,t,n,r,i,s,o,a,c)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?k(t,n,r,i,s,o,a,c):O(e,t,i,s,o,a,c)},k=(e,t,n,r,o,u,l,h)=>{let f,p;const{props:g,shapeFlag:m,transition:y,dirs:v}=e;if(f=e.el=c(e.type,u,g&&g.is,g),8&m?d(f,e.children):16&m&&N(e.children,f,null,r,o,Pt(e,u),l,h),v&&ie(e,null,r,"created"),x(f,e,e.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.SU)(t)||a(f,t,null,g[t],u,e.children,r,o,X);"value"in g&&a(f,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&vn(p,r,e)}v&&ie(e,null,r,"beforeMount");const _=Mt(o,y);_&&y.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||_||v)&&Ot((()=>{p&&vn(p,r,e),_&&y.enter(f),v&&ie(e,null,r,"mounted")}),o)},x=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;x(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?gn(e[u]):pn(e[u]);y(null,c,t,n,r,i,s,o,a)}},O=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.MZ,g=t.props||i.MZ;let m;if(n&&Lt(n,!1),(m=g.onVnodeBeforeUpdate)&&vn(m,n,t,e),f&&ie(t,e,n,"beforeUpdate"),n&&Lt(n,!0),h?D(e.dynamicChildren,h,u,n,r,Pt(t,s),o):c||q(e,t,u,null,n,r,Pt(t,s),o,!1),l>0){if(16&l)R(u,t,p,g,n,r,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=g[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,X)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||R(u,t,p,g,n,r,s);((m=g.onVnodeUpdated)||f)&&Ot((()=>{m&&vn(m,n,t,e),f&&ie(t,e,n,"updated")}),r)},D=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===$t||!tn(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},R=(e,t,n,r,s,o,c)=>{if(n!==r){if(n!==i.MZ)for(const u in n)(0,i.SU)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,X);for(const u in r){if((0,i.SU)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,X)}"value"in r&&a(e,"value",n.value,r.value,c)}},P=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,r),s(d,n,r),N(t.children||[],n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(D(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Ft(e,t,!0)):q(e,t,n,d,i,o,a,c,l)},L=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):F(t,n,r,i,s,o,c):V(e,t,c)},F=(e,t,n,r,i,s,o)=>{const a=e.component=bn(e,r,i);if(we(e)&&(a.ctx.renderer=te),Dn(a),a.asyncDep){if(i&&i.registerDep(a,j),!e.el){const e=a.subTree=an(qt);_(null,e,t,n)}}else j(a,e,t,n,i,s,o)},V=(e,t,n)=>{const r=t.component=e.component;if(U(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,I(r.update),r.effect.dirty=!0,r.update()}else t.el=e.el,r.vnode=t},j=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:l}=e;{const n=Ut(e);if(n)return t&&(t.el=l.el,B(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||u()}))}let h,d=t;0,Lt(e,!1),t?(t.el=l.el,B(e,t,c)):t=l,n&&(0,i.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&vn(h,s,t,l),Lt(e,!0);const p=M(e);0;const g=e.subTree;e.subTree=p,y(g,p,f(g.el),J(g),e,o,a),t.el=p.el,null===d&&$(e,p.el),r&&Ot(r,o),(h=t.props&&t.props.onVnodeUpdated)&&Ot((()=>vn(h,s,t,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=_e(t);if(Lt(e,!1),l&&(0,i.DY)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&vn(r,d,t),Lt(e,!0),c&&re){const n=()=>{e.subTree=M(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=M(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&Ot(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;Ot((()=>vn(r,d,e)),o)}(256&t.shapeFlag||d&&_e(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Ot(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.X2(u,i.tE,(()=>w(h)),e.scope),h=e.update=()=>{l.dirty&&l.run()};h.id=e.uid,Lt(e,!0),h()},B=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,pt(e,t.props,i,n),kt(e,t.children,n),(0,r.C4)(),T(e),(0,r.bl)()},q=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void K(u,h,n,r,i,s,o,a,c);if(256&f)return void z(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&X(u,i,s),h!==u&&d(n,h)):16&l?16&p?K(u,h,n,r,i,s,o,a,c):X(u,i,s,!0):(8&l&&d(n,""),16&p&&N(h,n,r,i,s,o,a,c))},z=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Oj,t=t||i.Oj;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?gn(t[f]):pn(t[f]);y(e[f],r,n,null,s,o,a,c,u)}l>h?X(e,s,o,!0,!1,d):N(t,n,r,s,o,a,c,u,d)},K=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?gn(t[l]):pn(t[l]);if(!tn(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?gn(t[f]):pn(t[f]);if(!tn(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)y(null,t[l]=u?gn(t[l]):pn(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)W(e[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const e=t[l]=u?gn(t[l]):pn(t[l]);null!=e.key&&m.set(e.key,l)}let v,_=0;const w=f-g+1;let b=!1,I=0;const E=new Array(w);for(l=0;l<w;l++)E[l]=0;for(l=p;l<=d;l++){const r=e[l];if(_>=w){W(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=f;v++)if(0===E[v-g]&&tn(r,t[v])){i=v;break}void 0===i?W(r,s,o,!0):(E[i-g]=l+1,i>=I?I=i:b=!0,y(r,t[i],n,null,s,o,a,c,u),_++)}const T=b?Vt(E):i.Oj;for(v=T.length-1,l=w-1;l>=0;l--){const e=g+l,i=t[e],d=e+1<h?t[e+1].el:r;0===E[l]?y(null,i,n,d,s,o,a,c,u):b&&(v<0||l!==T[v]?G(i,n,d,2):v--)}}},G=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void G(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,te);if(a===$t){s(o,t,n);for(let e=0;e<u.length;e++)G(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===zt)return void E(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),Ot((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},W=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&xt(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!_e(e);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&vn(g,t,e),6&l)Y(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&ie(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,te,r):u&&(s!==$t||h>0&&64&h)?X(u,t,n,!1,!0):(s===$t&&384&h||!i&&16&l)&&X(c,t,n),r&&H(e)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&Ot((()=>{g&&vn(g,t,e),f&&ie(e,null,t,"unmounted")}),n)},H=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===$t)return void Q(n,r);if(t===zt)return void A(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},Q=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Y=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.DY)(r),s.stop(),o&&(o.active=!1,W(a,e,t,n)),c&&Ot(c,t),Ot((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)W(e[o],t,n,r,i)},J=e=>6&e.shapeFlag?J(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el);let Z=!1;const ee=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),Z||(Z=!0,T(),S(),Z=!1),t._vnode=e},te={p:y,um:W,m:G,r:H,mt:F,mc:N,pc:q,pbc:D,n:J,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:ut(ee,ne)}}function Pt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Lt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Mt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ft(e,t,n=!1){const r=e.children,s=t.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=gn(s[i]),t.el=e.el),n||Ft(e,t)),t.type===Bt&&(t.el=e.el)}}function Vt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function Ut(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ut(t)}const jt=e=>e.__isTeleport;const $t=Symbol.for("v-fgt"),Bt=Symbol.for("v-txt"),qt=Symbol.for("v-cmt"),zt=Symbol.for("v-stc"),Kt=[];let Gt=null;function Wt(e=!1){Kt.push(Gt=e?null:[])}function Ht(){Kt.pop(),Gt=Kt[Kt.length-1]||null}let Qt=1;function Yt(e){Qt+=e}function Xt(e){return e.dynamicChildren=Qt>0?Gt||i.Oj:null,Ht(),Qt>0&&Gt&&Gt.push(e),e}function Jt(e,t,n,r,i,s){return Xt(on(e,t,n,r,i,s,!0))}function Zt(e,t,n,r,i){return Xt(an(e,t,n,r,i,!0))}function en(e){return!!e&&!0===e.__v_isVNode}function tn(e,t){return e.type===t.type&&e.key===t.key}const nn="__vInternal",rn=({key:e})=>null!=e?e:null,sn=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:D,r:e,k:t,f:!!n}:e:null);function on(e,t=null,n=null,r=0,s=null,o=(e===$t?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&rn(t),ref:t&&sn(t),scopeId:R,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:D};return c?(mn(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),Qt>0&&!a&&Gt&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Gt.push(u),u}const an=cn;function cn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==z||(e=qt),en(e)){const r=ln(e,t,!0);return n&&mn(r,n),Qt>0&&!a&&Gt&&(6&r.shapeFlag?Gt[Gt.indexOf(e)]=r:Gt.push(r)),r.patchFlag|=-2,r}if(jn(e)&&(e=e.__vccOpts),t){t=un(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:W(e)?128:jt(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return on(e,t,n,s,o,c,a,!0)}function un(e){return e?(0,r.ju)(e)||nn in e?(0,i.X$)({},e):e:null}function ln(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?yn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&rn(c),ref:t&&t.ref?n&&s?(0,i.cy)(s)?s.concat(sn(t)):[s,sn(t)]:sn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==$t?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ln(e.ssContent),ssFallback:e.ssFallback&&ln(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u}function hn(e=" ",t=0){return an(Bt,null,e,t)}function dn(e,t){const n=an(zt,null,e);return n.staticCount=t,n}function fn(e="",t=!1){return t?(Wt(),Zt(qt,null,e)):an(qt,null,e)}function pn(e){return null==e||"boolean"===typeof e?an(qt):(0,i.cy)(e)?an($t,null,e.slice()):"object"===typeof e?gn(e):an(Bt,null,String(e))}function gn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:ln(e)}function mn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),mn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||nn in t?3===r&&D&&(1===D.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=D}}else(0,i.Tn)(t)?(t={default:t,_ctx:D},n=32):(t=String(t),64&r?(n=16,t=[hn(t)]):n=8);e.children=t,e.shapeFlag|=n}function yn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function vn(e,t,n,r=null){o(e,t,7,[n,r])}const _n=at();let wn=0;function bn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||_n,a={uid:wn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yt(s,o),emitsOptions:N(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=x.bind(null,a),e.ce&&e.ce(a),a}let In=null;const En=()=>In||D;let Tn,Sn;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};Tn=t("__VUE_INSTANCE_SETTERS__",(e=>In=e)),Sn=t("__VUE_SSR_SETTERS__",(e=>On=e))}const An=e=>{const t=In;return Tn(e),e.scope.on(),()=>{e.scope.off(),Tn(t)}},Cn=()=>{In&&In.scope.off(),Tn(null)};function kn(e){return 4&e.vnode.shapeFlag}let xn,Nn,On=!1;function Dn(e,t=!1){t&&Sn(t);const{props:n,children:r}=e.vnode,i=kn(e);ft(e,n,i,t),Ct(e,r);const s=i?Rn(e,t):void 0;return t&&Sn(!1),s}function Rn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.IG)(new Proxy(e.ctx,ze));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Fn(e):null,c=An(e);(0,r.C4)();const u=s(o,e,0,[e.props,n]);if((0,r.bl)(),c(),(0,i.yL)(u)){if(u.then(Cn,Cn),t)return u.then((n=>{Pn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=u}else Pn(e,u,t)}else Ln(e,t)}function Pn(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),Ln(e,n)}function Ln(e,t,n){const s=e.type;if(!e.render){if(!t&&xn&&!s.render){const t=s.template||Xe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=xn(t,c)}}e.render=s.render||i.tE,Nn&&Nn(e)}{const t=An(e);(0,r.C4)();try{We(e)}finally{(0,r.bl)(),t()}}}function Mn(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return(0,r.u4)(e,"get","$attrs"),t[n]}}))}function Fn(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return Mn(e)},slots:e.slots,emit:e.emit,expose:t}}function Vn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in Be?Be[n](e):void 0},has(e,t){return t in e||t in Be}}))}function Un(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function jn(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const $n=(e,t)=>{const n=(0,r.EW)(e,t,On);return n};function Bn(e,t,n){const r=arguments.length;return 2===r?(0,i.Gv)(t)&&!(0,i.cy)(t)?en(t)?an(e,null,[t]):an(e,t):an(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&en(n)&&(n=[n]),an(e,t,n))}const qn="3.4.21"},5130:function(e,t,n){n.d(t,{D$:function(){return Te},Ef:function(){return ke},Jo:function(){return ve},u1:function(){return _e}});n(4114);var r=n(6768),i=n(4232),s=n(144);
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const o="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,u=c&&c.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?c.createElementNS(o,e):"mathml"===t?c.createElementNS(a,e):c.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>c.createTextNode(e),createComment:e=>c.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>c.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{u.innerHTML="svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e;const i=u.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},h="transition",d="animation",f=Symbol("_vtc"),p=(e,{slots:t})=>(0,r.h)(r.pR,_(e),t);p.displayName="Transition";const g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=p.props=(0,i.X$)({},r.QP,g),y=(e,t=[])=>{(0,i.cy)(e)?e.forEach((e=>e(...t))):e&&e(...t)},v=e=>!!e&&((0,i.cy)(e)?e.some((e=>e.length>1)):e.length>1);function _(e){const t={};for(const i in e)i in g||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=w(s),_=m&&m[0],b=m&&m[1],{onBeforeEnter:S,onEnter:C,onEnterCancelled:k,onLeave:x,onLeaveCancelled:O,onBeforeAppear:D=S,onAppear:R=C,onAppearCancelled:P=k}=t,L=(e,t,n)=>{E(e,t?h:c),E(e,t?l:a),n&&n()},M=(e,t)=>{e._isLeaving=!1,E(e,d),E(e,p),E(e,f),t&&t()},F=e=>(t,n)=>{const i=e?R:C,s=()=>L(t,e,n);y(i,[t,s]),T((()=>{E(t,e?u:o),I(t,e?h:c),v(i)||A(t,r,_,s)}))};return(0,i.X$)(t,{onBeforeEnter(e){y(S,[e]),I(e,o),I(e,a)},onBeforeAppear(e){y(D,[e]),I(e,u),I(e,l)},onEnter:F(!1),onAppear:F(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>M(e,t);I(e,d),N(),I(e,f),T((()=>{e._isLeaving&&(E(e,d),I(e,p),v(x)||A(e,r,b,n))})),y(x,[e,n])},onEnterCancelled(e){L(e,!1),y(k,[e])},onAppearCancelled(e){L(e,!0),y(P,[e])},onLeaveCancelled(e){M(e),y(O,[e])}})}function w(e){if(null==e)return null;if((0,i.Gv)(e))return[b(e.enter),b(e.leave)];{const t=b(e);return[t,t]}}function b(e){const t=(0,i.Ro)(e);return t}function I(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[f]||(e[f]=new Set)).add(t)}function E(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[f];n&&(n.delete(t),n.size||(e[f]=void 0))}function T(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let S=0;function A(e,t,n,r){const i=e._endId=++S,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=C(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function C(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${h}Delay`),s=r(`${h}Duration`),o=k(i,s),a=r(`${d}Delay`),c=r(`${d}Duration`),u=k(a,c);let l=null,f=0,p=0;t===h?o>0&&(l=h,f=o,p=s.length):t===d?u>0&&(l=d,f=u,p=c.length):(f=Math.max(o,u),l=f>0?o>u?h:d:null,p=l?l===h?s.length:c.length:0);const g=l===h&&/\b(transform|all)(,|$)/.test(r(`${h}Property`).toString());return{type:l,timeout:f,propCount:p,hasTransform:g}}function k(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>x(t)+x(e[n]))))}function x(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function N(){return document.body.offsetHeight}function O(e,t,n){const r=e[f];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const D=Symbol("_vod"),R=Symbol("_vsh");const P=Symbol("");const L=/(^|;)\s*display\s*:/;function M(e,t,n){const r=e.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&V(r,t,"")}else for(const e in t)null==n[e]&&V(r,e,"");for(const e in n)"display"===e&&(o=!0),V(r,e,n[e])}else if(s){if(t!==n){const e=r[P];e&&(n+=";"+e),r.cssText=n,o=L.test(n)}}else t&&e.removeAttribute("style");D in e&&(e[D]=o?r.display:"",e[R]&&(r.display="none"))}const F=/\s*!important$/;function V(e,t,n){if((0,i.cy)(n))n.forEach((n=>V(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=$(e,t);F.test(n)?e.setProperty((0,i.Tg)(r),n.replace(F,""),"important"):e[r]=n}}const U=["Webkit","Moz","ms"],j={};function $(e,t){const n=j[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return j[t]=r;r=(0,i.ZH)(r);for(let i=0;i<U.length;i++){const n=U[i]+r;if(n in e)return j[t]=n}return t}const B="http://www.w3.org/1999/xlink";function q(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(B,t.slice(6,t.length)):e.setAttributeNS(B,t,n);else{const r=(0,i.J$)(t);null==n||r&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function z(e,t,n,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){const r="OPTION"===c?e.getAttribute("value")||"":e.value,i=null==n?"":n;return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let u=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",u=!0):"number"===r&&(n=0,u=!0)}try{e[t]=n}catch(l){0}u&&e.removeAttribute(t)}function K(e,t,n,r){e.addEventListener(t,n,r)}function G(e,t,n,r){e.removeEventListener(t,n,r)}const W=Symbol("_vei");function H(e,t,n,r,i=null){const s=e[W]||(e[W]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=Y(t);if(r){const o=s[t]=ee(r,i);K(e,n,o,a)}else o&&(G(e,n,o,a),s[t]=void 0)}}const Q=/(?:Once|Passive|Capture)$/;function Y(e){let t;if(Q.test(e)){let n;t={};while(n=e.match(Q))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[n,t]}let X=0;const J=Promise.resolve(),Z=()=>X||(J.then((()=>X=0)),X=Date.now());function ee(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(te(e,n.value),t,5,[e])};return n.value=e,n.attached=Z(),n}function te(e,t){if((0,i.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const ne=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,re=(e,t,n,r,s,o,a,c,u)=>{const l="svg"===s;"class"===t?O(e,r,l):"style"===t?M(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||H(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ie(e,t,r,l))?z(e,t,r,o,a,c,u):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),q(e,t,r,l))};function ie(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&ne(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!ne(t)||!(0,i.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const se=new WeakMap,oe=new WeakMap,ae=Symbol("_moveCb"),ce=Symbol("_enterCb"),ue={name:"TransitionGroup",props:(0,i.X$)({},m,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.nI)(),i=(0,r.Gy)();let o,a;return(0,r.$u)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!fe(o[0].el,n.vnode.el,t))return;o.forEach(le),o.forEach(he);const r=o.filter(de);N(),r.forEach((e=>{const n=e.el,r=n.style;I(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[ae]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n[ae]=null,E(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.ux)(e),u=_(c);let l=c.tag||r.FK;o=a,a=t.default?(0,r.Df)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.MZ)(t,(0,r.OW)(t,u,i,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,r.MZ)(t,(0,r.OW)(t,u,i,n)),se.set(t,t.el.getBoundingClientRect())}return(0,r.bF)(l,null,a)}}};ue.props;function le(e){const t=e.el;t[ae]&&t[ae](),t[ce]&&t[ce]()}function he(e){oe.set(e,e.el.getBoundingClientRect())}function de(e){const t=se.get(e),n=oe.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function fe(e,t,n){const r=e.cloneNode(),i=e[f];i&&i.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const s=1===t.nodeType?t:t.parentNode;s.appendChild(r);const{hasTransform:o}=C(r);return s.removeChild(r),o}const pe=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.cy)(t)?e=>(0,i.DY)(t,e):t};function ge(e){e.target.composing=!0}function me(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ye=Symbol("_assign"),ve={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[ye]=pe(s);const o=r||s.props&&"number"===s.props.type;K(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=(0,i.bB)(r)),e[ye](r)})),n&&K(e,"change",(()=>{e.value=e.value.trim()})),t||(K(e,"compositionstart",ge),K(e,"compositionend",me),K(e,"change",me))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e[ye]=pe(o),e.composing)return;const a=s||"number"===e.type?(0,i.bB)(e.value):e.value,c=null==t?"":t;if(a!==c){if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===c)return}e.value=c}}};const _e={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=(0,i.vM)(t);K(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,i.bB)(be(e)):be(e)));e[ye](e.multiple?o?new Set(t):t:t[0]),e._assigning=!0,(0,r.dY)((()=>{e._assigning=!1}))})),e[ye]=pe(s)},mounted(e,{value:t,modifiers:{number:n}}){we(e,t,n)},beforeUpdate(e,t,n){e[ye]=pe(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||we(e,t,n)}};function we(e,t,n){const r=e.multiple,s=(0,i.cy)(t);if(!r||s||(0,i.vM)(t)){for(let o=0,a=e.options.length;o<a;o++){const a=e.options[o],c=be(a);if(r)if(s){const e=typeof c;a.selected="string"===e||"number"===e?t.includes(n?(0,i.bB)(c):c):(0,i.u3)(t,c)>-1}else a.selected=t.has(c);else if((0,i.BX)(be(a),t))return void(e.selectedIndex!==o&&(e.selectedIndex=o))}r||-1===e.selectedIndex||(e.selectedIndex=-1)}}function be(e){return"_value"in e?e._value:e.value}const Ie=["ctrl","shift","alt","meta"],Ee={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Ie.some((n=>e[`${n}Key`]&&!t.includes(n)))},Te=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=Ee[t[e]];if(r&&r(n,t))return}return e(n,...r)})},Se=(0,i.X$)({patchProp:re},l);let Ae;function Ce(){return Ae||(Ae=(0,r.K9)(Se))}const ke=(...e)=>{const t=Ce().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Ne(e);if(!r)return;const s=t._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,xe(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function xe(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function Ne(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}},4232:function(e,t,n){n.d(t,{$3:function(){return f},$H:function(){return F},BH:function(){return K},BX:function(){return ne},Bm:function(){return b},C4:function(){return X},CE:function(){return g},CP:function(){return u},DY:function(){return V},Gv:function(){return I},J$:function(){return Z},Kg:function(){return w},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return D},Qd:function(){return C},Ro:function(){return $},SU:function(){return x},TF:function(){return h},Tg:function(){return P},Tn:function(){return _},Tr:function(){return G},We:function(){return q},X$:function(){return l},Y2:function(){return ee},ZH:function(){return L},Zf:function(){return A},bB:function(){return j},cy:function(){return p},gd:function(){return v},pD:function(){return r},rU:function(){return M},tE:function(){return o},u3:function(){return re},vM:function(){return m},v_:function(){return ie},yI:function(){return k},yL:function(){return E},yQ:function(){return U}});n(4114);
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function r(e,t){const n=new Set(e.split(","));return t?e=>n.has(e.toLowerCase()):e=>n.has(e)}const i={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),u=e=>e.startsWith("onUpdate:"),l=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,g=e=>"[object Map]"===S(e),m=e=>"[object Set]"===S(e),y=e=>"[object Date]"===S(e),v=e=>"[object RegExp]"===S(e),_=e=>"function"===typeof e,w=e=>"string"===typeof e,b=e=>"symbol"===typeof e,I=e=>null!==e&&"object"===typeof e,E=e=>(I(e)||_(e))&&_(e.then)&&_(e.catch),T=Object.prototype.toString,S=e=>T.call(e),A=e=>S(e).slice(8,-1),C=e=>"[object Object]"===S(e),k=e=>w(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,x=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),N=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},O=/-(\w)/g,D=N((e=>e.replace(O,((e,t)=>t?t.toUpperCase():"")))),R=/\B([A-Z])/g,P=N((e=>e.replace(R,"-$1").toLowerCase())),L=N((e=>e.charAt(0).toUpperCase()+e.slice(1))),M=N((e=>{const t=e?`on${L(e)}`:"";return t})),F=(e,t)=>!Object.is(e,t),V=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},U=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},j=e=>{const t=parseFloat(e);return isNaN(t)?e:t},$=e=>{const t=w(e)?Number(e):NaN;return isNaN(t)?e:t};let B;const q=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",K=r(z);function G(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=w(r)?Y(r):G(r);if(i)for(const e in i)t[e]=i[e]}return t}if(w(e)||I(e))return e}const W=/;(?![^(]*\))/g,H=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function Y(e){const t={};return e.replace(Q,"").split(W).forEach((e=>{if(e){const n=e.split(H);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function X(e){let t="";if(w(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=X(e[n]);r&&(t+=r+" ")}else if(I(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=y(e),r=y(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=b(e),r=b(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=I(e),r=I(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const ie=e=>w(e)?e:null==e?"":p(e)||I(e)&&(e.toString===T||!_(e.toString))?JSON.stringify(e,se,2):String(e),se=(e,t)=>t&&t.__v_isRef?se(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[oe(t,r)+" =>"]=n,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>oe(e)))}:b(t)?oe(t):!I(t)||p(t)||C(t)?t:String(t),oe=(e,t="")=>{var n;return b(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},1241:function(e,t){t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},8120:function(e,t,n){var r=n(1483),i=n(8761),s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not a function")}},3852:function(e,t,n){var r=n(735),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s("Can't set "+i(e)+" as a prototype")}},6021:function(e,t,n){var r=n(4815),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new i("Incorrect invocation")}},2293:function(e,t,n){var r=n(1704),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not an object")}},1345:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},2356:function(e,t,n){var r=n(680),i=n(1278),s=TypeError;e.exports=r(ArrayBuffer.prototype,"byteLength","get")||function(e){if("ArrayBuffer"!==i(e))throw new s("ArrayBuffer expected");return e.byteLength}},5596:function(e,t,n){var r=n(4762),i=n(2356),s=r(ArrayBuffer.prototype.slice);e.exports=function(e){if(0!==i(e))return!1;try{return s(e,0,0),!1}catch(t){return!0}}},1986:function(e,t,n){var r=n(8389),i=n(4762),s=n(680),o=n(5238),a=n(5596),c=n(2356),u=n(1729),l=n(3070),h=r.structuredClone,d=r.ArrayBuffer,f=r.DataView,p=r.TypeError,g=Math.min,m=d.prototype,y=f.prototype,v=i(m.slice),_=s(m,"resizable","get"),w=s(m,"maxByteLength","get"),b=i(y.getInt8),I=i(y.setInt8);e.exports=(l||u)&&function(e,t,n){var r,i=c(e),s=void 0===t?i:o(t),m=!_||!_(e);if(a(e))throw new p("ArrayBuffer is detached");if(l&&(e=h(e,{transfer:[e]}),i===s&&(n||m)))return e;if(i>=s&&(!n||m))r=v(e,0,s);else{var y=n&&!m&&w?{maxByteLength:w(e)}:void 0;r=new d(s,y);for(var E=new f(e),T=new f(r),S=g(s,i),A=0;A<S;A++)I(T,A,b(E,A))}return l||u(e),r}},7534:function(e,t,n){var r,i,s,o=n(1345),a=n(382),c=n(8389),u=n(1483),l=n(1704),h=n(5755),d=n(6145),f=n(8761),p=n(9037),g=n(7914),m=n(3864),y=n(4815),v=n(3181),_=n(1953),w=n(1),b=n(1866),I=n(4483),E=I.enforce,T=I.get,S=c.Int8Array,A=S&&S.prototype,C=c.Uint8ClampedArray,k=C&&C.prototype,x=S&&v(S),N=A&&v(A),O=Object.prototype,D=c.TypeError,R=w("toStringTag"),P=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!_&&"Opera"!==d(c.opera),F=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},j=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(V,t)||h(U,t)},$=function(e){var t=v(e);if(l(t)){var n=T(t);return n&&h(n,L)?n[L]:$(t)}},B=function(e){if(!l(e))return!1;var t=d(e);return h(V,t)||h(U,t)},q=function(e){if(B(e))return e;throw new D("Target is not a typed array")},z=function(e){if(u(e)&&(!_||y(x,e)))return e;throw new D(f(e)+" is not a typed array constructor")},K=function(e,t,n,r){if(a){if(n)for(var i in V){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}N[e]&&!n||g(N,e,n?t:M&&A[e]||t,r)}},G=function(e,t,n){var r,i;if(a){if(_){if(n)for(r in V)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(x[e]&&!n)return;try{return g(x,e,n?t:M&&x[e]||t)}catch(s){}}for(r in V)i=c[r],!i||i[e]&&!n||g(i,e,t)}};for(r in V)i=c[r],s=i&&i.prototype,s?E(s)[L]=i:M=!1;for(r in U)i=c[r],s=i&&i.prototype,s&&(E(s)[L]=i);if((!M||!u(x)||x===Function.prototype)&&(x=function(){throw new D("Incorrect invocation")},M))for(r in V)c[r]&&_(c[r],x);if((!M||!N||N===O)&&(N=x.prototype,M))for(r in V)c[r]&&_(c[r].prototype,N);if(M&&v(k)!==N&&_(k,N),a&&!h(N,R))for(r in F=!0,m(N,R,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),V)c[r]&&p(c[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&P,aTypedArray:q,aTypedArrayConstructor:z,exportTypedArrayMethod:K,exportTypedArrayStaticMethod:G,getTypedArrayConstructor:$,isView:j,isTypedArray:B,TypedArray:x,TypedArrayPrototype:N}},8592:function(e,t,n){var r=n(6960);e.exports=function(e,t,n){var i=0,s=arguments.length>2?n:r(t),o=new e(s);while(s>i)o[i]=t[i++];return o}},6651:function(e,t,n){var r=n(5599),i=n(1011),s=n(6960),o=function(e){return function(t,n,o){var a=r(t),c=s(a);if(0===c)return!e&&-1;var u,l=i(o,c);if(e&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},9273:function(e,t,n){var r=n(382),i=n(4914),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw new s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4770:function(e,t,n){var r=n(6960);e.exports=function(e,t){for(var n=r(e),i=new t(n),s=0;s<n;s++)i[s]=e[n-s-1];return i}},2738:function(e,t,n){var r=n(6960),i=n(3005),s=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw new s("Incorrect index");for(var l=new t(a),h=0;h<a;h++)l[h]=h===u?o:e[h];return l}},1278:function(e,t,n){var r=n(4762),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},6145:function(e,t,n){var r=n(4338),i=n(1483),s=n(1278),o=n(1),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"===(r=s(t))&&i(t.callee)?"Arguments":r}},6726:function(e,t,n){var r=n(5755),i=n(9497),s=n(4961),o=n(5835);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},9441:function(e,t,n){var r=n(8473);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},9037:function(e,t,n){var r=n(382),i=n(5835),s=n(7738);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},7738:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},3864:function(e,t,n){var r=n(169),i=n(5835);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},7914:function(e,t,n){var r=n(1483),i=n(5835),s=n(169),o=n(2095);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},2095:function(e,t,n){var r=n(8389),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},382:function(e,t,n){var r=n(8473);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},1729:function(e,t,n){var r,i,s,o,a=n(8389),c=n(1676),u=n(3070),l=a.structuredClone,h=a.ArrayBuffer,d=a.MessageChannel,f=!1;if(u)f=function(e){l(e,{transfer:[e]})};else if(h)try{d||(r=c("worker_threads"),r&&(d=r.MessageChannel)),d&&(i=new d,s=new h(2),o=function(e){i.port1.postMessage(null,[e])},2===s.byteLength&&(o(s),0===s.byteLength&&(f=o)))}catch(p){}e.exports=f},3145:function(e,t,n){var r=n(8389),i=n(1704),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},1091:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},1780:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6956:function(e,t,n){var r=n(938),i=n(4334);e.exports=!r&&!i&&"object"==typeof window&&"object"==typeof document},938:function(e){e.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},4334:function(e,t,n){var r=n(8389),i=n(1278);e.exports="process"===i(r.process)},9966:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},6170:function(e,t,n){var r,i,s=n(8389),o=n(9966),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},4741:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8223:function(e,t,n){var r=n(4762),i=Error,s=r("".replace),o=function(e){return String(new i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},8612:function(e,t,n){var r=n(8389),i=n(4961).f,s=n(9037),o=n(7914),a=n(2095),c=n(6726),u=n(8730);e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,y=e.stat;if(l=m?r:y?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},8473:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},274:function(e,t,n){var r=n(8473);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},1807:function(e,t,n){var r=n(274),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},2048:function(e,t,n){var r=n(382),i=n(5755),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},680:function(e,t,n){var r=n(4762),i=n(8120);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},4762:function(e,t,n){var r=n(274),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},1409:function(e,t,n){var r=n(8389),i=n(1483),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},2564:function(e,t,n){var r=n(8120),i=n(5983);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},8389:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},5755:function(e,t,n){var r=n(4762),i=n(2347),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},1507:function(e){e.exports={}},1799:function(e,t,n){var r=n(382),i=n(8473),s=n(3145);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},2121:function(e,t,n){var r=n(4762),i=n(8473),s=n(1278),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===s(e)?a(e,""):o(e)}:o},2429:function(e,t,n){var r=n(1483),i=n(1704),s=n(1953);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},7268:function(e,t,n){var r=n(4762),i=n(1483),s=n(1831),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},4483:function(e,t,n){var r,i,s,o=n(4644),a=n(8389),c=n(1704),u=n(9037),l=n(5755),h=n(1831),d=n(5409),f=n(1507),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new g("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var _=h.state||(h.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,r=function(e,t){if(_.has(e))throw new g(p);return t.facade=e,_.set(e,t),t},i=function(e){return _.get(e)||{}},s=function(e){return _.has(e)}}else{var w=d("state");f[w]=!0,r=function(e,t){if(l(e,w))throw new g(p);return t.facade=e,u(e,w,t),t},i=function(e){return l(e,w)?e[w]:{}},s=function(e){return l(e,w)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},4914:function(e,t,n){var r=n(1278);e.exports=Array.isArray||function(e){return"Array"===r(e)}},8197:function(e,t,n){var r=n(6145);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},1483:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},8730:function(e,t,n){var r=n(8473),i=n(1483),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},5983:function(e){e.exports=function(e){return null===e||void 0===e}},1704:function(e,t,n){var r=n(1483);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},735:function(e,t,n){var r=n(1704);e.exports=function(e){return r(e)||null===e}},9557:function(e){e.exports=!1},1423:function(e,t,n){var r=n(1409),i=n(1483),s=n(4815),o=n(5022),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6960:function(e,t,n){var r=n(8324);e.exports=function(e){return r(e.length)}},169:function(e,t,n){var r=n(4762),i=n(8473),s=n(1483),o=n(5755),a=n(382),c=n(2048).CONFIGURABLE,u=n(7268),l=n(4483),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===g(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=y(_,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return s(this)&&d(this).source||u(this)}),"toString")},1703:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},7969:function(e,t,n){var r=n(6261);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},5835:function(e,t,n){var r=n(382),i=n(1799),s=n(3896),o=n(2293),a=n(3815),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},4961:function(e,t,n){var r=n(382),i=n(1807),s=n(7611),o=n(7738),a=n(5599),c=n(3815),u=n(5755),l=n(1799),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},2278:function(e,t,n){var r=n(6742),i=n(4741),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},4347:function(e,t){t.f=Object.getOwnPropertySymbols},3181:function(e,t,n){var r=n(5755),i=n(1483),s=n(2347),o=n(5409),a=n(9441),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},4815:function(e,t,n){var r=n(4762);e.exports=r({}.isPrototypeOf)},6742:function(e,t,n){var r=n(4762),i=n(5755),s=n(5599),o=n(6651).indexOf,a=n(1507),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},7611:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},1953:function(e,t,n){var r=n(680),i=n(1704),s=n(3312),o=n(3852);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return s(n),o(r),i(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},348:function(e,t,n){var r=n(1807),i=n(1483),s=n(1704),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw new o("Can't convert object to primitive value")}},9497:function(e,t,n){var r=n(1409),i=n(4762),s=n(2278),o=n(4347),a=n(2293),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},3312:function(e,t,n){var r=n(5983),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},5409:function(e,t,n){var r=n(7255),i=n(1866),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},1831:function(e,t,n){var r=n(9557),i=n(8389),s=n(2095),o="__core-js_shared__",a=e.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.36.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",source:"https://github.com/zloirock/core-js"})},7255:function(e,t,n){var r=n(1831);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},3070:function(e,t,n){var r=n(8389),i=n(8473),s=n(6170),o=n(6956),a=n(938),c=n(4334),u=r.structuredClone;e.exports=!!u&&!i((function(){if(a&&s>92||c&&s>94||o&&s>97)return!1;var e=new ArrayBuffer(8),t=u(e,{transfer:[e]});return 0!==e.byteLength||8!==t.byteLength}))},6029:function(e,t,n){var r=n(6170),i=n(8473),s=n(8389),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1011:function(e,t,n){var r=n(3005),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},4052:function(e,t,n){var r=n(2355),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new i("Can't convert number to bigint");return BigInt(t)}},5238:function(e,t,n){var r=n(3005),i=n(8324),s=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=i(t);if(t!==n)throw new s("Wrong length or index");return n}},5599:function(e,t,n){var r=n(2121),i=n(3312);e.exports=function(e){return r(i(e))}},3005:function(e,t,n){var r=n(1703);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8324:function(e,t,n){var r=n(3005),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},2347:function(e,t,n){var r=n(3312),i=Object;e.exports=function(e){return i(r(e))}},2355:function(e,t,n){var r=n(1807),i=n(1704),s=n(1423),o=n(2564),a=n(348),c=n(1),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},3815:function(e,t,n){var r=n(2355),i=n(1423);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},4338:function(e,t,n){var r=n(1),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},6261:function(e,t,n){var r=n(6145),i=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},1676:function(e,t,n){var r=n(4334);e.exports=function(e){try{if(r)return Function('return require("'+e+'")')()}catch(t){}}},8761:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},1866:function(e,t,n){var r=n(4762),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},5022:function(e,t,n){var r=n(6029);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3896:function(e,t,n){var r=n(382),i=n(8473);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4066:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},4644:function(e,t,n){var r=n(8389),i=n(1483),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},1:function(e,t,n){var r=n(8389),i=n(7255),s=n(5755),o=n(1866),a=n(6029),c=n(5022),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},7043:function(e,t,n){var r=n(382),i=n(3864),s=n(5596),o=ArrayBuffer.prototype;r&&!("detached"in o)&&i(o,"detached",{configurable:!0,get:function(){return s(this)}})},9790:function(e,t,n){var r=n(8612),i=n(1986);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},9850:function(e,t,n){var r=n(8612),i=n(1986);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},5724:function(e,t,n){var r=n(8612),i=n(2347),s=n(6960),o=n(9273),a=n(1091),c=n(8473),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},4337:function(e,t,n){var r=n(4770),i=n(7534),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},5958:function(e,t,n){var r=n(7534),i=n(4762),s=n(8120),o=n(8592),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),n=o(c(t),t);return l(n,e)}))},9659:function(e,t,n){var r=n(2738),i=n(7534),s=n(8197),o=n(3005),a=n(4052),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),i=o(e),l=s(n)?a(t):+t;return r(n,u(n),i,l)}}["with"],!h)},6409:function(e,t,n){var r=n(8612),i=n(8389),s=n(1409),o=n(7738),a=n(5835).f,c=n(5755),u=n(6021),l=n(2429),h=n(7969),d=n(1780),f=n(8223),p=n(382),g=n(9557),m="DOMException",y=s("Error"),v=s(m),_=function(){u(this,w);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=new y(t);return i.name=m,a(r,"stack",o(1,f(i.stack,1))),l(r,this,_),r},w=_.prototype=v.prototype,b="stack"in new y(m),I="stack"in new v(1,2),E=v&&p&&Object.getOwnPropertyDescriptor(i,m),T=!!E&&!(E.writable&&E.configurable),S=b&&!T&&!I;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?_:v});var A=s(m),C=A.prototype;if(C.constructor!==A)for(var k in g||a(C,"constructor",o(1,A)),d)if(c(d,k)){var x=d[k],N=x.s;c(A,N)||a(A,N,o(6,x.c))}},5673:function(e,t,n){var r=n(7914),i=n(4762),s=n(6261),o=n(4066),a=URLSearchParams,c=a.prototype,u=i(c.append),l=i(c["delete"]),h=i(c.forEach),d=i([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=[];h(this,(function(e,t){d(r,{key:t,value:e})})),o(t,1);var i,a=s(e),c=s(n),f=0,p=0,g=!1,m=r.length;while(f<m)i=r[f++],g||i.key===a?(g=!0,l(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===c||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},164:function(e,t,n){var r=n(7914),i=n(4762),s=n(6261),o=n(4066),a=URLSearchParams,c=a.prototype,u=i(c.getAll),l=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=u(this,e);o(t,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},1279:function(e,t,n){var r=n(382),i=n(4762),s=n(3864),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},9306:function(e,t,n){var r=n(4901),i=n(6823),s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not a function")}},8551:function(e,t,n){var r=n(34),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not an object")}},9617:function(e,t,n){var r=n(5397),i=n(5610),s=n(6198),o=function(e){return function(t,n,o){var a=r(t),c=s(a);if(0===c)return!e&&-1;var u,l=i(o,c);if(e&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},4527:function(e,t,n){var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw new s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4576:function(e,t,n){var r=n(9504),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},7740:function(e,t,n){var r=n(9297),i=n(5031),s=n(7347),o=n(4913);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},6699:function(e,t,n){var r=n(3724),i=n(4913),s=n(6980);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},6840:function(e,t,n){var r=n(4901),i=n(4913),s=n(283),o=n(9433);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9433:function(e,t,n){var r=n(4475),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4055:function(e,t,n){var r=n(4475),i=n(34),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},6837:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},9392:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(e,t,n){var r,i,s=n(4475),o=n(9392),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},8727:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6518:function(e,t,n){var r=n(4475),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),u=n(2796);e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,y=e.stat;if(l=m?r:y?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},9039:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},616:function(e,t,n){var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){var r=n(616),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(e,t,n){var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},9504:function(e,t,n){var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},7751:function(e,t,n){var r=n(4475),i=n(4901),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},5966:function(e,t,n){var r=n(9306),i=n(4117);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},4475:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},421:function(e){e.exports={}},5917:function(e,t,n){var r=n(3724),i=n(9039),s=n(4055);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){var r=n(9504),i=n(9039),s=n(4576),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===s(e)?a(e,""):o(e)}:o},3706:function(e,t,n){var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},1181:function(e,t,n){var r,i,s,o=n(8622),a=n(4475),c=n(34),u=n(6699),l=n(9297),h=n(7629),d=n(6119),f=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new g("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var _=h.state||(h.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,r=function(e,t){if(_.has(e))throw new g(p);return t.facade=e,_.set(e,t),t},i=function(e){return _.get(e)||{}},s=function(e){return _.has(e)}}else{var w=d("state");f[w]=!0,r=function(e,t){if(l(e,w))throw new g(p);return t.facade=e,u(e,w,t),t},i=function(e){return l(e,w)?e[w]:{}},s=function(e){return l(e,w)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},4376:function(e,t,n){var r=n(4576);e.exports=Array.isArray||function(e){return"Array"===r(e)}},4901:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},4117:function(e){e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},6395:function(e){e.exports=!1},757:function(e,t,n){var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6198:function(e,t,n){var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===g(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=y(_,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return s(this)&&d(this).source||u(this)}),"toString")},741:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},4913:function(e,t,n){var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8480:function(e,t,n){var r=n(1828),i=n(8727),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},3717:function(e,t){t.f=Object.getOwnPropertySymbols},1625:function(e,t,n){var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},8773:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},4270:function(e,t,n){var r=n(9565),i=n(4901),s=n(34),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw new o("Can't convert object to primitive value")}},5031:function(e,t,n){var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},7750:function(e,t,n){var r=n(4117),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},6119:function(e,t,n){var r=n(5745),i=n(3392),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},7629:function(e,t,n){var r=n(6395),i=n(4475),s=n(9433),o="__core-js_shared__",a=e.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.36.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},4495:function(e,t,n){var r=n(7388),i=n(9039),s=n(4475),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(e,t,n){var r=n(1291),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5397:function(e,t,n){var r=n(7055),i=n(7750);e.exports=function(e){return r(i(e))}},1291:function(e,t,n){var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){var r=n(1291),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},8981:function(e,t,n){var r=n(7750),i=Object;e.exports=function(e){return i(r(e))}},2777:function(e,t,n){var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6969:function(e,t,n){var r=n(2777),i=n(757);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},6823:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){var r=n(9504),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},7040:function(e,t,n){var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){var r=n(3724),i=n(9039);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8622:function(e,t,n){var r=n(4475),i=n(4901),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},8227:function(e,t,n){var r=n(4475),i=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},4114:function(e,t,n){var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},3007:function(e,t,n){n.d(t,{A:function(){return y}});var r=n(7736),i=n(1640),s=n(4813),o=n(9951);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.uA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.FA("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.gR)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.gR)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.zw)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){(0,r.zw)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.tD,ErrorFactory:r.FA,deepExtend:r.zw}),e}const d=h(),f=new o.Vy("@firebase/app-compat"),p="@firebase/app-compat",g="0.2.15";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m(e){(0,s.registerVersion)(p,g,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.Bd)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;m()},4813:function(e,t,n){n.r(t),n.d(t,{FirebaseError:function(){return s.g},SDK_VERSION:function(){return ve},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return ue},_addOrOverwriteComponent:function(){return le},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ce},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return fe},deleteApp:function(){return Ie},getApp:function(){return we},getApps:function(){return be},initializeApp:function(){return _e},onLog:function(){return Te},registerVersion:function(){return Ee},setLogLevel:function(){return Se}});n(5724);var r=n(1640),i=n(9951),s=n(7736);n(6409);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(I(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function _(e){v=e(v)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(E(this),t),I(h.get(this))}:function(...t){return I(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function b(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function I(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=b(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const E=e=>g.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],C=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=A.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return C.set(t,s),s}_((e=>({...e,get:(t,n,r)=>k(t,n)||e.get(t,n,r),has:(t,n)=>!!k(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const O="@firebase/app",D="0.9.15",R=new i.Vy("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",j="@firebase/auth-compat",$="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",z="@firebase/functions-compat",K="@firebase/installations",G="@firebase/installations-compat",W="@firebase/messaging",H="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",X="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="10.1.0",se="[DEFAULT]",oe={[O]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[j]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[z]:"fire-fn-compat",[K]:"fire-iid",[G]:"fire-iid-compat",[W]:"fire-fcm",[H]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[X]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){R.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return R.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},me=new s.FA("app","Firebase",ge);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=ie;function _e(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw me.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw me.create("no-options");const a=ae.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw me.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of ce.values())c.addComponent(r);const u=new ye(n,i,c);return ae.set(o,u),u}function we(e=se){const t=ae.get(e);if(!t&&e===se&&(0,s.T9)())return _e();if(!t)throw me.create("no-app",{appName:e});return t}function be(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Ee(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void R.warn(e.join(" "))}he(new r.uA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function Te(e,t){if(null!==e&&"function"!==typeof e)throw me.create("invalid-log-argument");(0,i.Ey)(e,t)}function Se(e){(0,i.He)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="firebase-heartbeat-database",Ce=1,ke="firebase-heartbeat-store";let xe=null;function Ne(){return xe||(xe=T(Ae,Ce,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ke)}}}).catch((e=>{throw me.create("idb-open",{originalErrorMessage:e.message})}))),xe}async function Oe(e){try{const t=await Ne(),n=await t.transaction(ke).objectStore(ke).get(Re(e));return n}catch(t){if(t instanceof s.g)R.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});R.warn(e.message)}}}async function De(e,t){try{const n=await Ne(),r=n.transaction(ke,"readwrite"),i=r.objectStore(ke);await i.put(t,Re(e)),await r.done}catch(n){if(n instanceof s.g)R.warn(n.message);else{const e=me.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});R.warn(e.message)}}}function Re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=1024,Le=2592e6;class Me{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ue(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Le})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Fe(),{heartbeatsToSend:t,unsentEntries:n}=Ve(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Fe(){const e=new Date;return e.toISOString().substring(0,10)}function Ve(e,t=Pe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),je(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),je(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ue{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Oe(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function je(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e){he(new r.uA("platform-logger",(e=>new x(e)),"PRIVATE")),he(new r.uA("heartbeat",(e=>new Me(e)),"PRIVATE")),Ee(O,D,e),Ee(O,D,"esm2017"),Ee("fire-js","")}$e("")},1640:function(e,t,n){n.d(t,{h1:function(){return u},uA:function(){return i}});var r=n(7736);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},9951:function(e,t,n){n.d(t,{$b:function(){return i},Ey:function(){return h},He:function(){return l},Vy:function(){return u}});n(5724);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},4541:function(e,t,n){n.d(t,{A:function(){return r.A}});var r=n(3007),i="firebase",s="10.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.A.registerVersion(i,s,"app-compat")},2166:function(e,t,n){n(5724);var r=n(3007),i=(n(7043),n(9850),n(9790),n(4337),n(5958),n(9659),n(5673),n(164),n(1279),n(7736)),s=n(4813);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(9951),c=n(1640);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=h,p=d,g=new i.FA("auth","Firebase",d()),m=new a.Vy("@firebase/auth");function y(e,...t){m.logLevel<=a.$b.WARN&&m.warn(`Auth (${s.SDK_VERSION}): ${e}`,...t)}function v(e,...t){m.logLevel<=a.$b.ERROR&&m.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,...t){throw E(e,...t)}function w(e,...t){return E(e,...t)}function b(e,t,n){const r=Object.assign(Object.assign({},p()),{[t]:n}),s=new i.FA("auth","Firebase",r);return s.create(t,{appName:e.name})}function I(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&_(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function E(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return g.create(e,...t)}function T(e,t,...n){if(!e)throw E(t,...n)}function S(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function A(e,t){e||S(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===x()||"https:"===x()}function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function O(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.shortDelay=e,this.longDelay=t,A(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){A(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void S("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void S("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void S("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},M=new D(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function V(e,t,n,r,s={}){return U(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),P.fetch()($(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function U(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},L),t);try{const t=new B(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw q(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw q(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw q(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw q(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);_(e,a)}}catch(s){if(s instanceof i.g)throw s;_(e,"network-request-failed",{message:String(s)})}}async function j(e,t,n,r,i={}){const s=await V(e,t,n,r,i);return"mfaPendingCredential"in s&&_(e,"multi-factor-auth-required",{_serverResponse:s}),s}function $(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?R(e.config,i):`${e.config.apiScheme}://${i}`}class B{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(w(this.auth,"network-request-failed"))),M.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function q(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=w(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){return V(e,"POST","/v1/accounts:delete",t)}async function K(e,t){return V(e,"POST","/v1/accounts:update",t)}async function G(e,t){return V(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),s=Y(r);T(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:W(Q(s.auth_time)),issuedAtTime:W(Q(s.iat)),expirationTime:W(Q(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Q(e){return 1e3*Number(e)}function Y(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(s){return v("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function X(e){const t=Y(e);return T(t,"internal-error"),T("undefined"!==typeof t.exp,"internal-error"),T("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&Z(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Z({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e){var t;const n=e.auth,r=await e.getIdToken(),i=await J(e,G(n,{idToken:r}));T(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?se(s.providerUserInfo):[],a=ie(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new te(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function re(e){const t=(0,i.Ku)(e);await ne(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ie(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function se(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t){const n=await U(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=$(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T("undefined"!==typeof e.idToken,"internal-error"),T("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await oe(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ae;return n&&(T("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(T("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(T("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ae,this.toJSON())}_performRefresh(){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t){T("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ue{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ee(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new te(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return re(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ne(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await J(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:_,isAnonymous:w,providerData:b,stsTokenManager:I}=t;T(v&&I,e,"internal-error");const E=ae.fromJSON(this.name,I);T("string"===typeof v,e,"internal-error"),ce(l,e.name),ce(h,e.name),T("boolean"===typeof _,e,"internal-error"),T("boolean"===typeof w,e,"internal-error"),ce(d,e.name),ce(f,e.name),ce(p,e.name),ce(g,e.name),ce(m,e.name),ce(y,e.name);const S=new ue({uid:v,auth:e,email:h,emailVerified:_,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:y});return b&&Array.isArray(b)&&(S.providerData=b.map((e=>Object.assign({},e)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ae;r.updateFromServerResponse(t);const i=new ue({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ne(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map;function he(e){A(e instanceof Function,"Expected a class definition");let t=le.get(e);return t?(A(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,le.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class ge{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ge(he(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||he(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ue._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new ge(i,e,n)):new ge(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(we(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ye(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Ee(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||_e(t))&&!t.includes("edge/"))return"Chrome";if(be(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ye(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function ve(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _e(e=(0,i.ZQ)()){return/crios\//i.test(e)}function we(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function be(e=(0,i.ZQ)()){return/android/i.test(e)}function Ie(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function Ee(e=(0,i.ZQ)()){return/webos/i.test(e)}function Te(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Se(e=(0,i.ZQ)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Ae(e=(0,i.ZQ)()){var t;return Te(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ce(){return(0,i.lT)()&&10===document.documentMode}function ke(e=(0,i.ZQ)()){return Te(e)||be(e)||Ee(e)||Ie(e)||/windows phone/i.test(e)||we(e)}function xe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e,t=[]){let n;switch(e){case"Browser":n=me((0,i.ZQ)());break;case"Worker":n=`${me((0,i.ZQ)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(e){return(await V(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function De(e,t){return V(e,"GET","/v2/recaptchaConfig",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e){return void 0!==e&&void 0!==e.getResponse}function Pe(e){return void 0!==e&&void 0!==e.enterprise}class Le{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Fe(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=w("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Me().appendChild(r)}))}function Ve(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ue="https://www.google.com/recaptcha/enterprise.js?render=",je="recaptcha-enterprise",$e="NO_RECAPTCHA";class Be{constructor(e){this.type=je,this.auth=Ge(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{De(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Le(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;Pe(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n($e)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&Pe(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Fe(Ue+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function qe(e,t,n,r=!1){const i=new Be(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new We(this),this.idTokenSubscription=new We(this),this.beforeStateQueue=new ze(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=g,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=he(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ge.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ne(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.Ku)(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(he(e))}))}async initializeRecaptchaConfig(){const e=await De(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Le(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Be(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&he(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await ge.create(this,[he(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return T(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ne(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&y(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Ge(e){return(0,i.Ku)(e)}class We{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(he);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Qe(e,t,n){const r=Ge(e);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Ye(t),{host:o,port:a}=Xe(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ze()}function Ye(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Xe(e){const t=Ye(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Je(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Je(t)}}}function Je(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ze(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return S("not implemented")}_getIdTokenResponse(e){return S("not implemented")}_linkToIdToken(e,t){return S("not implemented")}_getReauthenticationResolver(e){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return V(e,"POST","/v1/accounts:resetPassword",F(e,t))}async function nt(e,t){return V(e,"POST","/v1/accounts:update",t)}async function rt(e,t){return V(e,"POST","/v1/accounts:update",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t){return j(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}async function st(e,t){return V(e,"POST","/v1/accounts:sendOobCode",F(e,t))}async function ot(e,t){return st(e,t)}async function at(e,t){return st(e,t)}async function ct(e,t){return st(e,t)}async function ut(e,t){return st(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function ht(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends et{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new dt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new dt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await qe(e,n,"signInWithPassword");return it(e,t)}return it(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await qe(e,n,"signInWithPassword");return it(e,t)}return Promise.reject(t)}));case"emailLink":return lt(e,{email:this._email,oobCode:this._password});default:_(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return nt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ht(e,{idToken:t,email:this._email,oobCode:this._password});default:_(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t){return j(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="http://localhost";class gt extends et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new gt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ft(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}buildRequest(){const e={requestUri:pt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(e,t){return V(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function yt(e,t){return j(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function vt(e,t){const n=await j(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw q(e,"account-exists-with-different-credential",n);return n}const _t={["USER_NOT_FOUND"]:"user-not-found"};async function wt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return j(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,n),_t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends et{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new bt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new bt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return yt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return vt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return wt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new bt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Et(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],s=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return s||r||n||t||e}class Tt{constructor(e){var t,n,r,s,o,a;const c=(0,i.I9)((0,i.hp)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=It(null!==(r=c["mode"])&&void 0!==r?r:null);T(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Et(e);try{return new Tt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(){this.providerId=St.PROVIDER_ID}static credential(e,t){return dt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Tt.parseLink(t);return T(n,"argument-error"),dt._fromEmailAndCode(e,n.code,n.tenantId)}}St.PROVIDER_ID="password",St.EMAIL_PASSWORD_SIGN_IN_METHOD="password",St.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends At{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class kt extends Ct{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return T("providerId"in t&&"signInMethod"in t,"argument-error"),gt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return T(e.idToken||e.accessToken,"argument-error"),gt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return kt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return kt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new kt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Ct{constructor(){super("facebook.com")}static credential(e){return gt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch(t){return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com",xt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt extends Ct{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Nt.credential(t,n)}catch(r){return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com",Nt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot extends Ct{constructor(){super("github.com")}static credential(e){return gt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch(t){return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com",Ot.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dt="http://localhost";class Rt extends et{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ft(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Rt(n,i):null}static _create(e,t){return new Rt(e,t)}buildRequest(){return{requestUri:Dt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="saml.";class Lt extends At{constructor(e){T(e.startsWith(Pt),"argument-error"),super(e)}static credentialFromResult(e){return Lt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Lt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Rt.fromJSON(e);return T(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Rt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Ct{constructor(){super("twitter.com")}static credential(e,t){return gt._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Mt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ft(e,t){return j(e,"POST","/v1/accounts:signUp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.TWITTER_SIGN_IN_METHOD="twitter.com",Mt.PROVIDER_ID="twitter.com";class Vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ue._fromIdTokenResponse(e,n,r),s=Ut(n),o=new Vt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ut(n);return new Vt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ut(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(e){var t;const n=Ge(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Vt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ft(n,{returnSecureToken:!0}),i=await Vt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends i.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,$t.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new $t(e,t,n,r)}}function Bt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw $t._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zt(e,t){const n=(0,i.Ku)(e);await Gt(!0,n,t);const{providerUserInfo:r}=await K(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=qt(r||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Kt(e,t,n=!1){const r=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Vt._forOperation(e,"link",r)}async function Gt(e,t,n){await ne(t);const r=qt(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";T(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await J(e,Bt(r,i,t,e),n);T(s.idToken,r,"internal-error");const o=Y(s.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(e.uid===a,r,"user-mismatch"),Vt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&_(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(e,t,n=!1){const r="signIn",i=await Bt(e,r,t),s=await Vt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Qt(e,t){return Ht(Ge(e),t)}async function Yt(e,t){const n=(0,i.Ku)(e);return await Gt(!1,n,t.providerId),Kt(n,t)}async function Xt(e,t){return Wt((0,i.Ku)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(e,t){return j(e,"POST","/v1/accounts:signInWithCustomToken",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){const n=Ge(e),r=await Jt(n,{token:t,returnSecureToken:!0}),i=await Vt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?tn._fromServerResponse(e,t):"totpInfo"in t?nn._fromServerResponse(e,t):_(e,"internal-error")}}class tn extends en{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new tn(t)}}class nn extends en{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new nn(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e,t,n){var r;T((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),T("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e,t,n){var r;const i=Ge(e),s={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await qe(i,s,"getOobCode",!0);n&&rn(i,e,n),await at(i,e)}else n&&rn(i,s,n),await at(i,s).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await qe(i,s,"getOobCode",!0);n&&rn(i,e,n),await at(i,e)}}))}async function on(e,t,n){await tt((0,i.Ku)(e),{oobCode:t,newPassword:n})}async function an(e,t){await rt((0,i.Ku)(e),{oobCode:t})}async function cn(e,t){const n=(0,i.Ku)(e),r=await tt(n,{oobCode:t}),s=r.requestType;switch(T(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":T(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":T(r.mfaInfo,n,"internal-error");default:T(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=en._fromServerResponse(Ge(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function un(e,t){const{data:n}=await cn((0,i.Ku)(e),t);return n.email}async function ln(e,t,n){var r;const i=Ge(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await qe(i,s,"signUpPassword");o=Ft(i,e)}else o=Ft(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await qe(i,s,"signUpPassword");return Ft(i,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),c=await Vt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function hn(e,t,n){return Qt((0,i.Ku)(e),St.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(e,t,n){var r;const i=Ge(e),s={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function o(e,t){T(t.handleCodeInApp,i,"argument-error"),t&&rn(i,e,t)}if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await qe(i,s,"getOobCode",!0);o(e,n),await ct(i,e)}else o(s,n),await ct(i,s).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await qe(i,s,"getOobCode",!0);o(e,n),await ct(i,e)}}))}function fn(e,t){const n=Tt.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function pn(e,t,n){const r=(0,i.Ku)(e),s=St.credentialWithLink(t,n||C());return T(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Qt(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(e,t){return V(e,"POST","/v1/accounts:createAuthUri",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e,t){const n=k()?C():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:s}=await gn((0,i.Ku)(e),r);return s||[]}async function yn(e,t){const n=(0,i.Ku)(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&rn(n.auth,s,t);const{email:o}=await ot(n.auth,s);o!==e.email&&await e.reload()}async function vn(e,t,n){const r=(0,i.Ku)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&rn(r.auth,o,n);const{email:a}=await ut(r.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(e,t){return V(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.Ku)(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await J(r,_n(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function bn(e,t){return En((0,i.Ku)(e),t,null)}function In(e,t){return En((0,i.Ku)(e),null,t)}async function En(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await J(e,nt(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=Y(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new Sn(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new Cn(s,i);case"github.com":return new kn(s,i);case"google.com":return new xn(s,i);case"twitter.com":return new Nn(s,i,e.screenName||null);case"custom":case"anonymous":return new Sn(s,null);default:return new Sn(s,r,i)}}class Sn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class An extends Sn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class Cn extends Sn{constructor(e,t){super(e,"facebook.com",t)}}class kn extends An{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class xn extends Sn{constructor(e,t){super(e,"google.com",t)}}class Nn extends An{constructor(e,t,n){super(e,"twitter.com",t,n)}}function On(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Tn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dn{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new Dn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Dn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Dn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Dn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Ge(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>en._fromServerResponse(n,e)));T(r.mfaPendingCredential,n,"internal-error");const s=Dn._fromMfaPendingCredential(r.mfaPendingCredential);return new Rn(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Vt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return T(t.user,n,"internal-error"),Vt._forOperation(t.user,t.operationType,o);default:_(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Pn(e,t){var n;const r=(0,i.Ku)(e),s=t;return T(t.customData.operationType,r,"argument-error"),T(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),Rn._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function Mn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function Fn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function Vn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function Un(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:withdraw",F(e,t))}class jn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>en._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new jn(e)}async getSession(){return Dn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,r=await this.getSession(),i=await J(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await J(this.user,Un(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(r){throw r}}}const $n=new WeakMap;function Bn(e){const t=(0,i.Ku)(e);return $n.has(t)||$n.set(t,jn._fromUser(t)),$n.get(t)}const qn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qn,"1"),this.storage.removeItem(qn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){const e=(0,i.ZQ)();return ve(e)||Te(e)}const Gn=1e3,Wn=10;class Hn extends zn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Kn()&&xe(),this.fallbackToPolling=ke(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ce()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Wn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Gn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hn.type="LOCAL";const Qn=Hn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends zn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yn.type="SESSION";const Xn=Yn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Zn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Jn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function er(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn.receivers=[];class tr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=er("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return window}function rr(e){nr().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return"undefined"!==typeof nr()["WorkerGlobalScope"]&&"function"===typeof nr()["importScripts"]}async function sr(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function or(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function ar(){return ir()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="firebaseLocalStorageDb",ur=1,lr="firebaseLocalStorage",hr="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function fr(e,t){return e.transaction([lr],t?"readwrite":"readonly").objectStore(lr)}function pr(){const e=indexedDB.deleteDatabase(cr);return new dr(e).toPromise()}function gr(){const e=indexedDB.open(cr,ur);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(lr,{keyPath:hr})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(lr)?t(n):(n.close(),await pr(),t(await gr()))}))}))}async function mr(e,t,n){const r=fr(e,!0).put({[hr]:t,value:n});return new dr(r).toPromise()}async function yr(e,t){const n=fr(e,!1).get(t),r=await new dr(n).toPromise();return void 0===r?null:r.value}function vr(e,t){const n=fr(e,!0).delete(t);return new dr(n).toPromise()}const _r=800,wr=3;class br{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await gr()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>wr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ir()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zn._getInstance(ar()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await sr(),!this.activeServiceWorker)return;this.sender=new tr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&or()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gr();return await mr(e,qn,"1"),await vr(e,qn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>mr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>yr(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>vr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=fr(e,!1).getAll();return new dr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),_r)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}br.type="LOCAL";const Ir=br;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}function Tr(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}function Sr(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=500,Cr=6e4,kr=1e12;class xr{constructor(e){this.auth=e,this.counter=kr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Nr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||kr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||kr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||kr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class Nr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;T(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=Or(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),Cr)}),Ar))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Or(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=Ve("rcb"),Rr=new D(3e4,6e4),Pr="https://www.google.com/recaptcha/api.js?";class Lr{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=nr().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return T(Mr(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Re(nr().grecaptcha)?Promise.resolve(nr().grecaptcha):new Promise(((n,r)=>{const s=nr().setTimeout((()=>{r(w(e,"network-request-failed"))}),Rr.get());nr()[Dr]=()=>{nr().clearTimeout(s),delete nr()[Dr];const i=nr().grecaptcha;if(!i||!Re(i))return void r(w(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${Pr}?${(0,i.Am)({onload:Dr,render:"explicit",hl:t})}`;Fe(o).catch((()=>{clearTimeout(s),r(w(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=nr().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Mr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Fr{async load(e){return new xr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="recaptcha",Ur={theme:"light",type:"image"};class jr{constructor(e,t,n=Object.assign({},Ur)){this.parameters=n,this.type=Vr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ge(e),this.isInvisible="invisible"===this.parameters.size,T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof t?document.getElementById(t):t;T(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Fr:new Lr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){T(!this.parameters.sitekey,this.auth,"argument-error"),T(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=nr()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){T(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){T(k()&&!ir(),this.auth,"internal-error"),await $r(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Oe(this.auth);T(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return T(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function $r(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=bt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function qr(e,t,n){const r=Ge(e),s=await Gr(r,t,(0,i.Ku)(n));return new Br(s,(e=>Qt(r,e)))}async function zr(e,t,n){const r=(0,i.Ku)(e);await Gt(!1,r,"phone");const s=await Gr(r.auth,t,(0,i.Ku)(n));return new Br(s,(e=>Yt(r,e)))}async function Kr(e,t,n){const r=(0,i.Ku)(e),s=await Gr(r.auth,t,(0,i.Ku)(n));return new Br(s,(e=>Xt(r,e)))}async function Gr(e,t,n){var r;const i=await n.verify();try{let s;if(T("string"===typeof i,e,"argument-error"),T(n.type===Vr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){T("enroll"===t.type,e,"internal-error");const n=await Ln(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{T("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;T(n,e,"missing-multi-factor-info");const o=await Er(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await mt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Wr(e,t){await Kt((0,i.Ku)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.providerId=Hr.PROVIDER_ID,this.auth=Ge(e)}verifyPhoneNumber(e,t){return Gr(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return bt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Hr.credentialFromTaggedObject(t)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?bt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qr(e,t){return t?he(t):(T(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hr.PROVIDER_ID="phone",Hr.PHONE_SIGN_IN_METHOD="phone";class Yr extends et{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xr(e){return Ht(e.auth,new Yr(e),e.bypassAuthState)}function Jr(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Wt(n,new Yr(e),e.bypassAuthState)}async function Zr(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Kt(n,new Yr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xr;case"linkViaPopup":case"linkViaRedirect":return Zr;case"reauthViaPopup":case"reauthViaRedirect":return Jr;default:_(this.auth,"internal-error")}}resolve(e){A(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){A(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new D(2e3,1e4);async function ni(e,t,n){const r=Ge(e);I(e,t,At);const i=Qr(r,n),s=new si(r,"signInViaPopup",t,i);return s.executeNotNull()}async function ri(e,t,n){const r=(0,i.Ku)(e);I(r.auth,t,At);const s=Qr(r.auth,n),o=new si(r.auth,"reauthViaPopup",t,s,r);return o.executeNotNull()}async function ii(e,t,n){const r=(0,i.Ku)(e);I(r.auth,t,At);const s=Qr(r.auth,n),o=new si(r.auth,"linkViaPopup",t,s,r);return o.executeNotNull()}class si extends ei{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){A(1===this.filter.length,"Popup operations only handle one event");const e=er();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(w(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(w(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(w(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,ti.get())};e()}}si.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oi="pendingRedirect",ai=new Map;class ci extends ei{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ai.get(this.auth._key());if(!e){try{const t=await ui(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ai.set(this.auth._key(),e)}return this.bypassAuthState||ai.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function ui(e,t){const n=pi(t),r=fi(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function li(e,t){return fi(e)._set(pi(t),"true")}function hi(){ai.clear()}function di(e,t){ai.set(e._key(),t)}function fi(e){return he(e._redirectPersistence)}function pi(e){return pe(oi,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e,t,n){return mi(e,t,n)}async function mi(e,t,n){const r=Ge(e);I(e,t,At),await r._initializationPromise;const i=Qr(r,n);return await li(i,r),i._openRedirect(r,t,"signInViaRedirect")}function yi(e,t,n){return vi(e,t,n)}async function vi(e,t,n){const r=(0,i.Ku)(e);I(r.auth,t,At),await r.auth._initializationPromise;const s=Qr(r.auth,n);await li(s,r.auth);const o=await Ei(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}function _i(e,t,n){return wi(e,t,n)}async function wi(e,t,n){const r=(0,i.Ku)(e);I(r.auth,t,At),await r.auth._initializationPromise;const s=Qr(r.auth,n);await Gt(!1,r,t.providerId),await li(s,r.auth);const o=await Ei(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}async function bi(e,t){return await Ge(e)._initializationPromise,Ii(e,t,!1)}async function Ii(e,t,n=!1){const r=Ge(e),i=Qr(r,t),s=new ci(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function Ei(e){const t=er(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=6e5;class Si{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!ki(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ci(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(w(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ti&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ai(e))}saveEventToCache(e){this.cachedEventUids.add(Ai(e)),this.lastProcessedEventTime=Date.now()}}function Ai(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ci({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function ki(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ci(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(e,t={}){return V(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Oi=/^https?/;async function Di(e){if(e.config.emulator)return;const{authorizedDomains:t}=await xi(e);for(const r of t)try{if(Ri(r))return}catch(n){}_(e,"unauthorized-domain")}function Ri(e){const t=C(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Oi.test(n))return!1;if(Ni.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new D(3e4,6e4);function Li(){const e=nr().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Mi(e){return new Promise(((t,n)=>{var r,i,s;function o(){Li(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Li(),n(w(e,"network-request-failed"))},timeout:Pi.get()})}if(null===(i=null===(r=nr().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=nr().gapi)||void 0===s?void 0:s.load)){const t=Ve("iframefcb");return nr()[t]=()=>{gapi.load?o():n(w(e,"network-request-failed"))},Fe(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Fi=null,e}))}let Fi=null;function Vi(e){return Fi=Fi||Mi(e),Fi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new D(5e3,15e3),ji="__/auth/iframe",$i="emulator/auth/iframe",Bi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zi(e){const t=e.config;T(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,$i):`https://${e.config.authDomain}/${ji}`,r={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=qi.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.Am)(r).slice(1)}`}async function Ki(e){const t=await Vi(e),n=nr().gapi;return T(n,e,"internal-error"),t.open({where:document.body,url:zi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bi,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=w(e,"network-request-failed"),s=nr().setTimeout((()=>{r(i)}),Ui.get());function o(){nr().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wi=500,Hi=600,Qi="_blank",Yi="http://localhost";class Xi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ji(e,t,n,r=Wi,s=Hi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Gi),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.ZQ)().toLowerCase();n&&(c=_e(l)?Qi:n),ye(l)&&(t=t||Yi,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Ae(l)&&"_self"!==c)return Zi(t||"",c),new Xi(null);const d=window.open(t||"",c,h);T(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Xi(d)}function Zi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="__/auth/handler",ts="emulator/auth/handler",ns=encodeURIComponent("fac");async function rs(e,t,n,r,o,a){T(e.config.authDomain,e,"auth-domain-config-required"),T(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.SDK_VERSION,eventId:o};if(t instanceof At){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ct){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];const l=await e._getAppCheckToken(),h=l?`#${ns}=${encodeURIComponent(l)}`:"";return`${is(e)}?${(0,i.Am)(u).slice(1)}${h}`}function is({config:e}){return e.emulator?R(e,ts):`https://${e.authDomain}/${es}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="webStorageSupport";class os{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xn,this._completeRedirectFn=Ii,this._overrideRedirectResult=di}async _openPopup(e,t,n,r){var i;A(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await rs(e,t,n,C(),r);return Ji(e,s,er())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await rs(e,t,n,C(),r);return rr(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(A(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ki(e),n=new Si(e);return t.register("authEvent",(t=>{T(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(ss,{type:ss},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[ss];void 0!==i&&t(!!i),_(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Di(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ke()||ve()||Te()}}const as=os;class cs{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return S("unexpected MultiFactorSessionType")}}}class us extends cs{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new us(e)}_finalizeEnroll(e,t,n){return Mn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Tr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ls{constructor(){}static assertion(e){return us._fromCredential(e)}}ls.FACTOR_ID="phone";class hs{static assertionForEnrollment(e,t){return ds._fromSecret(e,t)}static assertionForSignIn(e,t){return ds._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;T("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Fn(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return fs._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}hs.FACTOR_ID="totp";class ds extends cs{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new ds(t,void 0,e)}static _fromEnrollmentId(e,t){return new ds(t,e)}async _finalizeEnroll(e,t,n){return T("undefined"!==typeof this.secret,e,"argument-error"),Vn(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){T(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Sr(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class fs{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new fs(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(ps(e)||ps(t))&&(r=!0),r&&(ps(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),ps(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ps(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var gs="@firebase/auth",ms="1.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ys{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _s(e){(0,s._registerComponent)(new c.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ne(e)},u=new Ke(r,i,s,c);return He(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s._registerComponent)(new c.uA("auth-internal",(e=>{const t=Ge(e.getProvider("auth").getImmediate());return(e=>new ys(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(gs,ms,vs(e)),(0,s.registerVersion)(gs,ms,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=300;(0,i.XA)("authIdTokenMaxAge");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bs(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_s("Browser");const Is=2e3;async function Es(e,t,n){var r;const{BuildInfo:i}=bs();A(t.sessionId,"AuthEvent did not contain a session ID");const s=await ks(t.sessionId),o={};return Te()?o["ibi"]=i.packageName:be()?o["apn"]=i.packageName:_(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,rs(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function Ts(e){const{BuildInfo:t}=bs(),n={};Te()?n.iosBundleId=t.packageName:be()?n.androidPackageName=t.packageName:_(e,"operation-not-supported-in-this-environment"),await xi(e,n)}function Ss(e){const{cordova:t}=bs();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Se()?"_blank":"_system","location=yes"),n(i)}))}))}async function As(e,t,n){const{cordova:r}=bs();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(w(e,"redirect-cancelled-by-user"))}),Is))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),be()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function Cs(e){var t,n,r,i,s,o,a,c,u,l;const h=bs();T("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),T("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),T("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ks(e){const t=xs(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function xs(e){if(A(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=20;class Os extends Si{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function Ds(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:Ms(),postBody:null,tenantId:e.tenantId,error:w(e,"no-auth-event")}}function Rs(e,t){return Fs()._set(Vs(e),t)}async function Ps(e){const t=await Fs()._get(Vs(e));return t&&await Fs()._remove(Vs(e)),t}function Ls(e,t){var n,r;const i=js(t);if(i.includes("/__/auth/callback")){const t=$s(i),s=t["firebaseError"]?Us(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?w(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function Ms(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Ns;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function Fs(){return he(Qn)}function Vs(e){return pe("authEvent",e.config.apiKey,e.name)}function Us(e){try{return JSON.parse(e)}catch(t){return null}}function js(e){const t=$s(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=$s(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=$s(i)["link"];return s||i||r||n||e}function $s(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.I9)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=500;class qs{constructor(){this._redirectPersistence=Xn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ii,this._overrideRedirectResult=di}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new Os(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){_(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){Cs(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),hi(),await this._originValidation(e);const s=Ds(e,n,r);await Rs(e,s);const o=await Es(e,s,t),a=await Ss(o);return As(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ts(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=bs(),s=setTimeout((async()=>{await Ps(e),t.onEvent(Ks())}),Bs),o=async n=>{clearTimeout(s);const r=await Ps(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=Ls(r,n["url"])),t.onEvent(i||Ks())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;bs().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const zs=qs;function Ks(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:w("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(e,t){Ge(e)._logFramework(t)}var Ws="@firebase/auth-compat",Hs="0.4.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qs=1e3;function Ys(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function Xs(){return"http:"===Ys()||"https:"===Ys()}function Js(e=(0,i.ZQ)()){return!("file:"!==Ys()&&"ionic:"!==Ys()&&"capacitor:"!==Ys()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Zs(){return(0,i.lV)()||(0,i.Ll)()}function eo(){return(0,i.lT)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function to(e=(0,i.ZQ)()){return/Edge\/\d+/.test(e)}function no(e=(0,i.ZQ)()){return eo()||to(e)}function ro(){try{const e=self.localStorage,t=er();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!no()||(0,i.zW)()}catch(e){return io()&&(0,i.zW)()}return!1}function io(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function so(){return(Xs()||(0,i.sr)()||Js())&&!Zs()&&ro()&&!io()}function oo(){return Js()&&"undefined"!==typeof document}async function ao(){return!!oo()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),Qs);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function co(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo={LOCAL:"local",NONE:"none",SESSION:"session"},lo=T,ho="persistence";function fo(e,t){lo(Object.values(uo).includes(t),e,"invalid-persistence-type"),(0,i.lV)()?lo(t!==uo.SESSION,e,"unsupported-persistence-type"):(0,i.Ll)()?lo(t===uo.NONE,e,"unsupported-persistence-type"):io()?lo(t===uo.NONE||t===uo.LOCAL&&(0,i.zW)(),e,"unsupported-persistence-type"):lo(t===uo.NONE||ro(),e,"unsupported-persistence-type")}async function po(e){await e._initializationPromise;const t=mo(),n=pe(ho,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function go(e,t){const n=mo();if(!n)return[];const r=pe(ho,e,t),i=n.getItem(r);switch(i){case uo.NONE:return[fe];case uo.LOCAL:return[Ir,Xn];case uo.SESSION:return[Xn];default:return[]}}function mo(){var e;try{return(null===(e=co())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=T;class vo{constructor(){this.browserResolver=he(as),this.cordovaResolver=he(zs),this.underlyingResolver=null,this._redirectPersistence=Xn,this._completeRedirectFn=Ii,this._overrideRedirectResult=di}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return oo()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return yo(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await ao();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(e){return e.unwrap()}function wo(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(e){return Eo(e)}function Io(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===t||void 0===t?void 0:t.code)){const n=t;n.resolver=new Ao(e,Pn(e,t))}else if(r){const e=Eo(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function Eo(e){const{_tokenResponse:t}=e instanceof i.g?e.customData:e;if(!t)return null;if(!(e instanceof i.g)&&"temporaryProof"in t&&"phoneNumber"in t)return Hr.credentialFromResult(e);const n=t.providerId;if(!n||n===u.PASSWORD)return null;let r;switch(n){case u.GOOGLE:r=Nt;break;case u.FACEBOOK:r=xt;break;case u.GITHUB:r=Ot;break;case u.TWITTER:r=Mt;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?Rt._create(n,o):gt._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new kt(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof i.g?r.credentialFromError(e):r.credentialFromResult(e)}function To(e,t){return t.catch((t=>{throw t instanceof i.g&&Io(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:bo(e),additionalUserInfo:On(e),user:Co.getOrCreate(n)}}))}async function So(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>To(e,n.confirm(t))}}class Ao{constructor(e,t){this.resolver=t,this.auth=wo(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return To(_o(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this._delegate=e,this.multiFactor=Bn(e)}static getOrCreate(e){return Co.USER_MAP.has(e)||Co.USER_MAP.set(e,new Co(e)),Co.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return To(this.auth,Yt(this._delegate,e))}async linkWithPhoneNumber(e,t){return So(this.auth,zr(this._delegate,e,t))}async linkWithPopup(e){return To(this.auth,ii(this._delegate,e,vo))}async linkWithRedirect(e){return await po(Ge(this.auth)),_i(this._delegate,e,vo)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return To(this.auth,Xt(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return So(this.auth,Kr(this._delegate,e,t))}reauthenticateWithPopup(e){return To(this.auth,ri(this._delegate,e,vo))}async reauthenticateWithRedirect(e){return await po(Ge(this.auth)),yi(this._delegate,e,vo)}sendEmailVerification(e){return yn(this._delegate,e)}async unlink(e){return await zt(this._delegate,e),this}updateEmail(e){return bn(this._delegate,e)}updatePassword(e){return In(this._delegate,e)}updatePhoneNumber(e){return Wr(this._delegate,e)}updateProfile(e){return wn(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return vn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Co.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ko=T;class xo{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;ko(n,"invalid-api-key",{appName:e.name}),ko(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?vo:void 0;this._delegate=t.initialize({options:{persistence:Oo(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(f),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Co.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Qe(this._delegate,e,t)}applyActionCode(e){return an(this._delegate,e)}checkActionCode(e){return cn(this._delegate,e)}confirmPasswordReset(e,t){return on(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return To(this._delegate,ln(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return mn(this._delegate,e)}isSignInWithEmailLink(e){return fn(this._delegate,e)}async getRedirectResult(){ko(so(),this._delegate,"operation-not-supported-in-this-environment");const e=await bi(this._delegate,vo);return e?To(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Gs(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=No(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=No(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return dn(this._delegate,e,t)}sendPasswordResetEmail(e,t){return sn(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(fo(this._delegate,e),e){case uo.SESSION:t=Xn;break;case uo.LOCAL:const e=await he(Ir)._isAvailable();t=e?Ir:Qn;break;case uo.NONE:t=fe;break;default:return _("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return To(this._delegate,jt(this._delegate))}signInWithCredential(e){return To(this._delegate,Qt(this._delegate,e))}signInWithCustomToken(e){return To(this._delegate,Zt(this._delegate,e))}signInWithEmailAndPassword(e,t){return To(this._delegate,hn(this._delegate,e,t))}signInWithEmailLink(e,t){return To(this._delegate,pn(this._delegate,e,t))}signInWithPhoneNumber(e,t){return So(this._delegate,qr(this._delegate,e,t))}async signInWithPopup(e){return ko(so(),this._delegate,"operation-not-supported-in-this-environment"),To(this._delegate,ni(this._delegate,e,vo))}async signInWithRedirect(e){return ko(so(),this._delegate,"operation-not-supported-in-this-environment"),await po(this._delegate),gi(this._delegate,e,vo)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return un(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function No(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&Co.getOrCreate(e));return{next:s,error:t,complete:n}}function Oo(e,t){const n=go(e,t);if("undefined"===typeof self||n.includes(Ir)||n.push(Ir),"undefined"!==typeof window)for(const r of[Qn,Xn])n.includes(r)||n.push(r);return n.includes(fe)||n.push(fe),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xo.Persistence=uo;class Do{constructor(){this.providerId="phone",this._delegate=new Hr(_o(r.A.auth()))}static credential(e,t){return Hr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Do.PHONE_SIGN_IN_METHOD=Hr.PHONE_SIGN_IN_METHOD,Do.PROVIDER_ID=Hr.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ro=T;class Po{constructor(e,t,n=r.A.app()){var i;Ro(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new jr(n.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="auth-compat";function Mo(e){e.INTERNAL.registerComponent(new c.uA(Lo,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new xo(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:St,FacebookAuthProvider:xt,GithubAuthProvider:Ot,GoogleAuthProvider:Nt,OAuthProvider:kt,SAMLAuthProvider:Lt,PhoneAuthProvider:Do,PhoneMultiFactorGenerator:ls,RecaptchaVerifier:Po,TwitterAuthProvider:Mt,Auth:xo,AuthCredential:et,Error:i.g}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(Ws,Hs)}Mo(r.A)},1248:function(e,t,n){n(7043),n(9850),n(9790),n(4337),n(5958),n(9659);var r,i=n(3007),s=(n(5724),n(6409),n(4813)),o=n(1640),a=n(9951),c=n(7736),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={},h=h||{},d=u||self;function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,m)&&e[m]||(e[m]=++y)}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(e,t,n){return e.call.apply(e.bind,arguments)}function _(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function w(e,t,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:_,w.apply(null,arguments)}function b(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==T)||g(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function A(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function C(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function k(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",(()=>{}),t),d.removeEventListener("test",(()=>{}),t)}catch(n){}return e}();function N(e){return/^[\s\xa0]*$/.test(e)}function O(){var e=d.navigator;return e&&(e=e.userAgent)?e:""}function D(e){return-1!=O().indexOf(e)}function R(e){return R[" "](e),e}function P(e,t){var n=br;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}R[" "]=function(){};var L,M,F=D("Opera"),V=D("Trident")||D("MSIE"),U=D("Edge"),j=U||V,$=D("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),B=-1!=O().toLowerCase().indexOf("webkit")&&!D("Edge");function q(){var e=d.document;return e?e.documentMode:void 0}e:{var z="",K=function(){var e=O();return $?/rv:([^\);]+)(\)|;)/.exec(e):U?/Edge\/([\d\.]+)/.exec(e):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):B?/WebKit\/(\S+)/.exec(e):F?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(K&&(z=K?K[1]:""),V){var G=q();if(null!=G&&G>parseFloat(z)){L=String(G);break e}}L=z}if(d.document&&V){var W=q();M=W||(parseInt(L,10)||void 0)}else M=void 0;var H=M;function Q(e,t){if(k.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($){e:{try{R(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Y[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Q.$.h.call(this)}}I(Q,k);var Y={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),J=0;function Z(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++J,this.fa=this.ia=!1}function ee(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function te(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ne(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function re(e){const t={};for(const n in e)t[n]=e[n];return t}const ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function se(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ie.length;t++)n=ie[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function oe(e){this.src=e,this.g={},this.h=0}function ae(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=S(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ee(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ce(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}oe.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ce(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Z(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var ue="closure_lm_"+(1e6*Math.random()|0),le={};function he(e,t,n,r,i){if(r&&r.once)return pe(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)he(e,t[s],n,r,i);return null}return n=be(n),e&&e[X]?e.O(t,n,p(r)?!!r.capture:!!r,i):de(e,t,n,!1,r,i)}function de(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=_e(e);if(a||(e[ue]=a=new oe(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=fe(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)x||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ye(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function fe(){function e(n){return t.call(e.src,e.listener,n)}const t=ve;return e}function pe(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);return null}return n=be(n),e&&e[X]?e.P(t,n,p(r)?!!r.capture:!!r,i):de(e,t,n,!0,r,i)}function ge(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ge(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=be(n),e&&e[X]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ce(s,n,r,i),-1<n&&(ee(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=_e(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ce(t,n,r,i)),(n=-1<e?t[e]:null)&&me(n))}function me(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[X])ae(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ye(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=_e(t))?(ae(n,e),0==n.h&&(n.src=null,t[ue]=null)):ee(e)}}}function ye(e){return e in le?le[e]:le[e]="on"+e}function ve(e,t){if(e.fa)e=!0;else{t=new Q(t,this);var n=e.listener,r=e.la||e.src;e.ia&&me(e),e=n.call(r,t)}return e}function _e(e){return e=e[ue],e instanceof oe?e:null}var we="__closure_events_fn_"+(1e9*Math.random()>>>0);function be(e){return"function"===typeof e?e:(e[we]||(e[we]=function(t){return e.handleEvent(t)}),e[we])}function Ie(){E.call(this),this.i=new oe(this),this.S=this,this.J=null}function Ee(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new k(t,e);else if(t instanceof k)t.target=t.target||e;else{var i=t;t=new k(r,e),se(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Te(o,r,!0,t)&&i}if(o=t.g=e,i=Te(o,r,!0,t)&&i,i=Te(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Te(o,r,!1,t)&&i}function Te(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ae(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}I(Ie,E),Ie.prototype[X]=!0,Ie.prototype.removeEventListener=function(e,t,n,r){ge(this,e,t,n,r)},Ie.prototype.N=function(){if(Ie.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ee(n[r]);delete t.g[e],t.h--}}this.J=null},Ie.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ie.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Se=d.JSON.stringify;class Ae{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ce(){var e=Le;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ke{constructor(){this.h=this.g=null}add(e,t){const n=xe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var xe=new Ae((()=>new Ne),(e=>e.reset()));class Ne{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Oe(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function De(e){d.setTimeout((()=>{throw e}),0)}let Re,Pe=!1,Le=new ke,Me=()=>{const e=d.Promise.resolve(void 0);Re=()=>{e.then(Fe)}};var Fe=()=>{for(var e;e=Ce();){try{e.h.call(e.g)}catch(n){De(n)}var t=xe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Pe=!1};function Ve(e,t){Ie.call(this),this.h=e||1,this.g=t||d,this.j=w(this.qb,this),this.l=Date.now()}function Ue(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function je(e,t,n){if("function"===typeof e)n&&(e=w(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=w(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function $e(e){e.g=je((()=>{e.g=null,e.i&&(e.i=!1,$e(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}I(Ve,Ie),r=Ve.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ee(this,"tick"),this.ga&&(Ue(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Ve.$.N.call(this),Ue(this),delete this.g};class Be extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$e(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qe(e){E.call(this),this.h=e,this.g={}}I(qe,E);var ze=[];function Ke(e,t,n,r){Array.isArray(n)||(n&&(ze[0]=n.toString()),n=ze);for(var i=0;i<n.length;i++){var s=he(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ge(e){te(e.g,(function(e,t){this.g.hasOwnProperty(t)&&me(e)}),e),e.g={}}function We(){this.g=!0}function He(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Qe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ye(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Je(e,n)+(r?" "+r:"")}))}function Xe(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Je(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Se(n)}catch(a){return t}}qe.prototype.N=function(){qe.$.N.call(this),Ge(this)},qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},We.prototype.Ea=function(){this.g=!1},We.prototype.info=function(){};var Ze={},et=null;function tt(){return et=et||new Ie}function nt(e){k.call(this,Ze.Ta,e)}function rt(e){const t=tt();Ee(t,new nt(t))}function it(e,t){k.call(this,Ze.STAT_EVENT,e),this.stat=t}function st(e){const t=tt();Ee(t,new it(t,e))}function ot(e,t){k.call(this,Ze.Ua,e),this.size=t}function at(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}Ze.Ta="serverreachability",I(nt,k),Ze.STAT_EVENT="statevent",I(it,k),Ze.Ua="timingevent",I(ot,k);var ct={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ut={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function lt(){}function ht(e){return e.h||(e.h=e.i())}function dt(){}lt.prototype.h=null;var ft,pt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function gt(){k.call(this,"d")}function mt(){k.call(this,"c")}function yt(){}function vt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new qe(this),this.P=wt,e=j?125:void 0,this.V=new Ve(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new _t}function _t(){this.i=null,this.g="",this.h=!1}I(gt,k),I(mt,k),I(yt,lt),yt.prototype.g=function(){return new XMLHttpRequest},yt.prototype.i=function(){return{}},ft=new yt;var wt=45e3,bt={},It={};function Et(e,t,n){e.L=1,e.v=Kt(jt(t)),e.s=n,e.S=!0,Tt(e,null)}function Tt(e,t){e.G=Date.now(),kt(e),e.A=jt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),sn(n.i,"t",r),e.C=0,n=e.l.J,e.h=new _t,e.g=lr(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Be(w(e.Pa,e,e.g),e.O)),Ke(e.U,e.g,"readystatechange",e.nb),t=e.I?re(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),rt(),He(e.j,e.u,e.A,e.m,e.W,e.s)}function St(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function At(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=Ct(e,n),r==It){4==t&&(e.o=4,st(14),i=!1),Ye(e.j,e.m,null,"[Incomplete Response]");break}if(r==bt){e.o=4,st(15),Ye(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ye(e.j,e.m,r,null),Rt(e,r)}St(e)&&r!=It&&r!=bt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,st(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nr(t),t.M=!0,st(11))):(Ye(e.j,e.m,n,"[Invalid Chunked Response]"),Dt(e),Ot(e))}function Ct(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?It:(n=Number(t.substring(n,r)),isNaN(n)?bt:(r+=1,r+n>t.length?It:(t=t.slice(r,r+n),e.C=r+n,t)))}function kt(e){e.Y=Date.now()+e.P,xt(e,e.P)}function xt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=at(w(e.lb,e),t)}function Nt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Ot(e){0==e.l.H||e.J||sr(e.l,e)}function Dt(e){Nt(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Ue(e.V),Ge(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Rt(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||fn(n.i,e)))if(!e.K&&fn(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;ir(n),Wn(n)}tr(n),st(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=at(w(n.ib,n),6e3));if(1>=dn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else ar(n,11)}else if((e.K||n.g==e)&&ir(n),!N(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(pn(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,zt(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=ur(r,r.J?r.pa:null,r.Y),o.K){gn(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Nt(a),kt(a)),r.g=o}else er(r);0<n.j.length&&Qn(n)}else"stop"!=u[0]&&"close"!=u[0]||ar(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ar(n,7):Gn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}rt(4)}catch(u){}}function Pt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Lt(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Mt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Lt(e),r=Pt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=vt.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==Un(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const l=Un(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(3!=l||j||this.g&&(this.h.h||this.g.ja()||jn(this.g)))){this.J||4!=l||7==t||rt(8==t||0>=h?3:2),Nt(this);var n=this.g.da();this.ca=n;t:if(St(this)){var r=jn(this.g);e="";var i=r.length,s=4==Un(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Dt(this),Ot(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Qe(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,st(12),Dt(this),Ot(this);break e}Ye(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rt(this,n)}this.S?(At(this,l,o),j&&this.i&&3==l&&(Ke(this.U,this.V,"tick",this.mb),this.V.start())):(Ye(this.j,this.m,o,null),Rt(this,o)),4==l&&Dt(this),this.i&&!this.J&&(4==l?sr(this.l,this):(this.i=!1,kt(this)))}else $n(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,st(12)):(this.o=0,st(13)),Dt(this),Ot(this)}}}catch(l){}},r.mb=function(){if(this.g){var e=Un(this.g),t=this.g.ja();this.C<t.length&&(Nt(this),At(this,e,t),this.i&&4!=e&&kt(this))}},r.cancel=function(){this.J=!0,Dt(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Xe(this.j,this.A),2!=this.L&&(rt(),st(17)),Dt(this),this.o=2,Ot(this)):xt(this,this.Y-e)};var Ft=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ut(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ut){this.h=e.h,$t(this,e.j),this.s=e.s,this.g=e.g,Bt(this,e.m),this.l=e.l;var t=e.i,n=new en;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),qt(this,n),this.o=e.o}else e&&(t=String(e).match(Ft))?(this.h=!1,$t(this,t[1]||"",!0),this.s=Gt(t[2]||""),this.g=Gt(t[3]||"",!0),Bt(this,t[4]),this.l=Gt(t[5]||"",!0),qt(this,t[6]||"",!0),this.o=Gt(t[7]||"")):(this.h=!1,this.i=new en(null,this.h))}function jt(e){return new Ut(e)}function $t(e,t,n){e.j=n?Gt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Bt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function qt(e,t,n){t instanceof en?(e.i=t,an(e.i,e.h)):(n||(t=Wt(t,Jt)),e.i=new en(t,e.h))}function zt(e,t,n){e.i.set(t,n)}function Kt(e){return zt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Gt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Wt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Ht),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ht(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Ut.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Wt(t,Qt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Wt(t,Qt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Wt(n,"/"==n.charAt(0)?Xt:Yt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Wt(n,Zt)),e.join("")};var Qt=/[#\/\?@]/g,Yt=/[#\?:]/g,Xt=/[#\?]/g,Jt=/[#\?@]/g,Zt=/#/g;function en(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tn(e){e.g||(e.g=new Map,e.h=0,e.i&&Vt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function nn(e,t){tn(e),t=on(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function rn(e,t){return tn(e),t=on(e,t),e.g.has(t)}function sn(e,t,n){nn(e,t),0<n.length&&(e.i=null,e.g.set(on(e,t),A(n)),e.h+=n.length)}function on(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function an(e,t){t&&!e.j&&(tn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(nn(this,t),sn(this,n,e))}),e)),e.j=t}r=en.prototype,r.add=function(e,t){tn(this),this.i=null,e=on(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){tn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.ta=function(){tn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){tn(this);let t=[];if("string"===typeof e)rn(this,e)&&(t=t.concat(this.g.get(on(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return tn(this),this.i=null,e=on(this,e),rn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var cn=class{constructor(e,t){this.g=e,this.map=t}};function un(e){this.l=e||ln,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ka&&d.g.Ka()&&d.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ln=10;function hn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function dn(e){return e.h?1:e.g?e.g.size:0}function fn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function pn(e,t){e.g?e.g.add(t):e.h=t}function gn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function mn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return A(e.i)}un.prototype.cancel=function(){if(this.i=mn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var yn=class{stringify(e){return d.JSON.stringify(e,void 0)}parse(e){return d.JSON.parse(e,void 0)}};function vn(){this.g=new yn}function _n(e,t,n){const r=n||"";try{Mt(e,(function(e,n){let i=e;p(e)&&(i=Se(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function wn(e,t){const n=new We;if(d.Image){const r=new Image;r.onload=b(bn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=b(bn,n,r,"TestLoadImage: error",!1,t),r.onabort=b(bn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=b(bn,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function bn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function In(e){this.l=e.fc||null,this.j=e.ob||!1}function En(e,t){Ie.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}I(In,lt),In.prototype.g=function(){return new En(this.l,this.j)},In.prototype.i=function(e){return function(){return e}}({}),I(En,Ie);var Tn=0;function Sn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function An(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Cn(e)}function Cn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=En.prototype,r.open=function(e,t){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Cn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||d).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=Tn},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?An(this):Cn(this),3==this.readyState&&Sn(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,An(this))},r.Ya=function(e){this.g&&(this.response=e,An(this))},r.ka=function(){this.g&&An(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var kn=d.JSON.parse;function xn(e){Ie.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nn,this.L=this.M=!1}I(xn,Ie);var Nn="",On=/^https?$/i,Dn=["POST","PUT"];function Rn(e){return V&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Pn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ln(e),Fn(e)}function Ln(e){e.F||(e.F=!0,Ee(e,"complete"),Ee(e,"error"))}function Mn(e){if(e.h&&"undefined"!=typeof h&&(!e.C[1]||4!=Un(e)||2!=e.da()))if(e.v&&4==Un(e))je(e.La,0,e);else if(Ee(e,"readystatechange"),4==Un(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(Ft)[1]||null;!i&&d.self&&d.self.location&&(i=d.self.location.protocol.slice(0,-1)),r=!On.test(i?i.toLowerCase():"")}n=r}if(n)Ee(e,"complete"),Ee(e,"success");else{e.m=6;try{var s=2<Un(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",Ln(e)}}finally{Fn(e)}}}function Fn(e,t){if(e.g){Vn(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ee(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Vn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function Un(e){return e.g?e.g.readyState:0}function jn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Nn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Xr){return null}}function $n(e){const t={};e=(e.g&&2<=Un(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(N(e[r]))continue;var n=Oe(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}ne(t,(function(e){return e.join(", ")}))}function Bn(e){let t="";return te(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function qn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Bn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):zt(e,t,n))}function zn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kn(e){this.Ga=0,this.j=[],this.l=new We,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zn("baseRetryDelayMs",5e3,e),this.hb=zn("retryDelaySeedMs",1e4,e),this.eb=zn("forwardChannelMaxRetries",2,e),this.xa=zn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new un(e&&e.concurrentRequestLimit),this.Ja=new vn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Gn(e){if(Hn(e),3==e.H){var t=e.W++,n=jt(e.I);if(zt(n,"SID",e.K),zt(n,"RID",t),zt(n,"TYPE","terminate"),Jn(e,n),t=new vt(e,e.l,t),t.L=2,t.v=Kt(jt(n)),n=!1,d.navigator&&d.navigator.sendBeacon)try{n=d.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=lr(t.l,null),t.g.ha(t.v)),t.G=Date.now(),kt(t)}cr(e)}function Wn(e){e.g&&(nr(e),e.g.cancel(),e.g=null)}function Hn(e){Wn(e),e.u&&(d.clearTimeout(e.u),e.u=null),ir(e),e.i.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function Qn(e){if(!hn(e.i)&&!e.m){e.m=!0;var t=e.Na;Re||Me(),Pe||(Re(),Pe=!0),Le.add(t,e),e.C=0}}function Yn(e,t){return!(dn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=at(w(e.Na,e,t),or(e,e.C)),e.C++,!0))}function Xn(e,t){var n;n=t?t.m:e.W++;const r=jt(e.I);zt(r,"SID",e.K),zt(r,"RID",n),zt(r,"AID",e.V),Jn(e,r),e.o&&e.s&&qn(r,e.o,e.s),n=new vt(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Zn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),pn(e.i,n),Et(n,r,t)}function Jn(e,t){e.na&&te(e.na,(function(e,n){zt(t,n,e)})),e.h&&Mt({},(function(e,n){zt(t,n,e)}))}function Zn(e,t,n){n=Math.min(e.j.length,n);var r=e.h?w(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),s=!1;else try{_n(a,e,"req"+n+"_")}catch(ms){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function er(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Re||Me(),Pe||(Re(),Pe=!0),Le.add(t,e),e.A=0}}function tr(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=at(w(e.Ma,e),or(e,e.A)),e.A++,!0)}function nr(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function rr(e){e.g=new vt(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=jt(e.wa);zt(t,"RID","rpc"),zt(t,"SID",e.K),zt(t,"AID",e.V),zt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&zt(t,"TO",e.qa),zt(t,"TYPE","xmlhttp"),Jn(e,t),e.o&&e.s&&qn(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Kt(jt(t)),n.s=null,n.S=!0,Tt(n,e)}function ir(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function sr(e,t){var n=null;if(e.g==t){ir(e),nr(e),e.g=null;var r=2}else{if(!fn(e.i,t))return;n=t.F,gn(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=tt(),Ee(r,new ot(r,n)),Qn(e)}else er(e);else if(i=t.o,3==i||0==i&&0<t.ca||!(1==r&&Yn(e,t)||2==r&&tr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ar(e,5);break;case 4:ar(e,10);break;case 3:ar(e,6);break;default:ar(e,2)}}function or(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ar(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=w(e.pb,e);n||(n=new Ut("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||$t(n,"https"),Kt(n)),wn(n.toString(),r)}else st(2);e.H=0,e.h&&e.h.za(t),cr(e),Hn(e)}function cr(e){if(e.H=0,e.ma=[],e.h){const t=mn(e.i);0==t.length&&0==e.j.length||(C(e.ma,t),C(e.ma,e.j),e.i.i.length=0,A(e.j),e.j.length=0),e.h.ya()}}function ur(e,t,n){var r=n instanceof Ut?jt(n):new Ut(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Bt(r,r.m);else{var i=d.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Ut(null);r&&$t(s,r),t&&(s.g=t),i&&Bt(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&zt(r,n,t),zt(r,"VER",e.ra),Jn(e,r),r}function lr(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new xn(new In({ob:!0})):new xn(e.va),t.Oa(e.J),t}function hr(){}function dr(){if(V&&!(10<=Number(H)))throw Error("Environmental error: no available transport.")}function fr(e,t){Ie.call(this),this.g=new Kn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!N(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!N(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new mr(this)}function pr(e){gt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gr(){mt.call(this),this.status=1}function mr(e){this.g=e}function yr(){this.blockSize=-1}function vr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function _r(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function wr(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}r=xn.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ft.g(),this.C=this.u?ht(this.u):ht(ft),this.g.onreadystatechange=w(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Pn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=d.FormData&&e instanceof d.FormData,!(0<=S(Dn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Vn(this),0<this.B&&((this.L=Rn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.ua,this)):this.A=je(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Pn(this,s)}},r.ua=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ee(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ee(this,"complete"),Ee(this,"abort"),Fn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fn(this,!0)),xn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Mn(this):this.kb())},r.kb=function(){Mn(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Un(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),kn(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Kn.prototype,r.ra=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new vt(this,this.l,e);let s=this.s;if(this.U&&(s?(s=re(s),se(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zn(this,i,t),n=jt(this.I),zt(n,"RID",e),zt(n,"CVER",22),this.F&&zt(n,"X-HTTP-Session-Id",this.F),Jn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Bn(s)))+"&"+t:this.o&&qn(n,this.o,s)),pn(this.i,i),this.bb&&zt(n,"TYPE","init"),this.P?(zt(n,"$req",t),zt(n,"SID","null"),i.aa=!0,Et(i,n,null)):Et(i,n,t),this.H=2}}else 3==this.H&&(e?Xn(this,e):0==this.j.length||hn(this.i)||Xn(this))},r.Ma=function(){if(this.u=null,rr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=at(w(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),Wn(this),rr(this))},r.ib=function(){null!=this.v&&(this.v=null,Wn(this),tr(this),st(19))},r.pb=function(e){e?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=hr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},dr.prototype.g=function(e,t){return new fr(e,t)},I(fr,Ie),fr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;st(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=ur(e,null,e.Y),Qn(e)},fr.prototype.close=function(){Gn(this.g)},fr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Se(e),e=n);t.j.push(new cn(t.fb++,e)),3==t.H&&Qn(t)},fr.prototype.N=function(){this.g.h=null,delete this.j,Gn(this.g),delete this.g,fr.$.N.call(this)},I(pr,gt),I(gr,mt),I(mr,hr),mr.prototype.Ba=function(){Ee(this.g,"a")},mr.prototype.Aa=function(e){Ee(this.g,new pr(e))},mr.prototype.za=function(e){Ee(this.g,new gr)},mr.prototype.ya=function(){Ee(this.g,"b")},I(vr,yr),vr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},vr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)_r(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){_r(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){_r(this,r),i=0;break}}this.h=i,this.i+=t},vr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var br={};function Ir(e){return-128<=e&&128>e?P(e,(function(e){return new wr([0|e],0>e?-1:0)})):new wr([0|e],0>e?-1:0)}function Er(e){if(isNaN(e)||!isFinite(e))return Ar;if(0>e)return Or(Er(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Sr;return new wr(t,0)}function Tr(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Or(Tr(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(t,8)),r=Ar,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Er(Math.pow(t,s)),r=r.R(s).add(Er(o))):(r=r.R(n),r=r.add(Er(o)))}return r}var Sr=4294967296,Ar=Ir(0),Cr=Ir(1),kr=Ir(16777216);function xr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Nr(e){return-1==e.h}function Or(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new wr(n,~e.h).add(Cr)}function Dr(e,t){return e.add(Or(t))}function Rr(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Pr(e,t){this.g=e,this.h=t}function Lr(e,t){if(xr(t))throw Error("division by zero");if(xr(e))return new Pr(Ar,Ar);if(Nr(e))return t=Lr(Or(e),t),new Pr(Or(t.g),Or(t.h));if(Nr(t))return t=Lr(e,Or(t)),new Pr(Or(t.g),t.h);if(30<e.g.length){if(Nr(e)||Nr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Cr,r=t;0>=r.X(e);)n=Mr(n),r=Mr(r);var i=Fr(n,1),s=Fr(r,1);for(r=Fr(r,2),n=Fr(n,2);!xr(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Fr(r,1),n=Fr(n,1)}return t=Dr(e,i.R(t)),new Pr(i,t)}for(i=Ar;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Er(n),o=s.R(t);Nr(o)||0<o.X(e);)n-=r,s=Er(n),o=s.R(t);xr(s)&&(s=Cr),i=i.add(s),e=Dr(e,o)}return new Pr(i,e)}function Mr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new wr(n,e.h)}function Fr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new wr(i,e.h)}r=wr.prototype,r.ea=function(){if(Nr(this))return-Or(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Sr+r)*t,t*=Sr}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(xr(this))return"0";if(Nr(this))return"-"+Or(this).toString(e);for(var t=Er(Math.pow(e,6)),n=this,r="";;){var i=Lr(n,t).g;n=Dr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,xr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=Dr(this,e),Nr(e)?-1:xr(e)?0:1},r.abs=function(){return Nr(this)?Or(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new wr(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(xr(this)||xr(e))return Ar;if(Nr(this))return Nr(e)?Or(this).R(Or(e)):Or(Or(this).R(e));if(Nr(e))return Or(this.R(Or(e)));if(0>this.X(kr)&&0>e.X(kr))return Er(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Rr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Rr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Rr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Rr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new wr(n,0)},r.gb=function(e){return Lr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new wr(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new wr(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new wr(n,this.h^e.h)},dr.prototype.createWebChannel=dr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,ct.NO_ERROR=0,ct.TIMEOUT=8,ct.HTTP_ERROR=6,ut.COMPLETE="complete",dt.EventType=pt,pt.OPEN="a",pt.CLOSE="b",pt.ERROR="c",pt.MESSAGE="d",Ie.prototype.listen=Ie.prototype.O,xn.prototype.listenOnce=xn.prototype.P,xn.prototype.getLastError=xn.prototype.Sa,xn.prototype.getLastErrorCode=xn.prototype.Ia,xn.prototype.getStatus=xn.prototype.da,xn.prototype.getResponseJson=xn.prototype.Wa,xn.prototype.getResponseText=xn.prototype.ja,xn.prototype.send=xn.prototype.ha,xn.prototype.setWithCredentials=xn.prototype.Oa,vr.prototype.digest=vr.prototype.l,vr.prototype.reset=vr.prototype.reset,vr.prototype.update=vr.prototype.j,wr.prototype.add=wr.prototype.add,wr.prototype.multiply=wr.prototype.R,wr.prototype.modulo=wr.prototype.gb,wr.prototype.compare=wr.prototype.X,wr.prototype.toNumber=wr.prototype.ea,wr.prototype.toString=wr.prototype.toString,wr.prototype.getBits=wr.prototype.D,wr.fromNumber=Er,wr.fromString=Tr;var Vr=l.createWebChannelTransport=function(){return new dr},Ur=l.getStatEventTarget=function(){return tt()},jr=l.ErrorCode=ct,$r=l.EventType=ut,Br=l.Event=Ze,qr=l.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},zr=l.FetchXmlHttpFactory=In,Kr=l.WebChannel=dt,Gr=l.XhrIo=xn,Wr=l.Md5=vr,Hr=l.Integer=wr;const Qr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Yr.UNAUTHENTICATED=new Yr(null),Yr.GOOGLE_CREDENTIALS=new Yr("google-credentials-uid"),Yr.FIRST_PARTY=new Yr("first-party-uid"),Yr.MOCK_USER=new Yr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xr="10.1.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new a.Vy("@firebase/firestore");function Zr(){return Jr.logLevel}function ei(e){Jr.setLogLevel(e)}function ti(e,...t){if(Jr.logLevel<=a.$b.DEBUG){const n=t.map(ii);Jr.debug(`Firestore (${Xr}): ${e}`,...n)}}function ni(e,...t){if(Jr.logLevel<=a.$b.ERROR){const n=t.map(ii);Jr.error(`Firestore (${Xr}): ${e}`,...n)}}function ri(e,...t){if(Jr.logLevel<=a.$b.WARN){const n=t.map(ii);Jr.warn(`Firestore (${Xr}): ${e}`,...n)}}function ii(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e="Unexpected state"){const t=`FIRESTORE (${Xr}) INTERNAL ASSERTION FAILED: `+e;throw ni(t),new Error(t)}function oi(e,t){e||si()}function ai(e,t){e||si()}function ci(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class li extends c.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Yr.UNAUTHENTICATED)))}shutdown(){}}class pi{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class gi{constructor(e){this.t=e,this.currentUser=Yr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new hi;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hi,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{ti("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ti("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hi)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(ti("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(oi("string"==typeof t.accessToken),new di(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oi(null===e||"string"==typeof e),new Yr(e)}}class mi{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Yr.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yi{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new mi(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Yr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _i{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&ti("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,ti("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{ti("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):ti("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(oi("string"==typeof e.token),this.R=e.token,new vi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=wi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Ii(e,t){return e<t?-1:e>t?1:0}function Ei(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function Ti(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new li(ui.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new li(ui.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new li(ui.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new li(ui.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Si.fromMillis(Date.now())}static fromDate(e){return Si.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Si(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ii(this.nanoseconds,e.nanoseconds):Ii(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ai(e)}static min(){return new Ai(new Si(0,0))}static max(){return new Ai(new Si(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,n){void 0===t?t=0:t>e.length&&si(),void 0===n?n=e.length-t:n>e.length-t&&si(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ci.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ki extends Ci{construct(e,t,n){return new ki(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new li(ui.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ki(t)}static emptyPath(){return new ki([])}}const xi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ni extends Ci{construct(e,t,n){return new Ni(e,t,n)}static isValidIdentifier(e){return xi.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ni.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ni(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new li(ui.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new li(ui.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new li(ui.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new li(ui.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ni(t)}static emptyPath(){return new Ni([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.path=e}static fromPath(e){return new Oi(ki.fromString(e))}static fromName(e){return new Oi(ki.fromString(e).popFirst(5))}static empty(){return new Oi(ki.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ki.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ki.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Oi(new ki(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Ri(e){return e.fields.find((e=>2===e.kind))}function Pi(e){return e.fields.filter((e=>2!==e.kind))}Di.UNKNOWN_ID=-1;class Li{constructor(e,t){this.fieldPath=e,this.kind=t}}class Mi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Mi(0,Ui.min())}}function Fi(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ai.fromTimestamp(1e9===r?new Si(n+1,0):new Si(n,r));return new Ui(i,Oi.empty(),t)}function Vi(e){return new Ui(e.readTime,e.key,-1)}class Ui{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ui(Ai.min(),Oi.empty(),-1)}static max(){return new Ui(Ai.max(),Oi.empty(),-1)}}function ji(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Oi.comparator(e.documentKey,t.documentKey),0!==n?n:Ii(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const $i="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(e){if(e.code!==ui.FAILED_PRECONDITION||e.message!==$i)throw e;ti("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&si(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new zi(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof zi?t:zi.resolve(t)}catch(e){return zi.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):zi.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):zi.reject(t)}static resolve(e){return new zi(((t,n)=>{t(e)}))}static reject(e){return new zi(((t,n)=>{n(e)}))}static waitFor(e){return new zi(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=zi.resolve(!1);for(const n of e)t=t.next((e=>e?zi.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new zi(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new zi(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new hi,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new Hi(e,t.error)):this.m.resolve()},this.transaction.onerror=t=>{const n=Zi(t.target.error);this.m.reject(new Hi(e,n))}}static open(e,t,n,r){try{return new Ki(t,e.transaction(r,n))}catch(e){throw new Hi(t,e)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(ti("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Yi(t)}}class Gi{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===Gi.D((0,c.ZQ)())&&ni("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return ti("SimpleDb","Removing database:",e),Xi(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!(0,c.zW)())return!1;if(Gi.C())return!0;const e=(0,c.ZQ)(),t=Gi.D(e),n=0<t&&t<10,r=Gi.F(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/"})||void 0===e?void 0:e.M)}static O(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static F(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async N(e){return this.db||(ti("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Hi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new li(ui.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new li(ui.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Hi(e,r))},r.onupgradeneeded=e=>{ti("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.S.B(t,r.transaction,e.oldVersion,this.version).next((()=>{ti("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.N(e);const t=Ki.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.p(),e))).catch((e=>(t.abort(e),zi.reject(e)))).toPromise();return s.catch((()=>{})),await t.g,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(ti("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Wi{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return Xi(this.q.delete())}}class Hi extends li{constructor(e,t){super(ui.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Qi(e){return"IndexedDbTransactionError"===e.name}class Yi{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(ti("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(ti("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Xi(n)}add(e){return ti("SimpleDb","ADD",this.store.name,e,e),Xi(this.store.add(e))}get(e){return Xi(this.store.get(e)).next((t=>(void 0===t&&(t=null),ti("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return ti("SimpleDb","DELETE",this.store.name,e),Xi(this.store.delete(e))}count(){return ti("SimpleDb","COUNT",this.store.name),Xi(this.store.count())}G(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.j(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new zi(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new zi(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}J(e,t){ti("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.j(r,((e,t,n)=>n.delete()))}Z(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.j(r,t)}X(e){const t=this.cursor({});return new zi(((n,r)=>{t.onerror=e=>{const t=Zi(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}j(e,t){const n=[];return new zi(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Wi(i),o=t(i.primaryKey,i.value,s);if(o instanceof zi){const e=o.catch((e=>(s.done(),zi.reject(e))));n.push(e)}s.isDone?r():null===s.U?i.continue():i.continue(s.U)}})).next((()=>zi.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Xi(e){return new zi(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Zi(e.target.error);n(t)}}))}let Ji=!1;function Zi(e){const t=Gi.D((0,c.ZQ)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new li("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ji||(Ji=!0,setTimeout((()=>{throw e}),0)),e}}return e}class es{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}te(e){ti("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{ti("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(e){Qi(e)?ti("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await qi(e)}await this.te(6e4)}))}}class ts{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.re(t,e)))}re(e,t){const n=new Set;let r=t,i=!0;return zi.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return ti("IndexBackiller",`Processing collection: ${t}`),this.ie(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}ie(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.se(r,n))).next((n=>(ti("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}se(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=Vi(t);ji(r,n)>0&&(n=r)})),new Ui(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}function rs(e){return null==e}function is(e){return 0===e&&1/e==-1/0}function ss(e){return"number"==typeof e&&Number.isInteger(e)&&!is(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=cs(t)),t=as(e.get(n),t);return cs(t)}function as(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function cs(e){return e+""}function us(e){const t=e.length;if(oi(t>=2),2===t)return oi(""===e.charAt(0)&&""===e.charAt(1)),ki.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&si(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:si()}s=t+2}return new ki(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ns.ae=-1;const ls=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(e,t){return[e,os(t)]}function ds(e,t,n){return[e,os(t),n]}const fs={},ps=["prefixPath","collectionGroup","readTime","documentId"],gs=["prefixPath","collectionGroup","documentId"],ms=["collectionGroup","readTime","prefixPath","documentId"],ys=["canonicalId","targetId"],vs=["targetId","path"],_s=["path","targetId"],ws=["collectionId","parent"],bs=["indexId","uid"],Is=["uid","sequenceNumber"],Es=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ts=["indexId","uid","orderedDocumentKey"],Ss=["userId","collectionPath","documentId"],As=["userId","collectionPath","largestBatchId"],Cs=["userId","collectionGroup","largestBatchId"],ks=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xs=[...ks,"documentOverlays"],Ns=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Os=Ns,Ds=[...Os,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends Bi{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function Ps(e,t){const n=ci(e);return Gi.O(n.ue,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ms(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Fs(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t){this.comparator=e,this.root=t||js.EMPTY}insert(e,t){return new Vs(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,js.BLACK,null,null))}remove(e){return new Vs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,js.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Us(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Us(this.root,e,this.comparator,!1)}getReverseIterator(){return new Us(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Us(this.root,e,this.comparator,!0)}}class Us{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class js{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:js.RED,this.left=null!=r?r:js.EMPTY,this.right=null!=i?i:js.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new js(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return js.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return js.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,js.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,js.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw si();if(this.right.isRed())throw si();const e=this.left.check();if(e!==this.right.check())throw si();return e+(this.isRed()?0:1)}}js.EMPTY=null,js.RED=!0,js.BLACK=!1,js.EMPTY=new class{constructor(){this.size=0}get key(){throw si()}get value(){throw si()}get color(){throw si()}get left(){throw si()}get right(){throw si()}copy(e,t,n,r,i){return this}insert(e,t,n){return new js(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s{constructor(e){this.comparator=e,this.data=new Vs(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bs(this.data.getIterator())}getIteratorFrom(e){return new Bs(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof $s))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new $s(this.comparator);return t.data=e,t}}class Bs{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function qs(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.fields=e,e.sort(Ni.comparator)}static empty(){return new zs([])}unionWith(e){let t=new $s(Ni.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new zs(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ei(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ks("Invalid base64 string: "+e):e}}(e);return new Ws(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ws(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ii(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ws.EMPTY_BYTE_STRING=new Ws("");const Hs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qs(e){if(oi(!!e),"string"==typeof e){let t=0;const n=Hs.exec(e);if(oi(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ys(e.seconds),nanos:Ys(e.nanos)}}function Ys(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Xs(e){return"string"==typeof e?Ws.fromBase64String(e):Ws.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Zs(e){const t=e.mapValue.fields.__previous_value__;return Js(t)?Zs(t):t}function eo(e){const t=Qs(e.mapValue.fields.__local_write_time__.timestampValue);return new Si(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class no{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new no("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof no&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},io={nullValue:"NULL_VALUE"};function so(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Js(e)?4:wo(e)?9007199254740991:10:si()}function oo(e,t){if(e===t)return!0;const n=so(e);if(n!==so(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eo(e).isEqual(eo(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Qs(e.timestampValue),r=Qs(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Xs(e.bytesValue).isEqual(Xs(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ys(e.geoPointValue.latitude)===Ys(t.geoPointValue.latitude)&&Ys(e.geoPointValue.longitude)===Ys(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ys(e.integerValue)===Ys(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ys(e.doubleValue),r=Ys(t.doubleValue);return n===r?is(n)===is(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ei(e.arrayValue.values||[],t.arrayValue.values||[],oo);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ls(n)!==Ls(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!oo(n[i],r[i])))return!1;return!0}(e,t);default:return si()}}function ao(e,t){return void 0!==(e.values||[]).find((e=>oo(e,t)))}function co(e,t){if(e===t)return 0;const n=so(e),r=so(t);if(n!==r)return Ii(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ii(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ys(e.integerValue||e.doubleValue),r=Ys(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return uo(e.timestampValue,t.timestampValue);case 4:return uo(eo(e),eo(t));case 5:return Ii(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Xs(e),r=Xs(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Ii(n[i],r[i]);if(0!==e)return e}return Ii(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ii(Ys(e.latitude),Ys(t.latitude));return 0!==n?n:Ii(Ys(e.longitude),Ys(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=co(n[i],r[i]);if(e)return e}return Ii(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ro.mapValue&&t===ro.mapValue)return 0;if(e===ro.mapValue)return 1;if(t===ro.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Ii(r[o],s[o]);if(0!==e)return e;const t=co(n[r[o]],i[s[o]]);if(0!==t)return t}return Ii(r.length,s.length)}(e.mapValue,t.mapValue);default:throw si()}}function uo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ii(e,t);const n=Qs(e),r=Qs(t),i=Ii(n.seconds,r.seconds);return 0!==i?i:Ii(n.nanos,r.nanos)}function lo(e){return ho(e)}function ho(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Qs(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Xs(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return Oi.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ho(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ho(e.fields[i])}`;return n+"}"}(e.mapValue):si()}function fo(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function po(e){return!!e&&"integerValue"in e}function go(e){return!!e&&"arrayValue"in e}function mo(e){return!!e&&"nullValue"in e}function yo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function vo(e){return!!e&&"mapValue"in e}function _o(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ms(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=_o(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_o(e.arrayValue.values[n]);return t}return Object.assign({},e)}function wo(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function bo(e){return"nullValue"in e?io:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?fo(no.empty(),Oi.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:si()}function Io(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?fo(no.empty(),Oi.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?ro:si()}function Eo(e,t){const n=co(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function To(e,t){const n=co(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.value=e}static empty(){return new So({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!vo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_o(t)}setAll(e){let t=Ni.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=_o(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());vo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return oo(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];vo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ms(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new So(_o(this.value))}}function Ao(e){const t=[];return Ms(e.fields,((e,n)=>{const r=new Ni([e]);if(vo(n)){const e=Ao(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new zs(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Co{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Co(e,0,Ai.min(),Ai.min(),Ai.min(),So.empty(),0)}static newFoundDocument(e,t,n,r){return new Co(e,1,t,Ai.min(),n,r,0)}static newNoDocument(e,t){return new Co(e,2,t,Ai.min(),Ai.min(),So.empty(),0)}static newUnknownDocument(e,t){return new Co(e,3,t,Ai.min(),Ai.min(),So.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ai.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=So.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=So.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ai.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Co&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Co(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t){this.position=e,this.inclusive=t}}function xo(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Oi.comparator(Oi.fromName(o.referenceValue),n.key):co(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function No(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!oo(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t="asc"){this.field=e,this.dir=t}}function Do(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{}class Po extends Ro{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new zo(e,t,n):"array-contains"===t?new Ho(e,n):"in"===t?new Qo(e,n):"not-in"===t?new Yo(e,n):"array-contains-any"===t?new Xo(e,n):new Po(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ko(e,n):new Go(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(co(t,this.value)):null!==t&&so(this.value)===so(t)&&this.matchesComparison(co(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return si()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Lo extends Ro{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Lo(e,t)}matches(e){return Mo(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le((e=>e.isInequality()));return null!==e?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Mo(e){return"and"===e.op}function Fo(e){return"or"===e.op}function Vo(e){return Uo(e)&&Mo(e)}function Uo(e){for(const t of e.filters)if(t instanceof Lo)return!1;return!0}function jo(e){if(e instanceof Po)return e.field.canonicalString()+e.op.toString()+lo(e.value);if(Vo(e))return e.filters.map((e=>jo(e))).join(",");{const t=e.filters.map((e=>jo(e))).join(",");return`${e.op}(${t})`}}function $o(e,t){return e instanceof Po?function(e,t){return t instanceof Po&&e.op===t.op&&e.field.isEqual(t.field)&&oo(e.value,t.value)}(e,t):e instanceof Lo?function(e,t){return t instanceof Lo&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&$o(n,t.filters[r])),!0)}(e,t):void si()}function Bo(e,t){const n=e.filters.concat(t);return Lo.create(n,e.op)}function qo(e){return e instanceof Po?function(e){return`${e.field.canonicalString()} ${e.op} ${lo(e.value)}`}(e):e instanceof Lo?function(e){return e.op.toString()+" {"+e.getFilters().map(qo).join(" ,")+"}"}(e):"Filter"}class zo extends Po{constructor(e,t,n){super(e,t,n),this.key=Oi.fromName(n.referenceValue)}matches(e){const t=Oi.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ko extends Po{constructor(e,t){super(e,"in",t),this.keys=Wo("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Go extends Po{constructor(e,t){super(e,"not-in",t),this.keys=Wo("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Wo(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Oi.fromName(e.referenceValue)))}class Ho extends Po{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return go(t)&&ao(t.arrayValue,this.value)}}class Qo extends Po{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ao(this.value.arrayValue,t)}}class Yo extends Po{constructor(e,t){super(e,"not-in",t)}matches(e){if(ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ao(this.value.arrayValue,t)}}class Xo extends Po{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!go(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ao(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.he=null}}function Zo(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Jo(e,t,n,r,i,s,o)}function ea(e){const t=ci(e);if(null===t.he){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>jo(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),rs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>lo(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>lo(e))).join(",")),t.he=e}return t.he}function ta(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Do(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!$o(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!No(e.startAt,t.startAt)&&No(e.endAt,t.endAt)}function na(e){return Oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function ra(e,t){return e.filters.filter((e=>e instanceof Po&&e.field.isEqual(t)))}function ia(e,t,n){let r=io,i=!0;for(const s of ra(e,t)){let e=io,t=!0;switch(s.op){case"<":case"<=":e=bo(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=io}Eo({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Eo({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function sa(e,t,n){let r=ro,i=!0;for(const s of ra(e,t)){let e=ro,t=!0;switch(s.op){case">=":case">":e=Io(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=ro}To({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];To({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function aa(e,t,n,r,i,s,o,a){return new oa(e,t,n,r,i,s,o,a)}function ca(e){return new oa(e)}function ua(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function la(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ha(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function da(e){return null!==e.collectionGroup}function fa(e){const t=ci(e);if(null===t.Pe){t.Pe=[];const e=ha(t),n=la(t);if(null!==e&&null===n)e.isKeyField()||t.Pe.push(new Oo(e)),t.Pe.push(new Oo(Ni.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.Pe.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Oo(Ni.keyField(),e))}}}return t.Pe}function pa(e){const t=ci(e);if(!t.Ie)if("F"===t.limitType)t.Ie=Zo(t.path,t.collectionGroup,fa(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of fa(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Oo(i.field,t))}const n=t.endAt?new ko(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ko(t.startAt.position,t.startAt.inclusive):null;t.Ie=Zo(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.Ie}function ga(e,t){t.getFirstInequalityField(),ha(e);const n=e.filters.concat([t]);return new oa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ma(e,t,n){return new oa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ya(e,t){return ta(pa(e),pa(t))&&e.limitType===t.limitType}function va(e){return`${ea(pa(e))}|lt:${e.limitType}`}function _a(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>qo(e))).join(", ")}]`),rs(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>lo(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>lo(e))).join(",")),`Target(${t})`}(pa(e))}; limitType=${e.limitType})`}function wa(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Oi.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of fa(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=xo(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,fa(e),t))&&!(e.endAt&&!function(e,t,n){const r=xo(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,fa(e),t))}(e,t)}function ba(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ia(e){return(t,n)=>{let r=!1;for(const i of fa(e)){const e=Ea(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Ea(e,t,n){const r=e.field.isKeyField()?Oi.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?co(r,i):si()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return si()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ms(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Fs(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new Vs(Oi.comparator);function Aa(){return Sa}const Ca=new Vs(Oi.comparator);function ka(...e){let t=Ca;for(const n of e)t=t.insert(n.key,n);return t}function xa(e){let t=Ca;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Na(){return Da()}function Oa(){return Da()}function Da(){return new Ta((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Ra=new Vs(Oi.comparator),Pa=new $s(Oi.comparator);function La(...e){let t=Pa;for(const n of e)t=t.add(n);return t}const Ma=new $s(Ii);function Fa(){return Ma}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:is(t)?"-0":t}}function Ua(e){return{integerValue:""+e}}function ja(e,t){return ss(t)?Ua(t):Va(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this._=void 0}}function Ba(e,t,n){return e instanceof Ka?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Js(t)&&(t=Zs(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Ga?Wa(e,t):e instanceof Ha?Qa(e,t):function(e,t){const n=za(e,t),r=Xa(n)+Xa(e.Te);return po(n)&&po(e.Te)?Ua(r):Va(e.serializer,r)}(e,t)}function qa(e,t,n){return e instanceof Ga?Wa(e,t):e instanceof Ha?Qa(e,t):n}function za(e,t){return e instanceof Ya?function(e){return po(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Ka extends $a{}class Ga extends $a{constructor(e){super(),this.elements=e}}function Wa(e,t){const n=Ja(t);for(const r of e.elements)n.some((e=>oo(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Ha extends $a{constructor(e){super(),this.elements=e}}function Qa(e,t){let n=Ja(t);for(const r of e.elements)n=n.filter((e=>!oo(e,r)));return{arrayValue:{values:n}}}class Ya extends $a{constructor(e,t){super(),this.serializer=e,this.Te=t}}function Xa(e){return Ys(e.integerValue||e.doubleValue)}function Ja(e){return go(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t){this.field=e,this.transform=t}}function ec(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ga&&t instanceof Ga||e instanceof Ha&&t instanceof Ha?Ei(e.elements,t.elements,oo):e instanceof Ya&&t instanceof Ya?oo(e.Te,t.Te):e instanceof Ka&&t instanceof Ka}(e.transform,t.transform)}class tc{constructor(e,t){this.version=e,this.transformResults=t}}class nc{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nc}static exists(e){return new nc(void 0,e)}static updateTime(e){return new nc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rc(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ic{}function sc(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new gc(e.key,nc.none()):new lc(e.key,e.data,nc.none());{const n=e.data,r=So.empty();let i=new $s(Ni.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new hc(e.key,r,new zs(i.toArray()),nc.none())}}function oc(e,t,n){e instanceof lc?function(e,t,n){const r=e.value.clone(),i=fc(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof hc?function(e,t,n){if(!rc(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=fc(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(dc(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function ac(e,t,n,r){return e instanceof lc?function(e,t,n,r){if(!rc(e.precondition,t))return n;const i=e.value.clone(),s=pc(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof hc?function(e,t,n,r){if(!rc(e.precondition,t))return n;const i=pc(e.fieldTransforms,r,t),s=t.data;return s.setAll(dc(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return rc(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function cc(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=za(r.transform,e||null);null!=i&&(null===n&&(n=So.empty()),n.set(r.field,i))}return n||null}function uc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Ei(e,t,((e,t)=>ec(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class lc extends ic{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class hc extends ic{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function dc(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function fc(e,t,n){const r=new Map;oi(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,qa(o,a,n[i]))}return r}function pc(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Ba(e,s,t))}return r}class gc extends ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mc extends ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&oc(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ac(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ac(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Oa();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=sc(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ai.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),La())}isEqual(e){return this.batchId===e.batchId&&Ei(this.mutations,e.mutations,((e,t)=>uc(e,t)))&&Ei(this.baseMutations,e.baseMutations,((e,t)=>uc(e,t)))}}class vc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){oi(e.mutations.length===n.length);let r=function(){return Ra}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new vc(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wc{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bc,Ic;function Ec(e){switch(e){default:return si();case ui.CANCELLED:case ui.UNKNOWN:case ui.DEADLINE_EXCEEDED:case ui.RESOURCE_EXHAUSTED:case ui.INTERNAL:case ui.UNAVAILABLE:case ui.UNAUTHENTICATED:return!1;case ui.INVALID_ARGUMENT:case ui.NOT_FOUND:case ui.ALREADY_EXISTS:case ui.PERMISSION_DENIED:case ui.FAILED_PRECONDITION:case ui.ABORTED:case ui.OUT_OF_RANGE:case ui.UNIMPLEMENTED:case ui.DATA_LOSS:return!0}}function Tc(e){if(void 0===e)return ni("GRPC error has no .code"),ui.UNKNOWN;switch(e){case bc.OK:return ui.OK;case bc.CANCELLED:return ui.CANCELLED;case bc.UNKNOWN:return ui.UNKNOWN;case bc.DEADLINE_EXCEEDED:return ui.DEADLINE_EXCEEDED;case bc.RESOURCE_EXHAUSTED:return ui.RESOURCE_EXHAUSTED;case bc.INTERNAL:return ui.INTERNAL;case bc.UNAVAILABLE:return ui.UNAVAILABLE;case bc.UNAUTHENTICATED:return ui.UNAUTHENTICATED;case bc.INVALID_ARGUMENT:return ui.INVALID_ARGUMENT;case bc.NOT_FOUND:return ui.NOT_FOUND;case bc.ALREADY_EXISTS:return ui.ALREADY_EXISTS;case bc.PERMISSION_DENIED:return ui.PERMISSION_DENIED;case bc.FAILED_PRECONDITION:return ui.FAILED_PRECONDITION;case bc.ABORTED:return ui.ABORTED;case bc.OUT_OF_RANGE:return ui.OUT_OF_RANGE;case bc.UNIMPLEMENTED:return ui.UNIMPLEMENTED;case bc.DATA_LOSS:return ui.DATA_LOSS;default:return si()}}(Ic=bc||(bc={}))[Ic.OK=0]="OK",Ic[Ic.CANCELLED=1]="CANCELLED",Ic[Ic.UNKNOWN=2]="UNKNOWN",Ic[Ic.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ic[Ic.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ic[Ic.NOT_FOUND=5]="NOT_FOUND",Ic[Ic.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ic[Ic.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ic[Ic.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ic[Ic.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ic[Ic.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ic[Ic.ABORTED=10]="ABORTED",Ic[Ic.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ic[Ic.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ic[Ic.INTERNAL=13]="INTERNAL",Ic[Ic.UNAVAILABLE=14]="UNAVAILABLE",Ic[Ic.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ac}static getOrCreateInstance(){return null===Ac&&(Ac=new Sc),Ac}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Ac=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new Hr([4294967295,4294967295],0);function xc(e){const t=Cc().encode(e),n=new Wr;return n.update(t),new Uint8Array(n.digest())}function Nc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Hr([n,r],0),new Hr([i,s],0)]}class Oc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Dc(`Invalid padding: ${t}`);if(n<0)throw new Dc(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Dc(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Dc(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=Hr.fromNumber(this.de)}Re(e,t,n){let r=e.add(t.multiply(Hr.fromNumber(n)));return 1===r.compare(kc)&&(r=new Hr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ae).toNumber()}Ve(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.de)return!1;const t=xc(e),[n,r]=Nc(t);for(let i=0;i<this.hashCount;i++){const e=this.Re(n,r,i);if(!this.Ve(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Oc(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.de)return;const t=xc(e),[n,r]=Nc(t);for(let i=0;i<this.hashCount;i++){const e=this.Re(n,r,i);this.me(e)}}me(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Dc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Pc.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Rc(Ai.min(),r,new Vs(Ii),Aa(),La())}}class Pc{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Pc(n,t,La(),La(),La())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,n,r){this.fe=e,this.removedTargetIds=t,this.key=n,this.ge=r}}class Mc{constructor(e,t){this.targetId=e,this.pe=t}}class Fc{constructor(e,t,n=Ws.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Vc{constructor(){this.ye=0,this.we=$c(),this.Se=Ws.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return 0!==this.ye}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=La(),t=La(),n=La();return this.we.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:si()}})),new Pc(this.Se,this.be,e,t,n)}xe(){this.De=!1,this.we=$c()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Uc{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Aa(),this.$e=jc(),this.Ue=new Vs(Ii)}We(e){for(const t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(const t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,(t=>{const n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Fe(e.resumeToken);break;case 1:n.Le(),n.ve||n.xe(),n.Fe(e.resumeToken);break;case 2:n.Le(),n.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(n.ke(),n.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Fe(e.resumeToken));break;default:si()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach(((e,n)=>{this.Je(n)&&t(n)}))}Ze(e){var t,n;const r=e.targetId,i=e.pe.count,s=this.Xe(r);if(s){const o=s.target;if(na(o))if(0===i){const e=new Oi(o.path);this.ze(r,e,Co.newNoDocument(e,Ai.min()))}else oi(1===i);else{const s=this.et(r);if(s!==i){const i=this.tt(e,s);if(0!==i.status){this.Ye(r);const e=2===i.status?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(r,e)}null===(t=Sc.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n,r){var i,s,o,a,c,u;const l={localCacheCount:n,existenceFilterCount:r.count},h=r.unchangedNames;return h&&(l.bloomFilter={applied:0===e,hashCount:null!==(i=null==h?void 0:h.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(a=null===(o=null===(s=null==h?void 0:h.bits)||void 0===s?void 0:s.bitmap)||void 0===o?void 0:o.length)&&void 0!==a?a:0,padding:null!==(u=null===(c=null==h?void 0:h.bits)||void 0===c?void 0:c.padding)&&void 0!==u?u:0},t&&(l.bloomFilter.mightContain=t)),l}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i.status,null!==(n=i.nt)&&void 0!==n?n:null,s,e.pe))}}}}tt(e,t){const{unchangedNames:n,count:r}=e.pe;if(!n||!n.bits)return{status:1};const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=Xs(i).toUint8Array()}catch(e){if(e instanceof Ks)return ri("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw e}try{c=new Oc(a,s,o)}catch(e){return ri(e instanceof Dc?"BloomFilter error: ":"Applying bloom filter failed: ",e),{status:1}}const u=e=>{const t=this.qe.rt();return c.mightContain(`projects/${t.projectId}/databases/${t.database}/documents/${e}`)};return 0===c.de?{status:1}:{status:r===t-this.it(e.targetId,u)?0:2,nt:u}}it(e,t){const n=this.qe.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{t(n.path.canonicalString())||(this.ze(e,n,null),r++)})),r}st(e){const t=new Map;this.Qe.forEach(((n,r)=>{const i=this.Xe(r);if(i){if(n.current&&na(i.target)){const t=new Oi(i.target.path);null!==this.Ke.get(t)||this.ot(r,t)||this.ze(r,t,Co.newNoDocument(t,e))}n.Ce&&(t.set(r,n.Me()),n.xe())}}));let n=La();this.$e.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Ke.forEach(((t,n)=>n.setReadTime(e)));const r=new Rc(e,t,this.Ue,this.Ke,n);return this.Ke=Aa(),this.$e=jc(),this.Ue=new Vs(Ii),r}Ge(e,t){if(!this.Je(e))return;const n=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,n),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;const r=this.He(e);this.ot(e,t)?r.Oe(t,1):r.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),n&&(this.Ke=this.Ke.insert(t,n))}removeTarget(e){this.Qe.delete(e)}et(e){const t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new Vc,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new $s(Ii),this.$e=this.$e.insert(e,t)),t}Je(e){const t=null!==this.Xe(e);return t||ti("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Vc),this.qe.getRemoteKeysForTarget(e).forEach((t=>{this.ze(e,t,null)}))}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function jc(){return new Vs(Oi.comparator)}function $c(){return new Vs(Oi.comparator)}const Bc=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),qc=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),zc=(()=>{const e={and:"AND",or:"OR"};return e})();class Kc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gc(e,t){return e.useProto3Json||rs(t)?t:{value:t}}function Wc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Qc(e,t){return Wc(e,t.toTimestamp())}function Yc(e){return oi(!!e),Ai.fromTimestamp(function(e){const t=Qs(e);return new Si(t.seconds,t.nanos)}(e))}function Xc(e,t){return function(e){return new ki(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Jc(e){const t=ki.fromString(e);return oi(Tu(t)),t}function Zc(e,t){return Xc(e.databaseId,t.path)}function eu(e,t){const n=Jc(t);if(n.get(1)!==e.databaseId.projectId)throw new li(ui.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new li(ui.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Oi(iu(n))}function tu(e,t){return Xc(e.databaseId,t)}function nu(e){const t=Jc(e);return 4===t.length?ki.emptyPath():iu(t)}function ru(e){return new ki(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function iu(e){return oi(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function su(e,t,n){return{name:Zc(e,t),fields:n.value.mapValue.fields}}function ou(e,t,n){const r=eu(e,t.name),i=Yc(t.updateTime),s=t.createTime?Yc(t.createTime):Ai.min(),o=new So({mapValue:{fields:t.fields}}),a=Co.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function au(e,t){return"found"in t?function(e,t){oi(!!t.found),t.found.name,t.found.updateTime;const n=eu(e,t.found.name),r=Yc(t.found.updateTime),i=t.found.createTime?Yc(t.found.createTime):Ai.min(),s=new So({mapValue:{fields:t.found.fields}});return Co.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){oi(!!t.missing),oi(!!t.readTime);const n=eu(e,t.missing),r=Yc(t.readTime);return Co.newNoDocument(n,r)}(e,t):si()}function cu(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:si()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(oi(void 0===t||"string"==typeof t),Ws.fromBase64String(t||"")):(oi(void 0===t||t instanceof Uint8Array),Ws.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?ui.UNKNOWN:Tc(e.code);return new li(t,e.message||"")}(o);n=new Fc(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=eu(e,r.document.name),s=Yc(r.document.updateTime),o=r.document.createTime?Yc(r.document.createTime):Ai.min(),a=new So({mapValue:{fields:r.document.fields}}),c=Co.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Lc(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=eu(e,r.document),s=r.readTime?Yc(r.readTime):Ai.min(),o=Co.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Lc([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=eu(e,r.document),s=r.removedTargetIds||[];n=new Lc([],s,i,null)}else{if(!("filter"in t))return si();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new wc(r,i),o=e.targetId;n=new Mc(o,s)}}return n}function uu(e,t){let n;if(t instanceof lc)n={update:su(e,t.key,t.value)};else if(t instanceof gc)n={delete:Zc(e,t.key)};else if(t instanceof hc)n={update:su(e,t.key,t.data),updateMask:Eu(t.fieldMask)};else{if(!(t instanceof mc))return si();n={verify:Zc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ka)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ga)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ha)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ya)return{fieldPath:t.field.canonicalString(),increment:n.Te};throw si()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Qc(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:si()}(e,t.precondition)),n}function lu(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?nc.updateTime(Yc(e.updateTime)):void 0!==e.exists?nc.exists(e.exists):nc.none()}(t.currentDocument):nc.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)oi("REQUEST_TIME"===t.setToServerValue),n=new Ka;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Ga(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Ha(e)}else"increment"in t?n=new Ya(e,t.increment):si();const r=Ni.fromServerFormat(t.fieldPath);return new Za(r,n)}(e,t))):[];if(t.update){t.update.name;const i=eu(e,t.update.name),s=new So({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new zs(t.map((e=>Ni.fromServerFormat(e))))}(t.updateMask);return new hc(i,s,e,n,r)}return new lc(i,s,n,r)}if(t.delete){const r=eu(e,t.delete);return new gc(r,n)}if(t.verify){const r=eu(e,t.verify);return new mc(r,n)}return si()}function hu(e,t){return e&&e.length>0?(oi(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Yc(e.updateTime):Yc(t);return n.isEqual(Ai.min())&&(n=Yc(t)),new tc(n,e.transformResults||[])}(e,t)))):[]}function du(e,t){return{documents:[tu(e,t.path)]}}function fu(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=tu(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=tu(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return Iu(Lo.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:wu(e.field),direction:yu(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Gc(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function pu(e){let t=nu(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oi(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=mu(e);return t instanceof Lo&&Vo(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new Oo(bu(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,rs(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new ko(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new ko(n,t)}(n.endAt)),aa(t,i,o,s,a,"F",c,u)}function gu(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return si()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function mu(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=bu(e.unaryFilter.field);return Po.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=bu(e.unaryFilter.field);return Po.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=bu(e.unaryFilter.field);return Po.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=bu(e.unaryFilter.field);return Po.create(i,"!=",{nullValue:"NULL_VALUE"});default:return si()}}(e):void 0!==e.fieldFilter?function(e){return Po.create(bu(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return si()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Lo.create(e.compositeFilter.filters.map((e=>mu(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return si()}}(e.compositeFilter.op))}(e):si()}function yu(e){return Bc[e]}function vu(e){return qc[e]}function _u(e){return zc[e]}function wu(e){return{fieldPath:e.canonicalString()}}function bu(e){return Ni.fromServerFormat(e.fieldPath)}function Iu(e){return e instanceof Po?function(e){if("=="===e.op){if(yo(e.value))return{unaryFilter:{field:wu(e.field),op:"IS_NAN"}};if(mo(e.value))return{unaryFilter:{field:wu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(yo(e.value))return{unaryFilter:{field:wu(e.field),op:"IS_NOT_NAN"}};if(mo(e.value))return{unaryFilter:{field:wu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wu(e.field),op:vu(e.op),value:e.value}}}(e):e instanceof Lo?function(e){const t=e.getFilters().map((e=>Iu(e)));return 1===t.length?t[0]:{compositeFilter:{op:_u(e.op),filters:t}}}(e):si()}function Eu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Tu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t,n,r,i=Ai.min(),s=Ai.min(),o=Ws.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Su(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Su(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Su(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Su(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this.ct=e}}function Cu(e,t){let n;if(t.document)n=ou(e.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=Oi.fromSegments(t.noDocument.path),r=Ou(t.noDocument.readTime);n=Co.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return si();{const e=Oi.fromSegments(t.unknownDocument.path),r=Ou(t.unknownDocument.version);n=Co.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Si(e[0],e[1]);return Ai.fromTimestamp(t)}(t.readTime)),n}function ku(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:xu(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Zc(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Wc(e,t.version.toTimestamp()),createTime:Wc(e,t.createTime.toTimestamp())}}(e.ct,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Nu(t.version)};else{if(!t.isUnknownDocument())return si();r.unknownDocument={path:n.path.toArray(),version:Nu(t.version)}}return r}function xu(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Nu(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Ou(e){const t=new Si(e.seconds,e.nanoseconds);return Ai.fromTimestamp(t)}function Du(e,t){const n=(t.baseMutations||[]).map((t=>lu(e.ct,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>lu(e.ct,t))),i=Si.fromMillis(t.localWriteTimeMs);return new yc(t.batchId,i,n,r)}function Ru(e){const t=Ou(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Ou(e.lastLimboFreeSnapshotVersion):Ai.min();let r;return r=function(e){return void 0!==e.documents}(e.query)?function(e){return oi(1===e.documents.length),pa(ca(nu(e.documents[0])))}(e.query):function(e){return pa(pu(e))}(e.query),new Su(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Ws.fromBase64String(e.resumeToken))}function Pu(e,t){const n=Nu(t.snapshotVersion),r=Nu(t.lastLimboFreeSnapshotVersion);let i;i=na(t.target)?du(e.ct,t.target):fu(e.ct,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:ea(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Lu(e){const t=pu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ma(t,t.limit,"L"):t}function Mu(e,t){return new _c(t.largestBatchId,lu(e.ct,t.overlayMutation))}function Fu(e,t){const n=t.path.lastSegment();return[e,os(t.path.popLast()),n]}function Vu(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Nu(r.readTime),documentKey:os(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{getBundleMetadata(e,t){return ju(e).get(t).next((e=>{if(e)return function(e){return{id:e.bundleId,createTime:Ou(e.createTime),version:e.version}}(e)}))}saveBundleMetadata(e,t){return ju(e).put(function(e){return{bundleId:e.id,createTime:Nu(Yc(e.createTime)),version:e.version}}(t))}getNamedQuery(e,t){return $u(e).get(t).next((e=>{if(e)return function(e){return{name:e.name,query:Lu(e.bundledQuery),readTime:Ou(e.readTime)}}(e)}))}saveNamedQuery(e,t){return $u(e).put(function(e){return{name:e.name,readTime:Nu(Yc(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function ju(e){return Ps(e,"bundles")}function $u(e){return Ps(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new Bu(e,n)}getOverlay(e,t){return qu(e).get(Fu(this.userId,t)).next((e=>e?Mu(this.serializer,e):null))}getOverlays(e,t){const n=Na();return zi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new _c(t,i);r.push(this.ht(e,s))})),zi.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(os(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(qu(e).J("collectionPathOverlayIndex",r))})),zi.waitFor(i)}getOverlaysForCollection(e,t,n){const r=Na(),i=os(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return qu(e).G("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=Mu(this.serializer,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=Na();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return qu(e).Z({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Mu(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}ht(e,t){return qu(e).put(function(e,t,n){const[r,i,s]=Fu(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:uu(e.ct,n.mutation)}}(this.serializer,this.userId,t))}}function qu(e){return Ps(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(Ys(e.integerValue));else if("doubleValue"in e){const n=Ys(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),is(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){const n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(Xs(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?wo(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):si()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const n=e.fields||{};this.Et(t,55);for(const r of Object.keys(n))this.Rt(r,t),this.It(n[r],t)}wt(e,t){const n=e.values||[];this.Et(t,50);for(const r of n)this.It(r,t)}gt(e,t){this.Et(t,37),Oi.fromName(e).path.forEach((e=>{this.Et(t,60),this.St(e,t)}))}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}function Ku(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Gu(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Ku(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}zu.bt=new zu;class Wu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.vt(n.value),n=t.next();this.Ct()}Ft(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Mt(n.value),n=t.next();this.xt()}Ot(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.vt(e);else if(e<2048)this.vt(960|e>>>6),this.vt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.vt(480|e>>>12),this.vt(128|63&e>>>6),this.vt(128|63&e);else{const e=t.codePointAt(0);this.vt(240|e>>>18),this.vt(128|63&e>>>12),this.vt(128|63&e>>>6),this.vt(128|63&e)}}this.Ct()}Nt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Mt(e);else if(e<2048)this.Mt(960|e>>>6),this.Mt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Mt(480|e>>>12),this.Mt(128|63&e>>>6),this.Mt(128|63&e);else{const e=t.codePointAt(0);this.Mt(240|e>>>18),this.Mt(128|63&e>>>12),this.Mt(128|63&e>>>6),this.Mt(128|63&e)}}this.xt()}Bt(e){const t=this.Lt(e),n=Gu(t);this.kt(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}qt(e){const t=this.Lt(e),n=Gu(t);this.kt(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}vt(e){const t=255&e;0===t?(this.Kt(0),this.Kt(255)):255===t?(this.Kt(255),this.Kt(0)):this.Kt(t)}Mt(e){const t=255&e;0===t?(this.Ut(0),this.Ut(255)):255===t?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ct(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Hu{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class Qu{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Yu{constructor(){this.Gt=new Wu,this.zt=new Hu(this.Gt),this.jt=new Qu(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return 0===e?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Jt(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Xu(this.indexId,this.documentKey,this.arrayValue,n)}}function Ju(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Zu(e.arrayValue,t.arrayValue),0!==n?n:(n=Zu(e.directionalValue,t.directionalValue),0!==n?n:Oi.comparator(e.documentKey,t.documentKey)))}function Zu(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const t of e.filters){const e=t;e.isInequality()?this.Xt=e:this.Zt.push(e)}}en(e){oi(e.collectionGroup===this.collectionId);const t=Ri(e);if(void 0!==t&&!this.tn(t))return!1;const n=Pi(e);let r=new Set,i=0,s=0;for(;i<n.length&&this.tn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(void 0!==this.Xt){if(!r.has(this.Xt.field.canonicalString())){const e=n[i];if(!this.nn(this.Xt,e)||!this.rn(this.Yt[s++],e))return!1}++i}for(;i<n.length;++i){const e=n[i];if(s>=this.Yt.length||!this.rn(this.Yt[s++],e))return!1}return!0}tn(e){for(const t of this.Zt)if(this.nn(t,e))return!0;return!1}nn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}rn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(e){var t,n;if(oi(e instanceof Po||e instanceof Lo),e instanceof Po){if(e instanceof Qo){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>Po.create(e.field,"==",t))))||[];return Lo.create(r,"or")}return e}const r=e.filters.map((e=>tl(e)));return Lo.create(r,e.op)}function nl(e){if(0===e.getFilters().length)return[];const t=ol(tl(e));return oi(sl(t)),rl(t)||il(t)?[t]:t.getFilters()}function rl(e){return e instanceof Po}function il(e){return e instanceof Lo&&Vo(e)}function sl(e){return rl(e)||il(e)||function(e){if(e instanceof Lo&&Fo(e)){for(const t of e.getFilters())if(!rl(t)&&!il(t))return!1;return!0}return!1}(e)}function ol(e){if(oi(e instanceof Po||e instanceof Lo),e instanceof Po)return e;if(1===e.filters.length)return ol(e.filters[0]);const t=e.filters.map((e=>ol(e)));let n=Lo.create(t,e.op);return n=ul(n),sl(n)?n:(oi(n instanceof Lo),oi(Mo(n)),oi(n.filters.length>1),n.filters.reduce(((e,t)=>al(e,t))))}function al(e,t){let n;return oi(e instanceof Po||e instanceof Lo),oi(t instanceof Po||t instanceof Lo),n=e instanceof Po?t instanceof Po?function(e,t){return Lo.create([e,t],"and")}(e,t):cl(e,t):t instanceof Po?cl(t,e):function(e,t){if(oi(e.filters.length>0&&t.filters.length>0),Mo(e)&&Mo(t))return Bo(e,t.getFilters());const n=Fo(e)?e:t,r=Fo(e)?t:e,i=n.filters.map((e=>al(e,r)));return Lo.create(i,"or")}(e,t),ul(n)}function cl(e,t){if(Mo(t))return Bo(t,e.getFilters());{const n=t.filters.map((t=>al(e,t)));return Lo.create(n,"or")}}function ul(e){if(oi(e instanceof Po||e instanceof Lo),e instanceof Po)return e;const t=e.getFilters();if(1===t.length)return ul(t[0]);if(Uo(e))return e;const n=t.map((e=>ul(e))),r=[];return n.forEach((t=>{t instanceof Po?r.push(t):t instanceof Lo&&(t.op===e.op?r.push(...t.filters):r.push(t))})),1===r.length?r[0]:Lo.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ll{constructor(){this.sn=new hl}addToCollectionParentIndex(e,t){return this.sn.add(t),zi.resolve()}getCollectionParents(e,t){return zi.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return zi.resolve()}deleteFieldIndex(e,t){return zi.resolve()}getDocumentsMatchingTarget(e,t){return zi.resolve(null)}getIndexType(e,t){return zi.resolve(0)}getFieldIndexes(e,t){return zi.resolve([])}getNextCollectionGroupToUpdate(e){return zi.resolve(null)}getMinOffset(e,t){return zi.resolve(Ui.min())}getMinOffsetFromCollectionGroup(e,t){return zi.resolve(Ui.min())}updateCollectionGroup(e,t,n){return zi.resolve()}updateIndexEntries(e,t){return zi.resolve()}}class hl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new $s(ki.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new $s(ki.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=new Uint8Array(0);class fl{constructor(e,t){this.user=e,this.databaseId=t,this.on=new hl,this._n=new Ta((e=>ea(e)),((e,t)=>ta(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.on.add(t)}));const i={collectionId:n,parent:os(r)};return pl(e).put(i)}return zi.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[Ti(t),""],!1,!0);return pl(e).G(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(us(r.parent))}return n}))}addFieldIndex(e,t){const n=ml(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=yl(e);return i.next((e=>{n.put(Vu(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=ml(e),r=yl(e),i=gl(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=gl(e);let r=!0;const i=new Map;return zi.forEach(this.an(t),(t=>this.un(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=La();const r=[];return zi.forEach(i,((i,s)=>{ti("IndexedDbIndexManager",`Using index ${function(e){return`id=${e.indexId}|cg=${e.collectionGroup}|f=${e.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`}(i)} to execute ${ea(t)}`);const o=function(e,t){const n=Ri(t);if(void 0===n)return null;for(const r of ra(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),a=function(e,t){const n=new Map;for(const r of Pi(t))for(const t of ra(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),c=function(e,t){const n=[];let r=!0;for(const i of Pi(t)){const t=0===i.kind?ia(e,i.fieldPath,e.startAt):sa(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new ko(n,r)}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Pi(t)){const t=0===i.kind?sa(e,i.fieldPath,e.endAt):ia(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new ko(n,r)}(s,i),l=this.cn(i,s,c),h=this.cn(i,s,u),d=this.ln(i,s,a),f=this.hn(i.indexId,o,l,c.inclusive,h,u.inclusive,d);return zi.forEach(f,(i=>n.H(i,t.limit).next((t=>{t.forEach((t=>{const n=Oi.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return zi.resolve(null)}))}an(e){let t=this._n.get(e);return t||(t=0===e.filters.length?[e]:nl(Lo.create(e.filters,"and")).map((t=>Zo(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this._n.set(e,t),t)}hn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.Pn(t[l/c]):dl,h=this.In(e,a,n[l%c],r),d=this.Tn(e,a,i[l%c],s),f=o.map((t=>this.In(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}In(e,t,n,r){const i=new Xu(e,Oi.empty(),t,n);return r?i:i.Jt()}Tn(e,t,n,r){const i=new Xu(e,Oi.empty(),t,n);return r?i.Jt():i}un(e,t){const n=new el(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.en(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;const r=this.an(t);return zi.forEach(r,(t=>this.un(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new $s(Ni.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n))}En(e,t){const n=new Yu;for(const r of Pi(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.Ht(r.kind);zu.bt.Pt(e,i)}return n.Wt()}Pn(e){const t=new Yu;return zu.bt.Pt(e,t.Ht(0)),t.Wt()}dn(e,t){const n=new Yu;return zu.bt.Pt(fo(this.databaseId,t),n.Ht(function(e){const t=Pi(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Wt()}ln(e,t,n){if(null===n)return[];let r=[];r.push(new Yu);let i=0;for(const s of Pi(e)){const e=n[i++];for(const n of r)if(this.An(t,s.fieldPath)&&go(e))r=this.Rn(r,s,e);else{const t=n.Ht(s.kind);zu.bt.Pt(e,t)}}return this.Vn(r)}cn(e,t,n){return this.ln(e,t,n.position)}Vn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Wt();return t}Rn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new Yu;n.seed(e.Wt()),zu.bt.Pt(s,n.Ht(t.kind)),i.push(n)}return i}An(e,t){return!!e.filters.find((e=>e instanceof Po&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=ml(e),r=yl(e);return(t?n.G("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.G()).next((e=>{const t=[];return zi.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new Mi(t.sequenceNumber,new Ui(Ou(t.readTime),new Oi(us(t.documentKey)),t.largestBatchId)):Mi.empty(),r=e.fields.map((([e,t])=>new Li(Ni.fromServerFormat(e),t)));return new Di(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:Ii(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=ml(e),i=yl(e);return this.mn(e).next((e=>r.G("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>zi.forEach(t,(t=>i.put(Vu(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return zi.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?zi.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),zi.forEach(i,(n=>this.fn(e,t,n).next((t=>{const i=this.gn(r,n);return t.isEqual(i)?zi.resolve():this.pn(e,r,n,t,i)})))))))}))}yn(e,t,n,r){return gl(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.dn(n,t.key),documentKey:t.key.path.toArray()})}wn(e,t,n,r){return gl(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.dn(n,t.key),t.key.path.toArray()])}fn(e,t,n){const r=gl(e);let i=new $s(Ju);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.dn(n,t)])},((e,r)=>{i=i.add(new Xu(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}gn(e,t){let n=new $s(Ju);const r=this.En(t,e);if(null==r)return n;const i=Ri(t);if(null!=i){const s=e.data.field(i.fieldPath);if(go(s))for(const i of s.arrayValue.values||[])n=n.add(new Xu(t.indexId,e.key,this.Pn(i),r))}else n=n.add(new Xu(t.indexId,e.key,dl,r));return n}pn(e,t,n,r,i){ti("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=qs(s),c=qs(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=qs(o)):t?(i(a),a=qs(s)):(a=qs(s),c=qs(o))}}(r,i,Ju,(r=>{s.push(this.yn(e,t,n,r))}),(r=>{s.push(this.wn(e,t,n,r))})),zi.waitFor(s)}mn(e){let t=1;return yl(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>Ju(e,t))).filter(((e,t,n)=>!t||0!==Ju(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=Ju(s,e),i=Ju(s,t);if(0===n)r[0]=e.Jt();else if(n>0&&i<0)r.push(s),r.push(s.Jt());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2){if(this.Sn(r[s],r[s+1]))return[];const e=[r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,dl,[]],t=[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,dl,[]];i.push(IDBKeyRange.bound(e,t))}return i}Sn(e,t){return Ju(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(vl)}getMinOffset(e,t){return zi.mapArray(this.an(t),(t=>this.un(e,t).next((e=>e||si())))).next(vl)}}function pl(e){return Ps(e,"collectionParents")}function gl(e){return Ps(e,"indexEntries")}function ml(e){return Ps(e,"indexConfiguration")}function yl(e){return Ps(e,"indexState")}function vl(e){oi(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;ji(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Ui(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class wl{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new wl(e,wl.DEFAULT_COLLECTION_PERCENTILE,wl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{oi(1===a)})));const u=[];for(const l of n.mutations){const e=ds(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return zi.waitFor(s).next((()=>u))}function Il(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw si();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wl.DEFAULT_COLLECTION_PERCENTILE=10,wl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wl.DEFAULT=new wl(41943040,wl.DEFAULT_COLLECTION_PERCENTILE,wl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wl.DISABLED=new wl(-1,0,0);class El{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.bn={}}static lt(e,t,n,r){oi(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new El(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Sl(e).Z({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=Al(e),s=Sl(e);return s.add({}).next((o=>{oi("number"==typeof o);const a=new yc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>uu(e.ct,t))),i=n.mutations.map((t=>uu(e.ct,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[];let l=new $s(((e,t)=>Ii(e.canonicalString(),t.canonicalString())));for(const e of r){const t=ds(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,fs))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.bn[o]=a.keys()})),zi.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Sl(e).get(t).next((e=>e?(oi(e.userId===this.userId),Du(this.serializer,e)):null))}Dn(e,t){return this.bn[t]?zi.resolve(this.bn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.bn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Sl(e).Z({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(oi(t.batchId>=n),i=Du(this.serializer,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Sl(e).Z({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Sl(e).G("userMutationsIndex",t).next((e=>e.map((e=>Du(this.serializer,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=hs(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Al(e).Z({range:r},((n,r,s)=>{const[o,a,c]=n,u=us(a);if(o===this.userId&&t.path.isEqual(u))return Sl(e).get(c).next((e=>{if(!e)throw si();oi(e.userId===this.userId),i.push(Du(this.serializer,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $s(Ii);const r=[];return t.forEach((t=>{const i=hs(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Al(e).Z({range:s},((e,r,i)=>{const[s,o,a]=e,c=us(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),zi.waitFor(r).next((()=>this.vn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=hs(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new $s(Ii);return Al(e).Z({range:s},((e,t,i)=>{const[s,a,c]=e,u=us(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.vn(e,o)))}vn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Sl(e).get(t).next((e=>{if(null===e)throw si();oi(e.userId===this.userId),n.push(Du(this.serializer,e))})))})),zi.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return bl(e.ue,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.Cn(t.batchId)})),zi.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}Cn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return zi.resolve();const n=IDBKeyRange.lowerBound(function(e){return[e]}(this.userId)),r=[];return Al(e).Z({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=us(e[1]);r.push(t)}else n.done()})).next((()=>{oi(0===r.length)}))}))}containsKey(e,t){return Tl(e,this.userId,t)}Fn(e){return Cl(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Tl(e,t,n){const r=hs(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Al(e).Z({range:s,Y:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Sl(e){return Ps(e,"mutations")}function Al(e){return Ps(e,"documentMutations")}function Cl(e){return Ps(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new kl(0)}static On(){return new kl(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Nn(e).next((t=>{const n=new kl(t.highestTargetId);return t.highestTargetId=n.next(),this.Bn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Nn(e).next((e=>Ai.fromTimestamp(new Si(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Nn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Nn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Bn(e,r))))}addTargetData(e,t){return this.Ln(e,t).next((()=>this.Nn(e).next((n=>(n.targetCount+=1,this.kn(t,n),this.Bn(e,n))))))}updateTargetData(e,t){return this.Ln(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Nl(e).delete(t.targetId))).next((()=>this.Nn(e))).next((t=>(oi(t.targetCount>0),t.targetCount-=1,this.Bn(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Nl(e).Z(((s,o)=>{const a=Ru(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>zi.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Nl(e).Z(((e,n)=>{const r=Ru(n);t(r)}))}Nn(e){return Ol(e).get("targetGlobalKey").next((e=>(oi(null!==e),e)))}Bn(e,t){return Ol(e).put("targetGlobalKey",t)}Ln(e,t){return Nl(e).put(Pu(this.serializer,t))}kn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Nn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=ea(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Nl(e).Z({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=Ru(n);ta(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Dl(e);return t.forEach((t=>{const s=os(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),zi.waitFor(r)}removeMatchingKeys(e,t,n){const r=Dl(e);return zi.forEach(t,(t=>{const i=os(t.path);return zi.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Dl(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Dl(e);let i=La();return r.Z({range:n,Y:!0},((e,t,n)=>{const r=us(e[1]),s=new Oi(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=os(t.path),r=IDBKeyRange.bound([n],[Ti(n)],!1,!0);let i=0;return Dl(e).Z({index:"documentTargetsIndex",Y:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}ut(e,t){return Nl(e).get(t).next((e=>e?Ru(e):null))}}function Nl(e){return Ps(e,"targets")}function Ol(e){return Ps(e,"targetGlobal")}function Dl(e){return Ps(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl([e,t],[n,r]){const i=Ii(e,n);return 0===i?Ii(t,r):i}class Pl{constructor(e){this.qn=e,this.buffer=new $s(Rl),this.Qn=0}Kn(){return++this.Qn}$n(e){const t=[e,this.Kn()];if(this.buffer.size<this.qn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Rl(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ll{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Un=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Wn(6e4)}stop(){this.Un&&(this.Un.cancel(),this.Un=null)}get started(){return null!==this.Un}Wn(e){ti("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Un=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Un=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Qi(e)?ti("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await qi(e)}await this.Wn(3e5)}))}}class Ml{constructor(e,t){this.Gn=e,this.params=t}calculateTargetCount(e,t){return this.Gn.zn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return zi.resolve(ns.ae);const n=new Pl(t);return this.Gn.forEachTarget(e,(e=>n.$n(e.sequenceNumber))).next((()=>this.Gn.jn(e,(e=>n.$n(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Gn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Gn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(ti("LruGarbageCollector","Garbage collection skipped; disabled"),zi.resolve(_l)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(ti("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_l):this.Hn(e,t)))}getCacheSize(e){return this.Gn.getCacheSize(e)}Hn(e,t){let n,r,i,s,o,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(ti("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),Zr()<=a.$b.DEBUG&&ti("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-o)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),zi.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}function Fl(e,t){return new Ml(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t){this.db=e,this.garbageCollector=Fl(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Jn(e){let t=0;return this.jn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}jn(e,t){return this.Yn(e,((e,n)=>t(n)))}addReference(e,t,n){return Ul(e,n)}removeReference(e,t,n){return Ul(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ul(e,t)}Zn(e,t){return function(e,t){let n=!1;return Cl(e).X((r=>Tl(e,r,t).next((e=>(e&&(n=!0),zi.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Yn(e,((s,o)=>{if(o<=t){const t=this.Zn(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,Ai.min()),Dl(e).delete(function(e){return[0,os(e.path)]}(s)))))}));r.push(t)}})).next((()=>zi.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ul(e,t)}Yn(e,t){const n=Dl(e);let r,i=ns.ae;return n.Z({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==ns.ae&&t(new Oi(us(r)),i),i=o,r=s):i=ns.ae})).next((()=>{i!==ns.ae&&t(new Oi(us(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ul(e,t){return Dl(e).put(function(e,t){return{targetId:0,path:os(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.changes=new Ta((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Co.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?zi.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Kl(e).put(n)}removeEntry(e,t,n){return Kl(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],xu(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Xn(e,n))))}getEntry(e,t){let n=Co.newInvalidDocument(t);return Kl(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Gl(t))},((e,r)=>{n=this.er(t,r)})).next((()=>n))}tr(e,t){let n={size:0,document:Co.newInvalidDocument(t)};return Kl(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Gl(t))},((e,r)=>{n={document:this.er(t,r),size:Il(r)}})).next((()=>n))}getEntries(e,t){let n=Aa();return this.nr(e,t,((e,t)=>{const r=this.er(e,t);n=n.insert(e,r)})).next((()=>n))}rr(e,t){let n=Aa(),r=new Vs(Oi.comparator);return this.nr(e,t,((e,t)=>{const i=this.er(e,t);n=n.insert(e,i),r=r.insert(e,Il(t))})).next((()=>({documents:n,ir:r})))}nr(e,t,n){if(t.isEmpty())return zi.resolve();let r=new $s(Hl);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(Gl(r.first()),Gl(r.last())),s=r.getIterator();let o=s.getNext();return Kl(e).Z({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=Oi.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Hl(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.W(Gl(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getDocumentsMatchingQuery(e,t,n,r){const i=t.path,s=[i.popLast().toArray(),i.lastSegment(),xu(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Kl(e).G(IDBKeyRange.bound(s,o,!0)).next((e=>{let n=Aa();for(const i of e){const e=this.er(Oi.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(wa(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n}))}getAllFromCollectionGroup(e,t,n,r){let i=Aa();const s=Wl(t,n),o=Wl(t,Ui.max());return Kl(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.er(Oi.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new ql(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return zl(e).get("remoteDocumentGlobalKey").next((e=>(oi(!!e),e)))}Xn(e,t){return zl(e).put("remoteDocumentGlobalKey",t)}er(e,t){if(t){const e=Cu(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(Ai.min()))return e}return Co.newInvalidDocument(e)}}function Bl(e){return new $l(e)}class ql extends jl{constructor(e,t){super(),this.sr=e,this.trackRemovals=t,this._r=new Ta((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new $s(((e,t)=>Ii(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this._r.get(i);if(t.push(this.sr.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=ku(this.sr.serializer,s);r=r.add(i.path.popLast());const c=Il(a);n+=c-o.size,t.push(this.sr.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=ku(this.sr.serializer,s.convertToNoDocument(Ai.min()));t.push(this.sr.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.sr.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.sr.updateMetadata(e,n)),zi.waitFor(t)}getFromCache(e,t){return this.sr.tr(e,t).next((e=>(this._r.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.sr.rr(e,t).next((({documents:e,ir:t})=>(t.forEach(((t,n)=>{this._r.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function zl(e){return Ps(e,"remoteDocumentGlobal")}function Kl(e){return Ps(e,"remoteDocumentsV14")}function Gl(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Wl(e,t){const n=t.documentKey.path.toArray();return[e,xu(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Hl(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Ii(n[s],r[s]),i)return i;return i=Ii(n.length,r.length),i||(i=Ii(n[n.length-2],r[r.length-2]),i||Ii(n[n.length-1],r[r.length-1])
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class Ql{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&ac(n.mutation,e,zs.empty(),Si.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,La()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=La()){const r=Na();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=ka();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Na();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,La())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Aa();const s=Da(),o=function(){return Da()}();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof hc)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),ac(o.mutation,t,o.mutation.getFieldMask(),Si.now())):s.set(t.key,zs.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Ql(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Da();let r=new Vs(((e,t)=>e-t)),i=La();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||zs.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||La()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Oa();c.forEach((e=>{if(!i.has(e)){const r=sc(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return zi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):da(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):zi.resolve(Na());let o=-1,a=i;return s.next((t=>zi.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?zi.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,La()))).next((e=>({batchId:o,changes:xa(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Oi(t)).next((e=>{let t=ka();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=ka();return this.indexManager.getCollectionParents(e,r).next((s=>zi.forEach(s,(s=>{const o=function(e,t){return new oa(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Co.newInvalidDocument(r)))}));let n=ka();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&ac(s.mutation,i,zs.empty(),Si.now()),wa(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return zi.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Yc(e.createTime)}}(t)),zi.resolve()}getNamedQuery(e,t){return zi.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,function(e){return{name:e.name,query:Lu(e.bundledQuery),readTime:Yc(e.readTime)}}(t)),zi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.overlays=new Vs(Oi.comparator),this.cr=new Map}getOverlay(e,t){return zi.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Na();return zi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),zi.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.cr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.cr.delete(n)),zi.resolve()}getOverlaysForCollection(e,t,n){const r=Na(),i=t.length+1,s=new Oi(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return zi.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Vs(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Na(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Na(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return zi.resolve(o)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.cr.get(r.largestBatchId).delete(n.key);this.cr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new _c(t,n));let i=this.cr.get(t);void 0===i&&(i=La(),this.cr.set(t,i)),this.cr.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this.lr=new $s(eh.hr),this.Pr=new $s(eh.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){const n=new eh(e,t);this.lr=this.lr.add(n),this.Pr=this.Pr.add(n)}Tr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Er(new eh(e,t))}dr(e,t){e.forEach((e=>this.removeReference(e,t)))}Ar(e){const t=new Oi(new ki([])),n=new eh(t,e),r=new eh(t,e+1),i=[];return this.Pr.forEachInRange([n,r],(e=>{this.Er(e),i.push(e.key)})),i}Rr(){this.lr.forEach((e=>this.Er(e)))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const t=new Oi(new ki([])),n=new eh(t,e),r=new eh(t,e+1);let i=La();return this.Pr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new eh(e,0),n=this.lr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class eh{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return Oi.comparator(e.key,t.key)||Ii(e.mr,t.mr)}static Ir(e,t){return Ii(e.mr,t.mr)||Oi.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new $s(eh.hr)}checkEmpty(e){return zi.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new yc(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.pr=this.pr.add(new eh(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return zi.resolve(s)}lookupMutationBatch(e,t){return zi.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.wr(n),i=r<0?0:r;return zi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return zi.resolve(0===this.mutationQueue.length?-1:this.gr-1)}getAllMutationBatches(e){return zi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new eh(t,0),r=new eh(t,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([n,r],(e=>{const t=this.yr(e.mr);i.push(t)})),zi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $s(Ii);return t.forEach((e=>{const t=new eh(e,0),r=new eh(e,Number.POSITIVE_INFINITY);this.pr.forEachInRange([t,r],(e=>{n=n.add(e.mr)}))})),zi.resolve(this.Sr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Oi.isDocumentKey(i)||(i=i.child(""));const s=new eh(new Oi(i),0);let o=new $s(Ii);return this.pr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.mr)),!0)}),s),zi.resolve(this.Sr(o))}Sr(e){const t=[];return e.forEach((e=>{const n=this.yr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){oi(0===this.br(t.batchId,"removed")),this.mutationQueue.shift();let n=this.pr;return zi.forEach(t.mutations,(r=>{const i=new eh(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.pr=n}))}Cn(e){}containsKey(e,t){const n=new eh(t,0),r=this.pr.firstAfterOrEqual(n);return zi.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,zi.resolve()}br(e,t){return this.wr(e)}wr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}yr(e){const t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.Dr=e,this.docs=function(){return new Vs(Oi.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Dr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return zi.resolve(n?n.document.mutableCopy():Co.newInvalidDocument(t))}getEntries(e,t){let n=Aa();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Co.newInvalidDocument(e))})),zi.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Aa();const s=t.path,o=new Oi(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||ji(Vi(o),n)<=0||(r.has(o.key)||wa(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return zi.resolve(i)}getAllFromCollectionGroup(e,t,n,r){si()}vr(e,t){return zi.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new rh(this)}getSize(e){return zi.resolve(this.size)}}class rh extends jl{constructor(e){super(),this.sr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.sr.addEntry(e,r)):this.sr.removeEntry(n)})),zi.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.persistence=e,this.Cr=new Ta((e=>ea(e)),ta),this.lastRemoteSnapshotVersion=Ai.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Zl,this.targetCount=0,this.Or=kl.xn()}forEachTarget(e,t){return this.Cr.forEach(((e,n)=>t(n))),zi.resolve()}getLastRemoteSnapshotVersion(e){return zi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return zi.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),zi.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Fr&&(this.Fr=t),zi.resolve()}Ln(e){this.Cr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Or=new kl(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,zi.resolve()}updateTargetData(e,t){return this.Ln(t),zi.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,zi.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Cr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Cr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),zi.waitFor(i).next((()=>r))}getTargetCount(e){return zi.resolve(this.targetCount)}getTargetData(e,t){const n=this.Cr.get(t)||null;return zi.resolve(n)}addMatchingKeys(e,t,n){return this.Mr.Tr(t,n),zi.resolve()}removeMatchingKeys(e,t,n){this.Mr.dr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),zi.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),zi.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Mr.Vr(t);return zi.resolve(n)}containsKey(e,t){return zi.resolve(this.Mr.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t){this.Nr={},this.overlays={},this.Br=new ns(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new ih(this),this.indexManager=new ll,this.remoteDocumentCache=function(e){return new nh(e)}((e=>this.referenceDelegate.qr(e))),this.serializer=new Au(t),this.Qr=new Xl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Jl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Nr[e.toKey()];return n||(n=new th(t,this.referenceDelegate),this.Nr[e.toKey()]=n),n}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,n){ti("MemoryPersistence","Starting transaction:",e);const r=new oh(this.Br.next());return this.referenceDelegate.Kr(),n(r).next((e=>this.referenceDelegate.$r(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ur(e,t){return zi.or(Object.values(this.Nr).map((n=>()=>n.containsKey(e,t))))}}class oh extends Bi{constructor(e){super(),this.currentSequenceNumber=e}}class ah{constructor(e){this.persistence=e,this.Wr=new Zl,this.Gr=null}static zr(e){return new ah(e)}get jr(){if(this.Gr)return this.Gr;throw si()}addReference(e,t,n){return this.Wr.addReference(n,t),this.jr.delete(n.toString()),zi.resolve()}removeReference(e,t,n){return this.Wr.removeReference(n,t),this.jr.add(n.toString()),zi.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),zi.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach((e=>this.jr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.jr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Kr(){this.Gr=new Set}$r(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return zi.forEach(this.jr,(n=>{const r=Oi.fromPath(n);return this.Hr(e,r).next((e=>{e||t.removeEntry(r,Ai.min())}))})).next((()=>(this.Gr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hr(e,t).next((e=>{e?this.jr.delete(t.toString()):this.jr.add(t.toString())}))}qr(e){return 0}Hr(e,t){return zi.or([()=>zi.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.serializer=e}B(e,t,n,r){const i=new Ki("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ls,{unique:!0}),e.createObjectStore("documentMutations")}(e),uh(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=zi.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),uh(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ai.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").G().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ls,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return zi.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Yr(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Zr(i))))),n<7&&r>=7&&(s=s.next((()=>this.Xr(i)))),n<8&&r>=8&&(s=s.next((()=>this.ei(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.ti(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Ss});t.createIndex("collectionPathOverlayIndex",As,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Cs,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:ps});t.createIndex("documentKeyIndex",gs),t.createIndex("collectionGroupIndex",ms)}(e))).next((()=>this.ni(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.ri(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:bs}).createIndex("sequenceNumberIndex",Is,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Es}).createIndex("documentKeyIndex",Ts,{unique:!1})}(e)))),s}Zr(e){let t=0;return e.store("remoteDocuments").Z(((e,n)=>{t+=Il(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Yr(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.G().next((t=>zi.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.G("userMutationsIndex",r).next((n=>zi.forEach(n,(n=>{oi(n.userId===t.userId);const r=Du(this.serializer,n);return bl(e,t.userId,r).next((()=>{}))}))))}))))}Xr(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.Z(((n,i)=>{const s=new ki(n),o=function(e){return[0,os(e)]}(s);r.push(t.get(o).next((n=>n?zi.resolve():(n=>t.put({targetId:0,path:os(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>zi.waitFor(r)))}))}ei(e,t){e.createObjectStore("collectionParents",{keyPath:ws});const n=t.store("collectionParents"),r=new hl,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:os(r)})}};return t.store("remoteDocuments").Z({Y:!0},((e,t)=>{const n=new ki(e);return i(n.popLast())})).next((()=>t.store("documentMutations").Z({Y:!0},(([e,t,n],r)=>{const s=us(t);return i(s.popLast())}))))}ti(e){const t=e.store("targets");return t.Z(((e,n)=>{const r=Ru(n),i=Pu(this.serializer,r);return t.put(i)}))}ni(e,t){const n=t.store("remoteDocuments"),r=[];return n.Z(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=function(e){return e.document?new Oi(ki.fromString(e.document.name).popFirst(5)):e.noDocument?Oi.fromSegments(e.noDocument.path):e.unknownDocument?Oi.fromSegments(e.unknownDocument.path):si()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n).path.toArray(),o={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(o))})).next((()=>zi.waitFor(r)))}ri(e,t){const n=t.store("mutations"),r=Bl(this.serializer),i=new sh(ah.zr,this.serializer.ct);return n.G().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:La();Du(this.serializer,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),zi.forEach(n,((e,n)=>{const s=new Yr(n),o=Bu.lt(this.serializer,s),a=i.getIndexManager(s),c=El.lt(s,this.serializer,a,i.referenceDelegate);return new Yl(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Rs(t,ns.ae),e).next()}))}))}}function uh(e){e.createObjectStore("targetDocuments",{keyPath:vs}).createIndex("documentTargetsIndex",_s,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ys,{unique:!0}),e.createObjectStore("targetGlobal")}const lh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class hh{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ii=i,this.window=s,this.document=o,this.si=c,this.oi=u,this._i=l,this.Br=null,this.Lr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ai=null,this.inForeground=!1,this.ui=null,this.ci=null,this.li=Number.NEGATIVE_INFINITY,this.hi=e=>Promise.resolve(),!hh.v())throw new li(ui.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Vl(this,r),this.Pi=t+"main",this.serializer=new Au(a),this.Ii=new Gi(this.Pi,this._i,new ch(this.serializer)),this.kr=new xl(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Bl(this.serializer),this.Qr=new Uu,this.window&&this.window.localStorage?this.Ti=this.window.localStorage:(this.Ti=null,!1===u&&ni("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ei().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new li(ui.FAILED_PRECONDITION,lh);return this.di(),this.Ai(),this.Ri(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.kr.getHighestSequenceNumber(e)))})).then((e=>{this.Br=new ns(e,this.si)})).then((()=>{this.Lr=!0})).catch((e=>(this.Ii&&this.Ii.close(),Promise.reject(e))))}Vi(e){return this.hi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ii.k((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget((async()=>{this.started&&await this.Ei()})))}Ei(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>fh(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.mi(e).next((e=>{e||(this.isPrimary=!1,this.ii.enqueueRetryable((()=>this.hi(!1))))}))})).next((()=>this.fi(e))).next((t=>this.isPrimary&&!t?this.gi(e).next((()=>!1)):!!t&&this.pi(e).next((()=>!0)))))).catch((e=>{if(Qi(e))return ti("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ti("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.ii.enqueueRetryable((()=>this.hi(e))),this.isPrimary=e}))}mi(e){return dh(e).get("owner").next((e=>zi.resolve(this.yi(e))))}wi(e){return fh(e).delete(this.clientId)}async Si(){if(this.isPrimary&&!this.bi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Ps(e,"clientMetadata");return t.G().next((e=>{const n=this.Di(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return zi.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.Ti)for(const t of e)this.Ti.removeItem(this.vi(t.clientId))}}Ri(){this.ci=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ei().then((()=>this.Si())).then((()=>this.Ri()))))}yi(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.oi?zi.resolve(!0):dh(e).get("owner").next((t=>{if(null!==t&&this.bi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.yi(t)&&this.networkEnabled)return!0;if(!this.yi(t)){if(!t.allowTabSynchronization)throw new li(ui.FAILED_PRECONDITION,lh);return!1}}return!(!this.networkEnabled||!this.inForeground)||fh(e).G().next((e=>void 0===this.Di(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&ti("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Lr=!1,this.Fi(),this.ci&&(this.ci.cancel(),this.ci=null),this.Mi(),this.xi(),await this.Ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Rs(e,ns.ae);return this.gi(t).next((()=>this.wi(t)))})),this.Ii.close(),this.Oi()}Di(e,t){return e.filter((e=>this.bi(e.updateTimeMs,t)&&!this.Ci(e.clientId)))}Ni(){return this.runTransaction("getActiveClients","readonly",(e=>fh(e).G().next((e=>this.Di(e,18e5).map((e=>e.clientId))))))}get started(){return this.Lr}getMutationQueue(e,t){return El.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new fl(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Bu.lt(this.serializer,e)}getBundleCache(){return this.Qr}runTransaction(e,t,n){ti("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=function(e){return 15===e?Ds:14===e?Os:13===e?Ns:12===e?xs:11===e?ks:void si()}(this._i);let s;return this.Ii.runTransaction(e,r,i,(r=>(s=new Rs(r,this.Br?this.Br.next():ns.ae),"readwrite-primary"===t?this.mi(s).next((e=>!!e||this.fi(s))).next((t=>{if(!t)throw ni(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable((()=>this.hi(!1))),new li(ui.FAILED_PRECONDITION,$i);return n(s)})).next((e=>this.pi(s).next((()=>e)))):this.Bi(s).next((()=>n(s)))))).then((e=>(s.raiseOnCommittedEvent(),e)))}Bi(e){return dh(e).get("owner").next((e=>{if(null!==e&&this.bi(e.leaseTimestampMs,5e3)&&!this.Ci(e.ownerId)&&!this.yi(e)&&!(this.oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new li(ui.FAILED_PRECONDITION,lh)}))}pi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return dh(e).put("owner",t)}static v(){return Gi.v()}gi(e){const t=dh(e);return t.get("owner").next((e=>this.yi(e)?(ti("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):zi.resolve()))}bi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ni(`Detected an update time that is in the future: ${e} > ${n}`),!1))}di(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ui=()=>{this.ii.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.Ei())))},this.document.addEventListener("visibilitychange",this.ui),this.inForeground="visible"===this.document.visibilityState)}Mi(){this.ui&&(this.document.removeEventListener("visibilitychange",this.ui),this.ui=null)}Ai(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ai=()=>{this.Fi();const e=/(?:Version|Mobile)\/1[456]/;(0,c.nr)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ai))}xi(){this.ai&&(this.window.removeEventListener("pagehide",this.ai),this.ai=null)}Ci(e){var t;try{const n=null!==(null===(t=this.Ti)||void 0===t?void 0:t.getItem(this.vi(e)));return ti("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return ni("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Fi(){if(this.Ti)try{this.Ti.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){ni("Failed to set zombie client id.",e)}}Oi(){if(this.Ti)try{this.Ti.removeItem(this.vi(this.clientId))}catch(e){}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function dh(e){return Ps(e,"owner")}function fh(e){return Ps(e,"clientMetadata")}function ph(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class gh{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Li=n,this.ki=r}static qi(e,t){let n=La(),r=La();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new gh(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.$i(e,t).next((i=>i||this.Ui(e,t,r,n))).next((n=>n||this.Wi(e,t)))}$i(e,t){if(ua(t))return zi.resolve(null);let n=pa(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=ma(t,null,"F"),n=pa(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=La(...r);return this.Ki.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Gi(t,r);return this.zi(t,s,i,n.readTime)?this.$i(e,ma(t,null,"F")):this.ji(e,s,t,n)}))))})))))}Ui(e,t,n,r){return ua(t)||r.isEqual(Ai.min())?this.Wi(e,t):this.Ki.getDocuments(e,n).next((i=>{const s=this.Gi(t,i);return this.zi(t,s,n,r)?this.Wi(e,t):(Zr()<=a.$b.DEBUG&&ti("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),_a(t)),this.ji(e,s,t,Fi(r,-1)))}))}Gi(e,t){let n=new $s(Ia(e));return t.forEach(((t,r)=>{wa(e,r)&&(n=n.add(r))})),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Wi(e,t){return Zr()<=a.$b.DEBUG&&ti("QueryEngine","Using full collection scan to execute query:",_a(t)),this.Ki.getDocumentsMatchingQuery(e,t,Ui.min())}ji(e,t,n,r){return this.Ki.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new Vs(Ii),this.Yi=new Ta((e=>ea(e)),ta),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(n)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Yl(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function vh(e,t,n,r){return new yh(e,t,n,r)}async function _h(e,t){const n=ci(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.es(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=La();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ts:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function wh(e,t){const n=ci(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=zi.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);oi(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=La();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function bh(e){const t=ci(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.kr.getLastRemoteSnapshotVersion(e)))}function Ih(e,t){const n=ci(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.kr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.kr.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(Ws.EMPTY_BYTE_STRING,Ai.min()).withLastLimboFreeSnapshotVersion(Ai.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.kr.updateTargetData(e,u))}));let a=Aa(),c=La();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Eh(e,s,t.documentUpdates).next((e=>{a=e.ns,c=e.rs}))),!r.isEqual(Ai.min())){const t=n.kr.getLastRemoteSnapshotVersion(e).next((t=>n.kr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return zi.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=i,e)))}function Eh(e,t,n){let r=La(),i=La();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Aa();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ai.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):ti("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{ns:r,rs:i}}))}function Th(e,t){const n=ci(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Sh(e,t){const n=ci(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.kr.getTargetData(e,t).next((i=>i?(r=i,zi.resolve(r)):n.kr.allocateTargetId(e).next((i=>(r=new Su(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.kr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function Ah(e,t,n){const r=ci(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Qi(e))throw e;ti("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Ch(e,t,n){const r=ci(e);let i=Ai.min(),s=La();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=ci(e),i=r.Yi.get(n);return void 0!==i?zi.resolve(r.Ji.get(i)):r.kr.getTargetData(t,n)}(r,e,pa(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Hi.getDocumentsMatchingQuery(e,t,n?i:Ai.min(),n?s:La()))).next((e=>(Nh(r,ba(t),e),{documents:e,ss:s})))))}function kh(e,t){const n=ci(e),r=ci(n.kr),i=n.Ji.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.ut(e,t).next((e=>e?e.target:null))))}function xh(e,t){const n=ci(e),r=n.Zi.get(t)||Ai.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Xi.getAllFromCollectionGroup(e,t,Fi(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(Nh(n,t,e),e)))}function Nh(e,t,n){let r=e.Zi.get(t)||Ai.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Zi.set(t,r)}async function Oh(e,t,n,r){const i=ci(e);let s=La(),o=Aa();for(const u of n){const e=t.os(u.metadata.name);u.document&&(s=s.add(e));const n=t._s(u);n.setReadTime(t.us(u.metadata.readTime)),o=o.insert(e,n)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),c=await Sh(i,function(e){return pa(ca(ki.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>Eh(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.kr.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.kr.addMatchingKeys(e,s,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.ns,t.rs))).next((()=>t.ns))))))}async function Dh(e,t,n=La()){const r=await Sh(e,pa(Lu(t.bundledQuery))),i=ci(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=Yc(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Qr.saveNamedQuery(e,t);const o=r.withResumeToken(Ws.EMPTY_BYTE_STRING,s);return i.Ji=i.Ji.insert(o.targetId,o),i.kr.updateTargetData(e,o).next((()=>i.kr.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.kr.addMatchingKeys(e,n,r.targetId))).next((()=>i.Qr.saveNamedQuery(e,t)))}))}function Rh(e,t){return`firestore_clients_${e}_${t}`}function Ph(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Lh(e,t){return`firestore_targets_${e}_${t}`}class Mh{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static cs(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new li(r.error.code,r.error.message))),s?new Mh(e,t,r.state,i):(ni("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fh{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static cs(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new li(n.error.code,n.error.message))),i?new Fh(e,n.state,r):(ni("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Vh{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static cs(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Fa();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=ss(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Vh(e,i):(ni("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Uh{constructor(e,t){this.clientId=e,this.onlineState=t}static cs(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Uh(t.clientId,t.onlineState):(ni("SharedClientState",`Failed to parse online state: ${e}`),null)}}class jh{constructor(){this.activeTargetIds=Fa()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $h{constructor(e,t,n,r,i){this.window=e,this.ii=t,this.persistenceKey=n,this.Is=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ts=this.Es.bind(this),this.ds=new Vs(Ii),this.started=!1,this.As=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Rs=Rh(this.persistenceKey,this.Is),this.Vs=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.ds=this.ds.insert(this.Is,new jh),this.fs=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.gs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.ps=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.ys=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.ws=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ts)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ni();for(const n of e){if(n===this.Is)continue;const e=this.getItem(Rh(this.persistenceKey,n));if(e){const t=Vh.cs(n,e);t&&(this.ds=this.ds.insert(t.clientId,t))}}this.Ss();const t=this.storage.getItem(this.ys);if(t){const e=this.bs(t);e&&this.Ds(e)}for(const n of this.As)this.Es(n);this.As=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.vs(this.ds)}isActiveQueryTarget(e){let t=!1;return this.ds.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Cs(e,"pending")}updateMutationState(e,t,n){this.Cs(e,t,n),this.Fs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Lh(this.persistenceKey,e));if(n){const r=Fh.cs(e,n);r&&(t=r.state)}}return this.Ms.hs(e),this.Ss(),t}removeLocalQueryTarget(e){this.Ms.Ps(e),this.Ss()}isLocalQueryTarget(e){return this.Ms.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Lh(this.persistenceKey,e))}updateQueryState(e,t,n){this.xs(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Fs(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Os(e)}notifyBundleLoaded(e){this.Ns(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ts),this.removeItem(this.Rs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ti("SharedClientState","READ",e,t),t}setItem(e,t){ti("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){ti("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Es(e){const t=e;if(t.storageArea===this.storage){if(ti("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Rs)return void ni("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.fs.test(t.key)){if(null==t.newValue){const e=this.Bs(t.key);return this.Ls(e,null)}{const e=this.ks(t.key,t.newValue);if(e)return this.Ls(e.clientId,e)}}else if(this.gs.test(t.key)){if(null!==t.newValue){const e=this.qs(t.key,t.newValue);if(e)return this.Qs(e)}}else if(this.ps.test(t.key)){if(null!==t.newValue){const e=this.Ks(t.key,t.newValue);if(e)return this.$s(e)}}else if(t.key===this.ys){if(null!==t.newValue){const e=this.bs(t.newValue);if(e)return this.Ds(e)}}else if(t.key===this.Vs){const e=function(e){let t=ns.ae;if(null!=e)try{const n=JSON.parse(e);oi("number"==typeof n),t=n}catch(e){ni("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==ns.ae&&this.sequenceNumberHandler(e)}else if(t.key===this.ws){const e=this.Us(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Ws(e))))}}else this.As.push(t)}))}}get Ms(){return this.ds.get(this.Is)}Ss(){this.setItem(this.Rs,this.Ms.ls())}Cs(e,t,n){const r=new Mh(this.currentUser,e,t,n),i=Ph(this.persistenceKey,this.currentUser,e);this.setItem(i,r.ls())}Fs(e){const t=Ph(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Os(e){const t={clientId:this.Is,onlineState:e};this.storage.setItem(this.ys,JSON.stringify(t))}xs(e,t,n){const r=Lh(this.persistenceKey,e),i=new Fh(e,t,n);this.setItem(r,i.ls())}Ns(e){const t=JSON.stringify(Array.from(e));this.setItem(this.ws,t)}Bs(e){const t=this.fs.exec(e);return t?t[1]:null}ks(e,t){const n=this.Bs(e);return Vh.cs(n,t)}qs(e,t){const n=this.gs.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Mh.cs(new Yr(i),r,t)}Ks(e,t){const n=this.ps.exec(e),r=Number(n[1]);return Fh.cs(r,t)}bs(e){return Uh.cs(e)}Us(e){return JSON.parse(e)}async Qs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Gs(e.batchId,e.state,e.error);ti("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}$s(e){return this.syncEngine.zs(e.targetId,e.state,e.error)}Ls(e,t){const n=t?this.ds.insert(e,t):this.ds.remove(e),r=this.vs(this.ds),i=this.vs(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.js(s,o).then((()=>{this.ds=n}))}Ds(e){this.ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}vs(e){let t=Fa();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Bh{constructor(){this.Hs=new jh,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,n){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new jh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{Ys(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){ti("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){ti("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kh=null;function Gh(){return null===Kh?Kh=function(){return 268435456+Math.round(2147483648*Math.random())}():Kh++,"0x"+Kh.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Wh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="WebChannelConnection";class Yh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=t+"://"+e.host,this.Eo=`projects/${n}/databases/${r}`,this.Ao="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Ro(){return!1}Vo(e,t,n,r,i){const s=Gh(),o=this.mo(e,t);ti("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(a,r,i),this.po(e,o,a,n).then((t=>(ti("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw ri("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}yo(e,t,n,r,i,s){return this.Vo(e,t,n,r,i)}fo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}mo(e,t){const n=Wh[e];return`${this.To}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,t,n,r){const i=Gh();return new Promise(((s,o)=>{const a=new Gr;a.setWithCredentials(!0),a.listenOnce($r.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case jr.NO_ERROR:const t=a.getResponseJson();ti(Qh,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case jr.TIMEOUT:ti(Qh,`RPC '${e}' ${i} timed out`),o(new li(ui.DEADLINE_EXCEEDED,"Request time out"));break;case jr.HTTP_ERROR:const n=a.getStatus();if(ti(Qh,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ui).indexOf(t)>=0?t:ui.UNKNOWN}(t.status);o(new li(e,t.message))}else o(new li(ui.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new li(ui.UNAVAILABLE,"Connection failed."));break;default:si()}}finally{ti(Qh,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);ti(Qh,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}wo(e,t,n){const r=Gh(),i=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Vr(),o=Ur(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new zr({})),this.fo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");ti(Qh,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new Hh({so:t=>{d?ti(Qh,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(ti(Qh,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),ti(Qh,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},oo:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,Kr.EventType.OPEN,(()=>{d||ti(Qh,`RPC '${e}' stream ${r} transport opened.`)})),p(l,Kr.EventType.CLOSE,(()=>{d||(d=!0,ti(Qh,`RPC '${e}' stream ${r} transport closed`),f.Po())})),p(l,Kr.EventType.ERROR,(t=>{d||(d=!0,ri(Qh,`RPC '${e}' stream ${r} transport errored:`,t),f.Po(new li(ui.UNAVAILABLE,"The operation could not be completed")))})),p(l,Kr.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];oi(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){ti(Qh,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=bc[e];if(void 0!==t)return Tc(t)}(t),i=o.message;void 0===n&&(n=ui.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.Po(new li(n,i)),l.close()}else ti(Qh,`RPC '${e}' stream ${r} received:`,i),f.Io(i)}})),p(o,Br.STAT_EVENT,(t=>{t.stat===qr.PROXY?ti(Qh,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===qr.NOPROXY&&ti(Qh,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.ho()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){return"undefined"!=typeof window?window:null}function Jh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(e){return new Kc(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.So=n,this.bo=r,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const t=Math.floor(this.vo+this.Oo()),n=Math.max(0,Date.now()-this.Fo),r=Math.max(0,t-n);r>0&&ti("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.vo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Fo=Date.now(),e()))),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){null!==this.Co&&(this.Co.skipDelay(),this.Co=null)}cancel(){null!==this.Co&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t,n,r,i,s,o,a){this.ii=e,this.Bo=n,this.Lo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new ed(e,t)}$o(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&null===this.qo&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,(()=>this.jo())))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,t){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,4!==e?this.Ko.reset():t&&t.code===ui.RESOURCE_EXHAUSTED?(ni(t.toString()),ni("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):t&&t.code===ui.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),t=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.ko===t&&this.e_(e,n)}),(t=>{e((()=>{const e=new li(ui.UNKNOWN,"Fetching auth token failed: "+t.message);return this.t_(e)}))}))}e_(e,t){const n=this.Xo(this.ko);this.stream=this.n_(e,t),this.stream._o((()=>{n((()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener._o())))})),this.stream.uo((e=>{n((()=>this.t_(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Wo(){this.state=5,this.Ko.xo((async()=>{this.state=0,this.start()}))}t_(e){return ti("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.ko===e?t():(ti("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nd extends td{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}n_(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Ko.reset();const t=cu(this.serializer,e),n=function(e){if(!("targetChange"in e))return Ai.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ai.min():t.readTime?Yc(t.readTime):Ai.min()}(e);return this.listener.r_(t,n)}i_(e){const t={};t.database=ru(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=na(r)?{documents:du(e,r)}:{query:fu(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Hc(e,t.resumeToken);const r=Gc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Ai.min())>0){n.readTime=Wc(e,t.snapshotVersion.toTimestamp());const r=Gc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=gu(this.serializer,e);n&&(t.labels=n),this.Ho(t)}s_(e){const t={};t.database=ru(this.serializer),t.removeTarget=e,this.Ho(t)}}class rd extends td{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(oi(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const t=hu(e.writeResults,e.commitTime),n=Yc(e.commitTime);return this.listener.u_(n,t)}return oi(!e.writeResults||0===e.writeResults.length),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=ru(this.serializer),this.Ho(e)}a_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>uu(this.serializer,e)))};this.Ho(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.h_=!1}P_(){if(this.h_)throw new li(ui.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,t,n){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Vo(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ui.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new li(ui.UNKNOWN,e.toString())}))}yo(e,t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.yo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ui.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new li(ui.UNKNOWN,e.toString())}))}terminate(){this.h_=!0}}class sd{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){0===this.T_&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve()))))}m_(e){"Online"===this.state?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,"Online"===e&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(ni(t),this.d_=!1):ti("OnlineStateTracker",t)}f_(){null!==this.E_&&(this.E_.cancel(),this.E_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys((e=>{n.enqueueAndForget((async()=>{gd(this)&&(ti("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ci(e);t.y_.add(4),await cd(t),t.b_.set("Unknown"),t.y_.delete(4),await ad(t)}(this))}))})),this.b_=new sd(n,r)}}async function ad(e){if(gd(e))for(const t of e.w_)await t(!0)}async function cd(e){for(const t of e.w_)await t(!1)}function ud(e,t){const n=ci(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),pd(n)?fd(n):Rd(n).Uo()&&hd(n,t))}function ld(e,t){const n=ci(e),r=Rd(n);n.p_.delete(t),r.Uo()&&dd(n,t),0===n.p_.size&&(r.Uo()?r.zo():gd(n)&&n.b_.set("Unknown"))}function hd(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ai.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Rd(e).i_(t)}function dd(e,t){e.D_.Be(t),Rd(e).s_(t)}function fd(e){e.D_=new Uc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),Rd(e).start(),e.b_.A_()}function pd(e){return gd(e)&&!Rd(e).$o()&&e.p_.size>0}function gd(e){return 0===ci(e).y_.size}function md(e){e.D_=void 0}async function yd(e){e.p_.forEach(((t,n)=>{hd(e,t)}))}async function vd(e,t){md(e),pd(e)?(e.b_.m_(t),fd(e)):e.b_.set("Unknown")}async function _d(e,t,n){if(e.b_.set("Online"),t instanceof Fc&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.p_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.p_.delete(r),e.D_.removeTarget(r))}(e,t)}catch(n){ti("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await wd(e,n)}else if(t instanceof Lc?e.D_.We(t):t instanceof Mc?e.D_.Ze(t):e.D_.je(t),!n.isEqual(Ai.min()))try{const t=await bh(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.D_.st(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.p_.get(r);i&&e.p_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.p_.get(t);if(!r)return;e.p_.set(t,r.withResumeToken(Ws.EMPTY_BYTE_STRING,r.snapshotVersion)),dd(e,t);const i=new Su(r.target,t,n,r.sequenceNumber);hd(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){ti("RemoteStore","Failed to raise snapshot:",t),await wd(e,t)}}async function wd(e,t,n){if(!Qi(t))throw t;e.y_.add(1),await cd(e),e.b_.set("Offline"),n||(n=()=>bh(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{ti("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await ad(e)}))}function bd(e,t){return t().catch((n=>wd(e,n,t)))}async function Id(e){const t=ci(e),n=Pd(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;Ed(t);)try{const e=await Th(t.localStore,r);if(null===e){0===t.g_.length&&n.zo();break}r=e.batchId,Td(t,e)}catch(e){await wd(t,e)}Sd(t)&&Ad(t)}function Ed(e){return gd(e)&&e.g_.length<10}function Td(e,t){e.g_.push(t);const n=Pd(e);n.Uo()&&n.__&&n.a_(t.mutations)}function Sd(e){return gd(e)&&!Pd(e).$o()&&e.g_.length>0}function Ad(e){Pd(e).start()}async function Cd(e){Pd(e).l_()}async function kd(e){const t=Pd(e);for(const n of e.g_)t.a_(n.mutations)}async function xd(e,t,n){const r=e.g_.shift(),i=vc.from(r,t,n);await bd(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Id(e)}async function Nd(e,t){t&&Pd(e).__&&await async function(e,t){if(function(e){return Ec(e)&&e!==ui.ABORTED}(t.code)){const n=e.g_.shift();Pd(e).Go(),await bd(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Id(e)}}(e,t),Sd(e)&&Ad(e)}async function Od(e,t){const n=ci(e);n.asyncQueue.verifyOperationInProgress(),ti("RemoteStore","RemoteStore received new credentials");const r=gd(n);n.y_.add(3),await cd(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),await ad(n)}async function Dd(e,t){const n=ci(e);t?(n.y_.delete(2),await ad(n)):t||(n.y_.add(2),await cd(n),n.b_.set("Unknown"))}function Rd(e){return e.v_||(e.v_=function(e,t,n){const r=ci(e);return r.P_(),new nd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{_o:yd.bind(null,e),uo:vd.bind(null,e),r_:_d.bind(null,e)}),e.w_.push((async t=>{t?(e.v_.Go(),pd(e)?fd(e):e.b_.set("Unknown")):(await e.v_.stop(),md(e))}))),e.v_}function Pd(e){return e.C_||(e.C_=function(e,t,n){const r=ci(e);return r.P_(),new rd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{_o:Cd.bind(null,e),uo:Nd.bind(null,e),c_:kd.bind(null,e),u_:xd.bind(null,e)}),e.w_.push((async t=>{t?(e.C_.Go(),await Id(e)):(await e.C_.stop(),e.g_.length>0&&(ti("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))}))),e.C_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ld{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Ld(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new li(ui.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Md(e,t){if(ni("AsyncQueue",`${t}: ${e}`),Qi(e))return new li(ui.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Oi.comparator(t.key,n.key):(e,t)=>Oi.comparator(e.key,t.key),this.keyedMap=ka(),this.sortedSet=new Vs(this.comparator)}static emptySet(e){return new Fd(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fd))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Fd;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.F_=new Vs(Oi.comparator)}track(e){const t=e.doc.key,n=this.F_.get(t);n?0!==e.type&&3===n.type?this.F_=this.F_.insert(t,e):3===e.type&&1!==n.type?this.F_=this.F_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.F_=this.F_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.F_=this.F_.remove(t):1===e.type&&2===n.type?this.F_=this.F_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):si():this.F_=this.F_.insert(t,e)}M_(){const e=[];return this.F_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Ud{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Ud(e,t,Fd.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.x_=void 0,this.listeners=[]}}class $d{constructor(){this.queries=new Ta((e=>va(e)),ya),this.onlineState="Unknown",this.O_=new Set}}async function Bd(e,t){const n=ci(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new jd),i)try{s.x_=await n.onListen(r)}catch(e){const n=Md(e,`Initialization of query '${_a(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.N_(n.onlineState),s.x_&&t.B_(s.x_)&&Gd(n)}async function qd(e,t){const n=ci(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function zd(e,t){const n=ci(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.B_(i)&&(r=!0);t.x_=i}}r&&Gd(n)}function Kd(e,t,n){const r=ci(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Gd(e){e.O_.forEach((e=>{e.next()}))}class Wd{constructor(e,t,n){this.query=e,this.L_=t,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=n||{}}B_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ud(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),t=!0):this.K_(e,this.onlineState)&&(this.U_(e),t=!0),this.q_=e,t}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let t=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),t=!0),t}K_(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.W_||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Q_(e){if(e.docChanges.length>0)return!0;const t=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}U_(e){e=Ud.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,t){this.G_=e,this.byteLength=t}z_(){return"metadata"in this.G_}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.serializer=e}os(e){return eu(this.serializer,e)}_s(e){return e.metadata.exists?ou(this.serializer,e.document,!1):Co.newNoDocument(this.os(e.metadata.name),this.us(e.metadata.readTime))}us(e){return Yc(e)}}class Yd{constructor(e,t,n){this.j_=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Xd(e)}H_(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.G_.namedQuery)this.queries.push(e.G_.namedQuery);else if(e.G_.documentMetadata){this.documents.push({metadata:e.G_.documentMetadata}),e.G_.documentMetadata.exists||++t;const n=ki.fromString(e.G_.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.G_.document&&(this.documents[this.documents.length-1].document=e.G_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}J_(e){const t=new Map,n=new Qd(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.os(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||La()).add(e);t.set(n,r)}}return t}async complete(){const e=await Oh(this.localStore,new Qd(this.serializer),this.documents,this.j_.id),t=this.J_(this.documents);for(const n of this.queries)await Dh(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Y_:this.collectionGroups,Z_:e}}}function Xd(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.key=e}}class Zd{constructor(e){this.key=e}}class ef{constructor(e,t){this.query=e,this.X_=t,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=La(),this.mutatedKeys=La(),this.na=Ia(e),this.ra=new Fd(this.na)}get ia(){return this.X_}sa(e,t){const n=t?t.oa:new Vd,r=t?t.ra:this.ra;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=wa(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this._a(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.na(l,a)>0||c&&this.na(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ra:s,oa:n,zi:o,mutatedKeys:i}}_a(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const i=e.oa.M_();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return si()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.na(e.doc,t.doc))),this.aa(n);const s=t?this.ua():[],o=0===this.ta.size&&this.current?1:0,a=o!==this.ea;return this.ea=o,0!==i.length||a?{snapshot:new Ud(this.query,e.ra,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),ca:s}:{ca:s}}N_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Vd,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach((e=>this.X_=this.X_.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.X_=this.X_.delete(e))),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=La(),this.ra.forEach((e=>{this.la(e.key)&&(this.ta=this.ta.add(e.key))}));const t=[];return e.forEach((e=>{this.ta.has(e)||t.push(new Zd(e))})),this.ta.forEach((n=>{e.has(n)||t.push(new Jd(n))})),t}ha(e){this.X_=e.ss,this.ta=La();const t=this.sa(e.documents);return this.applyChanges(t,!0)}Pa(){return Ud.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,0===this.ea,this.hasCachedResults)}}class tf{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class nf{constructor(e){this.key=e,this.Ia=!1}}class rf{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ta={},this.Ea=new Ta((e=>va(e)),ya),this.da=new Map,this.Aa=new Set,this.Ra=new Vs(Oi.comparator),this.Va=new Map,this.ma=new Zl,this.fa={},this.ga=new Map,this.pa=kl.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return!0===this.ya}}async function sf(e,t){const n=Pf(e);let r,i;const s=n.Ea.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const e=await Sh(n.localStore,pa(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await of(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&ud(n.remoteStore,e)}return i}async function of(e,t,n,r,i){e.wa=(t,n,r)=>async function(e,t,n,r){let i=t.view.sa(n);i.zi&&(i=await Ch(e.localStore,t.query,!1).then((({documents:e})=>t.view.sa(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return _f(e,t.targetId,o.ca),o.snapshot}(e,t,n,r);const s=await Ch(e.localStore,t,!0),o=new ef(t,s.ss),a=o.sa(s.documents),c=Pc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);_f(e,n,u.ca);const l=new tf(t,n,o);return e.Ea.set(t,l),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),u.snapshot}async function af(e,t){const n=ci(e),r=n.Ea.get(t),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter((e=>!ya(e,t)))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ah(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),ld(n.remoteStore,r.targetId),yf(n,r.targetId)})).catch(qi)):(yf(n,r.targetId),await Ah(n.localStore,r.targetId,!0))}async function cf(e,t,n){const r=Lf(e);try{const e=await function(e,t){const n=ci(e),r=Si.now(),i=t.reduce(((e,t)=>e.add(t.key)),La());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Aa(),c=La();return n.Xi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=cc(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new hc(e.key,t,Ao(t.value.mapValue),nc.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:xa(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.fa[e.currentUser.toKey()];r||(r=new Vs(Ii)),r=r.insert(t,n),e.fa[e.currentUser.toKey()]=r}(r,e.batchId,n),await If(r,e.changes),await Id(r.remoteStore)}catch(e){const t=Md(e,"Failed to persist write");n.reject(t)}}async function uf(e,t){const n=ci(e);try{const e=await Ih(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Va.get(t);r&&(oi(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Ia=!0:e.modifiedDocuments.size>0?oi(r.Ia):e.removedDocuments.size>0&&(oi(r.Ia),r.Ia=!1))})),await If(n,e,t)}catch(e){await qi(e)}}function lf(e,t,n){const r=ci(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Ea.forEach(((n,r)=>{const i=r.view.N_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=ci(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.N_(t)&&(r=!0)})),r&&Gd(n)}(r.eventManager,t),e.length&&r.Ta.r_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function hf(e,t,n){const r=ci(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Va.get(t),s=i&&i.key;if(s){let e=new Vs(Oi.comparator);e=e.insert(s,Co.newNoDocument(s,Ai.min()));const n=La().add(s),i=new Rc(Ai.min(),new Map,new Vs(Ii),e,n);await uf(r,i),r.Ra=r.Ra.remove(s),r.Va.delete(t),bf(r)}else await Ah(r.localStore,t,!1).then((()=>yf(r,t,n))).catch(qi)}async function df(e,t){const n=ci(e),r=t.batch.batchId;try{const e=await wh(n.localStore,t);mf(n,r,null),gf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await If(n,e)}catch(e){await qi(e)}}async function ff(e,t,n){const r=ci(e);try{const e=await function(e,t){const n=ci(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(oi(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);mf(r,t,n),gf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await If(r,e)}catch(n){await qi(n)}}async function pf(e,t){const n=ci(e);gd(n.remoteStore)||ti("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=ci(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.ga.get(e)||[];r.push(t),n.ga.set(e,r)}catch(e){const n=Md(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function gf(e,t){(e.ga.get(t)||[]).forEach((e=>{e.resolve()})),e.ga.delete(t)}function mf(e,t,n){const r=ci(e);let i=r.fa[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function yf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.da.get(t))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach((t=>{e.ma.containsKey(t)||vf(e,t)}))}function vf(e,t){e.Aa.delete(t.path.canonicalString());const n=e.Ra.get(t);null!==n&&(ld(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),bf(e))}function _f(e,t,n){for(const r of n)r instanceof Jd?(e.ma.addReference(r.key,t),wf(e,r)):r instanceof Zd?(ti("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||vf(e,r.key)):si()}function wf(e,t){const n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||(ti("SyncEngine","New document in limbo: "+n),e.Aa.add(r),bf(e))}function bf(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){const t=e.Aa.values().next().value;e.Aa.delete(t);const n=new Oi(ki.fromString(t)),r=e.pa.next();e.Va.set(r,new nf(n)),e.Ra=e.Ra.insert(n,r),ud(e.remoteStore,new Su(pa(ca(n.path)),r,"TargetPurposeLimboResolution",ns.ae))}}async function If(e,t,n){const r=ci(e),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach(((e,a)=>{o.push(r.wa(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=gh.qi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Ta.r_(i),await async function(e,t){const n=ci(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>zi.forEach(t,(t=>zi.forEach(t.Li,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>zi.forEach(t.ki,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Qi(e))throw e;ti("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ji.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(e,i)}}}(r.localStore,s))}async function Ef(e,t){const n=ci(e);if(!n.currentUser.isEqual(t)){ti("SyncEngine","User change. New user:",t.toKey());const e=await _h(n.localStore,t);n.currentUser=t,function(e,t){e.ga.forEach((e=>{e.forEach((e=>{e.reject(new li(ui.CANCELLED,t))}))})),e.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await If(n,e.ts)}}function Tf(e,t){const n=ci(e),r=n.Va.get(t);if(r&&r.Ia)return La().add(r.key);{let e=La();const r=n.da.get(t);if(!r)return e;for(const t of r){const r=n.Ea.get(t);e=e.unionWith(r.view.ia)}return e}}async function Sf(e,t){const n=ci(e),r=await Ch(n.localStore,t.query,!0),i=t.view.ha(r);return n.isPrimaryClient&&_f(n,t.targetId,i.ca),i}async function Af(e,t){const n=ci(e);return xh(n.localStore,t).then((e=>If(n,e)))}async function Cf(e,t,n,r){const i=ci(e),s=await function(e,t){const n=ci(e),r=ci(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Dn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):zi.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await Id(i.remoteStore):"acknowledged"===n||"rejected"===n?(mf(i,t,r||null),gf(i,t),function(e,t){ci(ci(e).mutationQueue).Cn(t)}(i.localStore,t)):si(),await If(i,s)):ti("SyncEngine","Cannot apply mutation batch with id: "+t)}async function kf(e,t){const n=ci(e);if(Pf(n),Lf(n),!0===t&&!0!==n.ya){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await xf(n,e.toArray());n.ya=!0,await Dd(n.remoteStore,!0);for(const r of t)ud(n.remoteStore,r)}else if(!1===t&&!1!==n.ya){const e=[];let t=Promise.resolve();n.da.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(yf(n,i),Ah(n.localStore,i,!0)))),ld(n.remoteStore,i)})),await t,await xf(n,e),function(e){const t=ci(e);t.Va.forEach(((e,n)=>{ld(t.remoteStore,n)})),t.ma.Rr(),t.Va=new Map,t.Ra=new Vs(Oi.comparator)}(n),n.ya=!1,await Dd(n.remoteStore,!1)}}async function xf(e,t,n){const r=ci(e),i=[],s=[];for(const o of t){let e;const t=r.da.get(o);if(t&&0!==t.length){e=await Sh(r.localStore,pa(t[0]));for(const e of t){const t=r.Ea.get(e),n=await Sf(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await kh(r.localStore,o);e=await Sh(r.localStore,t),await of(r,Nf(t),o,!1,e.resumeToken)}i.push(e)}return r.Ta.r_(s),i}function Nf(e){return aa(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Of(e){return function(e){return ci(ci(e).persistence).Ni()}(ci(e).localStore)}async function Df(e,t,n,r){const i=ci(e);if(i.ya)return void ti("SyncEngine","Ignoring unexpected query state notification.");const s=i.da.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await xh(i.localStore,ba(s[0])),r=Rc.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Ws.EMPTY_BYTE_STRING);await If(i,e,r);break}case"rejected":await Ah(i.localStore,t,!0),yf(i,t,r);break;default:si()}}async function Rf(e,t,n){const r=Pf(e);if(r.ya){for(const e of t){if(r.da.has(e)){ti("SyncEngine","Adding an already active target "+e);continue}const t=await kh(r.localStore,e),n=await Sh(r.localStore,t);await of(r,Nf(t),n.targetId,!1,n.resumeToken),ud(r.remoteStore,n)}for(const e of n)r.da.has(e)&&await Ah(r.localStore,e,!1).then((()=>{ld(r.remoteStore,e),yf(r,e)})).catch(qi)}}function Pf(e){const t=ci(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=uf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Tf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hf.bind(null,t),t.Ta.r_=zd.bind(null,t.eventManager),t.Ta.Sa=Kd.bind(null,t.eventManager),t}function Lf(e){const t=ci(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=df.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ff.bind(null,t),t}function Mf(e,t,n){const r=ci(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=ci(e),r=Yc(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Qr.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Xd(r));const i=new Yd(r,e.localStore,t.serializer);let s=await t.ba();for(;s;){const e=await i.H_(s);e&&n._updateProgress(e),s=await t.ba()}const o=await i.complete();return await If(e,o.Z_,void 0),await function(e,t){const n=ci(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Qr.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Y_)}catch(e){return ri("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class Ff{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Zh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return vh(this.persistence,new mh,e.initialUser,this.serializer)}createPersistence(e){return new sh(ah.zr,this.serializer)}createSharedClientState(e){return new Bh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vf extends Ff{constructor(e,t,n){super(),this.Da=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Da.initialize(this,e),await Lf(this.Da.syncEngine),await Id(this.Da.remoteStore),await this.persistence.Vi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}createLocalStore(e){return vh(this.persistence,new mh,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Ll(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new ts(t,this.persistence);return new es(e.asyncQueue,n)}createPersistence(e){const t=ph(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?wl.withCacheSize(this.cacheSizeBytes):wl.DEFAULT;return new hh(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Xh(),Jh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Bh}}class Uf extends Vf{constructor(e,t){super(e,t,!1),this.Da=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Da.syncEngine;this.sharedClientState instanceof $h&&(this.sharedClientState.syncEngine={Gs:Cf.bind(null,t),zs:Df.bind(null,t),js:Rf.bind(null,t),Ni:Of.bind(null,t),Ws:Af.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Vi((async e=>{await kf(this.Da.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}createSharedClientState(e){const t=Xh();if(!$h.v(t))throw new li(ui.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=ph(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new $h(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class jf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>lf(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ef.bind(null,this.syncEngine),await Dd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $d}()}createDatastore(e){const t=Zh(e.databaseInfo.databaseId),n=function(e){return new Yh(e)}(e.databaseInfo);return function(e,t,n,r){return new id(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new od(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>lf(this.syncEngine,e,0)),function(){return zh.v()?new zh:new qh}())}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new rf(e,t,n,r,i,s);return o&&(a.ya=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ci(e);ti("RemoteStore","RemoteStore shutting down."),t.y_.add(5),await cd(t),t.S_.shutdown(),t.b_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):ni("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t){this.Fa=e,this.serializer=t,this.metadata=new hi,this.buffer=new Uint8Array,this.Ma=function(){return new TextDecoder("utf-8")}(),this.xa().then((e=>{e&&e.z_()?this.metadata.resolve(e.G_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.G_)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Fa.cancel()}async getMetadata(){return this.metadata.promise}async ba(){return await this.getMetadata(),this.xa()}async xa(){const e=await this.Oa();if(null===e)return null;const t=this.Ma.decode(e),n=Number(t);isNaN(n)&&this.Na(`length string (${t}) is not valid number`);const r=await this.Ba(n);return new Hd(JSON.parse(r),e.length+n)}La(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Oa(){for(;this.La()<0;)if(await this.ka())break;if(0===this.buffer.length)return null;const e=this.La();e<0&&this.Na("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ba(e){for(;this.buffer.length<e;)await this.ka()&&this.Na("Reached the end of bundle when more is expected.");const t=this.Ma.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Na(e){throw this.Fa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ka(){const e=await this.Fa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new li(ui.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=ci(e),r=ru(n.serializer)+"/documents",i={documents:t.map((e=>Zc(n.serializer,e)))},s=await n.yo("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=au(n.serializer,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());oi(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new gc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=Oi.fromPath(t);this.mutations.push(new mc(n,this.precondition(n)))})),await async function(e,t){const n=ci(e),r=ru(n.serializer)+"/documents",i={writes:t.map((e=>uu(n.serializer,e)))};await n.Vo("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw si();t=Ai.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new li(ui.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Ai.min())?nc.exists(!1):nc.updateTime(t):nc.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ai.min()))throw new li(ui.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return nc.updateTime(t)}return nc.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.qa=n.maxAttempts,this.Ko=new ed(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo((async()=>{const e=new zf(this.datastore),t=this.Ka(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.$a(e)}))))})).catch((e=>{this.$a(e)}))}))}Ka(e){try{const t=this.updateFunction(e);return!rs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget((()=>(this.Qa(),Promise.resolve())))):this.deferred.reject(e)}Ua(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Ec(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Yr.UNAUTHENTICATED,this.clientId=bi.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{ti("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(ti("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new li(ui.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Md(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Wf(e,t){e.asyncQueue.verifyOperationInProgress(),ti("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await _h(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Hf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Yf(e);ti("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Od(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Od(t.remoteStore,n))),e._onlineComponents=t}function Qf(e){return"FirebaseError"===e.name?e.code===ui.FAILED_PRECONDITION||e.code===ui.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Yf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ti("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Qf(n))throw n;ri("Error using user provided cache. Falling back to memory cache: "+n),await Wf(e,new Ff)}}else ti("FirestoreClient","Using default OfflineComponentProvider"),await Wf(e,new Ff);return e._offlineComponents}async function Xf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ti("FirestoreClient","Using user provided OnlineComponentProvider"),await Hf(e,e._uninitializedComponentsProvider._online)):(ti("FirestoreClient","Using default OnlineComponentProvider"),await Hf(e,new jf))),e._onlineComponents}function Jf(e){return Yf(e).then((e=>e.persistence))}function Zf(e){return Yf(e).then((e=>e.localStore))}function ep(e){return Xf(e).then((e=>e.remoteStore))}function tp(e){return Xf(e).then((e=>e.syncEngine))}function np(e){return Xf(e).then((e=>e.datastore))}async function rp(e){const t=await Xf(e),n=t.eventManager;return n.onListen=sf.bind(null,t.syncEngine),n.onUnlisten=af.bind(null,t.syncEngine),n}function ip(e){return e.asyncQueue.enqueue((async()=>{const t=await Jf(e),n=await ep(e);return t.setNetworkEnabled(!0),function(e){const t=ci(e);return t.y_.delete(0),ad(t)}(n)}))}function sp(e){return e.asyncQueue.enqueue((async()=>{const t=await Jf(e),n=await ep(e);return t.setNetworkEnabled(!1),async function(e){const t=ci(e);t.y_.add(0),await cd(t),t.b_.set("Offline")}(n)}))}function op(e,t){const n=new hi;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=ci(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new li(ui.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Md(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Zf(e),t,n))),n.promise}function ap(e,t,n={}){const r=new hi;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Bf({next:s=>{t.enqueueAndForget((()=>qd(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new li(ui.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new li(ui.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Wd(ca(n.path),s,{includeMetadataChanges:!0,W_:!0});return Bd(e,o)}(await rp(e),e.asyncQueue,t,n,r))),r.promise}function cp(e,t){const n=new hi;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await Ch(e,t,!0),i=new ef(t,r.ss),s=i.sa(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Md(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Zf(e),t,n))),n.promise}function up(e,t,n={}){const r=new hi;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Bf({next:n=>{t.enqueueAndForget((()=>qd(e,o))),n.fromCache&&"server"===r.source?i.reject(new li(ui.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Wd(n,s,{includeMetadataChanges:!0,W_:!0});return Bd(e,o)}(await rp(e),e.asyncQueue,t,n,r))),r.promise}function lp(e,t){const n=new Bf(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){ci(e).O_.add(t),t.next()}(await rp(e),n))),()=>{n.Ca(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){ci(e).O_.delete(t)}(await rp(e),n)))}}function hp(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?Cc().encode(e):e,function(e,t){return new qf(e,t)}(function(e,t){if(e instanceof Uint8Array)return $f(e,t);if(e instanceof ArrayBuffer)return $f(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}(n,Zh(t));e.asyncQueue.enqueueAndForget((async()=>{Mf(await tp(e),i,r)}))}function dp(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=ci(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Qr.getNamedQuery(e,t)))}(await Zf(e),t)))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fp(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const pp=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(e,t,n){if(!n)throw new li(ui.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function mp(e,t,n,r){if(!0===t&&!0===r)throw new li(ui.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function yp(e){if(!Oi.isDocumentKey(e))throw new li(ui.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function vp(e){if(Oi.isDocumentKey(e))throw new li(ui.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function _p(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":si()}function wp(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new li(ui.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_p(e);throw new li(ui.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function bp(e,t){if(t<=0)throw new li(ui.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new li(ui.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new li(ui.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fp(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new li(ui.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new li(ui.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new li(ui.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ep{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ip({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new li(ui.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new li(ui.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ip(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new fi;switch(e.type){case"firstParty":return new yi(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new li(ui.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=pp.get(e);t&&(ti("ComponentProvider","Removing Datastore"),pp.delete(e),t.terminate())}(this),Promise.resolve()}}function Tp(e,t,n,r={}){var i;const s=(e=wp(e,Ep))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Yr.MOCK_USER;else{t=(0,c.Fy)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new li(ui.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Yr(s)}e._authCredentials=new pi(new di(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Sp(this.firestore,e,this._query)}}class Ap{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cp(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ap(this.firestore,e,this._key)}}class Cp extends Sp{constructor(e,t,n){super(e,t,ca(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ap(this.firestore,null,new Oi(e))}withConverter(e){return new Cp(this.firestore,e,this._path)}}function kp(e,t,...n){if(e=(0,c.Ku)(e),gp("collection","path",t),e instanceof Ep){const r=ki.fromString(t,...n);return vp(r),new Cp(e,null,r)}{if(!(e instanceof Ap||e instanceof Cp))throw new li(ui.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ki.fromString(t,...n));return vp(r),new Cp(e.firestore,null,r)}}function xp(e,t){if(e=wp(e,Ep),gp("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new li(ui.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Sp(e,null,function(e){return new oa(ki.emptyPath(),e)}(t))}function Np(e,t,...n){if(e=(0,c.Ku)(e),1===arguments.length&&(t=bi.V()),gp("doc","path",t),e instanceof Ep){const r=ki.fromString(t,...n);return yp(r),new Ap(e,null,new Oi(r))}{if(!(e instanceof Ap||e instanceof Cp))throw new li(ui.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ki.fromString(t,...n));return yp(r),new Ap(e.firestore,e instanceof Cp?e.converter:null,new Oi(r))}}function Op(e,t){return e=(0,c.Ku)(e),t=(0,c.Ku)(t),(e instanceof Ap||e instanceof Cp)&&(t instanceof Ap||t instanceof Cp)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Dp(e,t){return e=(0,c.Ku)(e),t=(0,c.Ku)(t),e instanceof Sp&&t instanceof Sp&&e.firestore===t.firestore&&ya(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Rp{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new ed(this,"async_queue_retry"),this.Xa=()=>{const e=Jh();e&&ti("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ko.No()};const e=Jh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const t=Jh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise((()=>{}));const t=new hi;return this.tu((()=>this.za&&this.Ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Ga.push(e),this.nu())))}async nu(){if(0!==this.Ga.length){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Qi(e))throw e;ti("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo((()=>this.nu()))}}tu(e){const t=this.Wa.then((()=>(this.Ja=!0,e().catch((e=>{this.Ha=e,this.Ja=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw ni("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ja=!1,e))))));return this.Wa=t,t}enqueueAfterDelay(e,t,n){this.eu(),this.Za.indexOf(e)>-1&&(t=0);const r=Ld.createAndSchedule(this,e,t,n,(e=>this.ru(e)));return this.ja.push(r),r}eu(){this.Ha&&si()}verifyOperationInProgress(){}async iu(){let e;do{e=this.Wa,await e}while(e!==this.Wa)}su(e){for(const t of this.ja)if(t.timerId===e)return!0;return!1}ou(e){return this.iu().then((()=>{this.ja.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.ja)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.iu()}))}_u(e){this.Za.push(e)}ru(e){const t=this.ja.indexOf(e);this.ja.splice(t,1)}}function Pp(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Lp{constructor(){this._progressObserver={},this._taskCompletionResolver=new hi,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=-1;class Fp extends Ep{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=function(){return new Rp}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Up(this),this._firestoreClient.terminate()}}function Vp(e){return e._firestoreClient||Up(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Up(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new to(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,fp(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Gf(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function jp(e,t){Qp(e=wp(e,Fp));const n=Vp(e);if(n._uninitializedComponentsProvider)throw new li(ui.FAILED_PRECONDITION,"SDK cache is already specified.");ri("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=e._freezeSettings(),i=new jf;return Bp(n,i,new Vf(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function $p(e){Qp(e=wp(e,Fp));const t=Vp(e);if(t._uninitializedComponentsProvider)throw new li(ui.FAILED_PRECONDITION,"SDK cache is already specified.");ri("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings(),r=new jf;return Bp(t,r,new Uf(r,n.cacheSizeBytes))}function Bp(e,t,n){const r=new hi;return e.asyncQueue.enqueue((async()=>{try{await Wf(e,n),await Hf(e,t),r.resolve()}catch(e){const n=e;if(!Qf(n))throw n;ri("Error enabling indexeddb cache. Falling back to memory cache: "+n),r.reject(n)}})).then((()=>r.promise))}function qp(e){if(e._initialized&&!e._terminated)throw new li(ui.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new hi;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Gi.v())return Promise.resolve();const t=e+"main";await Gi.delete(t)}(ph(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function zp(e){return function(e){const t=new hi;return e.asyncQueue.enqueueAndForget((async()=>pf(await tp(e),t))),t.promise}(Vp(e=wp(e,Fp)))}function Kp(e){return ip(Vp(e=wp(e,Fp)))}function Gp(e){return sp(Vp(e=wp(e,Fp)))}function Wp(e,t){const n=Vp(e=wp(e,Fp)),r=new Lp;return hp(n,e._databaseId,t,r),r}function Hp(e,t){return dp(Vp(e=wp(e,Fp)),t).then((t=>t?new Sp(e,null,t.query):null))}function Qp(e){if(e._initialized||e._terminated)throw new li(ui.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yp(Ws.fromBase64String(e))}catch(e){throw new li(ui.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Yp(Ws.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new li(ui.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ni(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jp{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new li(ui.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new li(ui.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ii(this._lat,e._lat)||Ii(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=/^__.*__$/;class tg{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new hc(e,this.data,this.fieldMask,t,this.fieldTransforms):new lc(e,this.data,t,this.fieldTransforms)}}class ng{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new hc(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw si()}}class ig{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.au(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new ig(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.cu({path:n,hu:!1});return r.Pu(e),r}Iu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.cu({path:n,hu:!1});return r.au(),r}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Tg(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(0===e.length)throw this.Eu("Document fields must not be empty");if(rg(this.uu)&&eg.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class sg{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Zh(e)}Ru(e,t,n,r=!1){return new ig({uu:e,methodName:t,Au:n,path:Ni.emptyPath(),hu:!1,du:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function og(e){const t=e._freezeSettings(),n=Zh(e._databaseId);return new sg(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ag(e,t,n,r,i,s={}){const o=e.Ru(s.merge||s.mergeFields?2:0,t,n,i);wg("Data must be an object, but it was:",o,r);const a=vg(r,o);let c,u;if(s.merge)c=new zs(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=bg(t,r,n);if(!o.contains(i))throw new li(ui.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Sg(e,i)||e.push(i)}c=new zs(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new tg(new So(a),c,u)}class cg extends Jp{_toFieldTransform(e){if(2!==e.uu)throw 1===e.uu?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cg}}function ug(e,t,n){return new ig({uu:3,Au:t.settings.Au,methodName:e._methodName,hu:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class lg extends Jp{_toFieldTransform(e){return new Za(e.path,new Ka)}isEqual(e){return e instanceof lg}}class hg extends Jp{constructor(e,t){super(e),this.Vu=t}_toFieldTransform(e){const t=ug(this,e,!0),n=this.Vu.map((e=>yg(e,t))),r=new Ga(n);return new Za(e.path,r)}isEqual(e){return this===e}}class dg extends Jp{constructor(e,t){super(e),this.Vu=t}_toFieldTransform(e){const t=ug(this,e,!0),n=this.Vu.map((e=>yg(e,t))),r=new Ha(n);return new Za(e.path,r)}isEqual(e){return this===e}}class fg extends Jp{constructor(e,t){super(e),this.mu=t}_toFieldTransform(e){const t=new Ya(e.serializer,ja(e.serializer,this.mu));return new Za(e.path,t)}isEqual(e){return this===e}}function pg(e,t,n,r){const i=e.Ru(1,t,n);wg("Data must be an object, but it was:",i,r);const s=[],o=So.empty();Ms(r,((e,r)=>{const a=Eg(t,e,n);r=(0,c.Ku)(r);const u=i.Iu(a);if(r instanceof cg)s.push(a);else{const e=yg(r,u);null!=e&&(s.push(a),o.set(a,e))}}));const a=new zs(s);return new ng(o,a,i.fieldTransforms)}function gg(e,t,n,r,i,s){const o=e.Ru(1,t,n),a=[bg(t,r,n)],u=[i];if(s.length%2!=0)throw new li(ui.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(bg(t,s[c])),u.push(s[c+1]);const l=[],h=So.empty();for(let f=a.length-1;f>=0;--f)if(!Sg(l,a[f])){const e=a[f];let t=u[f];t=(0,c.Ku)(t);const n=o.Iu(e);if(t instanceof cg)l.push(e);else{const r=yg(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new zs(l);return new ng(h,d,o.fieldTransforms)}function mg(e,t,n,r=!1){return yg(n,e.Ru(r?4:3,t))}function yg(e,t){if(_g(e=(0,c.Ku)(e)))return wg("Unsupported field value:",t,e),vg(e,t);if(e instanceof Jp)return function(e,t){if(!rg(t.uu))throw t.Eu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Eu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&4!==t.uu)throw t.Eu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=yg(i,t.Tu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ja(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Si.fromDate(e);return{timestampValue:Wc(t.serializer,n)}}if(e instanceof Si){const n=new Si(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Wc(t.serializer,n)}}if(e instanceof Zp)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Yp)return{bytesValue:Hc(t.serializer,e._byteString)};if(e instanceof Ap){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Eu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Xc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Eu(`Unsupported field value: ${_p(e)}`)}(e,t)}function vg(e,t){const n={};return Fs(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ms(e,((e,r)=>{const i=yg(r,t.lu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function _g(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Si||e instanceof Zp||e instanceof Yp||e instanceof Ap||e instanceof Jp)}function wg(e,t,n){if(!_g(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=_p(n);throw"an object"===r?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function bg(e,t,n){if((t=(0,c.Ku)(t))instanceof Xp)return t._internalPath;if("string"==typeof t)return Eg(e,t);throw Tg("Field path arguments must be of type string or ",e,!1,void 0,n)}const Ig=new RegExp("[~\\*/\\[\\]]");function Eg(e,t,n){if(t.search(Ig)>=0)throw Tg(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Xp(...t.split("."))._internalPath}catch(I){throw Tg(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Tg(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new li(ui.INVALID_ARGUMENT,a+e+c)}function Sg(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ap(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Cg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(kg("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Cg extends Ag{data(){return super.data()}}function kg(e,t){return"string"==typeof t?Eg(e,t):t instanceof Xp?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new li(ui.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ng{}class Og extends Ng{}function Dg(e,t,...n){let r=[];t instanceof Ng&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Lg)).length,n=e.filter((e=>e instanceof Rg)).length;if(t>1||t>0&&n>0)throw new li(ui.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class Rg extends Og{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Rg(e,t,n)}_apply(e){const t=this._parse(e);return Yg(e._query,t),new Sp(e.firestore,e.converter,ga(e._query,t))}_parse(e){const t=og(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new li(ui.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Qg(o,s);const t=[];for(const n of o)t.push(Hg(r,e,n));a={arrayValue:{values:t}}}else a=Hg(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Qg(o,s),a=mg(n,t,o,"in"===s||"not-in"===s);return Po.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Pg(e,t,n){const r=t,i=kg("where",e);return Rg._create(i,r,n)}class Lg extends Ng{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Lg(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Lo.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Yg(n,i),n=ga(n,i)}(e._query,t),new Sp(e.firestore,e.converter,ga(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Mg extends Og{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Mg(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new li(ui.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new li(ui.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Oo(t,n);return function(e,t){if(null===la(e)){const n=ha(e);null!==n&&Xg(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new Sp(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new oa(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Fg(e,t="asc"){const n=t,r=kg("orderBy",e);return Mg._create(r,n)}class Vg extends Og{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Vg(e,t,n)}_apply(e){return new Sp(e.firestore,e.converter,ma(e._query,this._limit,this._limitType))}}function Ug(e){return bp("limit",e),Vg._create("limit",e,"F")}function jg(e){return bp("limitToLast",e),Vg._create("limitToLast",e,"L")}class $g extends Og{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new $g(e,t,n)}_apply(e){const t=Wg(e,this.type,this._docOrFields,this._inclusive);return new Sp(e.firestore,e.converter,function(e,t){return new oa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Bg(...e){return $g._create("startAt",e,!0)}function qg(...e){return $g._create("startAfter",e,!1)}class zg extends Og{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new zg(e,t,n)}_apply(e){const t=Wg(e,this.type,this._docOrFields,this._inclusive);return new Sp(e.firestore,e.converter,function(e,t){return new oa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Kg(...e){return zg._create("endBefore",e,!1)}function Gg(...e){return zg._create("endAt",e,!0)}function Wg(e,t,n,r){if(n[0]=(0,c.Ku)(n[0]),n[0]instanceof Ag)return function(e,t,n,r,i){if(!r)throw new li(ui.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of fa(e))if(o.field.isKeyField())s.push(fo(t,r.key));else{const e=r.data.field(o.field);if(Js(e))throw new li(ui.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new li(ui.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new ko(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=og(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new li(ui.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new li(ui.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!da(e)&&-1!==s.indexOf("/"))throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(ki.fromString(s));if(!Oi.isDocumentKey(n))throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Oi(n);a.push(fo(t,i))}else{const e=mg(n,r,s);a.push(e)}}return new ko(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Hg(e,t,n){if("string"==typeof(n=(0,c.Ku)(n))){if(""===n)throw new li(ui.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!da(t)&&-1!==n.indexOf("/"))throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ki.fromString(n));if(!Oi.isDocumentKey(r))throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fo(e,new Oi(r))}if(n instanceof Ap)return fo(e,n._key);throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_p(n)}.`)}function Qg(e,t){if(!Array.isArray(e)||0===e.length)throw new li(ui.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Yg(e,t){if(t.isInequality()){const n=ha(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new li(ui.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=la(e);null!==i&&Xg(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new li(ui.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new li(ui.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Xg(e,t,n){if(!n.isEqual(t))throw new li(ui.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Jg{convertValue(e,t="none"){switch(so(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ys(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw si()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ms(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Zp(Ys(e.latitude),Ys(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Zs(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(eo(e));default:return null}}convertTimestamp(e){const t=Qs(e);return new Si(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ki.fromString(e);oi(Tu(n));const r=new no(n.get(1),n.get(3)),i=new Oi(n.popFirst(5));return r.isEqual(t)||ni(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class em extends Jg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ap(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tm{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nm extends Ag{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(kg("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class rm extends nm{data(e={}){return super.data(e)}}class im{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new tm(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new rm(this._firestore,this._userDataWriter,n.key,n,new tm(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new li(ui.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new rm(e._firestore,e._userDataWriter,n.doc.key,n.doc,new tm(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new rm(e._firestore,e._userDataWriter,t.doc.key,t.doc,new tm(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:sm(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function sm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return si()}}function om(e,t){return e instanceof nm&&t instanceof nm?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof im&&t instanceof im&&e._firestore===t._firestore&&Dp(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(e){e=wp(e,Ap);const t=wp(e.firestore,Fp);return ap(Vp(t),e._key).then((n=>bm(t,e,n)))}class cm extends Jg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ap(this.firestore,null,t)}}function um(e){e=wp(e,Ap);const t=wp(e.firestore,Fp),n=Vp(t),r=new cm(t);return op(n,e._key).then((n=>new nm(t,r,e._key,n,new tm(null!==n&&n.hasLocalMutations,!0),e.converter)))}function lm(e){e=wp(e,Ap);const t=wp(e.firestore,Fp);return ap(Vp(t),e._key,{source:"server"}).then((n=>bm(t,e,n)))}function hm(e){e=wp(e,Sp);const t=wp(e.firestore,Fp),n=Vp(t),r=new cm(t);return xg(e._query),up(n,e._query).then((n=>new im(t,r,e,n)))}function dm(e){e=wp(e,Sp);const t=wp(e.firestore,Fp),n=Vp(t),r=new cm(t);return cp(n,e._query).then((n=>new im(t,r,e,n)))}function fm(e){e=wp(e,Sp);const t=wp(e.firestore,Fp),n=Vp(t),r=new cm(t);return up(n,e._query,{source:"server"}).then((n=>new im(t,r,e,n)))}function pm(e,t,n){e=wp(e,Ap);const r=wp(e.firestore,Fp),i=Zg(e.converter,t,n);return wm(r,[ag(og(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,nc.none())])}function gm(e,t,n,...r){e=wp(e,Ap);const i=wp(e.firestore,Fp),s=og(i);let o;return o="string"==typeof(t=(0,c.Ku)(t))||t instanceof Xp?gg(s,"updateDoc",e._key,t,n,r):pg(s,"updateDoc",e._key,t),wm(i,[o.toMutation(e._key,nc.exists(!0))])}function mm(e){return wm(wp(e.firestore,Fp),[new gc(e._key,nc.none())])}function ym(e,t){const n=wp(e.firestore,Fp),r=Np(e),i=Zg(e.converter,t);return wm(n,[ag(og(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,nc.exists(!1))]).then((()=>r))}function vm(e,...t){var n,r,i;e=(0,c.Ku)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Pp(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Pp(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Ap)l=wp(e.firestore,Fp),h=ca(e._key.path),u={next:n=>{t[o]&&t[o](bm(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=wp(e,Sp);l=wp(n.firestore,Fp),h=n._query;const r=new cm(l);u={next:e=>{t[o]&&t[o](new im(l,r,n,e))},error:t[o+1],complete:t[o+2]},xg(e._query)}return function(e,t,n,r){const i=new Bf(r),s=new Wd(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Bd(await rp(e),s))),()=>{i.Ca(),e.asyncQueue.enqueueAndForget((async()=>qd(await rp(e),s)))}}(Vp(l),h,a,u)}function _m(e,t){return lp(Vp(e=wp(e,Fp)),Pp(t)?t:{next:t})}function wm(e,t){return function(e,t){const n=new hi;return e.asyncQueue.enqueueAndForget((async()=>cf(await tp(e),t,n))),n.promise}(Vp(e),t)}function bm(e,t,n){const r=n.docs.get(t._key),i=new cm(e);return new nm(e,i,t._key,r,new tm(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Im={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=og(e)}set(e,t,n){this._verifyNotCommitted();const r=Tm(e,this._firestore),i=Zg(r.converter,t,n),s=ag(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,nc.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Tm(e,this._firestore);let s;return s="string"==typeof(t=(0,c.Ku)(t))||t instanceof Xp?gg(this._dataReader,"WriteBatch.update",i._key,t,n,r):pg(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,nc.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Tm(e,this._firestore);return this._mutations=this._mutations.concat(new gc(t._key,nc.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new li(ui.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Tm(e,t){if((e=(0,c.Ku)(e)).firestore!==t)throw new li(ui.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=og(e)}get(e){const t=Tm(e,this._firestore),n=new em(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return si();const r=e[0];if(r.isFoundDocument())return new Ag(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Ag(this._firestore,n,t._key,null,t.converter);throw si()}))}set(e,t,n){const r=Tm(e,this._firestore),i=Zg(r.converter,t,n),s=ag(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=Tm(e,this._firestore);let s;return s="string"==typeof(t=(0,c.Ku)(t))||t instanceof Xp?gg(this._dataReader,"Transaction.update",i._key,t,n,r):pg(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=Tm(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Tm(e,this._firestore),n=new cm(this._firestore);return super.get(e).then((e=>new nm(this._firestore,n,t._key,e._document,new tm(!1,!1),t.converter)))}}function Am(e,t,n){e=wp(e,Fp);const r=Object.assign(Object.assign({},Im),n);return function(e){if(e.maxAttempts<1)throw new li(ui.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new hi;return e.asyncQueue.enqueueAndForget((async()=>{const i=await np(e);new Kf(e.asyncQueue,i,n,t,r).run()})),r.promise}(Vp(e),(n=>t(new Sm(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(){return new cg("deleteField")}function km(){return new lg("serverTimestamp")}function xm(...e){return new hg("arrayUnion",e)}function Nm(...e){return new dg("arrayRemove",e)}function Om(e){return new fg("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Xr=e}(s.SDK_VERSION),(0,s._registerComponent)(new o.uA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Fp(new gi(e.getProvider("auth-internal")),new _i(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new li(ui.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new no(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(Qr,"4.1.0",e),(0,s.registerVersion)(Qr,"4.1.0","esm2017")}();const Dm="@firebase/firestore-compat",Rm="0.3.14";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pm(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new li("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(){if("undefined"===typeof Uint8Array)throw new li("unimplemented","Uint8Arrays are not available in this environment.")}function Mm(){if(!Gs())throw new li("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Fm{constructor(e){this._delegate=e}static fromBase64String(e){return Mm(),new Fm(Yp.fromBase64String(e))}static fromUint8Array(e){return Lm(),new Fm(Yp.fromUint8Array(e))}toBase64(){return Mm(),this._delegate.toBase64()}toUint8Array(){return Lm(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(e){return Um(e,["next","error","complete"])}function Um(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{enableIndexedDbPersistence(e,t){return jp(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return $p(e._delegate)}clearIndexedDbPersistence(e){return qp(e._delegate)}}class $m{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof no||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||ri("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Tp(this._delegate,e,t,n)}enableNetwork(){return Kp(this._delegate)}disableNetwork(){return Gp(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,mp("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return zp(this._delegate)}onSnapshotsInSync(e){return _m(this._delegate,e)}get app(){if(!this._appCompat)throw new li("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ny(this,kp(this._delegate,e))}catch(t){throw Hm(t,"collection()","Firestore.collection()")}}doc(e){try{return new Wm(this,Np(this._delegate,e))}catch(t){throw Hm(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Zm(this,xp(this._delegate,e))}catch(t){throw Hm(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Am(this._delegate,(t=>e(new zm(this,t))))}batch(){return Vp(this._delegate),new Km(new Em(this._delegate,(e=>wm(this._delegate,e))))}loadBundle(e){return Wp(this._delegate,e)}namedQuery(e){return Hp(this._delegate,e).then((e=>e?new Zm(this,e):null))}}class Bm extends Jg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fm(new Yp(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Wm.forKey(t,this.firestore,null)}}function qm(e){ei(e)}class zm{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Bm(e)}get(e){const t=ry(e);return this._delegate.get(t).then((e=>new Xm(this._firestore,new nm(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=ry(e);return n?(Pm("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=ry(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=ry(e);return this._delegate.delete(t),this}}class Km{constructor(e){this._delegate=e}set(e,t,n){const r=ry(e);return n?(Pm("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=ry(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=ry(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Gm{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new rm(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Jm(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Gm.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new Gm(e,new Bm(e),t),r.set(t,i)),i}}Gm.INSTANCES=new WeakMap;class Wm{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Bm(e)}static forPath(e,t,n){if(e.length%2!==0)throw new li("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Wm(t,new Ap(t._delegate,n,new Oi(e)))}static forKey(e,t,n){return new Wm(t,new Ap(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new ny(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ny(this.firestore,kp(this._delegate,e))}catch(t){throw Hm(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,c.Ku)(e),e instanceof Ap&&Op(this._delegate,e)}set(e,t){t=Pm("DocumentReference.set",t);try{return t?pm(this._delegate,e,t):pm(this._delegate,e)}catch(n){throw Hm(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?gm(this._delegate,e):gm(this._delegate,e,t,...n)}catch(r){throw Hm(r,"updateDoc()","DocumentReference.update()")}}delete(){return mm(this._delegate)}onSnapshot(...e){const t=Qm(e),n=Ym(e,(e=>new Xm(this.firestore,new nm(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return vm(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?um(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?lm(this._delegate):am(this._delegate),t.then((e=>new Xm(this.firestore,new nm(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Wm(this.firestore,e?this._delegate.withConverter(Gm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Hm(e,t,n){return e.message=e.message.replace(t,n),e}function Qm(e){for(const t of e)if("object"===typeof t&&!Vm(t))return t;return{}}function Ym(e,t){var n,r;let i;return i=Vm(e[0])?e[0]:Vm(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class Xm{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Wm(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return om(this._delegate,e._delegate)}}class Jm extends Xm{data(e){const t=this._delegate.data(e);return ai(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Zm{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Bm(e)}where(e,t,n){try{return new Zm(this.firestore,Dg(this._delegate,Pg(e,t,n)))}catch(r){throw Hm(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Zm(this.firestore,Dg(this._delegate,Fg(e,t)))}catch(n){throw Hm(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Zm(this.firestore,Dg(this._delegate,Ug(e)))}catch(t){throw Hm(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Zm(this.firestore,Dg(this._delegate,jg(e)))}catch(t){throw Hm(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Zm(this.firestore,Dg(this._delegate,Bg(...e)))}catch(t){throw Hm(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Zm(this.firestore,Dg(this._delegate,qg(...e)))}catch(t){throw Hm(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Zm(this.firestore,Dg(this._delegate,Kg(...e)))}catch(t){throw Hm(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Zm(this.firestore,Dg(this._delegate,Gg(...e)))}catch(t){throw Hm(t,"endAt()","Query.endAt()")}}isEqual(e){return Dp(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?dm(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?fm(this._delegate):hm(this._delegate),t.then((e=>new ty(this.firestore,new im(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=Qm(e),n=Ym(e,(e=>new ty(this.firestore,new im(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return vm(this._delegate,t,n)}withConverter(e){return new Zm(this.firestore,e?this._delegate.withConverter(Gm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class ey{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Jm(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ty{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Zm(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new Jm(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new ey(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new Jm(this._firestore,n))}))}isEqual(e){return om(this._delegate,e._delegate)}}class ny extends Zm{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Wm(this.firestore,e):null}doc(e){try{return new Wm(this.firestore,void 0===e?Np(this._delegate):Np(this._delegate,e))}catch(t){throw Hm(t,"doc()","CollectionReference.doc()")}}add(e){return ym(this._delegate,e).then((e=>new Wm(this.firestore,e)))}isEqual(e){return Op(this._delegate,e._delegate)}withConverter(e){return new ny(this.firestore,e?this._delegate.withConverter(Gm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ry(e){return wp(e,Ap)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(...e){this._delegate=new Xp(...e)}static documentId(){return new iy(Ni.keyField().canonicalString())}isEqual(e){return e=(0,c.Ku)(e),e instanceof Xp&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this._delegate=e}static serverTimestamp(){const e=km();return e._methodName="FieldValue.serverTimestamp",new sy(e)}static delete(){const e=Cm();return e._methodName="FieldValue.delete",new sy(e)}static arrayUnion(...e){const t=xm(...e);return t._methodName="FieldValue.arrayUnion",new sy(t)}static arrayRemove(...e){const t=Nm(...e);return t._methodName="FieldValue.arrayRemove",new sy(t)}static increment(e){const t=Om(e);return t._methodName="FieldValue.increment",new sy(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy={Firestore:$m,GeoPoint:Zp,Timestamp:Si,Blob:Fm,Transaction:zm,WriteBatch:Km,DocumentReference:Wm,DocumentSnapshot:Xm,Query:Zm,QueryDocumentSnapshot:Jm,QuerySnapshot:ty,CollectionReference:ny,FieldPath:iy,FieldValue:sy,setLogLevel:qm,CACHE_SIZE_UNLIMITED:Mp};function ay(e,t){e.INTERNAL.registerComponent(new o.uA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},oy)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(e){ay(e,((e,t)=>new $m(e,t,new jm))),e.registerVersion(Dm,Rm)}cy(i.A)},1387:function(e,t,n){n.d(t,{LA:function(){return oe},aE:function(){return tt}});n(4114);var r=n(6768),i=n(144);
/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/#/g,d=/&/g,f=/\//g,p=/=/g,g=/\?/g,m=/\+/g,y=/%5B/g,v=/%5D/g,_=/%5E/g,w=/%60/g,b=/%7B/g,I=/%7C/g,E=/%7D/g,T=/%20/g;function S(e){return encodeURI(""+e).replace(I,"|").replace(y,"[").replace(v,"]")}function A(e){return S(e).replace(b,"{").replace(E,"}").replace(_,"^")}function C(e){return S(e).replace(m,"%2B").replace(T,"+").replace(h,"%23").replace(d,"%26").replace(w,"`").replace(b,"{").replace(E,"}").replace(_,"^")}function k(e){return C(e).replace(p,"%3D")}function x(e){return S(e).replace(h,"%23").replace(g,"%3F")}function N(e){return null==e?"":x(e).replace(f,"%2F")}function O(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const D=/\/$/,R=e=>e.replace(D,"");function P(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=B(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:O(o)}}function L(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function M(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function F(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&V(t.matched[r],n.matched[i])&&U(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function V(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function U(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!j(e[n],t[n]))return!1;return!0}function j(e,t){return l(e)?$(e,t):l(t)?$(t,e):e===t}function $(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function B(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}var q,z;(function(e){e["pop"]="pop",e["push"]="push"})(q||(q={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(z||(z={}));function K(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),R(e)}const G=/^[^#]+#/;function W(e,t){return e.replace(G,"#")+t}function H(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Q=()=>({left:window.scrollX,top:window.scrollY});function Y(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=H(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function X(e,t){const n=history.state?history.state.position-t:-1;return n+e}const J=new Map;function Z(e,t){J.set(e,t)}function ee(e){const t=J.get(e);return J.delete(e),t}let te=()=>location.protocol+"//"+location.host;function ne(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),M(n,"")}const o=M(n,e);return o+r+i}function re(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=ne(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:q.pop,direction:l?l>0?z.forward:z.back:z.unknown})}))};function u(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:Q()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:d}}function ie(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Q():null}}function se(e){const{history:t,location:n}=window,r={value:ne(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:te()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,ie(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:Q()});s(o.current,o,!0);const c=a({},ie(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function oe(e){e=K(e);const t=se(e),n=re(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:W.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function ae(e){return"string"===typeof e||e&&"object"===typeof e}function ce(e){return"string"===typeof e||"symbol"===typeof e}const ue={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},le=Symbol("");var he;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(he||(he={}));function de(e,t){return a(new Error,{type:e,[le]:!0},t)}function fe(e,t){return e instanceof Error&&le in e&&(null==t||!!(e.type&t))}const pe="[^/]+?",ge={sensitive:!1,strict:!1,start:!0,end:!0},me=/[.+*?^${}()[\]/\\]/g;function ye(e,t){const n=a({},ge,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(me,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||pe;if(l!==pe){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function ve(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function _e(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ve(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(we(r))return 1;if(we(i))return-1}return i.length-r.length}function we(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const be={type:0,value:""},Ie=/[a-zA-Z0-9_]/;function Ee(e){if(!e)return[[]];if("/"===e)return[[be]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Ie.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function Te(e,t,n){const r=ye(Ee(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function Se(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=Ce(e);c.aliasOf=r&&r.record;const h=Oe(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=Te(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!xe(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(e){if(ce(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){let t=0;while(t<n.length&&_e(e,n[t])>=0&&(e.record.path!==n[t].record.path||!De(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!xe(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw de(1,{location:e});0,o=i.record.name,c=a(Ae(t.params,i.keys.filter((e=>!e.optional)).concat(i.parent?i.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Ae(e.params,i.keys.map((e=>e.name)))),s=i.stringify(c)}else if(null!=e.path)s=e.path,i=n.find((e=>e.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw de(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:Ne(u)}}return t=Oe({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function Ae(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ce(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ke(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ke(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function xe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ne(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function Oe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function De(e,t){return t.children.some((t=>t===e||De(e,t)))}function Re(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(m," "),n=e.indexOf("="),s=O(n<0?e:e.slice(0,n)),o=n<0?null:O(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Pe(e){let t="";for(let n in e){const r=e[n];if(n=k(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&C(e))):[r&&C(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Le(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Me=Symbol(""),Fe=Symbol(""),Ve=Symbol(""),Ue=Symbol(""),je=Symbol("");function $e(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Be(e,t,n,r,i,s=(e=>e())){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const u=e=>{!1===e?c(de(4,{from:n,to:t})):e instanceof Error?c(e):ae(e)?c(de(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),a())},l=s((()=>e.call(r&&r.instances[i],t,n,u)));let h=Promise.resolve(l);e.length<3&&(h=h.then(u)),h.catch((e=>c(e)))}))}function qe(e,t,n,r,i=(e=>e())){const s=[];for(const a of e){0;for(const e in a.components){let c=a.components[e];if("beforeRouteEnter"===t||a.instances[e])if(ze(c)){const o=c.__vccOpts||c,u=o[t];u&&s.push(Be(u,n,r,a,e,i))}else{let u=c();0,s.push((()=>u.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));const c=o(s)?s.default:s;a.components[e]=c;const u=c.__vccOpts||c,l=u[t];return l&&Be(l,n,r,a,e,i)()}))))}}}return s}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ke(e){const t=(0,r.WQ)(Ve),n=(0,r.WQ)(Ue),s=(0,r.EW)((()=>t.resolve((0,i.R1)(e.to)))),o=(0,r.EW)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(V.bind(null,r));if(o>-1)return o;const a=Ye(e[t-2]);return t>1&&Ye(r)===a&&i[i.length-1].path!==a?i.findIndex(V.bind(null,e[t-2])):o})),a=(0,r.EW)((()=>o.value>-1&&Qe(n.params,s.value.params))),c=(0,r.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&U(n.params,s.value.params)));function l(n={}){return He(n)?t[(0,i.R1)(e.replace)?"replace":"push"]((0,i.R1)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.EW)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const Ge=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ke,setup(e,{slots:t}){const n=(0,i.Kh)(Ke(e)),{options:s}=(0,r.WQ)(Ve),o=(0,r.EW)((()=>({[Xe(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),We=Ge;function He(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Je=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.WQ)(je),o=(0,r.EW)((()=>e.route||s.value)),c=(0,r.WQ)(Fe,0),u=(0,r.EW)((()=>{let e=(0,i.R1)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.EW)((()=>o.value.matched[u.value]));(0,r.Gt)(Fe,(0,r.EW)((()=>u.value+1))),(0,r.Gt)(Me,l),(0,r.Gt)(je,o);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&V(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,c=l.value,u=c&&c.components[s];if(!u)return Ze(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},g=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return Ze(n.default,{Component:g,route:i})||g}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Je;function tt(e){const t=Se(e.routes,e),n=e.parseQuery||Re,o=e.stringifyQuery||Pe,h=e.history;const d=$e(),f=$e(),p=$e(),g=(0,i.IJ)(ue);let m=ue;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=c.bind(null,(e=>""+e)),v=c.bind(null,N),_=c.bind(null,O);function w(e,n){let r,i;return ce(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function b(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function I(){return t.getRoutes().map((e=>e.record))}function E(e){return!!t.getRecordMatcher(e)}function T(e,r){if(r=a({},r||g.value),"string"===typeof e){const i=P(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:_(s.params),hash:O(i.hash),redirectedFrom:void 0,href:o})}let i;if(null!=e.path)i=a({},e,{path:P(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:v(t)}),r.params=v(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=y(_(s.params));const u=L(o,a({},e,{hash:A(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Pe?Le(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function S(e){return"string"===typeof e?P(n,e,g.value.path):a({},e)}function C(e,t){if(m!==e)return de(8,{from:t,to:e})}function k(e){return R(e)}function x(e){return k(a(S(e),{replace:!0}))}function D(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=S(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function R(e,t){const n=m=T(e),r=g.value,i=e.state,s=e.force,c=!0===e.replace,u=D(n);if(u)return R(a(S(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!s&&F(o,r,n)&&(h=de(16,{to:l,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):U(l,r)).catch((e=>fe(e)?fe(e,2)?e:te(e):H(e,l,r))).then((e=>{if(e){if(fe(e,2))return R(a({replace:c},S(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||l)}else e=$(l,r,!0,c,i);return j(l,r,e),e}))}function M(e,t){const n=C(e,t);return n?Promise.reject(n):Promise.resolve()}function V(e){const t=se.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function U(e,t){let n;const[r,i,s]=nt(e,t);n=qe(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Be(r,e,t))}));const o=M.bind(null,e,t);return n.push(o),ae(n).then((()=>{n=[];for(const r of d.list())n.push(Be(r,e,t));return n.push(o),ae(n)})).then((()=>{n=qe(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Be(r,e,t))}));return n.push(o),ae(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(Be(i,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(o),ae(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=qe(s,"beforeRouteEnter",e,t,V),n.push(o),ae(n)))).then((()=>{n=[];for(const r of f.list())n.push(Be(r,e,t));return n.push(o),ae(n)})).catch((e=>fe(e,8)?e:Promise.reject(e)))}function j(e,t,n){p.list().forEach((r=>V((()=>r(e,t,n)))))}function $(e,t,n,r,i){const o=C(e,t);if(o)return o;const c=t===ue,u=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),g.value=e,ne(e,t,n,c),te()}let B;function z(){B||(B=h.listen(((e,t,n)=>{if(!oe.listening)return;const r=T(e),i=D(r);if(i)return void R(a(i,{replace:!0}),r).catch(u);m=r;const o=g.value;s&&Z(X(o.fullPath,n.delta),Q()),U(r,o).catch((e=>fe(e,12)?e:fe(e,2)?(R(e.to,r).then((e=>{fe(e,20)&&!n.delta&&n.type===q.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),H(e,r,o)))).then((e=>{e=e||$(r,o,!1),e&&(n.delta&&!fe(e,8)?h.go(-n.delta,!1):n.type===q.pop&&fe(e,20)&&h.go(-1,!1)),j(r,o,e)})).catch(u)})))}let K,G=$e(),W=$e();function H(e,t,n){te(e);const r=W.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function J(){return K&&g.value!==ue?Promise.resolve():new Promise(((e,t)=>{G.add([e,t])}))}function te(e){return K||(K=!e,z(),G.list().forEach((([t,n])=>e?n(e):t())),G.reset()),e}function ne(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&ee(X(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(t,n,c))).then((e=>e&&Y(e))).catch((e=>H(e,t,n)))}const re=e=>h.go(e);let ie;const se=new Set,oe={currentRoute:g,listening:!0,addRoute:w,removeRoute:b,hasRoute:E,getRoutes:I,resolve:T,options:e,push:k,replace:x,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:f.add,afterEach:p.add,onError:W.add,isReady:J,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(g)}),s&&!ie&&g.value===ue&&(ie=!0,k(h.location).catch((e=>{0})));const n={};for(const i in ue)Object.defineProperty(n,i,{get:()=>g.value[i],enumerable:!0});e.provide(Ve,t),e.provide(Ue,(0,i.Gc)(n)),e.provide(je,g);const r=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(m=ue,B&&B(),B=null,g.value=ue,ie=!1,K=!1),r()}}};function ae(e){return e.reduce(((e,t)=>e.then((()=>V(t)))),Promise.resolve())}return oe}function nt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>V(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>V(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.1c85794c.js.map