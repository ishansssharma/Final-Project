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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function() {

eval("//VARIABLES FOR MAIN PAGE\n\nconst mainButtons = document.querySelectorAll(\".main-button\");\nconst pages = document.querySelectorAll(\".content\");\n\n//FUNCTIONS\n\n//SWITCHING THROUGH DIFFERENT PAGES\nmainButtons.forEach(button => {\n  button.addEventListener(\"click\", showPage);\n});\nfunction showPage(event) {\n  const button = event.currentTarget;\n  const pageToDisplay = button.dataset.button;\n  pages.forEach(page => {\n    page.classList.remove(\"content--visible\");\n    if (page.dataset.name === pageToDisplay) {\n      page.classList.add(\"content--visible\");\n    }\n  });\n  mainButtons.forEach(button => {\n    button.classList.remove(\"main-button__active\");\n    if (button.dataset.button === pageToDisplay) {\n      button.classList.add(\"main-button__active\");\n    }\n  });\n}\n\n//# sourceURL=webpack://src/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"]();
/******/ 	
/******/ })()
;