/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n#container,\\r\\n#scene {\\r\\n  overflow: hidden;\\r\\n  width: 900px;\\r\\n  height: 600px;\\r\\n}\\r\\n\\r\\n#container {\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  margin-top: -300px;\\r\\n  margin-left: -450px;\\r\\n}\\r\\n\\r\\n#bg {\\r\\n  position: absolute;\\r\\n  z-index: 0;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n}\\r\\n\\r\\n#scene {\\r\\n  position: relative;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n#bubble {\\r\\n  position: absolute;\\r\\n  z-index: 2;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 168px;\\r\\n  padding: 0 80px;\\r\\n  padding-top: 48px;\\r\\n  background-color: rgba(0, 0, 0, 0.6);\\r\\n  font-family: \\\"Verdana\\\";\\r\\n  font-size: 24px;\\r\\n  color: white;\\r\\n  text-shadow: 0 1px 2px black;\\r\\n}\\r\\n\\r\\n#title {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  height: 40px;\\r\\n  line-height: 40px;\\r\\n  padding: 0 20px;\\r\\n  background-color: black;\\r\\n  font-size: 22px;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#title:after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 100%;\\r\\n  height: 40px;\\r\\n  width: 0;\\r\\n  border-style: solid;\\r\\n  border-width: 40px 20px 0 0;\\r\\n  border-color: black;\\r\\n  border-right-color: transparent;\\r\\n}\\r\\n\\r\\n.sprite {\\r\\n  position: absolute;\\r\\n  z-index: 0;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  margin-bottom: -220px;\\r\\n  filter: grayscale(50%);\\r\\n  transition: all 300ms ease-in-out;\\r\\n}\\r\\n\\r\\n.sprite.active {\\r\\n  margin-bottom: -200px;\\r\\n  filter: grayscale(0);\\r\\n}\\r\\n\\r\\n.sprite.left {\\r\\n  left: 40px;\\r\\n}\\r\\n\\r\\n.sprite.right {\\r\\n  left: auto;\\r\\n  right: 40px;\\r\\n}\\r\\n\\r\\n@keyframes EnterFromLeft {\\r\\n  from {\\r\\n    transform: translateX(-100%);\\r\\n    left: 0;\\r\\n  }\\r\\n  to {\\r\\n    transform: translateX(0);\\r\\n    left: 40px;\\r\\n  }\\r\\n}\\r\\n\\r\\n.sprite.enter-left {\\r\\n  animation: 300ms ease-out EnterFromLeft;\\r\\n}\\r\\n\\r\\n@keyframes EnterFromRight {\\r\\n  from {\\r\\n    right: 0;\\r\\n    transform: translateX(100%);\\r\\n  }\\r\\n  to {\\r\\n    right: 40px;\\r\\n    transform: translateX(0);\\r\\n  }\\r\\n}\\r\\n\\r\\n.sprite.enter-right {\\r\\n  animation: 300ms ease-out EnterFromRight;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/container.ts":
/*!**************************!*\
  !*** ./src/container.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar sprite_1 = __webpack_require__(/*! ./sprite */ \"./src/sprite.ts\");\r\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\r\nvar BG_TOTAL = 1;\r\nvar containerEl = utils_1.createElement(\"container\");\r\nvar bubbleEl = utils_1.createElement(\"bubble\");\r\nvar titleEl = utils_1.createElement(\"title\");\r\nvar textEl = utils_1.createElement(\"text\");\r\nvar sceneEl = utils_1.createElement(\"scene\");\r\nvar Container = /** @class */ (function () {\r\n    function Container(sprites) {\r\n        this.bgs = null;\r\n        this.sprites = null;\r\n        document.body.appendChild(containerEl);\r\n        containerEl.appendChild(sceneEl);\r\n        containerEl.appendChild(bubbleEl);\r\n        bubbleEl.appendChild(titleEl);\r\n        bubbleEl.appendChild(textEl);\r\n        titleEl.classList.add(\"hidden\");\r\n        bubbleEl.classList.add(\"hidden\");\r\n        this.bgs = new Array(BG_TOTAL)\r\n            .fill(\"bg\")\r\n            .map(function (name, index) { return \"\" + name + (index + 1); })\r\n            .reduce(function (result, name) {\r\n            result[name] = null;\r\n            return result;\r\n        }, {});\r\n        this.sprites = sprites.reduce(function (result, config) {\r\n            var sprite = new sprite_1.default(config);\r\n            result[config.name] = sprite;\r\n            return result;\r\n        }, {});\r\n        Container.instance = this;\r\n    }\r\n    Container.getInstance = function () {\r\n        return this.instance;\r\n    };\r\n    Container.prototype.preloadBgs = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var list, i, name_1, image;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        list = Object.keys(this.bgs);\r\n                        i = 0;\r\n                        _a.label = 1;\r\n                    case 1:\r\n                        if (!(i < list.length)) return [3 /*break*/, 4];\r\n                        name_1 = list[i];\r\n                        return [4 /*yield*/, utils_1.preloadImage(name_1, \"jpg\")];\r\n                    case 2:\r\n                        image = _a.sent();\r\n                        this.bgs[name_1] = image;\r\n                        _a.label = 3;\r\n                    case 3:\r\n                        ++i;\r\n                        return [3 /*break*/, 1];\r\n                    case 4: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    Container.prototype.preloadSprites = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var list, i, name_2, image, sprite;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        list = Object.keys(this.sprites);\r\n                        i = 0;\r\n                        _a.label = 1;\r\n                    case 1:\r\n                        if (!(i < list.length)) return [3 /*break*/, 4];\r\n                        name_2 = list[i];\r\n                        return [4 /*yield*/, utils_1.preloadImage(name_2)];\r\n                    case 2:\r\n                        image = _a.sent();\r\n                        sprite = this.sprites[name_2];\r\n                        sprite.setImage(image);\r\n                        _a.label = 3;\r\n                    case 3:\r\n                        ++i;\r\n                        return [3 /*break*/, 1];\r\n                    case 4: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    Container.prototype.getElement = function () {\r\n        return sceneEl;\r\n    };\r\n    Container.prototype.getSprite = function (name) {\r\n        return this.sprites[name];\r\n    };\r\n    Container.prototype.setBackground = function (name) {\r\n        var previous = document.getElementById(\"bg\");\r\n        if (previous != null) {\r\n            previous.id = \"\";\r\n            previous.parentNode.removeChild(previous);\r\n        }\r\n        var image = this.bgs[name];\r\n        image.id = \"bg\";\r\n        containerEl.prepend(image);\r\n    };\r\n    Container.prototype.showBubble = function () {\r\n        bubbleEl.classList.remove(\"hidden\");\r\n    };\r\n    Container.prototype.hideBubble = function () {\r\n        bubbleEl.classList.add(\"hidden\");\r\n    };\r\n    Container.prototype.setText = function (text) {\r\n        textEl.innerText = text;\r\n    };\r\n    Container.prototype.setTitle = function (title) {\r\n        titleEl.innerText = title;\r\n        var list = titleEl.classList;\r\n        var hidden = list.contains(\"hidden\");\r\n        if (title !== \"\" && hidden) {\r\n            list.remove(\"hidden\");\r\n        }\r\n        else if (title === \"\" && !hidden) {\r\n            list.add(\"hidden\");\r\n        }\r\n    };\r\n    Container.instance = null;\r\n    return Container;\r\n}());\r\nexports.default = Container;\r\n\n\n//# sourceURL=webpack:///./src/container.ts?");

/***/ }),

/***/ "./src/data/scenes.json":
/*!******************************!*\
  !*** ./src/data/scenes.json ***!
  \******************************/
/*! exports provided: 0, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"actors\\\":[\\\"kosulya\\\",\\\"lisa\\\"],\\\"background\\\":\\\"bg1\\\",\\\"dialogues\\\":[[0,\\\"Я точно помню, что неделю назад оставлял тут свой бутерброд. В холодильнике его нет, в шкафчиках тоже. Может, ты видела?\\\"],[1,\\\"Какой бутерброд?\\\",{\\\"direction\\\":1}],[0,\\\"C бананом.\\\"],[1,\\\"Что?\\\"],[0,\\\"Что?\\\"],[1,\\\"Ты зачем банан в бутерброд запихал?\\\"]]}]\");\n\n//# sourceURL=webpack:///./src/data/scenes.json?");

/***/ }),

/***/ "./src/data/sprites.json":
/*!*******************************!*\
  !*** ./src/data/sprites.json ***!
  \*******************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"kosulya\\\",\\\"title\\\":\\\"Косуля\\\"},{\\\"name\\\":\\\"lisa\\\",\\\"title\\\":\\\"Лиса\\\"}]\");\n\n//# sourceURL=webpack:///./src/data/sprites.json?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\r\nvar scene_1 = __webpack_require__(/*! ./scene */ \"./src/scene.ts\");\r\nvar scenes = __webpack_require__(/*! ./data/scenes.json */ \"./src/data/scenes.json\");\r\nfunction main() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var scene;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    scene = new scene_1.default();\r\n                    return [4 /*yield*/, scene.preload()];\r\n                case 1:\r\n                    _a.sent();\r\n                    scene.start(scenes[0]);\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n}\r\nmain();\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/scene.ts":
/*!**********************!*\
  !*** ./src/scene.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar container_1 = __webpack_require__(/*! ./container */ \"./src/container.ts\");\r\nvar config = __webpack_require__(/*! ./data/sprites.json */ \"./src/data/sprites.json\");\r\nvar Scene = /** @class */ (function () {\r\n    function Scene() {\r\n        this.container = null;\r\n        this.container = new container_1.default(config);\r\n    }\r\n    Scene.prototype.start = function (_a) {\r\n        var actors = _a.actors, background = _a.background, dialogues = _a.dialogues;\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var sprites, i, _b, index, text, config_1, target;\r\n            var _this = this;\r\n            return __generator(this, function (_c) {\r\n                switch (_c.label) {\r\n                    case 0:\r\n                        this.container.setBackground(background);\r\n                        sprites = actors.map(function (name) { return _this.container.getSprite(name); });\r\n                        this.container.showBubble();\r\n                        i = 0;\r\n                        _c.label = 1;\r\n                    case 1:\r\n                        if (!(i < dialogues.length)) return [3 /*break*/, 6];\r\n                        _b = dialogues[i], index = _b[0], text = _b[1], config_1 = _b[2];\r\n                        target = sprites[index];\r\n                        sprites.forEach(function (item) { return item.setActive(false); });\r\n                        if (config_1 != null) {\r\n                            target.applyAction(config_1);\r\n                        }\r\n                        if (!!target.isInScene()) return [3 /*break*/, 3];\r\n                        return [4 /*yield*/, target.enter()];\r\n                    case 2:\r\n                        _c.sent();\r\n                        _c.label = 3;\r\n                    case 3: return [4 /*yield*/, target.say(text)];\r\n                    case 4:\r\n                        _c.sent();\r\n                        _c.label = 5;\r\n                    case 5:\r\n                        ++i;\r\n                        return [3 /*break*/, 1];\r\n                    case 6: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    Scene.prototype.preload = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, this.container.preloadBgs()];\r\n                    case 1:\r\n                        _a.sent();\r\n                        return [4 /*yield*/, this.container.preloadSprites()];\r\n                    case 2:\r\n                        _a.sent();\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    return Scene;\r\n}());\r\nexports.default = Scene;\r\n\n\n//# sourceURL=webpack:///./src/scene.ts?");

/***/ }),

