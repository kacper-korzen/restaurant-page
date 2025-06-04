/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nh1, h2, h3, h4, h5, p {\n  margin: 0;\n}\n\nh1, h2, h3, h4, h5 {\n  line-height: 1.1;\n  text-wrap: balance;\n}\n\n\np, li {\n  text-wrap: pretty;\n}\n\n\n[role=\"list\"], ol[role=\"list\"] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/reset.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --clr-text: hsl(25, 20%, 10%);\n  --clr-body: hsl(36, 34%, 95%);\n  --clr-background: hsl(0, 0%, 100%);\n  --clr-primary: hsl(4, 74%, 55%);\n  --clr-secondary: hsl(122, 30%, 40%);\n  --clr-accent: hsl(45, 90%, 60%);\n\n  --clr-success: hsl(120, 60%, 50%);\n  --clr-error: hsl(0, 80%, 50%);\n\n  --ff-base: 'Lora', serif;\n  --ff-accent: 'Quattrocento', serif;\n\n  --fw-regular: 400;\n  --fw-semi-bold: 700;\n  --fw-bold: 900;\n\n  --fs-100: clamp(0.7813rem, 0.7747rem + 0.0326vw, 0.8rem);\n  --fs-200: clamp(0.9375rem, 0.9158rem + 0.1087vw, 1rem);\n  --fs-300: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);\n  --fs-400: clamp(1.35rem, 1.2761rem + 0.3696vw, 1.5625rem);\n  --fs-500: clamp(1.62rem, 1.5041rem + 0.5793vw, 1.9531rem);\n  --fs-600: clamp(1.944rem, 1.771rem + 0.8651vw, 2.4414rem);\n  --fs-700: clamp(2.3328rem, 2.0827rem + 1.2504vw, 3.0518rem);\n  --fs-800: clamp(2.7994rem, 2.4462rem + 1.7658vw, 3.8147rem);\n}\n\n\nbody {\n  color: var(--clr-text);\n  background-color: var(--clr-body);\n  font-family: var(--ff-base, 'system-ui, sans-serif');\n  font-size: var(--fs-200, 1rem);\n  line-height: 1.6;\n  min-height: 100vh;\n  min-height: 100dvh;\n\n}\n\n.wrapper {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  width: calc(100% - 20rem);\n  margin-inline: auto;\n}\n\nsection {\n  padding-block: 6rem;\n}\n\nimg {\n  border-radius: 1rem;\n}\n\n\n/* use this to separate headings and paragraphs */\n.flow>*+* {\n  margin-top: var(--flow-space, 1em);\n}\n\n\nh1 {\n  --flow-space: 2em;\n\n  font-size: var(--fs-700);\n  color: var(--clr-primary);\n}\n\nh2 {\n  --flow-space: 1.5em;\n\n  font-size: var(--fs-600);\n  color: var(--clr-secondary);\n}\n\nh3 {\n  --flow-space: 1.125em;\n\n  font-size: var(--fs-500);\n  color: var(--clr-text);\n}\n\np {\n  font-size: var(--fs-400);\n}\n\n.grid {\n  display: grid;\n}\n\n/* header */\nheader {\n  color: var(--clr-primary);\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  font-family: var(--ff-accent);\n}\n\n.logo-wrapper {\n  cursor: pointer;\n}\n\n.logo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  font-size: var(--fs-600);\n  font-weight: var(--fw-bold);\n\n  & img {\n    width: 3rem;\n    height: auto;\n  }\n}\n\n/* nav */\nnav {\n  display: flex;\n  gap: 2rem;\n\n\n\n  & button {\n    position: relative;\n    background: transparent;\n    border: none;\n    color: var(--clr-text);\n    cursor: pointer;\n    font-size: var(--fs-400);\n    padding: 0.25em 0;\n    transition: color 0.2s;\n\n    &:after {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      height: 2px;\n      background: var(--clr-primary);\n      transform: scaleX(0);\n      transform-origin: center;\n      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    }\n\n    &:hover,\n    &:focus {\n      color: var(--clr-primary);\n    }\n\n    &:hover::after,\n    &:focus::after {\n      transform: scaleX(1);\n    }\n\n  }\n}\n\n/* home */\n.home {\n  display: grid;\n  gap: 3rem;\n  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));\n\n\n  & div {\n    display: flex;\n    gap:1rem;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n  }\n\n}\n\n/* favourites */\n.centered-grid {\n  justify-content: center;\n  gap: 2rem;\n\n  & div {\n    text-align: center;\n  }\n}\n\n.products {\n  gap: 3rem;\n  grid-template-columns:repeat(auto-fit, minmax(min(25rem, 100%), 1fr));\n\n  & img {\n    width: 90vw;\n  }\n}\n\n/* menu */\n.cards-wrapper {\n  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));\n}\n\n.card {\n  width: fit-content;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  border: 1px solid var(--clr-text);\n  border-radius: 1rem;\n  padding: 1rem;\n  cursor: pointer;\n\n  & img {\n    width: 20ch;\n    height: auto;\n    justify-self: center;\n  }\n\n  &:hover {\n    background: var(--clr-accent);\n    transform: translateY(-5px);\n  }\n}\n\n/* footer */\nfooter {\n  padding-block: 1rem;\n  margin-bottom:0;\n  text-align: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/css/style.css?");

/***/ }),

/***/ "./src/images/deser.jpg":
/*!******************************!*\
  !*** ./src/images/deser.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a34a8383a1e6e8be0b4.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/deser.jpg?");

/***/ }),

/***/ "./src/images/fav-pizza-1.jpg":
/*!************************************!*\
  !*** ./src/images/fav-pizza-1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2d352965e64171b7e47.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/fav-pizza-1.jpg?");

/***/ }),

/***/ "./src/images/fav-pizza-2.jpg":
/*!************************************!*\
  !*** ./src/images/fav-pizza-2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"86291d030292b0947a67.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/fav-pizza-2.jpg?");

/***/ }),

/***/ "./src/images/pizza-home.jpg":
/*!***********************************!*\
  !*** ./src/images/pizza-home.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a7aafc973cff01c942d9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pizza-home.jpg?");

/***/ }),

/***/ "./src/images/tables.jpg":
/*!*******************************!*\
  !*** ./src/images/tables.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"92d0341df6cc3ee34088.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/tables.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu.js */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about.js */ \"./src/pages/about.js\");\n\n\n\n\n\nconst content = document.querySelector('#content');\nconst navButtons = document.querySelectorAll('nav button');\nconst logo = document.querySelector('.logo-wrapper');\n\n\nconst pages = {\n  home : _pages_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  menu : _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  about : _pages_about_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n}\n\nlogo.addEventListener('click', () => {\n  ;(0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\n})\n\nnavButtons.forEach(button => {\n  button.addEventListener('click', () => {\n    const page = button.dataset.page;\n    pages[page](content);\n  })\n})\n\n\ndocument.body.onload = () => (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_tables_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/tables.jpg */ \"./src/images/tables.jpg\");\n\n\nfunction aboutSection() {\n  const aboutSectionContent = `\n      <div>\n        <h2>O nas</h2>\n        <p>Mała Sycylia zrodziła się z marzenia o przybliżeniu włoskiej duszy i południowego ciepła w samym sercu naszego miasta. Od momentu powstania – niespełna trzy lata temu – naszą misją było stworzenie miejsca, gdzie smak, atmosfera i gościnność łączą się w harmonijną całość.</p>\n        <p>Zainspirowani sycylijską tradycją i prostotą domowej kuchni, postanowiliśmy podzielić się tym, co kochamy najbardziej – autentyczną pizzą, pachnącą świeżymi ziołami, dojrzewającymi serami i oliwą z pierwszego tłoczenia. Każdy kawałek to opowieść o słońcu, morzu i miłości do prawdziwego jedzenia.</p>\n        <p>Mała Sycylia to nie tylko pizzeria – to zaproszenie do podróży, której nie trzeba planować. Wystarczy wejść, usiąść i pozwolić sobie na chwilę sycylijskiej beztroski.</p>\n      </div>\n\n      <div class=\"grid products\">\n        <img src=\"${_images_tables_jpg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Tables\">\n\n      </div>\n    `;\n\n\n\n  return aboutSectionContent;\n}\n\n\nfunction aboutPage(element) {\n  element.innerHTML = '';\n  element.innerHTML = aboutSection();\n\n  return element;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_pizza_home_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/pizza-home.jpg */ \"./src/images/pizza-home.jpg\");\n/* harmony import */ var _images_fav_pizza_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/fav-pizza-1.jpg */ \"./src/images/fav-pizza-1.jpg\");\n/* harmony import */ var _images_fav_pizza_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/fav-pizza-2.jpg */ \"./src/images/fav-pizza-2.jpg\");\n/* harmony import */ var _images_deser_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/deser.jpg */ \"./src/images/deser.jpg\");\n\n\n\n\n\nfunction favouritesSection() {\n  const section = document.createElement('section');\n  section.classList.add('grid', 'centered-grid');\n\n  const favouritesSection = `\n    <div>\n      <h2>Ulubione</h2>\n      <p>Ulubione pozycje naszych klientów</p>\n    </div>\n\n    <div class=\"grid products\">\n      <img src=\"${_images_fav_pizza_1_jpg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Fav Pizza 1\">\n      <img src=\"${_images_fav_pizza_2_jpg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Fav Pizza 2\">\n      <img src=\"${_images_deser_jpg__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Fav Dessert\">\n    </div>\n  `;\n\n  section.innerHTML = favouritesSection;\n\n  return section;\n}\n\nfunction openingHoursSection() {\n  const section = document.createElement('section');\n  section.classList.add('centered-grid');\n\n  const openingHoursSection = `\n    <div>\n      <h2>Godziny otwarcia</h2>\n      <p>Pon - Pt &nbsp;&nbsp; 12:00: - 22:00</p>\n      <p>Sob - Nd &nbsp;&nbsp; 15:00: - 23:00</p>\n    </div>\n  `;\n\n  section.innerHTML = openingHoursSection;\n\n  return section;\n}\n\nfunction headerSection() {\n  const section = document.createElement('section');\n  section.classList.add('home');\n\n  const headerSection = `\n  <div>\n    <h1>„Smak Sycylii: Autentyczne smaki, rodzinna atmosfera”</h2>\n    <p>Poczuj ciepło południowych Włoch w każdym kęsie — ręcznie wyrabiana pizza, świeże składniki i sycylijska tradycja prosto na Twoim stole.</p>\n  </div>\n\n  <img src=\"${_images_pizza_home_jpg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Pizza\">\n  `;\n\n  section.innerHTML = headerSection;\n\n  return section;\n}\n\nfunction homePage(element) {\n  element.innerHTML = '';\n  element.appendChild(headerSection());\n  element.appendChild(favouritesSection());\n  element.appendChild(openingHoursSection());\n\n  return element;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_fav_pizza_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/fav-pizza-1.jpg */ \"./src/images/fav-pizza-1.jpg\");\n/* harmony import */ var _images_fav_pizza_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/fav-pizza-2.jpg */ \"./src/images/fav-pizza-2.jpg\");\n/* harmony import */ var _images_deser_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/deser.jpg */ \"./src/images/deser.jpg\");\n\n\n\n\nfunction card(imgName, name, price) {\n  const card = document.createElement('div');\n  card.classList.add('card', 'grid');\n\n  const img = document.createElement('img');\n  img.src = imgName;\n\n  const h3 = document.createElement('h3');\n  h3.textContent = name;\n\n  const p = document.createElement('p');\n  p.textContent = price;\n\n  card.appendChild(img);\n  card.appendChild(h3);\n  card.appendChild(p);\n\n  return card;\n}\n\nfunction cardsSection() {\n  const section = document.createElement('section');\n  section.classList.add('grid', 'centered-grid');\n\n  const header = document.createElement('div');\n  const h2 = document.createElement('h2');\n  const p = document.createElement('p');\n\n  h2.textContent = 'Menu';\n  p.textContent = `Każdy posiłek jest starannie przygotowywany,\n  aby zapewnić niezapomniane doznania kulinarne.`;\n\n  header.appendChild(h2);\n  header.appendChild(p);\n\n  const cards = document.createElement('div');\n  cards.classList.add('grid', 'cards-wrapper');\n\n  cards.appendChild(card(_images_fav_pizza_1_jpg__WEBPACK_IMPORTED_MODULE_0__, 'Margherita', '10 PLN'));\n  cards.appendChild(card(_images_fav_pizza_2_jpg__WEBPACK_IMPORTED_MODULE_1__, 'Bambinia', '12 PLN'));\n  cards.appendChild(card(_images_deser_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Deser', '5 PLN'));\n\n\n  section.appendChild(header);\n  section.appendChild(cards);\n\n  return section;\n}\n\nfunction menuPage(element) {\n  element.innerHTML = '';\n  element.appendChild(cardsSection());\n\n  return element;\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;