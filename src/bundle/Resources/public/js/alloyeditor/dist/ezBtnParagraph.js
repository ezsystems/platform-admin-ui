!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("AlloyEditor")):"function"==typeof define&&define.amd?define(["react","AlloyEditor"],t):"object"==typeof exports?exports.ezBtnParagraph=t(require("react"),require("AlloyEditor")):(e.eZ=e.eZ||{},e.eZ.ezAlloyEditor=e.eZ.ezAlloyEditor||{},e.eZ.ezAlloyEditor.ezBtnParagraph=t(e.React,e.AlloyEditor))}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=28)}([function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function a(){m&&y&&(m=!1,y.length?d=y.concat(d):b=-1,d.length&&u())}function u(){if(!m){var e=o(a);m=!0;for(var t=d.length;t;){for(y=d,d=[];++b<t;)y&&y[b].run();b=-1,t=d.length}y=null,m=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function f(){}var s,l,p=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var y,d=[],m=!1,b=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new c(e,t)),1!==d.length||m||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=f,p.addListener=f,p.once=f,p.off=f,p.removeListener=f,p.removeAllListeners=f,p.emit=f,p.prependListener=f,p.prependOnceListener=f,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,n){t.exports=e},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r=n(4);e.exports=n(8)(r.isElement,!0)}else e.exports=n(11)()}).call(t,n(0))},function(e,t,n){"use strict";(function(t){"production"===t.env.NODE_ENV?e.exports=n(6):e.exports=n(7)}).call(t,n(0))},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case y:case d:case c:case s:case f:case b:return e;default:switch(e=e&&e.$$typeof){case p:case m:case l:return e;default:return t}}case h:case v:case u:return t}}}function o(e){return r(e)===d}/** @license React v16.8.5
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&Symbol.for,a=i?Symbol.for("react.element"):60103,u=i?Symbol.for("react.portal"):60106,c=i?Symbol.for("react.fragment"):60107,f=i?Symbol.for("react.strict_mode"):60108,s=i?Symbol.for("react.profiler"):60114,l=i?Symbol.for("react.provider"):60109,p=i?Symbol.for("react.context"):60110,y=i?Symbol.for("react.async_mode"):60111,d=i?Symbol.for("react.concurrent_mode"):60111,m=i?Symbol.for("react.forward_ref"):60112,b=i?Symbol.for("react.suspense"):60113,v=i?Symbol.for("react.memo"):60115,h=i?Symbol.for("react.lazy"):60116;t.typeOf=r,t.AsyncMode=y,t.ConcurrentMode=d,t.ContextConsumer=p,t.ContextProvider=l,t.Element=a,t.ForwardRef=m,t.Fragment=c,t.Lazy=h,t.Memo=v,t.Portal=u,t.Profiler=s,t.StrictMode=f,t.Suspense=b,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===d||e===s||e===f||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===v||e.$$typeof===l||e.$$typeof===p||e.$$typeof===m)},t.isAsyncMode=function(e){return o(e)||r(e)===y},t.isConcurrentMode=o,t.isContextConsumer=function(e){return r(e)===p},t.isContextProvider=function(e){return r(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return r(e)===m},t.isFragment=function(e){return r(e)===c},t.isLazy=function(e){return r(e)===h},t.isMemo=function(e){return r(e)===v},t.isPortal=function(e){return r(e)===u},t.isProfiler=function(e){return r(e)===s},t.isStrictMode=function(e){return r(e)===f},t.isSuspense=function(e){return r(e)===b}},function(e,t,n){"use strict";(function(e){/** @license React v16.8.5
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"production"!==e.env.NODE_ENV&&function(){function e(e){return"string"==typeof e||"function"==typeof e||e===g||e===j||e===O||e===w||e===P||"object"==typeof e&&null!==e&&(e.$$typeof===C||e.$$typeof===T||e.$$typeof===E||e.$$typeof===x||e.$$typeof===_)}function n(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case v:var n=e.type;switch(n){case S:case j:case g:case O:case w:case P:return n;default:var r=n&&n.$$typeof;switch(r){case x:case _:case E:return r;default:return t}}case C:case T:case h:return t}}}function r(e){return U||(U=!0,$(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),o(e)||n(e)===S}function o(e){return n(e)===j}function i(e){return n(e)===x}function a(e){return n(e)===E}function u(e){return"object"==typeof e&&null!==e&&e.$$typeof===v}function c(e){return n(e)===_}function f(e){return n(e)===g}function s(e){return n(e)===C}function l(e){return n(e)===T}function p(e){return n(e)===h}function y(e){return n(e)===O}function d(e){return n(e)===w}function m(e){return n(e)===P}Object.defineProperty(t,"__esModule",{value:!0});var b="function"==typeof Symbol&&Symbol.for,v=b?Symbol.for("react.element"):60103,h=b?Symbol.for("react.portal"):60106,g=b?Symbol.for("react.fragment"):60107,w=b?Symbol.for("react.strict_mode"):60108,O=b?Symbol.for("react.profiler"):60114,E=b?Symbol.for("react.provider"):60109,x=b?Symbol.for("react.context"):60110,S=b?Symbol.for("react.async_mode"):60111,j=b?Symbol.for("react.concurrent_mode"):60111,_=b?Symbol.for("react.forward_ref"):60112,P=b?Symbol.for("react.suspense"):60113,T=b?Symbol.for("react.memo"):60115,C=b?Symbol.for("react.lazy"):60116,k=function(){},N=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.warn(i);try{throw new Error(i)}catch(e){}};k=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];N.apply(void 0,[t].concat(r))}};var $=k,A=S,I=j,M=x,R=E,z=v,V=_,D=g,q=C,F=T,L=h,W=O,B=w,Z=P,U=!1;t.typeOf=n,t.AsyncMode=A,t.ConcurrentMode=I,t.ContextConsumer=M,t.ContextProvider=R,t.Element=z,t.ForwardRef=V,t.Fragment=D,t.Lazy=q,t.Memo=F,t.Portal=L,t.Profiler=W,t.StrictMode=B,t.Suspense=Z,t.isValidElementType=e,t.isAsyncMode=r,t.isConcurrentMode=o,t.isContextConsumer=i,t.isContextProvider=a,t.isElement=u,t.isForwardRef=c,t.isFragment=f,t.isLazy=s,t.isMemo=l,t.isPortal=p,t.isProfiler=y,t.isStrictMode=d,t.isSuspense=m}()}).call(t,n(0))},function(e,t,n){"use strict";(function(t){function r(){return null}var o=n(4),i=n(9),a=n(1),u=n(10),c=Function.call.bind(Object.prototype.hasOwnProperty),f=function(){};"production"!==t.env.NODE_ENV&&(f=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),e.exports=function(e,n){function s(e){var t=e&&(T&&e[T]||e[C]);if("function"==typeof t)return t}function l(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function p(e){this.message=e,this.stack=""}function y(e){function r(r,u,c,s,l,y,d){if(s=s||k,y=y||c,d!==a){if(n){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var b=s+":"+c;!o[b]&&i<3&&(f("You are manually calling a React.PropTypes validation function for the `"+y+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),o[b]=!0,i++)}}return null==u[c]?r?new p(null===u[c]?"The "+l+" `"+y+"` is marked as required in `"+s+"`, but its value is `null`.":"The "+l+" `"+y+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(u,c,s,l,y)}if("production"!==t.env.NODE_ENV)var o={},i=0;var u=r.bind(null,!1);return u.isRequired=r.bind(null,!0),u}function d(e){function t(t,n,r,o,i,a){var u=t[n];if(S(u)!==e)return new p("Invalid "+o+" `"+i+"` of type `"+j(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return y(t)}function m(e){function t(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){return new p("Invalid "+o+" `"+i+"` of type `"+S(u)+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<u.length;c++){var f=e(u,c,r,o,i+"["+c+"]",a);if(f instanceof Error)return f}return null}return y(t)}function b(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||k;return new p("Invalid "+o+" `"+i+"` of type `"+P(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return y(t)}function v(e){function n(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(l(a,e[u]))return null;var c=JSON.stringify(e,function(e,t){return"symbol"===j(t)?String(t):t});return new p("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+c+".")}return Array.isArray(e)?y(n):("production"!==t.env.NODE_ENV&&f(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),r)}function h(e){function t(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],f=S(u);if("object"!==f)return new p("Invalid "+o+" `"+i+"` of type `"+f+"` supplied to `"+r+"`, expected an object.");for(var s in u)if(c(u,s)){var l=e(u,s,r,o,i+"."+s,a);if(l instanceof Error)return l}return null}return y(t)}function g(e){function n(t,n,r,o,i){for(var u=0;u<e.length;u++){if(null==(0,e[u])(t,n,r,o,i,a))return null}return new p("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&f("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var o=0;o<e.length;o++){var i=e[o];if("function"!=typeof i)return f("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+_(i)+" at index "+o+"."),r}return y(n)}function w(e){function t(t,n,r,o,i){var u=t[n],c=S(u);if("object"!==c)return new p("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var f in e){var s=e[f];if(s){var l=s(u,f,r,o,i+"."+f,a);if(l)return l}}return null}return y(t)}function O(e){function t(t,n,r,o,u){var c=t[n],f=S(c);if("object"!==f)return new p("Invalid "+o+" `"+u+"` of type `"+f+"` supplied to `"+r+"`, expected `object`.");var s=i({},t[n],e);for(var l in s){var y=e[l];if(!y)return new p("Invalid "+o+" `"+u+"` key `"+l+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=y(c,l,r,o,u+"."+l,a);if(d)return d}return null}return y(t)}function E(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(E);if(null===t||e(t))return!0;var n=s(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!E(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!E(i[1]))return!1}return!0;default:return!1}}function x(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function S(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":x(t,e)?"symbol":t}function j(e){if(void 0===e||null===e)return""+e;var t=S(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function _(e){var t=j(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function P(e){return e.constructor&&e.constructor.name?e.constructor.name:k}var T="function"==typeof Symbol&&Symbol.iterator,C="@@iterator",k="<<anonymous>>",N={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:function(){return y(r)}(),arrayOf:m,element:function(){function t(t,n,r,o,i){var a=t[n];if(!e(a)){return new p("Invalid "+o+" `"+i+"` of type `"+S(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return y(t)}(),elementType:function(){function e(e,t,n,r,i){var a=e[t];if(!o.isValidElementType(a)){return new p("Invalid "+r+" `"+i+"` of type `"+S(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")}return null}return y(e)}(),instanceOf:b,node:function(){function e(e,t,n,r,o){return E(e[t])?null:new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return y(e)}(),objectOf:h,oneOf:v,oneOfType:g,shape:w,exact:O};return p.prototype=Error.prototype,N.checkPropTypes=u,N.resetWarningCache=u.resetWarningCache,N.PropTypes=N,N}}).call(t,n(0))},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,c=r(e),f=1;f<arguments.length;f++){n=Object(arguments[f]);for(var s in n)i.call(n,s)&&(c[s]=n[s]);if(o){u=o(n);for(var l=0;l<u.length;l++)a.call(n,u[l])&&(c[u[l]]=n[u[l]])}}return c}},function(e,t,n){"use strict";(function(t){function r(e,n,r,c,f){if("production"!==t.env.NODE_ENV)for(var s in e)if(u(e,s)){var l;try{if("function"!=typeof e[s]){var p=Error((c||"React class")+": "+r+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.");throw p.name="Invariant Violation",p}l=e[s](n,s,c,r,null,i)}catch(e){l=e}if(!l||l instanceof Error||o((c||"React class")+": type specification of "+r+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in a)){a[l.message]=!0;var y=f?f():"";o("Failed "+r+" type: "+l.message+(null!=y?y:""))}}}var o=function(){};if("production"!==t.env.NODE_ENV){var i=n(1),a={},u=Function.call.bind(Object.prototype.hasOwnProperty);o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}r.resetWarningCache=function(){"production"!==t.env.NODE_ENV&&(a={})},e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";function r(){}function o(){}var i=n(1);o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,a){if(a!==i){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),c=(r(u),n(3)),f=(r(c),n(5)),s=r(f),l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getStateClasses=s.default.ButtonStateClasses.getStateClasses,n.execCommand=s.default.ButtonCommand.execCommand.bind(n),n}return a(t,e),t}(u.Component);t.default=l},,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=r(c),s=n(3),l=r(s),p=n(5),y=r(p),d=n(12),m=r(d),b=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"addParagraph",value:function(){this.execCommand({tagName:"p",content:"<br>"})}},{key:"render",value:function(){var e=Translator.trans("paragraph_btn.label",{},"alloy_editor"),t="ae-button ez-btn-ae ez-btn-ae--paragraph "+this.getStateClasses();return f.default.createElement("button",{className:t,onClick:this.addParagraph.bind(this),tabIndex:this.props.tabIndex,title:e},f.default.createElement("svg",{className:"ez-icon ez-btn-ae__icon"},f.default.createElement("use",{xlinkHref:"/bundles/ezplatformadminui/img/ez-icons.svg#paragraph-add"})))}}],[{key:"key",get:function(){return"ezparagraph"}}]),t}(m.default);t.default=b,y.default.Buttons[b.key]=y.default.EzBtnParagraph=b,eZ.addConfig("ezAlloyEditor.ezBtnParagraph",b),b.propTypes={command:l.default.string,modifiesSelection:l.default.bool},b.defaultProps={command:"eZAddContent",modifiesSelection:!0}}]).default});
//# sourceMappingURL=ezBtnParagraph.js.map