!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react-dom")):"function"==typeof define&&define.amd?define(["react-dom"],t):"object"==typeof exports?exports.ezListConfig=t(require("react-dom")):(e.eZ=e.eZ||{},e.eZ.ezAlloyEditor=e.eZ.ezAlloyEditor||{},e.eZ.ezAlloyEditor.ezListConfig=t(e.ReactDOM))}("undefined"!=typeof self?self:this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=68)}({10:function(t,n){t.exports=e},12:function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(10),i=function(e){return e&&e.__esModule?e:{default:e}}(l),u=function(){function e(){r(this,e)}return a(e,[{key:"getStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Translator.trans("toolbar_config_base.heading_label",{},"alloy_editor");return{name:"styles",cfg:{showRemoveStylesItem:!1,styles:[{name:t+" 1",style:{element:"h1"}},{name:t+" 2",style:{element:"h2"}},{name:t+" 3",style:{element:"h3"}},{name:t+" 4",style:{element:"h4"}},{name:t+" 5",style:{element:"h5"}},{name:t+" 6",style:{element:"h6"}},{name:Translator.trans("toolbar_config_base.paragraph_label",{},"alloy_editor"),style:{element:"p"}},{name:Translator.trans("toolbar_config_base.formatted_label",{},"alloy_editor"),style:{element:"pre"}}].concat(o(e))}}}},{key:"getArrowBoxClasses",value:function(){return"ae-arrow-box ae-arrow-box-bottom ez-ae-arrow-box-left"}},{key:"setPosition",value:function(t){var n=t.editor.get("nativeEditor"),o=t.editorEvent.data.nativeEvent,r=o?new CKEDITOR.dom.element(t.editorEvent.data.nativeEvent.target):null,a=!!r&&n.widgets.getByElement(r),l=n.elementPath().block;return l&&!a||(l=r),l.is("li")&&(l=l.getParent()),e.setPositionFor.call(this,l,n)}}],[{key:"outlineTotalWidth",value:function(e){var t=parseInt(e.getComputedStyle("outline-offset"),10),n=parseInt(e.getComputedStyle("outline-width"),10);return isNaN(t)&&(t=1),t+n}},{key:"isEmpty",value:function(e){var t=[].concat(o(e.$.childNodes)),n=t.length,r=!!n&&t.every(function(e){return"#text"===e.nodeName&&!e.data.replace(/\u200B/g,"")}),a=1===n&&"br"===e.$.childNodes.item(0).localName;return 0===n||a||r}},{key:"setPositionFor",value:function(t,n){var o=t.getClientRect(),r=e.outlineTotalWidth(t),a=e.isEmpty(t),l=t,u=0;if(n.widgets.getByElement(t))u=o.left;else{a&&(t.appendHtml("<span>&nbsp;</span>"),l=t.findOne("span"));var s=document.createRange(),f=parseInt(t.$.scrollLeft,10);s.selectNodeContents(l.$),u=s.getBoundingClientRect().left+f,a&&l.remove()}var c=this.getWidgetXYPoint(o.left-r,o.top+t.getWindow().getScrollPosition().y-r,CKEDITOR.SELECTION_BOTTOM_TO_TOP),d=new CKEDITOR.dom.element(i.default.findDOMNode(this));return d.addClass("ae-toolbar-transition"),d.setStyles({left:u-r+"px",top:c[1]+"px"}),!0}}]),e}();t.default=u},68:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(12),u=function(e){return e&&e.__esModule?e:{default:e}}(i),s=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.name="list",n.buttons=["ezmoveup","ezmovedown","ezembedinline","ezblockremove"],n}return a(t,e),l(t,[{key:"test",value:function(e){var t=e.editor.get("nativeEditor"),n=t.elementPath();return t.isSelectionEmpty()&&n&&(n.contains("ul")||n.contains("ol"))}}]),t}(u.default);t.default=s}}).default});
//# sourceMappingURL=ezListConfig.js.map