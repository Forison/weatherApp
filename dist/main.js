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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ./component/images/globe.png */ \"./src/component/images/globe.png\"));\n// Module\nexports.push([module.i, \"body{\\n  background-image: linear-gradient(#11033a,#fff,#11033a);\\n  font-family: 'Roboto', sans-serif;\\n  margin: 0;\\n  padding: 0;\\n}\\nmain{\\n  background: #f1efef;\\n  border-radius: 50px;\\n  height: 600px;\\n  padding: 10px 0px 10px 0px;\\n}\\n.mainTop{\\n  background: #d1cfda;\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  border-top-left-radius: 50px;\\n  border-top-right-radius: 50px;\\n  height: 35%;\\n  padding: 10px;\\n}\\n.mainMid{\\n  background: #d2cfdf;\\n  height: 25%;\\n}\\n.mainMid:hover{\\n  background: #d2cfdf;\\n  height: 26%;\\n  box-shadow: 0px 35px 20px #777;\\n}\\n.mainBot{\\n  border-bottom-left-radius: 50px;\\n  border-bottom-right-radius: 50px;\\n  height: 40%;\\n}\\n.input-width{\\n  width: 60%;\\n}\\n.section{\\n  height: 150px;\\n}\\n.cont-width{\\n  margin-bottom: 10px;\\n  height: 150px;\\n}\\n.left{\\n  color: #2d00cf;\\n  height: 100px;\\n  font-weight: 700;\\n  width: 180px;\\n}\\n.right{\\n  bottom: 62px;\\n  color: #2d00cf;\\n  font-weight: 700;\\n  height: 155px;\\n  left: 5px;\\n  position: relative;\\n  width: 180px;\\n}\\nh2{\\n  color: #2d00cf;\\n  font-size: 15px;\\n  font-weight: bolder;\\n}\\nh3{\\n  color: #2d00cf;\\n  font-size: 20px;\\n  font-weight: bolder;\\n}\\n.container-fluid{\\n  display: 'none';\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/component/fetchMain.js":
/*!************************************!*\
  !*** ./src/component/fetchMain.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fetchData; });\nconst fetchData = (async (url) => {\n\ttry {\n\t\tconst response = await fetch(url, { mode: 'cors' });\n\t\tconst dataObj = await response.json();\n\t\treturn dataObj;\n\t} catch (error) {\n\t\tthrow (error);\n\t}\n});\n\n\n//# sourceURL=webpack:///./src/component/fetchMain.js?");

/***/ }),

/***/ "./src/component/homepage.js":
/*!***********************************!*\
  !*** ./src/component/homepage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return dom; });\n/* harmony import */ var _images_globe2_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/globe2.gif */ \"./src/component/images/globe2.gif\");\n/* harmony import */ var _images_globe2_gif__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_globe2_gif__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_clear_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/clear.gif */ \"./src/component/images/clear.gif\");\n/* harmony import */ var _images_clear_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_clear_gif__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_fewClouds_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/fewClouds.gif */ \"./src/component/images/fewClouds.gif\");\n/* harmony import */ var _images_fewClouds_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_fewClouds_gif__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_overcast_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/overcast.gif */ \"./src/component/images/overcast.gif\");\n/* harmony import */ var _images_overcast_gif__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_overcast_gif__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_rainy_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/rainy.gif */ \"./src/component/images/rainy.gif\");\n/* harmony import */ var _images_rainy_gif__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_rainy_gif__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_broken_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/broken.gif */ \"./src/component/images/broken.gif\");\n/* harmony import */ var _images_broken_gif__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_broken_gif__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _searches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searches */ \"./src/component/searches.js\");\n\n\n\n\n\n\n\nconst dom = (() => {\n\tconst homepage = (data) => {\n\t\tconst bodyWrap = document.createElement('div');\n\t\tbodyWrap.classList.add('container-fluid');\n\n\t\tconst bodyRow = document.createElement('div');\n\t\tbodyWrap.appendChild(bodyRow);\n\t\tbodyRow.classList.add('row');\n\n\t\tconst mainCont = document.createElement('main');\n\t\tmainCont.classList.add('col-md-4', 'mx-auto', 'shadow-lg', 'mt-3');\n\t\tbodyRow.appendChild(mainCont);\n\n\t\tconst mainTop = document.createElement('div');\n\t\tmainTop.classList.add('mainTop');\n\t\tmainCont.appendChild(mainTop);\n\t\tconst mainTopLeft = document.createElement('div');\n\t\tconst mainTopRight = document.createElement('div');\n\t\tmainTopLeft.classList.add('ml-auto', 'left');\n\t\tmainTopRight.classList.add('mr-auto', 'right');\n\t\tmainTop.appendChild(mainTopLeft);\n\t\tmainTop.appendChild(mainTopRight);\n\n\t\tconst topTitle = document.createElement('h1');\n\t\ttopTitle.classList.add('text-center');\n\t\tconst topTitle2 = document.createElement('h2');\n\t\ttopTitle2.classList.add('text-center');\n\t\tconst topTitle3 = document.createElement('h2');\n\t\ttopTitle3.classList.add('text-center');\n\n\t\ttopTitle.innerHTML = `${data.name}`;\n\t\ttopTitle2.innerHTML = `${data.main.temp} &#8451`;\n\t\ttopTitle3.innerHTML = `${data.weather[0].description}`;\n\t\tmainTopRight.appendChild(topTitle);\n\t\tmainTopRight.appendChild(topTitle2);\n\t\tmainTopRight.appendChild(topTitle3);\n\n\t\tconst leftTitle = document.createElement('h3');\n\t\tleftTitle.classList.add('text-center');\n\t\tconst leftTitle2 = document.createElement('h4');\n\t\tleftTitle2.classList.add('text-center');\n\t\tconst leftTitle3 = document.createElement('h5');\n\t\tleftTitle3.classList.add('text-center');\n\n\t\tconst today = new Date();\n\t\tconst dayOfWeek = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"]\n\t\tconst day = today.getUTCDay();\n\t\tconst mm = today.getDate();\n\t\tconst dd = today.getMonth();\n\t\tconst yyyy = today.getFullYear();\n\n\t\tleftTitle.innerHTML = `${dayOfWeek[day]}`;\n\t\tleftTitle2.innerHTML = `${mm}-${dd}-${yyyy}`;\n\t\tleftTitle3.innerHTML = `${data.name.slice(0, 3)}`;\n\t\tmainTopLeft.appendChild(leftTitle);\n\t\tmainTopLeft.appendChild(leftTitle2);\n\t\tmainTopLeft.appendChild(leftTitle3);\n\n\t\tconst mainMid = document.createElement('div');\n\t\tconst wrap1 = document.createElement('div');\n\t\tconst wrap2 = document.createElement('div');\n\t\tconst rainProb = document.createElement('h3');\n\t\trainProb.classList.add('pt-1');\n\t\tconst humidity = document.createElement('h3');\n\t\thumidity.classList.add('pt-1');\n\t\tconst wind = document.createElement('h3');\n\t\twind.classList.add('pt-1');\n\t\tlet rP;\n\t\tdata.main.humidity > 50 ? rP = 'High' : rP = 'Low';\n\t\trainProb.innerHTML = `RAIN PROBABILITY: ${rP}`;\n\t\twind.innerHTML = `WIND: ${data.wind.speed}`;\n\t\thumidity.innerHTML = `HUMIDITY: ${data.main.humidity}`;\n\n\t\twrap1.appendChild(wind);\n\t\twrap1.appendChild(humidity);\n\t\twrap1.appendChild(rainProb);\n\t\tmainMid.appendChild(wrap1);\n\t\tmainMid.appendChild(wrap2);\n\t\tmainMid.classList.add('mainMid', 'pl-4', 'pt-1', 'shadow-lg');\n\n\t\tmainCont.appendChild(mainMid);\n\t\tconst mainBot = document.createElement('div');\n\t\tmainBot.classList.add('mainBot');\n\t\tmainCont.appendChild(mainBot);\n\n\t\tconst cloudCont = new Image();\n\t\tcloudCont.classList.add('container', 'cont-width');\n\t\tif (data.weather[0].description === 'clear sky') {\n\t\t\tcloudCont.src = _images_clear_gif__WEBPACK_IMPORTED_MODULE_1___default.a;\n\t\t} else if (data.weather[0].description === 'broken clouds') {\n\t\t\tcloudCont.src = _images_broken_gif__WEBPACK_IMPORTED_MODULE_5___default.a;\n\t\t} else if (data.weather[0].description === 'overcast clouds') {\n\t\t\tcloudCont.src = _images_overcast_gif__WEBPACK_IMPORTED_MODULE_3___default.a;\n\t\t} else if (data.weather[0].description === 'light intensity shower') {\n\t\t\tcloudCont.src = _images_globe2_gif__WEBPACK_IMPORTED_MODULE_0___default.a;\n\t\t} else if (data.weather[0].description === 'light intensity shower rain') {\n\t\t\tcloudCont.src = _images_rainy_gif__WEBPACK_IMPORTED_MODULE_4___default.a;\n\t\t} else if (data.weather[0].description === 'scattered clouds') {\n\t\t\tcloudCont.src = _images_fewClouds_gif__WEBPACK_IMPORTED_MODULE_2___default.a;\n\t\t} else {\n\t\t\tcloudCont.src = _images_globe2_gif__WEBPACK_IMPORTED_MODULE_0___default.a;\n\t\t}\n\n\t\tmainBot.appendChild(cloudCont);\n\n\t\tconst cloudRow = document.createElement('div');\n\t\tcloudRow.classList.add('row', 'mt-2', 'mb-2');\n\t\tcloudCont.appendChild(cloudRow);\n\n\t\tconst colOne = document.createElement('div');\n\t\tconst bottomImage = document.createElement('img');\n\n\t\tcolOne.appendChild(bottomImage);\n\t\tcolOne.classList.add('col-8', 'p-0', 'shadow-lg', 'section', 'mx-auto');\n\t\tcloudRow.appendChild(colOne);\n\n\t\tconst input = document.createElement('input');\n\t\tinput.classList.add('form-control', 'input-width', 'mx-auto');\n\t\tinput.setAttribute('placeholder', 'Search By Country');\n\t\tmainBot.appendChild(input);\n\n\t\tinput.addEventListener(\"keyup\", (async (e) => {\n\t\t\tif (event.keyCode === 13) {\n\t\t\t\te.preventDefault();\n\t\t\t\tlet location = input.value;\n\t\t\t\tif (location === \"\") {\n\t\t\t\t\talert(\"field cannot be empty\");\n\t\t\t\t} else {\n\t\t\t\t\tbodyWrap.style.display = 'none';\n\t\t\t\t\thomepage(await _searches__WEBPACK_IMPORTED_MODULE_6__[\"default\"].byLoc(location));\n\t\t\t\t}\n\t\t\t}\n\n\t\t}));\n\n\t\tdocument.body.appendChild(bodyWrap);\n\t\treturn bodyWrap;\n\t};\n\n\n\treturn { homepage }\n\n})();\n\n\n\n//# sourceURL=webpack:///./src/component/homepage.js?");

/***/ }),

/***/ "./src/component/images/broken.gif":
/*!*****************************************!*\
  !*** ./src/component/images/broken.gif ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"faa3c7867a8f4ca7e5ae6326aa09f673.gif\";\n\n//# sourceURL=webpack:///./src/component/images/broken.gif?");

/***/ }),

/***/ "./src/component/images/clear.gif":
/*!****************************************!*\
  !*** ./src/component/images/clear.gif ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e5a8280dd6d6da08b228f558046a1198.gif\";\n\n//# sourceURL=webpack:///./src/component/images/clear.gif?");

/***/ }),

/***/ "./src/component/images/fewClouds.gif":
/*!********************************************!*\
  !*** ./src/component/images/fewClouds.gif ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"002861aa54c41d4db2cb165895949ca0.gif\";\n\n//# sourceURL=webpack:///./src/component/images/fewClouds.gif?");

/***/ }),

/***/ "./src/component/images/globe.png":
/*!****************************************!*\
  !*** ./src/component/images/globe.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"590b6c27d7a921658fe52abdd034b597.png\";\n\n//# sourceURL=webpack:///./src/component/images/globe.png?");

/***/ }),

/***/ "./src/component/images/globe2.gif":
/*!*****************************************!*\
  !*** ./src/component/images/globe2.gif ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fe409ff9410b8a2c8d896cae928172f3.gif\";\n\n//# sourceURL=webpack:///./src/component/images/globe2.gif?");

/***/ }),

/***/ "./src/component/images/overcast.gif":
/*!*******************************************!*\
  !*** ./src/component/images/overcast.gif ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d81f58596ed08fe828fab6c2658ffb6e.gif\";\n\n//# sourceURL=webpack:///./src/component/images/overcast.gif?");

/***/ }),

/***/ "./src/component/images/rainy.gif":
/*!****************************************!*\
  !*** ./src/component/images/rainy.gif ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ac8539997b1cdd66ef51e945cdf5dd89.gif\";\n\n//# sourceURL=webpack:///./src/component/images/rainy.gif?");

/***/ }),

/***/ "./src/component/searches.js":
/*!***********************************!*\
  !*** ./src/component/searches.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return searcher; });\n/* harmony import */ var _fetchMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchMain */ \"./src/component/fetchMain.js\");\n\n\nconst searcher = (() => {\n\tconst byLoc = (async (location) => {\n\t\ttry {\n\t\t\tconst url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=ccf997c34097cddfadc5cdaead93a77a`;\n\t\t\tconst data = await Object(_fetchMain__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url);\n\t\t\tif (data.cod === '404') {\n\t\t\t\talert(\"info not available at the moment\");\n\t\t\t\twindow.location.reload();\n\t\t\t}\n\t\t\treturn data;\n\t\t} catch (error) {\n\t\t\tthrow (error);\n\t\t}\n\t});\n\tconst byLocDefault = async () => {\n\t\ttry {\n\t\t\tlet locator = 'https://extreme-ip-lookup.com/json/';\n\t\t\tconst userData = await Object(_fetchMain__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(locator);\n\t\t\treturn userData.country;\n\t\t} catch (error) {\n\t\t\tthrow (error);\n\t\t}\n\t};\n\treturn { byLoc, byLocDefault };\n})();\n\n\n//# sourceURL=webpack:///./src/component/searches.js?");

/***/ }),

/***/ "./src/component/weather.js":
/*!**********************************!*\
  !*** ./src/component/weather.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return myWeather; });\n/* harmony import */ var _searches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searches */ \"./src/component/searches.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/component/homepage.js\");\n\n\nconst myWeather = (async () => {\n\tconst userLocation = await _searches__WEBPACK_IMPORTED_MODULE_0__[\"default\"].byLocDefault();\n\t_homepage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].homepage(await _searches__WEBPACK_IMPORTED_MODULE_0__[\"default\"].byLoc(userLocation));\n\tconsole.log(process.env.APPID)\n});\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/component/weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/weather */ \"./src/component/weather.js\");\n\n\n\nconst main = () => {\n\tObject(_component_weather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\nmain();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });