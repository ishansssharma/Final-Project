/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ExchangeRateApi.js":
/*!***********************************!*\
  !*** ./src/js/ExchangeRateApi.js ***!
  \***********************************/
/***/ (function() {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/ishansharma/Desktop/Sites Sem 2/Final project/src/js/ExchangeRateApi.js: Unexpected token, expected \\\"(\\\" (20:20)\\n\\n\\u001b[0m \\u001b[90m 18 |\\u001b[39m }\\n \\u001b[90m 19 |\\u001b[39m\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 20 |\\u001b[39m \\u001b[36mfunction\\u001b[39m renderRate \\u001b[33m=\\u001b[39m () \\u001b[33m=>\\u001b[39m {\\n \\u001b[90m    |\\u001b[39m                     \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 21 |\\u001b[39m\\n \\u001b[90m 22 |\\u001b[39m }\\n \\u001b[90m 23 |\\u001b[39m\\u001b[0m\\n    at constructor (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/parser/lib/index.js:351:19)\\n    at Parser.raise (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/parser/lib/index.js:3281:19)\\n    at Parser.unexpected (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/parser/lib/index.js:3301:16)\\n    at Parser.expect (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/parser/lib/index.js:3605:28)\\n    at Parser.parseFunctionParams (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/parser/lib/index.js:12954:10)\\n    at Parser.parseFunction (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/parser/lib/index.js:12938:10)\\n    at Parser.parseFunctionStatement (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/parser/lib/index.js:12623:17)\\n    at Parser.parseStatementContent (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/parser/lib/index.js:12284:21)\\n    at Parser.parseStatementLike (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/parser/lib/index.js:12260:17)\\n    at Parser.parseModuleItem (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/parser/lib/index.js:12237:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/parser/lib/index.js:12817:36)\\n    at Parser.parseBlockBody (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/parser/lib/index.js:12810:10)\\n    at Parser.parseProgram (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/parser/lib/index.js:12137:10)\\n    at Parser.parseTopLevel (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/parser/lib/index.js:12127:25)\\n    at Parser.parse (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/parser/lib/index.js:13941:10)\\n    at parse (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/parser/lib/index.js:13983:38)\\n    at parser (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/core/lib/parser/index.js:41:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/core/lib/transformation/normalize-file.js:64:37)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/core/lib/transformation/index.js:21:50)\\n    at run.next (<anonymous>)\\n    at transform (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/@babel/core/lib/transform.js:22:33)\\n    at transform.next (<anonymous>)\\n    at step (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/gensync/index.js:261:32)\\n    at /Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/gensync/index.js:273:13\\n    at async.call.result.err.err (/Users/ishansharma/Desktop/Sites Sem 2/Final project/node_modules/gensync/index.js:223:11)\");\n\n//# sourceURL=webpack://src/./src/js/ExchangeRateApi.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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