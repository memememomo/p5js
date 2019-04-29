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

/***/ "./node_modules/p5/lib/p5.js":
/*!***********************************!*\
  !*** ./node_modules/p5/lib/p5.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/dev-rect.ts":
/*!*************************!*\
  !*** ./src/dev-rect.ts ***!
  \*************************/
/*! exports provided: DevRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DevRect\", function() { return DevRect; });\nvar DevRect = /** @class */ (function () {\n    function DevRect(p, numA, numB, scalar) {\n        this.p = p;\n        this.numA = numA;\n        this.numB = numB;\n        this.ratio = numB / numA;\n        this.drawSqure();\n    }\n    DevRect.prototype.drawSqure = function () {\n        var _this = this;\n        var itr = 0;\n        var xPos = 0;\n        var yPos = 0;\n        var wd = this.p.width * this.ratio;\n        this.p.mouseClicked = function () {\n            _this.numA = Math.floor(_this.p.random(1, 20));\n            _this.numB = Math.floor(_this.p.random(1, 20));\n            console.log(\"NumA: \" + _this.numA);\n            console.log(\"NumB: \" + _this.numB);\n            _this.ratio = _this.numB / _this.numA;\n            _this.p.background(0, 0, 1);\n            _this.drawSqure();\n        };\n        this.p.colorMode(this.p.HSB, 1);\n        this.divSquare(0, 0, this.p.width);\n        while (wd > 0.1) {\n            itr++;\n            if (itr % 2 == 1) {\n                while (xPos + wd <= this.p.width + 0.1) {\n                    this.divSquare(xPos, yPos, wd);\n                    xPos += wd;\n                }\n                wd = this.p.width - xPos;\n            }\n            else {\n                while (yPos + wd <= this.p.width * this.ratio + 0.1) {\n                    this.divSquare(xPos, yPos, wd);\n                    yPos += wd;\n                }\n                wd = this.p.width * this.ratio - yPos;\n            }\n        }\n    };\n    DevRect.prototype.divSquare = function (xPos, yPos, wd) {\n        var itr = 0;\n        var xEndPos = wd + xPos;\n        var yEndPos = wd + yPos;\n        while (wd > 0.1) {\n            itr++;\n            if (itr % 2 == 1) {\n                while (xPos + wd * this.ratio < xEndPos + 0.1) {\n                    this.p.fill(this.p.color(this.p.random(1), 1, 1));\n                    this.p.rect(xPos, yPos, wd * this.ratio, wd);\n                    xPos += wd * this.ratio;\n                }\n                wd = xEndPos - xPos;\n            }\n            else {\n                while (yPos + wd / this.ratio < yEndPos + 0.1) {\n                    this.p.fill(this.p.color(this.p.random(1), 1, 1));\n                    this.p.rect(xPos, yPos, wd, wd / this.ratio);\n                    yPos += wd / this.ratio;\n                }\n                wd = yEndPos - yPos;\n            }\n        }\n    };\n    DevRect.prototype.draw = function () {\n    };\n    return DevRect;\n}());\n\n\n\n//# sourceURL=webpack:///./src/dev-rect.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ \"./node_modules/p5/lib/p5.js\");\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dev_rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dev-rect */ \"./src/dev-rect.ts\");\n\n\nvar sketch = function (p) {\n    var dr;\n    p.preload = function () {\n    };\n    p.setup = function () {\n        p.resizeCanvas(1000, 1000);\n        dr = new _dev_rect__WEBPACK_IMPORTED_MODULE_1__[\"DevRect\"](p, 10, 6, 60);\n    };\n    p.windowResized = function () {\n    };\n    p.draw = function () {\n        dr.draw();\n    };\n};\nvar sketchP = new p5__WEBPACK_IMPORTED_MODULE_0__(sketch);\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });