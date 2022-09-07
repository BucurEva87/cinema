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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n:root {\\n  --color-black: #000;\\n}\\n\\nhtml {\\n  font-size: 10px;\\n}\\n\\nbody {\\n  font-size: 2rem;\\n  transition: all 0.5s;\\n}\\n\\n.darkened {\\n  background-color: #333;\\n}\\n\\nheader {\\n  padding: 2rem 0;\\n  position: fixed;\\n  z-index: 100;\\n  background-color: white;\\n  top: 0;\\n  left: 19vw;\\n  width: 62vw;\\n}\\n\\nul {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 60vw;\\n  margin: 2rem auto 0 auto;\\n  list-style: none;\\n}\\n\\n#movie-container {\\n  width: 60vw;\\n  margin: 0 auto;\\n  margin-top: 11.3rem;\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  gap: 3rem;\\n}\\n\\narticle {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  background-color: #ddd;\\n  border-radius: 3rem;\\n  overflow: hidden;\\n  min-height: 50rem;\\n  box-shadow: 1rem 1rem 1rem var(--color-black);\\n}\\n\\narticle img {\\n  width: 100%;\\n  height: 20rem;\\n  margin-bottom: 2rem;\\n}\\n\\narticle div:not(.div-likes) {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 4rem;\\n}\\n\\narticle div h2 {\\n  justify-self: flex-start;\\n  margin-left: 1.5rem;\\n  font-size: 2.2rem;\\n}\\n\\narticle .div-likes {\\n  justify-self: flex-end;\\n  margin-right: 1.5rem;\\n  position: relative;\\n}\\n\\narticle div object {\\n  width: 4rem;\\n  height: 4rem;\\n  pointer-events: none;\\n}\\n\\narticle div span::before {\\n  content: attr(data-likes);\\n  width: 4rem;\\n  height: 4rem;\\n  color: white;\\n  position: absolute;\\n  left: 0;\\n  font-size: 1.6rem;\\n  text-align: center;\\n  line-height: 4rem;\\n  font-weight: bold;\\n  pointer-events: none;\\n}\\n\\narticle div span:hover::before {\\n  display: none;\\n}\\n\\narticle div object:hover {\\n  filter: invert(11%) sepia(97%) saturate(7496%) hue-rotate(4deg) brightness(97%) contrast(113%);\\n}\\n\\narticle button {\\n  width: 80%;\\n  margin: 4% auto;\\n  border: 0.3rem solid var(--color-black);\\n  background-color: orangered;\\n  padding: 1rem;\\n  text-align: center;\\n  font-size: 2rem;\\n  border-radius: 3rem;\\n}\\n\\nfooter {\\n  border: 0.1rem solid var(--color-black);\\n  padding: 2rem;\\n  width: 100%;\\n  background-color: white;\\n  margin-top: 3rem;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n#popup {\\n  box-sizing: content-box;\\n  position: fixed;\\n  width: 49.6vw;\\n  top: 0;\\n  left: 19vw;\\n  bottom: 0;\\n  padding: 0 6.2vw 5rem;\\n  background-color: white;\\n  overflow-y: auto;\\n  text-align: center;\\n}\\n\\n#popup img {\\n  width: 100%;\\n  height: 40vh;\\n}\\n\\n#popup h2 {\\n  margin: 1rem 0;\\n}\\n\\n#popup .info-container {\\n  margin-top: 2rem;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n  grid-template-areas:\\n    'genre      airing'\\n    'popularity rating';\\n  gap: 1rem;\\n  color: #333;\\n  font-style: italic;\\n  font-weight: bold;\\n}\\n\\n#popup #spanGenres {\\n  grid-area: genre;\\n}\\n\\n#popup #spanAiring {\\n  grid-area: airing;\\n}\\n\\n#popup #spanPopularity {\\n  grid-area: popularity;\\n}\\n\\n#popup #spanRating {\\n  grid-area: rating;\\n}\\n\\n#popup object {\\n  font-size: 2.4rem;\\n  font-weight: bold;\\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);\\n  pointer-events: none;\\n}\\n\\n#popup #closeBtnWrapper {\\n  background-color: red;\\n  border-radius: 50%;\\n  height: 3rem;\\n  width: 3rem;\\n  cursor: pointer;\\n  position: absolute;\\n  top: 2rem;\\n  right: 15rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#popup ul {\\n  list-style-type: none;\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0 auto;\\n  width: 80%;\\n  gap: 0.3rem;\\n}\\n\\nli {\\n  padding: 0.5rem;\\n  width: 100%;\\n}\\n\\n#popup li:nth-child(odd) {\\n  background-color: #fccb1d;\\n}\\n\\n#popup li:nth-child(even) {\\n  background-color: #d4d4f7;\\n}\\n\\n#popup input,\\n#popup textarea {\\n  display: block;\\n  margin: 0 auto 2rem;\\n  width: 50%;\\n  padding: 1rem;\\n}\\n\\n#popup button {\\n  width: 36%;\\n  border: 0.2rem solid var(--color-black);\\n  padding: 1rem;\\n  background-color: #ddd;\\n  transition: translate 0.2s;\\n}\\n\\n#popup button:active {\\n  translate: 0.2rem 0.2rem;\\n}\\n\\n#usernameError,\\n#commentError {\\n  color: red;\\n  margin: 0 0 0 2rem;\\n  font-weight: bold;\\n  font-size: 1.6rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://boilerplate/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://boilerplate/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/utils.js */ \"./src/modules/utils.js\");\n/* harmony import */ var _modules_Cinema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Cinema.js */ \"./src/modules/Cinema.js\");\n/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/logo.png */ \"./src/assets/img/logo.png\");\n/* harmony import */ var _modules_Popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Popup.js */ \"./src/modules/Popup.js\");\n\n\n\n\n\n\nconst theater = _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].qs('#movie-container');\nconst popupModal = _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].qs('#popup');\n\n// Insert the logo\n_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].qs('#logo a').appendChild(_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement({\n  tagName: 'img',\n  src: _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3__,\n}));\n\n// Like a movie\ntheater.addEventListener('click', (e) => {\n  const { target } = e;\n\n  if (!target.classList.contains('heart')) return;\n\n  const title = target.closest('article').dataset.show;\n  const movie = _modules_Cinema_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].list.find((m) => m.title === title);\n\n  movie.like();\n});\n\n// Listen for popup call on button click\ntheater.addEventListener('click', (e) => {\n  const { target } = e;\n\n  if (target.tagName !== 'BUTTON' || target.textContent !== 'Comment') return;\n\n  const movie = _modules_Cinema_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].list.find((m) => m.title === target.closest('article').dataset.show);\n\n  _modules_Popup_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].populate(movie);\n});\n\n// Listen for popup close on closeBtn click\npopupModal.addEventListener('click', (e) => {\n  const { target } = e;\n\n  if (target.id !== 'closeBtnWrapper') return;\n\n  _modules_Popup_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].close();\n});\n\n// Submit a comment\n_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].qs('button', popupModal).addEventListener('click', () => {\n  console.log('Button was clicked');\n\n  const username = _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].qs('#username');\n  const comment = _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].qs('#comment');\n  const usernameError = _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].qs('#usernameError');\n  const commentError = _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].qs('#commentError');\n\n  usernameError.textContent = '';\n  commentError.textContent = '';\n  usernameError.classList.add('hidden');\n  commentError.classList.add('hidden');\n\n  // Validation\n  if (!username.value.trim()) {\n    usernameError.textContent = 'An username must be provided';\n    usernameError.classList.remove('hidden');\n    return;\n  }\n  if (!comment.value.trim()) {\n    commentError.textContent = 'The comment can not be empty';\n    commentError.classList.remove('hidden');\n    return;\n  }\n\n  const movie = _modules_Cinema_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].list.find((m) => m.title === _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].qs('h2', popupModal).textContent);\n\n  movie.postComment({\n    username: username.value.trim(),\n    comment: comment.value.trim(),\n  });\n\n  username.value = '';\n  comment.value = '';\n});\n\n\n//# sourceURL=webpack://boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/Card.js":
/*!*****************************!*\
  !*** ./src/modules/Card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/modules/utils.js\");\n/* harmony import */ var _assets_img_heart_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/heart.svg */ \"./src/assets/img/heart.svg\");\n\n\n\nclass Card {\n  constructor(movie) {\n    this.movie = movie;\n  }\n\n  display() {\n    const article = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'article',\n      info: { show: this.movie.title },\n    });\n\n    article.appendChild(\n      _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n        tagName: 'img',\n        src: this.movie.image,\n        alt: this.movie.title,\n      }),\n    );\n\n    const div = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({});\n\n    div.appendChild(\n      _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n        tagName: 'h2',\n        textContent: this.movie.title,\n      }),\n    );\n\n    const divLikes = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      class: 'div-likes',\n    });\n\n    divLikes.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'span',\n      info: { likes: this.movie.likes },\n    }));\n    const parentDiv = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      class: 'heart',\n    });\n    parentDiv.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'object',\n      data: _assets_img_heart_svg__WEBPACK_IMPORTED_MODULE_1__,\n    }));\n    divLikes.appendChild(parentDiv);\n\n    div.appendChild(divLikes);\n    article.appendChild(div);\n    article.appendChild(\n      _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n        tagName: 'button',\n        textContent: 'Comment',\n      }),\n    );\n    article.appendChild(\n      _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n        tagName: 'button',\n        textContent: 'Reservation',\n      }),\n    );\n\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('#movie-container').appendChild(article);\n  }\n}\n\n\n//# sourceURL=webpack://boilerplate/./src/modules/Card.js?");

/***/ }),

/***/ "./src/modules/Cinema.js":
/*!*******************************!*\
  !*** ./src/modules/Cinema.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Movie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Movie.js */ \"./src/modules/Movie.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ \"./src/modules/config.js\");\n/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.js */ \"./src/modules/Card.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./src/modules/utils.js\");\n/* harmony import */ var _Comment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Comment.js */ \"./src/modules/Comment.js\");\n\n\n\n\n\n\nconst {\n  INVOLVMENT_APP_ID, INVOLVMENT_BASE_URL, MOVIE_API_KEY, MOVIE_POPULAR,\n} = _config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\nclass Cinema {\n  list = []\n\n  constructor() {\n    this.getPopularMovies();\n  }\n\n  async getPopularMovies() {\n    let response = await fetch(`${INVOLVMENT_BASE_URL}/apps/${INVOLVMENT_APP_ID}/likes`);\n    this.likes = await response.json();\n\n    response = await fetch(`${MOVIE_POPULAR}${MOVIE_API_KEY}`);\n    const result = await response.json();\n\n    result.results.slice(0, 7).forEach(async (r) => {\n      const likes = this.likes.find((l) => l.item_id === r.title);\n\n      const comments = [];\n\n      try {\n        const response = await fetch(`${INVOLVMENT_BASE_URL}/apps/${INVOLVMENT_APP_ID}/comments?item_id=${encodeURIComponent(r.title)}`);\n        const result = await response.json();\n\n        if (!('error' in result)) {\n          result.forEach((c) => comments.push(new _Comment_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n            username: c.username,\n            comment: c.comment,\n            creation_date: c.creation_date,\n          })));\n        }\n      } catch (e) {\n        throw new Error(e.message);\n      }\n\n      if (likes) r = { ...r, likes: likes.likes };\n\n      const movie = new _Movie_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ ...r, comments });\n      const card = new _Card_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](movie);\n\n      this.list.push(movie);\n      card.display();\n    });\n\n    setTimeout(() => {\n      this.sortGenres();\n    }, 5000);\n  }\n\n  sortGenres() {\n    const top = [];\n\n    this.list.forEach((m) => {\n      m.genres.forEach((g) => {\n        const genre = top.find((p) => p.genre === g);\n\n        if (genre) genre.movies += 1;\n        else top.push({ genre: g, movies: 1 });\n      });\n    });\n\n    top.sort((a, b) => b.movies - a.movies).slice(0, 3).forEach((p, i) => {\n      _utils_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].qsa('header li')[i + 1].innerText = `${p.genre} (${p.movies})`;\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Cinema());\n\n\n//# sourceURL=webpack://boilerplate/./src/modules/Cinema.js?");

/***/ }),

/***/ "./src/modules/Comment.js":
/*!********************************!*\
  !*** ./src/modules/Comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Comment)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/modules/utils.js\");\n\n\nclass Comment {\n  constructor(comment) {\n    this.username = comment.username;\n    this.comment = comment.comment;\n    this.creationDate = comment.creation_date;\n  }\n\n  display(container) {\n    container.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'li',\n      textContent: `[${this.creationDate}] ${this.username}: ${this.comment}`,\n    }));\n  }\n}\n\n\n//# sourceURL=webpack://boilerplate/./src/modules/Comment.js?");

/***/ }),

/***/ "./src/modules/Movie.js":
/*!******************************!*\
  !*** ./src/modules/Movie.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movie)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/modules/utils.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ \"./src/modules/config.js\");\n/* harmony import */ var _Comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment.js */ \"./src/modules/Comment.js\");\n\n\n\n\nconst { INVOLVMENT_APP_ID, INVOLVMENT_BASE_URL, MOVIE_BASE_POSTER_PATH } = _config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\nconst genres = {\n  12: 'Adventure',\n  14: 'Fantasy',\n  16: 'Animation',\n  27: 'Horror',\n  28: 'Action',\n  35: 'Comedy',\n  36: 'History',\n  37: 'Western',\n  53: 'Thriller',\n  80: 'Crime',\n  99: 'Documentary',\n  18: 'Drama',\n  878: 'Science Fiction',\n  9648: 'Mistery',\n  10402: 'Music',\n  10749: 'Romance',\n  10752: 'War',\n  10770: 'TV Movie',\n  17051: 'Family',\n};\n\nclass Movie {\n  constructor(show) {\n    this.title = show.title;\n    this.genres = show.genre_ids.map((g) => genres[g]);\n    this.image = `${MOVIE_BASE_POSTER_PATH}${show.poster_path}`;\n    this.overview = show.overview;\n    this.likes = show.likes ?? 0;\n    this.popularity = show.popularity;\n    this.releaseDate = show.release_date;\n    this.voteAverage = show.vote_average;\n    this.voteCount = show.vote_count;\n    this.comments = show.comments;\n  }\n\n  async like() {\n    const response = await fetch(\n      `${INVOLVMENT_BASE_URL}/apps/${INVOLVMENT_APP_ID}/likes`,\n      {\n        method: 'POST',\n        headers: {\n          Accept: 'application/json',\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({ item_id: this.title }),\n      },\n    );\n\n    if (response.status === 201) {\n      this.likes += 1;\n\n      const card = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs(`article[data-show=\"${this.title}\"]`);\n\n      _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('span', card).dataset.likes = this.likes;\n    }\n  }\n\n  async postComment({ username, comment }) {\n    const response = await fetch(\n      `${INVOLVMENT_BASE_URL}/apps/${INVOLVMENT_APP_ID}/comments`,\n      {\n        method: 'POST',\n        headers: {\n          Accept: 'application/json',\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          item_id: this.title,\n          username,\n          comment,\n        }),\n      },\n    );\n\n    if (response.status === 201) {\n      const d = new Date();\n\n      this.comments.push(new _Comment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        username,\n        comment,\n        creation_date: `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`,\n      }));\n      this.comments[this.comments.length - 1].display(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('#popup ul'));\n    }\n  }\n}\n\n\n//# sourceURL=webpack://boilerplate/./src/modules/Movie.js?");

