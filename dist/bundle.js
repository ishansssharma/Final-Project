/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ExchangeRateApi.js":
/*!***********************************!*\
  !*** ./src/js/ExchangeRateApi.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n//VARIABLES FOR THE EXCHANGE RATE SITE\nconst nokInput = document.querySelector(\".currencyinput\");\nconst convertButton = document.querySelector(\".convertbutton\");\nconst ulList = document.querySelector(\".exchangelist\");\n\n//ASYNC FUNCTION FOR API\nconst fetchAPI = async () => {\n  try {\n    const response = await fetch(\"https://v6.exchangerate-api.com/v6/06a031a8a2b698dd2edb02c8/latest/USD\");\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.log(\"something is wrong\"(error));\n  }\n};\nfetchAPI();\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchAPI);\n\n//# sourceURL=webpack://src/./src/js/ExchangeRateApi.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ExchangeRateApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExchangeRateApi */ \"./src/js/ExchangeRateApi.js\");\n\n\n//VARIABLES FOR MAIN PAGE\n\nconst mainButtons = document.querySelectorAll(\".main-button\");\nconst pages = document.querySelectorAll(\".content\");\n\n//FUNCTIONS\n\n//SWITCHING THROUGH DIFFERENT PAGES\nmainButtons.forEach(button => {\n  button.addEventListener(\"click\", showPage);\n});\nfunction showPage(event) {\n  const button = event.currentTarget;\n  const pageToDisplay = button.dataset.button;\n  pages.forEach(page => {\n    page.classList.remove(\"content--visible\");\n    if (page.dataset.name === pageToDisplay) {\n      page.classList.add(\"content--visible\");\n    }\n  });\n  mainButtons.forEach(button => {\n    button.classList.remove(\"main-button__active\");\n    if (button.dataset.button === pageToDisplay) {\n      button.classList.add(\"main-button__active\");\n    }\n  });\n}\n\n//# sourceURL=webpack://src/./src/js/app.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;