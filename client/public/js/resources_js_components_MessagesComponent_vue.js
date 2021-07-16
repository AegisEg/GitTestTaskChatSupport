(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_MessagesComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessagesComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessagesComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-custom-scrollbar */ "./node_modules/vue-custom-scrollbar/dist/vueScrollbar.umd.min.js");
/* harmony import */ var vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_custom_scrollbar_dist_vueScrollbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-custom-scrollbar/dist/vueScrollbar.css */ "./node_modules/vue-custom-scrollbar/dist/vueScrollbar.css");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var Message = function Message() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Message_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./Message.vue */ "./resources/js/components/Message.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MessagesComponent",
  props: {
    messages: {
      type: Array,
      "default": []
    },
    userId: {
      type: Number
    }
  },
  components: {
    vueCustomScrollbar: (vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_0___default()),
    Message: Message
  },
  updated: function updated() {
    this.scrollToBottom();
  },
  methods: {
    scrollToBottom: function scrollToBottom() {
      this.$refs.scroll.$el.scrollTop = this.$refs.scroll.$el.scrollHeight - this.$refs.scroll.$el.clientHeight;
    }
  },
  data: function data() {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: true,
        wheelPropagation: false
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-custom-scrollbar/dist/vueScrollbar.css":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-custom-scrollbar/dist/vueScrollbar.css ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{height:15px;bottom:0}.ps__rail-x,.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;position:absolute}.ps__rail-y{width:15px;right:0}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px}.ps__thumb-x,.ps__thumb-y{background-color:#aaa;border-radius:6px;position:absolute}.ps__thumb-y{transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}.ps-container{position:relative}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/vue-custom-scrollbar/dist/vueScrollbar.css":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-custom-scrollbar/dist/vueScrollbar.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_vueScrollbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./vueScrollbar.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-custom-scrollbar/dist/vueScrollbar.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_vueScrollbar_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_vueScrollbar_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-custom-scrollbar/dist/vueScrollbar.umd.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-custom-scrollbar/dist/vueScrollbar.umd.min.js ***!
  \************************************************************************/
/***/ (function(module) {

(function(t,e){ true?module.exports=e():0})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"3ae1":function(t,e,n){"use strict";n("e386")},8875:function(t,e,n){var i,r,l;(function(n,o){r=[],i=o,l="function"===typeof i?i.apply(e,r):i,void 0===l||(t.exports=l)})("undefined"!==typeof self&&self,(function(){function t(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(f){var n,i,r,l=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,s=l.exec(f.stack)||o.exec(f.stack),a=s&&s[1]||!1,c=s&&s[2]||!1,h=document.location.href.replace(document.location.hash,""),u=document.getElementsByTagName("script");a===h&&(n=document.documentElement.outerHTML,i=new RegExp("(?:[^\\n]+?\\n){0,"+(c-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),r=n.replace(i,"$1").trim());for(var d=0;d<u.length;d++){if("interactive"===u[d].readyState)return u[d];if(u[d].src===a)return u[d];if(a===h&&u[d].innerHTML&&u[d].innerHTML.trim()===r)return u[d]}return null}}return t}))},e386:function(t,e,n){},fb15:function(t,e,n){"use strict";if(n.r(e),"undefined"!==typeof window){var i=window.document.currentScript,r=n("8875");i=r(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:r});var l=i&&i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);l&&(n.p=l[1])}var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.$props.tagname,{tag:"section",staticClass:"ps-container",on:{"ps-scroll-y":t.scrollHandle,"ps-scroll-x":t.scrollHandle,"ps-scroll-up":t.scrollHandle,"ps-scroll-down":t.scrollHandle,"ps-scroll-left":t.scrollHandle,"ps-scroll-right":t.scrollHandle,"ps-y-reach-start":t.scrollHandle,"ps-y-reach-end":t.scrollHandle,"ps-x-reach-start":t.scrollHandle,"ps-x-reach-end":t.scrollHandle}},[t._t("default")],2)},s=[];
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */
function a(t){return getComputedStyle(t)}function c(t,e){for(var n in e){var i=e[n];"number"===typeof i&&(i+="px"),t.style[n]=i}return t}function h(t){var e=document.createElement("div");return e.className=t,e}var u="undefined"!==typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function d(t,e){if(!u)throw new Error("No element matching method supported");return u.call(t,e)}function f(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function p(t,e){return Array.prototype.filter.call(t.children,(function(t){return d(t,e)}))}var b={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},g={x:null,y:null};function v(t,e){var n=t.element.classList,i=b.state.scrolling(e);n.contains(i)?clearTimeout(g[e]):n.add(i)}function m(t,e){g[e]=setTimeout((function(){return t.isAlive&&t.element.classList.remove(b.state.scrolling(e))}),t.settings.scrollingThreshold)}function y(t,e){v(t,e),m(t,e)}var w=function(t){this.element=t,this.handlers={}},Y={isEmpty:{configurable:!0}};w.prototype.bind=function(t,e){"undefined"===typeof this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},w.prototype.unbind=function(t,e){var n=this;this.handlers[t]=this.handlers[t].filter((function(i){return!(!e||i===e)||(n.element.removeEventListener(t,i,!1),!1)}))},w.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)},Y.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every((function(e){return 0===t.handlers[e].length}))},Object.defineProperties(w.prototype,Y);var X=function(){this.eventElements=[]};function W(t){if("function"===typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function S(t,e,n,i,r){var l;if(void 0===i&&(i=!0),void 0===r&&(r=!1),"top"===e)l=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");l=["contentWidth","containerWidth","scrollLeft","x","left","right"]}L(t,n,l,i,r)}function L(t,e,n,i,r){var l=n[0],o=n[1],s=n[2],a=n[3],c=n[4],h=n[5];void 0===i&&(i=!0),void 0===r&&(r=!1);var u=t.element;t.reach[a]=null,u[s]<1&&(t.reach[a]="start"),u[s]>t[l]-t[o]-1&&(t.reach[a]="end"),e&&(u.dispatchEvent(W("ps-scroll-"+a)),e<0?u.dispatchEvent(W("ps-scroll-"+c)):e>0&&u.dispatchEvent(W("ps-scroll-"+h)),i&&y(t,a)),t.reach[a]&&(e||r)&&u.dispatchEvent(W("ps-"+a+"-reach-"+t.reach[a]))}function T(t){return parseInt(t,10)||0}function H(t){return d(t,"input,[contenteditable]")||d(t,"select,[contenteditable]")||d(t,"textarea,[contenteditable]")||d(t,"button,[contenteditable]")}function R(t){var e=a(t);return T(e.width)+T(e.paddingLeft)+T(e.paddingRight)+T(e.borderLeftWidth)+T(e.borderRightWidth)}X.prototype.eventElement=function(t){var e=this.eventElements.filter((function(e){return e.element===t}))[0];return e||(e=new w(t),this.eventElements.push(e)),e},X.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},X.prototype.unbind=function(t,e,n){var i=this.eventElement(t);i.unbind(e,n),i.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(i),1)},X.prototype.unbindAll=function(){this.eventElements.forEach((function(t){return t.unbindAll()})),this.eventElements=[]},X.prototype.once=function(t,e,n){var i=this.eventElement(t),r=function(t){i.unbind(e,r),n(t)};i.bind(e,r)};var _={isWebKit:"undefined"!==typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!==typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!==typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!==typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)};function E(t){var e=t.element,n=Math.floor(e.scrollTop),i=e.getBoundingClientRect();t.containerWidth=Math.ceil(i.width),t.containerHeight=Math.ceil(i.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(p(e,b.element.rail("x")).forEach((function(t){return f(t)})),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(p(e,b.element.rail("y")).forEach((function(t){return f(t)})),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=x(t,T(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=T((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=x(t,T(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=T(n*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),M(e,t),t.scrollbarXActive?e.classList.add(b.state.active("x")):(e.classList.remove(b.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=!0===t.isRtl?t.contentWidth:0),t.scrollbarYActive?e.classList.add(b.state.active("y")):(e.classList.remove(b.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function x(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function M(t,e){var n={width:e.railXWidth},i=Math.floor(t.scrollTop);e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-i:n.top=e.scrollbarXTop+i,c(e.scrollbarXRail,n);var r={top:i,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:r.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+t.scrollLeft,c(e.scrollbarYRail,r),c(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),c(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function A(t){t.element;t.event.bind(t.scrollbarY,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarYRail,"mousedown",(function(e){var n=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,i=n>t.scrollbarYTop?1:-1;t.element.scrollTop+=i*t.containerHeight,E(t),e.stopPropagation()})),t.event.bind(t.scrollbarX,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarXRail,"mousedown",(function(e){var n=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,i=n>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=i*t.containerWidth,E(t),e.stopPropagation()}))}function P(t){C(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),C(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function C(t,e){var n=e[0],i=e[1],r=e[2],l=e[3],o=e[4],s=e[5],a=e[6],c=e[7],h=e[8],u=t.element,d=null,f=null,p=null;function g(e){e.touches&&e.touches[0]&&(e[r]=e.touches[0].pageY),u[a]=d+p*(e[r]-f),v(t,c),E(t),e.stopPropagation(),e.preventDefault()}function y(){m(t,c),t[h].classList.remove(b.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",g)}function w(e,o){d=u[a],o&&e.touches&&(e[r]=e.touches[0].pageY),f=e[r],p=(t[i]-t[n])/(t[l]-t[s]),o?t.event.bind(t.ownerDocument,"touchmove",g):(t.event.bind(t.ownerDocument,"mousemove",g),t.event.once(t.ownerDocument,"mouseup",y),e.preventDefault()),t[h].classList.add(b.state.clicking),e.stopPropagation()}t.event.bind(t[o],"mousedown",(function(t){w(t)})),t.event.bind(t[o],"touchstart",(function(t){w(t,!0)}))}function k(t){var e=t.element,n=function(){return d(e,":hover")},i=function(){return d(t.scrollbarX,":focus")||d(t.scrollbarY,":focus")};function r(n,i){var r=Math.floor(e.scrollTop);if(0===n){if(!t.scrollbarYActive)return!1;if(0===r&&i>0||r>=t.contentHeight-t.containerHeight&&i<0)return!t.settings.wheelPropagation}var l=e.scrollLeft;if(0===i){if(!t.scrollbarXActive)return!1;if(0===l&&n<0||l>=t.contentWidth-t.containerWidth&&n>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",(function(l){if(!(l.isDefaultPrevented&&l.isDefaultPrevented()||l.defaultPrevented)&&(n()||i())){var o=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(o){if("IFRAME"===o.tagName)o=o.contentDocument.activeElement;else while(o.shadowRoot)o=o.shadowRoot.activeElement;if(H(o))return}var s=0,a=0;switch(l.which){case 37:s=l.metaKey?-t.contentWidth:l.altKey?-t.containerWidth:-30;break;case 38:a=l.metaKey?t.contentHeight:l.altKey?t.containerHeight:30;break;case 39:s=l.metaKey?t.contentWidth:l.altKey?t.containerWidth:30;break;case 40:a=l.metaKey?-t.contentHeight:l.altKey?-t.containerHeight:-30;break;case 32:a=l.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:a=t.containerHeight;break;case 34:a=-t.containerHeight;break;case 36:a=t.contentHeight;break;case 35:a=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==s||t.settings.suppressScrollY&&0!==a||(e.scrollTop-=a,e.scrollLeft+=s,E(t),r(s,a)&&l.preventDefault())}}))}function D(t){var e=t.element;function n(n,i){var r,l=Math.floor(e.scrollTop),o=0===e.scrollTop,s=l+e.offsetHeight===e.scrollHeight,a=0===e.scrollLeft,c=e.scrollLeft+e.offsetWidth===e.scrollWidth;return r=Math.abs(i)>Math.abs(n)?o||s:a||c,!r||!t.settings.wheelPropagation}function i(t){var e=t.deltaX,n=-1*t.deltaY;return"undefined"!==typeof e&&"undefined"!==typeof n||(e=-1*t.wheelDeltaX/6,n=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,n*=10),e!==e&&n!==n&&(e=0,n=t.wheelDelta),t.shiftKey?[-n,-e]:[e,n]}function r(t,n,i){if(!_.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(t))return!1;var r=t;while(r&&r!==e){if(r.classList.contains(b.element.consuming))return!0;var l=a(r);if(i&&l.overflowY.match(/(scroll|auto)/)){var o=r.scrollHeight-r.clientHeight;if(o>0&&(r.scrollTop>0&&i<0||r.scrollTop<o&&i>0))return!0}if(n&&l.overflowX.match(/(scroll|auto)/)){var s=r.scrollWidth-r.clientWidth;if(s>0&&(r.scrollLeft>0&&n<0||r.scrollLeft<s&&n>0))return!0}r=r.parentNode}return!1}function l(l){var o=i(l),s=o[0],a=o[1];if(!r(l.target,s,a)){var c=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(a?e.scrollTop-=a*t.settings.wheelSpeed:e.scrollTop+=s*t.settings.wheelSpeed,c=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(s?e.scrollLeft+=s*t.settings.wheelSpeed:e.scrollLeft-=a*t.settings.wheelSpeed,c=!0):(e.scrollTop-=a*t.settings.wheelSpeed,e.scrollLeft+=s*t.settings.wheelSpeed),E(t),c=c||n(s,a),c&&!l.ctrlKey&&(l.stopPropagation(),l.preventDefault())}}"undefined"!==typeof window.onwheel?t.event.bind(e,"wheel",l):"undefined"!==typeof window.onmousewheel&&t.event.bind(e,"mousewheel",l)}function O(t){if(_.supportsTouch||_.supportsIePointer){var e=t.element,n={},i=0,r={},l=null;_.supportsTouch?(t.event.bind(e,"touchstart",u),t.event.bind(e,"touchmove",f),t.event.bind(e,"touchend",p)):_.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",u),t.event.bind(e,"pointermove",f),t.event.bind(e,"pointerup",p)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",u),t.event.bind(e,"MSPointerMove",f),t.event.bind(e,"MSPointerUp",p)))}function o(n,i){var r=Math.floor(e.scrollTop),l=e.scrollLeft,o=Math.abs(n),s=Math.abs(i);if(s>o){if(i<0&&r===t.contentHeight-t.containerHeight||i>0&&0===r)return 0===window.scrollY&&i>0&&_.isChrome}else if(o>s&&(n<0&&l===t.contentWidth-t.containerWidth||n>0&&0===l))return!0;return!0}function s(n,i){e.scrollTop-=i,e.scrollLeft-=n,E(t)}function c(t){return t.targetTouches?t.targetTouches[0]:t}function h(t){return(!t.pointerType||"pen"!==t.pointerType||0!==t.buttons)&&(!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function u(t){if(h(t)){var e=c(t);n.pageX=e.pageX,n.pageY=e.pageY,i=(new Date).getTime(),null!==l&&clearInterval(l)}}function d(t,n,i){if(!e.contains(t))return!1;var r=t;while(r&&r!==e){if(r.classList.contains(b.element.consuming))return!0;var l=a(r);if(i&&l.overflowY.match(/(scroll|auto)/)){var o=r.scrollHeight-r.clientHeight;if(o>0&&(r.scrollTop>0&&i<0||r.scrollTop<o&&i>0))return!0}if(n&&l.overflowX.match(/(scroll|auto)/)){var s=r.scrollWidth-r.clientWidth;if(s>0&&(r.scrollLeft>0&&n<0||r.scrollLeft<s&&n>0))return!0}r=r.parentNode}return!1}function f(t){if(h(t)){var e=c(t),l={pageX:e.pageX,pageY:e.pageY},a=l.pageX-n.pageX,u=l.pageY-n.pageY;if(d(t.target,a,u))return;s(a,u),n=l;var f=(new Date).getTime(),p=f-i;p>0&&(r.x=a/p,r.y=u/p,i=f),o(a,u)&&t.preventDefault()}}function p(){t.settings.swipeEasing&&(clearInterval(l),l=setInterval((function(){t.isInitialized?clearInterval(l):r.x||r.y?Math.abs(r.x)<.01&&Math.abs(r.y)<.01?clearInterval(l):(s(30*r.x,30*r.y),r.x*=.8,r.y*=.8):clearInterval(l)}),10))}}var j=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},N={"click-rail":A,"drag-thumb":P,keyboard:k,wheel:D,touch:O},B=function(t,e){var n=this;if(void 0===e&&(e={}),"string"===typeof t&&(t=document.querySelector(t)),!t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var i in this.element=t,t.classList.add(b.main),this.settings=j(),e)this.settings[i]=e[i];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var r=function(){return t.classList.add(b.state.focus)},l=function(){return t.classList.remove(b.state.focus)};this.isRtl="rtl"===a(t).direction,!0===this.isRtl&&t.classList.add(b.rtl),this.isNegativeScroll=function(){var e=t.scrollLeft,n=null;return t.scrollLeft=-1,n=t.scrollLeft<0,t.scrollLeft=e,n}(),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new X,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=h(b.element.rail("x")),t.appendChild(this.scrollbarXRail),this.scrollbarX=h(b.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",r),this.event.bind(this.scrollbarX,"blur",l),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var o=a(this.scrollbarXRail);this.scrollbarXBottom=parseInt(o.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=T(o.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=T(o.borderLeftWidth)+T(o.borderRightWidth),c(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=T(o.marginLeft)+T(o.marginRight),c(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=h(b.element.rail("y")),t.appendChild(this.scrollbarYRail),this.scrollbarY=h(b.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",r),this.event.bind(this.scrollbarY,"blur",l),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var s=a(this.scrollbarYRail);this.scrollbarYRight=parseInt(s.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=T(s.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?R(this.scrollbarY):null,this.railBorderYWidth=T(s.borderTopWidth)+T(s.borderBottomWidth),c(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=T(s.marginTop)+T(s.marginBottom),c(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:t.scrollLeft<=0?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:t.scrollTop<=0?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach((function(t){return N[t](n)})),this.lastScrollTop=Math.floor(t.scrollTop),this.lastScrollLeft=t.scrollLeft,this.event.bind(this.element,"scroll",(function(t){return n.onScroll(t)})),E(this)};B.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,c(this.scrollbarXRail,{display:"block"}),c(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=T(a(this.scrollbarXRail).marginLeft)+T(a(this.scrollbarXRail).marginRight),this.railYMarginHeight=T(a(this.scrollbarYRail).marginTop)+T(a(this.scrollbarYRail).marginBottom),c(this.scrollbarXRail,{display:"none"}),c(this.scrollbarYRail,{display:"none"}),E(this),S(this,"top",0,!1,!0),S(this,"left",0,!1,!0),c(this.scrollbarXRail,{display:""}),c(this.scrollbarYRail,{display:""}))},B.prototype.onScroll=function(t){this.isAlive&&(E(this),S(this,"top",this.element.scrollTop-this.lastScrollTop),S(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},B.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),f(this.scrollbarX),f(this.scrollbarY),f(this.scrollbarXRail),f(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},B.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter((function(t){return!t.match(/^ps([-_].+|)$/)})).join(" ")};var $=B,I={name:"vue-custom-scrollbar",props:{settings:{default:null},swicher:{type:Boolean,default:!0},tagname:{type:String,default:"section"}},data:function(){return{ps:null}},methods:{scrollHandle:function(t){this.$emit(t.type,t)},update:function(){this.ps&&this.ps.update()},__init:function(){this.swicher&&(this._ps_inited?this.ps.update():(this._ps_inited=!0,this.ps=new $(this.$el,this.settings)))},__uninit:function(){this.ps&&(this.ps.destroy(),this.ps=null,this._ps_inited=!1)}},watch:{swicher:function(t){t&&!this._ps_inited&&this.__init(),!t&&this._ps_inited&&this.__uninit()},settings:{deep:!0,handler:function(){this.__uninit(),this.__init()}},$route:function(){this.update()}},mounted:function(){this.$isServer||this.__init()},updated:function(){this.$nextTick(this.update)},activated:function(){this.__init()},deactivated:function(){this.__uninit()},beforeDestroy:function(){this.__uninit()}},K=I;n("3ae1");function U(t,e,n,i,r,l,o,s){var a,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),l&&(c._scopeId="data-v-"+l),o?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=a):r&&(a=s?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),a)if(c.functional){c._injectStyles=a;var h=c.render;c.render=function(t,e){return a.call(e),h(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,a):[a]}return{exports:t,options:c}}var z=U(K,o,s,!1,null,null,null),q=z.exports;e["default"]=q}})["default"]}));
//# sourceMappingURL=vueScrollbar.umd.min.js.map

/***/ }),

/***/ "./resources/js/components/MessagesComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/MessagesComponent.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MessagesComponent_vue_vue_type_template_id_2626cdb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessagesComponent.vue?vue&type=template&id=2626cdb6& */ "./resources/js/components/MessagesComponent.vue?vue&type=template&id=2626cdb6&");
/* harmony import */ var _MessagesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessagesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/MessagesComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _MessagesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MessagesComponent_vue_vue_type_template_id_2626cdb6___WEBPACK_IMPORTED_MODULE_0__.render,
  _MessagesComponent_vue_vue_type_template_id_2626cdb6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MessagesComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/MessagesComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/MessagesComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessagesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MessagesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessagesComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessagesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/MessagesComponent.vue?vue&type=template&id=2626cdb6&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/MessagesComponent.vue?vue&type=template&id=2626cdb6& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessagesComponent_vue_vue_type_template_id_2626cdb6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessagesComponent_vue_vue_type_template_id_2626cdb6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessagesComponent_vue_vue_type_template_id_2626cdb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MessagesComponent.vue?vue&type=template&id=2626cdb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessagesComponent.vue?vue&type=template&id=2626cdb6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessagesComponent.vue?vue&type=template&id=2626cdb6&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessagesComponent.vue?vue&type=template&id=2626cdb6& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "messages-list" },
    [
      _c(
        "vue-custom-scrollbar",
        {
          ref: "scroll",
          staticClass: "scroll-area",
          attrs: { settings: _vm.settings }
        },
        [
          _c(
            "div",
            _vm._l(_vm.messages, function(item, index) {
              return _c("message", {
                key: index,
                attrs: { "user-id": _vm.userId, message: item }
              })
            }),
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);