/***/ }),

/***/ "./src/modules/Popup.js":
/*!******************************!*\
  !*** ./src/modules/Popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/modules/utils.js\");\n/* harmony import */ var _assets_img_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/close.svg */ \"./src/assets/img/close.svg\");\n\n\n\nclass Popup {\n  constructor() {\n    this.container = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('#popup');\n  }\n\n  populate(movie) {\n    const img = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('img', this.container);\n    img.src = movie.image;\n    img.alt = movie.title;\n\n    const closeBtn = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('#closeBtnWrapper', this.container);\n\n    if (!closeBtn) {\n      const div = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({ id: 'closeBtnWrapper' });\n      div.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n        tagName: 'object',\n        data: _assets_img_close_svg__WEBPACK_IMPORTED_MODULE_1__,\n      }));\n      img.parentNode.insertBefore(div, img);\n    }\n\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('h2', this.container).textContent = movie.title;\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('p', this.container).textContent = movie.overview;\n\n    const infoContainer = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('.info-container', this.container);\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qsa('span', infoContainer).forEach((span) => span.remove());\n    infoContainer.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'span',\n      id: 'spanGenres',\n      textContent: `Genres: ${[...movie.genres.filter((g) => g)].join(', ')}`,\n    }));\n    infoContainer.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'span',\n      id: 'spanAired',\n      textContent: `Aired on: ${movie.releaseDate}`,\n    }));\n    infoContainer.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'span',\n      id: 'spanPopularity',\n      textContent: `Popularity: ${movie.popularity}`,\n    }));\n    infoContainer.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'span',\n      id: 'spanRating',\n      textContent: `Rating: ${movie.voteAverage} / ${movie.voteCount}`,\n    }));\n\n    const h2 = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qsa('h2', this.container)[1];\n    h2.textContent = `Comments (${movie.comments.length})`;\n\n    const ul = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('ul', this.container);\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qsa('li', ul).forEach((li) => li.remove());\n    movie.comments.forEach((c) => c.display(ul));\n\n    this.container.classList.remove('hidden');\n\n    document.body.classList.add('darkened');\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('header').classList.add('hidden');\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('footer').classList.add('hidden');\n  }\n\n  close() {\n    this.container.classList.add('hidden');\n    document.body.classList.remove('darkened');\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('header').classList.remove('hidden');\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('footer').classList.remove('hidden');\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Popup());\n\n\n//# sourceURL=webpack://boilerplate/./src/modules/Popup.js?");

/***/ }),

/***/ "./src/modules/config.js":
/*!*******************************!*\
  !*** ./src/modules/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  INVOLVMENT_APP_ID: 'uxSepZBDcek163Ux7n5I',\n  INVOLVMENT_BASE_URL: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi',\n  MOVIE_API_KEY: 'b5028af7e23f88044b6946e9c41743d8',\n  MOVIE_SEARCH_URL: 'https://api.themoviedb.org/3/search/movie?api_key=',\n  MOVIE_BASE_POSTER_PATH: 'https://image.tmdb.org/t/p/original',\n  MOVIE_POPULAR: 'https://api.themoviedb.org/3/movie/top_rated?api_key=',\n});\n\n\n//# sourceURL=webpack://boilerplate/./src/modules/config.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createElement: (obj) => {\n    let element;\n\n    if (obj.tagName && ['svg', 'use'].includes(obj.tagName.toLowerCase())) {\n      element = document.createElementNS('http://www.w3.org/2000/svg', obj.tagName);\n      if (obj.tagName.toLowerCase() === 'use' && obj.src) {\n        element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', obj.src);\n      }\n    } else {\n      element = document.createElement(obj.tagName ? obj.tagName : 'div');\n    }\n\n    delete obj.tagName;\n\n    // Itterate through each property of the obj and set it as a\n    // property of the element\n    Object.entries(obj).forEach(([prop, value]) => {\n      // Property is a class or a collection of classes\n      if (prop === 'class') {\n        if (typeof value === 'object' && value !== null) {\n          element.classList.add(...value.filter((v) => v));\n        } else if (value) {\n          element.classList.add(value);\n        }\n      } else if (prop === 'info' && typeof value === 'object') {\n        Object.entries(value).forEach(([prop, value]) => {\n          element.dataset[prop] = value;\n        });\n      } else if (typeof value === 'boolean') {\n        element.setAttribute(prop, value);\n      } else {\n        element[prop] = value;\n      }\n    });\n\n    return element;\n  },\n\n  qs: (selector = '*', element = document) => element.querySelector(selector),\n\n  qsa: (selector = '*', element = document) => [...element.querySelectorAll(selector)],\n});\n\n\n//# sourceURL=webpack://boilerplate/./src/modules/utils.js?");

/***/ }),

/***/ "./src/assets/img/close.svg":
/*!**********************************!*\
  !*** ./src/assets/img/close.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/close.svg\";\n\n//# sourceURL=webpack://boilerplate/./src/assets/img/close.svg?");

/***/ }),

/***/ "./src/assets/img/heart.svg":
/*!**********************************!*\
  !*** ./src/assets/img/heart.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/heart.svg\";\n\n//# sourceURL=webpack://boilerplate/./src/assets/img/heart.svg?");

/***/ }),

/***/ "./src/assets/img/logo.png":
/*!*********************************!*\
  !*** ./src/assets/img/logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/logo.png\";\n\n//# sourceURL=webpack://boilerplate/./src/assets/img/logo.png?");

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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