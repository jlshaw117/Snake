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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    let game = new _modules_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    game.play();\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/base.js":
/*!*****************************!*\
  !*** ./src/modules/base.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/errors */ \"./src/utilities/errors.js\");\n\n\nclass BaseObject {\n\n    constructor(x, y, color) {\n        this.x = x;\n        this.y = y;\n        this.color = color;\n    }\n\n    draw() {\n        throw new _utilities_errors__WEBPACK_IMPORTED_MODULE_0__[\"NotImplementedError\"](`Draw funtion not implemented for ${this.constructor.name}`);\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseObject);\n\n//# sourceURL=webpack:///./src/modules/base.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake */ \"./src/modules/snake.js\");\n/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/constants */ \"./src/utilities/constants.js\");\n\n\n\nclass Game {\n\n    constructor() {\n        this.score = 0;\n        this.canvas = document.getElementById(\"screen\");\n        this.screen = this.canvas.getContext('2d');\n        this.draw = this.draw.bind(this);\n        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas.width / 2, this.canvas.height / 2, \"white\");\n    }\n\n    draw() {\n        setTimeout(() => {\n            // Clear the canvas\n            this.canvas.width = this.canvas.width;\n            this.snake.draw(this.screen);\n            this.snake.move();\n            requestAnimationFrame(this.draw);\n        }, 1000 / _utilities_constants__WEBPACK_IMPORTED_MODULE_1__[\"FPS\"]);\n    }\n\n    play() {\n        document.addEventListener(\"keydown\", event => {\n            console.log(event.key);\n            switch(event.key) {\n                case \"w\":\n                    this.snake.direction = \"N\";\n                    break;\n                case \"d\":\n                    this.snake.direction = \"E\";\n                    break;\n                case \"s\":\n                    this.snake.direction = \"S\";\n                    break;\n                case \"a\":\n                    this.snake.direction = \"W\";\n                    break;\n            }\n        });\n        requestAnimationFrame(this.draw);\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/snake.js":
/*!******************************!*\
  !*** ./src/modules/snake.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/modules/base.js\");\n/* harmony import */ var _snake_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake_body */ \"./src/modules/snake_body.js\");\n/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/constants */ \"./src/utilities/constants.js\");\n\n\n\n\nclass Snake extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(x, y, color) {\n        super(x, y, color);\n        this.direction = \"N\";\n        this.body = new _snake_body__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y, color);\n    }\n\n    draw(screen) {\n        this.body.draw(screen);\n    }\n\n    move() {\n        switch(this.direction) {\n            case \"N\":\n                this.y -= _utilities_constants__WEBPACK_IMPORTED_MODULE_2__[\"LENGTH\"];\n                break;\n            case \"E\":\n                this.x += _utilities_constants__WEBPACK_IMPORTED_MODULE_2__[\"LENGTH\"];\n                break;\n            case \"S\":\n                this.y += _utilities_constants__WEBPACK_IMPORTED_MODULE_2__[\"LENGTH\"];\n                break;\n            case \"W\":\n                this.x -= _utilities_constants__WEBPACK_IMPORTED_MODULE_2__[\"LENGTH\"];\n                break;\n        }\n        this.body.addPiece(this.x, this.y);\n        this.body.removePiece();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Snake);\n\n//# sourceURL=webpack:///./src/modules/snake.js?");

/***/ }),

/***/ "./src/modules/snake_body.js":
/*!***********************************!*\
  !*** ./src/modules/snake_body.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/modules/base.js\");\n/* harmony import */ var _snake_piece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake_piece */ \"./src/modules/snake_piece.js\");\n\n\n\nclass SnakeBody extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(x, y, color) {\n        super(x, y, color);\n        this.pieces = [new _snake_piece__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y, color)];\n    }\n\n    draw(screen) {\n        this.pieces.forEach(piece => {\n            piece.draw(screen);\n        });\n    }\n\n    addPiece(x, y) {\n        this.pieces.push(new _snake_piece__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y, this.color));\n    }\n\n    removePiece() {\n        this.pieces.shift();\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SnakeBody);\n\n//# sourceURL=webpack:///./src/modules/snake_body.js?");

/***/ }),

/***/ "./src/modules/snake_piece.js":
/*!************************************!*\
  !*** ./src/modules/snake_piece.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/constants */ \"./src/utilities/constants.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/modules/base.js\");\n\n\n\nclass SnakePiece extends _base__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n\n    constructor(x, y, color) {\n        super(x, y, color);\n    }\n\n    draw(screen) {\n        screen.beginPath();\n        screen.fillStyle = this.color;\n        screen.fillRect(this.x, this.y, _utilities_constants__WEBPACK_IMPORTED_MODULE_0__[\"LENGTH\"], _utilities_constants__WEBPACK_IMPORTED_MODULE_0__[\"LENGTH\"]);\n        screen.closePath();\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SnakePiece);\n\n//# sourceURL=webpack:///./src/modules/snake_piece.js?");

/***/ }),

/***/ "./src/utilities/constants.js":
/*!************************************!*\
  !*** ./src/utilities/constants.js ***!
  \************************************/
/*! exports provided: LENGTH, FPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LENGTH\", function() { return LENGTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FPS\", function() { return FPS; });\nconst LENGTH = 10;\nconst FPS = 10;\n\n//# sourceURL=webpack:///./src/utilities/constants.js?");

/***/ }),

/***/ "./src/utilities/errors.js":
/*!*********************************!*\
  !*** ./src/utilities/errors.js ***!
  \*********************************/
/*! exports provided: NotImplementedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NotImplementedError\", function() { return NotImplementedError; });\nclass NotImplementedError extends Error {\n\n    constructor(message) {\n        super(message);\n        this.name = \"NotImplementedError\";\n    }\n}\n\n//# sourceURL=webpack:///./src/utilities/errors.js?");

/***/ })

/******/ });