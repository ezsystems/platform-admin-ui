!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("AlloyEditor")):"function"==typeof define&&define.amd?define(["react","AlloyEditor"],t):"object"==typeof exports?exports.ezBtnImageLinkEdit=t(require("react"),require("AlloyEditor")):(e.eZ=e.eZ||{},e.eZ.ezAlloyEditor=e.eZ.ezAlloyEditor||{},e.eZ.ezAlloyEditor.ezBtnImageLinkEdit=t(e.React,e.AlloyEditor))}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=56)}({0:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){m&&p&&(m=!1,p.length?y=p.concat(y):b=-1,y.length&&l())}function l(){if(!m){var e=i(a);m=!0;for(var t=y.length;t;){for(p=y,y=[];++b<t;)p&&p[b].run();b=-1,t=y.length}p=null,m=!1,o(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var s,f,d=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,y=[],m=!1,b=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new c(e,t)),1!==y.length||m||i(l)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.prependListener=u,d.prependOnceListener=u,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},1:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},10:function(e,t,n){"use strict";(function(t){function r(e,n,r,c,u){if("production"!==t.env.NODE_ENV)for(var s in e)if(l(e,s)){var f;try{if("function"!=typeof e[s]){var d=Error((c||"React class")+": "+r+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.");throw d.name="Invariant Violation",d}f=e[s](n,s,c,r,null,o)}catch(e){f=e}if(!f||f instanceof Error||i((c||"React class")+": type specification of "+r+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof f+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),f instanceof Error&&!(f.message in a)){a[f.message]=!0;var p=u?u():"";i("Failed "+r+" type: "+f.message+(null!=p?p:""))}}}var i=function(){};if("production"!==t.env.NODE_ENV){var o=n(1),a={},l=Function.call.bind(Object.prototype.hasOwnProperty);i=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}r.resetWarningCache=function(){"production"!==t.env.NODE_ENV&&(a={})},e.exports=r}).call(t,n(0))},11:function(e,t,n){"use strict";function r(){}function i(){}var o=n(1);i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},2:function(t,n){t.exports=e},20:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),u=r(c),s=n(3),f=(r(s),n(5)),d=r(f),p=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=n.getInitialState(),n}return a(t,e),l(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState(this.getInitialState())}},{key:"componentWillUnmount",value:function(){!this.state.discoveringContent&&this.state.isTemporary&&this.removeLink()}},{key:"getInitialState",value:function(){var e=new CKEDITOR.Link(this.props.editor.get("nativeEditor"),{appendProtocol:!1}),t=e.getFromSelection(),n="",r="",i="",o=!1;return t?(n=t.getAttribute("href"),r=t.hasAttribute("target")?t.getAttribute("target"):r,i=t.getAttribute("title"),o=t.hasAttribute("data-ez-temporary-link")):(e.create(n,{"data-ez-temporary-link":!0}),t=e.getFromSelection(),o=!0),{element:t,linkHref:n,linkTarget:r,linkTitle:i,isTemporary:o}}},{key:"udwOnConfirm",value:function(e,t){var n=this;this.state.element.setAttribute("href","ezlocation://"+t[0].id),this.invokeWithFixedScrollbar(function(){n.focusEditedLink()}),ReactDOM.unmountComponentAtNode(e)}},{key:"selectContent",value:function(){var e=this,t=function(){var t=document.querySelector("#react-udw"),n=document.querySelector('meta[name="CSRF-Token"]').content,r=document.querySelector('meta[name="SiteAccess"]').content,i=JSON.parse(document.querySelector('[data-udw-config-name="richtext_embed"]').dataset.udwConfig),o=Translator.trans("link_edit_btn.udw.title",{},"alloy_editor"),a=eZ.ezAlloyEditor.callbacks,l=Object.assign({onConfirm:e.udwOnConfirm.bind(e,t),onCancel:function(){return ReactDOM.unmountComponentAtNode(t)},title:o,multiple:!1,startingLocationId:window.eZ.adminUiConfig.universalDiscoveryWidget.startingLocationId,restInfo:{token:n,siteaccess:r}},i);a&&"function"==typeof a.openUdw?a.openUdw(l):ReactDOM.render(u.default.createElement(eZ.modules.UniversalDiscovery,l),t)};this.setState({discoveringContent:!0},t.bind(this))}},{key:"focusEditedLink",value:function(){var e=this.props.editor.get("nativeEditor");e.focus(),e.eZ.moveCaretToElement(e,this.state.element),e.fire("actionPerformed",this),this.showUI()}},{key:"showUI",value:function(){this.props.editor.get("nativeEditor").fire("editorInteraction",{editor:this.props.editor,selectionData:{element:this.state.element,region:this.getRegion()}})}},{key:"getRegion",value:function(){var e=this.state.element.getWindow().getScrollPosition(),t=this.state.element.getClientRect();return t.top+=e.y,t.bottom+=e.y,t.left+=e.x,t.right+=e.x,t.direction=CKEDITOR.SELECTION_TOP_TO_BOTTOM,t}},{key:"renderUDWRow",value:function(){var e=Translator.trans("link_edit_btn.button_row.select_content",{},"alloy_editor"),t=Translator.trans("link_edit_btn.button_row.separator",{},"alloy_editor"),n=Translator.trans("link_edit_btn.button_row.link_to",{},"alloy_editor"),r=Translator.trans("link_edit_btn.button_row.select",{},"alloy_editor"),i=Translator.trans("link_edit_btn.button_row.block.placeholder.text",{},"alloy_editor");return u.default.createElement("div",{className:"ez-ae-edit-link__row ez-ae-edit-link__row--udw"},u.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--udw"},u.default.createElement("label",{className:"ez-ae-edit-link__label"},r),u.default.createElement("button",{className:"ez-ae-button ez-btn-ae ez-btn-ae--udw btn btn-secondary",onClick:this.selectContent.bind(this)},e)),u.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--separator"},u.default.createElement("span",{className:"ez-ae-edit-link__text"},t)),u.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--url"},u.default.createElement("label",{className:"ez-ae-edit-link__label"},n),u.default.createElement("input",{className:"ae-input ez-ae-edit-link__input",onChange:this.setHref.bind(this),onKeyDown:this.handleKeyDown.bind(this),placeholder:i,type:"text",value:this.state.linkHref}),u.default.createElement("button",{"aria-label":d.default.Strings.clearInput,className:"ez-btn-ae ez-btn-ae--clear-link ae-button ae-icon-remove",onClick:this.clearLink.bind(this),title:d.default.Strings.clear})))}},{key:"renderInfoRow",value:function(){var e=this.state.linkTarget,t=Translator.trans("link_edit_btn.info_row.title",{},"alloy_editor"),n=Translator.trans("link_edit_btn.info_row.open_in.label",{},"alloy_editor"),r=Translator.trans("link_edit_btn.info_row.same_tab",{},"alloy_editor"),i=Translator.trans("link_edit_btn.info_row.new_tab",{},"alloy_editor");return u.default.createElement("div",{className:"ez-ae-edit-link__row ez-ae-edit-link__row--info"},u.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--title"},u.default.createElement("label",{className:"ez-ae-edit-link__label"},t),u.default.createElement("input",{type:"text",className:"ae-input ez-ae-edit-link__input",onChange:this.setTitle.bind(this),value:this.state.linkTitle})),u.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--target"},u.default.createElement("span",{className:"ez-ae-edit-link__text"},n),u.default.createElement("div",{className:"ez-ae-edit-link__choice"},u.default.createElement("label",{htmlFor:"ez-ae-link-target-same",className:"ez-ae-edit-link__label ez-ae-edit-link__label--same-tab",title:r},u.default.createElement("input",{type:"radio",name:"target",id:"ez-ae-link-target-same",value:"",defaultChecked:""===e,onChange:this.setTarget.bind(this)}),u.default.createElement("div",{className:"ez-btn-ae__icon-wrapper"},u.default.createElement("svg",{className:"ez-icon ez-btn-ae__icon"},u.default.createElement("use",{xlinkHref:"/bundles/ezplatformadminui/img/ez-icons.svg#open-sametab"})))),u.default.createElement("label",{htmlFor:"ez-ae-link-target-blank",className:"ez-ae-edit-link__label ez-ae-edit-link__label--new-tab",title:i},u.default.createElement("input",{type:"radio",name:"target",id:"ez-ae-link-target-blank",value:"_blank",defaultChecked:"_blank"===e,onChange:this.setTarget.bind(this)}),u.default.createElement("div",{className:"ez-btn-ae__icon-wrapper"},u.default.createElement("svg",{className:"ez-icon ez-btn-ae__icon"},u.default.createElement("use",{xlinkHref:"/bundles/ezplatformadminui/img/ez-icons.svg#open-newtab"})))))))}},{key:"renderActionRow",value:function(){var e=Translator.trans("link_edit_btn.action_row.remove",{},"alloy_editor"),t=Translator.trans("link_edit_btn.action_row.save",{},"alloy_editor");return u.default.createElement("div",{className:"ez-ae-edit-link__row ez-ae-edit-link__row--actions"},u.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--actions"},u.default.createElement("button",{className:"ez-btn-ae ez-btn-ae--remove-link btn",disabled:this.state.isTemporary,onClick:this.removeLink.bind(this),title:e},u.default.createElement("svg",{className:"ez-icon ez-btn-ae__icon"},u.default.createElement("use",{xlinkHref:"/bundles/ezplatformadminui/img/ez-icons.svg#link-remove"}))),u.default.createElement("button",{className:"ez-btn-ae ez-btn-ae--save-link btn",disabled:!this.state.linkHref,onClick:this.saveLink.bind(this),title:t},u.default.createElement("svg",{className:"ez-icon ez-btn-ae__icon"},u.default.createElement("use",{xlinkHref:"/bundles/ezplatformadminui/img/ez-icons.svg#checkmark"})))))}},{key:"render",value:function(){var e="ez-ae-edit-link";return this.state.linkHref&&(e+=" is-linked"),u.default.createElement("div",{className:e},this.renderUDWRow(),this.renderInfoRow(),this.renderActionRow())}},{key:"clearLink",value:function(){this.setState({linkHref:""})}},{key:"handleKeyDown",value:function(e){var t=this;if(13!==e.keyCode&&27!==e.keyCode||e.preventDefault(),13===e.keyCode&&e.target.value)this.saveLink();else if(27===e.keyCode){var n=this.props.editor.get("nativeEditor");new CKEDITOR.Link(n).advanceSelection(),this.invokeWithFixedScrollbar(function(){n.fire("actionPerformed",t)})}}},{key:"setHref",value:function(e){this.setState({linkHref:e.target.value})}},{key:"setTitle",value:function(e){this.setState({linkTitle:e.target.value})}},{key:"setTarget",value:function(e){this.setState({linkTarget:e.target.value})}},{key:"removeLink",value:function(){var e=this,t=this.props.editor.get("nativeEditor"),n=new CKEDITOR.Link(t),r=t.getSelection(),i=r.createBookmarks();n.remove(this.state.element,{advance:!0}),r.selectBookmarks(i),this.props.cancelExclusive(),this.invokeWithFixedScrollbar(function(){t.fire("actionPerformed",e)})}},{key:"saveLink",value:function(){var e=this;this.setState({isTemporary:!1},function(){return e.updateLink()})}},{key:"updateLink",value:function(){var e=this,t=this.props.editor.get("nativeEditor"),n=new CKEDITOR.Link(t),r={target:this.state.linkTarget,title:this.state.linkTitle,"data-ez-temporary-link":!!this.state.isTemporary||null},i={advance:!0};this.state.linkHref&&(r.href=this.state.linkHref,n.update(r,this.state.element,i),this.invokeWithFixedScrollbar(function(){t.fire("actionPerformed",e)})),this.props.cancelExclusive(),this.showUI()}},{key:"invokeWithFixedScrollbar",value:function(e){if(navigator.userAgent.indexOf("Chrome")>-1){var t=window.pageYOffset;e(),window.scroll(window.pageXOffset,t)}else e()}}],[{key:"key",get:function(){return"ezlinkedit"}}]),t}(c.Component);t.default=p,d.default.Buttons[p.key]=d.default.ButtonLinkEdit=p,eZ.addConfig("ezAlloyEditor.ezBtnLinkEdit",p)},3:function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r=n(4);e.exports=n(8)(r.isElement,!0)}else e.exports=n(11)()}).call(t,n(0))},4:function(e,t,n){"use strict";(function(t){"production"===t.env.NODE_ENV?e.exports=n(6):e.exports=n(7)}).call(t,n(0))},5:function(e,n){e.exports=t},56:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),u=(r(c),n(3)),s=(r(u),n(5)),f=r(s),d=n(20),p=r(d),y=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.widget=n.getWidget(),n}return a(t,e),l(t,[{key:"componentWillUnmount",value:function(){!this.state.discoveringContent&&this.state.isTemporary&&this.removeLink(),this.widget.removeLinkEditState(),this.props.cancelExclusive()}},{key:"getInitialState",value:function(){var e=this.getWidget(),t=e.getEzLinkAttribute("href"),n=e.getEzLinkAttribute("target"),r=e.getEzLinkAttribute("title"),i=e.getEzLinkAttribute("data-ez-temporary-link");return{linkHref:t||"",linkTarget:n||"",linkTitle:r||"",isTemporary:i||!1}}},{key:"getWidget",value:function(){var e=this.props.editor.get("nativeEditor"),t=e.getSelection().getStartElement();return e.widgets.getByElement(t)}},{key:"udwOnConfirm",value:function(e,t){this.widget.setEzLinkAttribute("href","ezlocation://"+t[0].id),this.widget.setLinkEditState(),this.widget.setFocused(!0),ReactDOM.unmountComponentAtNode(e)}},{key:"removeLink",value:function(){this.widget.getEzLinkElement().remove(),this.widget.removeLinkEditState(),this.widget.removeIsLinkedState(),this.widget.setFocused(!0),this.props.cancelExclusive()}},{key:"updateLink",value:function(){var e=this.state,t=e.linkHref,n=e.linkTarget,r=e.linkTitle,i=""===t?"removeEzLinkAttribute":"setEzLinkAttribute",o=""===n?"removeEzLinkAttribute":"setEzLinkAttribute",a=""===r?"removeEzLinkAttribute":"setEzLinkAttribute";this.widget[i]("href",t),this.widget[i]("data-cke-saved-href",t),this.widget[o]("target",n),this.widget[a]("title",r),this.widget.removeEzLinkAttribute("data-ez-temporary-link"),this.widget.removeLinkEditState(),this.widget.setIsLinkedState(),this.widget.setFocused(!0),this.props.cancelExclusive()}}],[{key:"key",get:function(){return"ezimagelinkedit"}}]),t}(p.default);t.default=y,f.default.Buttons[y.key]=f.default.EzBtnImageLinkEdit=y,eZ.addConfig("ezAlloyEditor.ezBtnImageLinkEdit",y)},6:function(e,t,n){"use strict";function r(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case p:case y:case c:case s:case u:case b:return e;default:switch(e=e&&e.$$typeof){case d:case m:case f:return e;default:return t}}case h:case v:case l:return t}}}function i(e){return r(e)===y}/** @license React v16.8.5
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.async_mode"):60111,y=o?Symbol.for("react.concurrent_mode"):60111,m=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,v=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116;t.typeOf=r,t.AsyncMode=p,t.ConcurrentMode=y,t.ContextConsumer=d,t.ContextProvider=f,t.Element=a,t.ForwardRef=m,t.Fragment=c,t.Lazy=h,t.Memo=v,t.Portal=l,t.Profiler=s,t.StrictMode=u,t.Suspense=b,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===y||e===s||e===u||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===v||e.$$typeof===f||e.$$typeof===d||e.$$typeof===m)},t.isAsyncMode=function(e){return i(e)||r(e)===p},t.isConcurrentMode=i,t.isContextConsumer=function(e){return r(e)===d},t.isContextProvider=function(e){return r(e)===f},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return r(e)===m},t.isFragment=function(e){return r(e)===c},t.isLazy=function(e){return r(e)===h},t.isMemo=function(e){return r(e)===v},t.isPortal=function(e){return r(e)===l},t.isProfiler=function(e){return r(e)===s},t.isStrictMode=function(e){return r(e)===u},t.isSuspense=function(e){return r(e)===b}},7:function(e,t,n){"use strict";(function(e){/** @license React v16.8.5
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"production"!==e.env.NODE_ENV&&function(){function e(e){return"string"==typeof e||"function"==typeof e||e===k||e===z||e===_||e===g||e===S||"object"==typeof e&&null!==e&&(e.$$typeof===C||e.$$typeof===x||e.$$typeof===w||e.$$typeof===E||e.$$typeof===T)}function n(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case v:var n=e.type;switch(n){case O:case z:case k:case _:case g:case S:return n;default:var r=n&&n.$$typeof;switch(r){case E:case T:case w:return r;default:return t}}case C:case x:case h:return t}}}function r(e){return B||(B=!0,P(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),i(e)||n(e)===O}function i(e){return n(e)===z}function o(e){return n(e)===E}function a(e){return n(e)===w}function l(e){return"object"==typeof e&&null!==e&&e.$$typeof===v}function c(e){return n(e)===T}function u(e){return n(e)===k}function s(e){return n(e)===C}function f(e){return n(e)===x}function d(e){return n(e)===h}function p(e){return n(e)===_}function y(e){return n(e)===g}function m(e){return n(e)===S}Object.defineProperty(t,"__esModule",{value:!0});var b="function"==typeof Symbol&&Symbol.for,v=b?Symbol.for("react.element"):60103,h=b?Symbol.for("react.portal"):60106,k=b?Symbol.for("react.fragment"):60107,g=b?Symbol.for("react.strict_mode"):60108,_=b?Symbol.for("react.profiler"):60114,w=b?Symbol.for("react.provider"):60109,E=b?Symbol.for("react.context"):60110,O=b?Symbol.for("react.async_mode"):60111,z=b?Symbol.for("react.concurrent_mode"):60111,T=b?Symbol.for("react.forward_ref"):60112,S=b?Symbol.for("react.suspense"):60113,x=b?Symbol.for("react.memo"):60115,C=b?Symbol.for("react.lazy"):60116,j=function(){},N=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=0,o="Warning: "+e.replace(/%s/g,function(){return n[i++]});"undefined"!=typeof console&&console.warn(o);try{throw new Error(o)}catch(e){}};j=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];N.apply(void 0,[t].concat(r))}};var P=j,A=O,L=z,I=E,R=w,D=v,$=T,M=k,F=C,W=x,V=h,H=_,q=g,U=S,B=!1;t.typeOf=n,t.AsyncMode=A,t.ConcurrentMode=L,t.ContextConsumer=I,t.ContextProvider=R,t.Element=D,t.ForwardRef=$,t.Fragment=M,t.Lazy=F,t.Memo=W,t.Portal=V,t.Profiler=H,t.StrictMode=q,t.Suspense=U,t.isValidElementType=e,t.isAsyncMode=r,t.isConcurrentMode=i,t.isContextConsumer=o,t.isContextProvider=a,t.isElement=l,t.isForwardRef=c,t.isFragment=u,t.isLazy=s,t.isMemo=f,t.isPortal=d,t.isProfiler=p,t.isStrictMode=y,t.isSuspense=m}()}).call(t,n(0))},8:function(e,t,n){"use strict";(function(t){function r(){return null}var i=n(4),o=n(9),a=n(1),l=n(10),c=Function.call.bind(Object.prototype.hasOwnProperty),u=function(){};"production"!==t.env.NODE_ENV&&(u=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),e.exports=function(e,n){function s(e){var t=e&&(x&&e[x]||e[C]);if("function"==typeof t)return t}function f(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function d(e){this.message=e,this.stack=""}function p(e){function r(r,l,c,s,f,p,y){if(s=s||j,p=p||c,y!==a){if(n){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var b=s+":"+c;!i[b]&&o<3&&(u("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),i[b]=!0,o++)}}return null==l[c]?r?new d(null===l[c]?"The "+f+" `"+p+"` is marked as required in `"+s+"`, but its value is `null`.":"The "+f+" `"+p+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(l,c,s,f,p)}if("production"!==t.env.NODE_ENV)var i={},o=0;var l=r.bind(null,!1);return l.isRequired=r.bind(null,!0),l}function y(e){function t(t,n,r,i,o,a){var l=t[n];if(O(l)!==e)return new d("Invalid "+i+" `"+o+"` of type `"+z(l)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return p(t)}function m(e){function t(t,n,r,i,o){if("function"!=typeof e)return new d("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var l=t[n];if(!Array.isArray(l)){return new d("Invalid "+i+" `"+o+"` of type `"+O(l)+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<l.length;c++){var u=e(l,c,r,i,o+"["+c+"]",a);if(u instanceof Error)return u}return null}return p(t)}function b(e){function t(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||j;return new d("Invalid "+i+" `"+o+"` of type `"+S(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return p(t)}function v(e){function n(t,n,r,i,o){for(var a=t[n],l=0;l<e.length;l++)if(f(a,e[l]))return null;var c=JSON.stringify(e,function(e,t){return"symbol"===z(t)?String(t):t});return new d("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+c+".")}return Array.isArray(e)?p(n):("production"!==t.env.NODE_ENV&&u(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),r)}function h(e){function t(t,n,r,i,o){if("function"!=typeof e)return new d("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],u=O(l);if("object"!==u)return new d("Invalid "+i+" `"+o+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var s in l)if(c(l,s)){var f=e(l,s,r,i,o+"."+s,a);if(f instanceof Error)return f}return null}return p(t)}function k(e){function n(t,n,r,i,o){for(var l=0;l<e.length;l++){if(null==(0,e[l])(t,n,r,i,o,a))return null}return new d("Invalid "+i+" `"+o+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&u("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var i=0;i<e.length;i++){var o=e[i];if("function"!=typeof o)return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+T(o)+" at index "+i+"."),r}return p(n)}function g(e){function t(t,n,r,i,o){var l=t[n],c=O(l);if("object"!==c)return new d("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var s=e[u];if(s){var f=s(l,u,r,i,o+"."+u,a);if(f)return f}}return null}return p(t)}function _(e){function t(t,n,r,i,l){var c=t[n],u=O(c);if("object"!==u)return new d("Invalid "+i+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var s=o({},t[n],e);for(var f in s){var p=e[f];if(!p)return new d("Invalid "+i+" `"+l+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(c,f,r,i,l+"."+f,a);if(y)return y}return null}return p(t)}function w(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(w);if(null===t||e(t))return!0;var n=s(t);if(!n)return!1;var r,i=n.call(t);if(n!==t.entries){for(;!(r=i.next()).done;)if(!w(r.value))return!1}else for(;!(r=i.next()).done;){var o=r.value;if(o&&!w(o[1]))return!1}return!0;default:return!1}}function E(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function O(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":E(t,e)?"symbol":t}function z(e){if(void 0===e||null===e)return""+e;var t=O(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function T(e){var t=z(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function S(e){return e.constructor&&e.constructor.name?e.constructor.name:j}var x="function"==typeof Symbol&&Symbol.iterator,C="@@iterator",j="<<anonymous>>",N={array:y("array"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:function(){return p(r)}(),arrayOf:m,element:function(){function t(t,n,r,i,o){var a=t[n];if(!e(a)){return new d("Invalid "+i+" `"+o+"` of type `"+O(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return p(t)}(),elementType:function(){function e(e,t,n,r,o){var a=e[t];if(!i.isValidElementType(a)){return new d("Invalid "+r+" `"+o+"` of type `"+O(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")}return null}return p(e)}(),instanceOf:b,node:function(){function e(e,t,n,r,i){return w(e[t])?null:new d("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")}return p(e)}(),objectOf:h,oneOf:v,oneOfType:k,shape:g,exact:_};return d.prototype=Error.prototype,N.checkPropTypes=l,N.resetWarningCache=l.resetWarningCache,N.PropTypes=N,N}}).call(t,n(0))},9:function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,c=r(e),u=1;u<arguments.length;u++){n=Object(arguments[u]);for(var s in n)o.call(n,s)&&(c[s]=n[s]);if(i){l=i(n);for(var f=0;f<l.length;f++)a.call(n,l[f])&&(c[l[f]]=n[l[f]])}}return c}}}).default});
//# sourceMappingURL=ezBtnImageLinkEdit.js.map