/***/ "./src/sprite.ts":
/*!***********************!*\
  !*** ./src/sprite.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Direction = void 0;\r\nvar container_1 = __webpack_require__(/*! ./container */ \"./src/container.ts\");\r\nvar Direction;\r\n(function (Direction) {\r\n    Direction[Direction[\"LEFT\"] = 0] = \"LEFT\";\r\n    Direction[Direction[\"RIGHT\"] = 1] = \"RIGHT\";\r\n    Direction[Direction[\"MIDDLE\"] = 2] = \"MIDDLE\";\r\n})(Direction = exports.Direction || (exports.Direction = {}));\r\nvar DIRECTIONS = [\"left\", \"right\", \"middle\"];\r\nvar TEXT_SPEED = 50;\r\nvar Sprite = /** @class */ (function () {\r\n    function Sprite(_a) {\r\n        var name = _a.name, title = _a.title;\r\n        this.name = null;\r\n        this.title = null;\r\n        this.direction = Direction.LEFT;\r\n        this.image = null;\r\n        this.phrase = null;\r\n        this.entered = false;\r\n        this.active = false;\r\n        this.name = name;\r\n        this.title = title;\r\n    }\r\n    Sprite.prototype.getImage = function () {\r\n        return this.image;\r\n    };\r\n    Sprite.prototype.setImage = function (image) {\r\n        this.image = image;\r\n        image.classList.add(\"sprite\");\r\n    };\r\n    Sprite.prototype.getDirection = function () {\r\n        return DIRECTIONS[this.direction];\r\n    };\r\n    Sprite.prototype.isInScene = function () {\r\n        return this.entered;\r\n    };\r\n    Sprite.prototype.isActive = function () {\r\n        return this.active;\r\n    };\r\n    Sprite.prototype.enter = function () {\r\n        var _this = this;\r\n        return new Promise(function (resolve) {\r\n            _this.entered = true;\r\n            var direction = _this.getDirection();\r\n            var animation = \"enter-\" + direction;\r\n            _this.image.classList.add(animation);\r\n            _this.image.classList.add(direction);\r\n            _this.setActive(true);\r\n            container_1.default.getInstance().getElement().appendChild(_this.image);\r\n            var onAnimationEnd = function () {\r\n                _this.image.classList.remove(animation);\r\n                _this.image.removeEventListener(\"animationend\", onAnimationEnd);\r\n                resolve();\r\n            };\r\n            _this.image.addEventListener(\"animationend\", onAnimationEnd);\r\n        });\r\n    };\r\n    Sprite.prototype.leave = function () {\r\n        this.entered = false;\r\n        this.setActive(false);\r\n        this.image.parentNode.removeChild(this.image);\r\n    };\r\n    Sprite.prototype.setActive = function (value) {\r\n        var list = this.image.classList;\r\n        if (value) {\r\n            this.active = true;\r\n            list.add(\"active\");\r\n        }\r\n        else {\r\n            this.active = false;\r\n            list.remove(\"active\");\r\n        }\r\n    };\r\n    Sprite.prototype.sayTimeout = function (resolve, offset) {\r\n        var _this = this;\r\n        if (offset === void 0) { offset = 1; }\r\n        var total = this.phrase.length;\r\n        if (offset <= total) {\r\n            setTimeout(function () {\r\n                var text = _this.phrase.slice(0, offset);\r\n                var step = _this.phrase[offset + 1] === \" \" ? 2 : 1;\r\n                container_1.default.getInstance().setText(text);\r\n                _this.sayTimeout(resolve, offset + step);\r\n            }, TEXT_SPEED);\r\n        }\r\n        else {\r\n            setTimeout(function () {\r\n                resolve();\r\n            }, 500);\r\n        }\r\n    };\r\n    Sprite.prototype.say = function (phrase) {\r\n        var _this = this;\r\n        if (!this.active) {\r\n            this.setActive(true);\r\n        }\r\n        this.phrase = phrase;\r\n        container_1.default.getInstance().setTitle(this.title);\r\n        return new Promise(function (resolve) {\r\n            _this.sayTimeout(resolve);\r\n        });\r\n    };\r\n    Sprite.prototype.applyAction = function (_a) {\r\n        var direction = _a.direction;\r\n        if (direction != null) {\r\n            this.direction = direction;\r\n        }\r\n    };\r\n    return Sprite;\r\n}());\r\nexports.default = Sprite;\r\n\n\n//# sourceURL=webpack:///./src/sprite.ts?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.createElement = exports.preloadImage = void 0;\r\nfunction preloadImage(name, ext) {\r\n    if (ext === void 0) { ext = \"png\"; }\r\n    return new Promise(function (resolve, reject) {\r\n        var image = new Image();\r\n        image.src = \"assets/\" + name + \".\" + ext;\r\n        image.onload = function () { return resolve(image); };\r\n    });\r\n}\r\nexports.preloadImage = preloadImage;\r\nfunction createElement(id, tag) {\r\n    if (tag === void 0) { tag = \"div\"; }\r\n    var element = document.createElement(tag);\r\n    element.id = id;\r\n    return element;\r\n}\r\nexports.createElement = createElement;\r\n\n\n//# sourceURL=webpack:///./src/utils.ts?");

/***/ })

/******/ });