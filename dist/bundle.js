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

/***/ "./src/js/Addtocart.js":
/*!*****************************!*\
  !*** ./src/js/Addtocart.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n//ADDING ITEMS TO CART AND ADDING PRICES\n\nconst startCart = () => {\n  //VARIABLES FOR THE FUNCTION FORM HTML\n  const priceClothing = document.querySelectorAll(\".price-tag\");\n  const addToCartButtons = document.querySelectorAll(\".addtocart-button\");\n  const totalPriceDiv = document.querySelector(\".total-price\");\n  const containerDiv = document.querySelector(\".pricecontainer\");\n  //CREATE BUTTON FOR REMOVING ITEM\n  const removeSingleItem = document.createElement(\"button\");\n  const removeAllItems = document.createElement(\"button\");\n\n  //APPENDING BUTTONS TO THE CONTAINER\n  containerDiv.append(removeSingleItem, removeAllItems);\n\n  //VARIABLES THAT UNDERGO A CHANGE \n  let totalPrice = 0;\n  let cartArray = [];\n\n  //UPDATING THE TEXTCONTENT FOR THE PRICE DIV\n  const upDateTotalPrice = () => {\n    totalPriceDiv.textContent = `Total Price ${totalPrice} NOK`;\n  };\n\n  //ADDING THE PRICE PER CLOTHING PIECE\n  priceClothing.forEach(priceTag => {\n    priceTag.textContent = `${priceTag.dataset.price} NOK`;\n  });\n\n  //EVENT LISTENER FOR CLICKING ON THE BUTTON AND UPDATING THE THE TOTAL PRICE FOR EACH TIME\n  addToCartButtons.forEach((button, index) => {\n    button.addEventListener(\"click\", function () {\n      //PARSE THE PRICE USING DATASET\n      const price = parseFloat(priceClothing[index].dataset.price);\n\n      //UPDATING THE TOTALPRICE BY ADDING PRICE\n      totalPrice += price;\n      cartArray.push(price);\n      console.log(cartArray);\n      upDateTotalPrice();\n      cartCounter();\n    });\n  });\n\n  //FUNCTION FOR REMOVING ITEMS FROM THE CART \n  const removeItemFromCart = () => {\n    removeSingleItem.textContent = \"REMOVE SINGLE CLOTHING\";\n    removeAllItems.textContent = \"RESET CART\";\n    removeSingleItem.addEventListener(\"click\", () => {\n      if (cartArray.length > 0) {\n        const removeItem = cartArray.pop();\n        totalPrice -= removeItem;\n      }\n      upDateTotalPrice();\n      cartCounter();\n      console.log(cartArray);\n    });\n  };\n  removeItemFromCart();\n\n  //FUNCTION FOR REMOVING ALL ITEMS FROM FUNCTION\n  const removeAllItemsFromCart = () => {\n    removeAllItems.addEventListener(\"click\", () => {\n      totalPrice = 0;\n      cartArray.length = 0;\n      upDateTotalPrice();\n      cartCounter();\n    });\n  };\n  removeAllItemsFromCart();\n  const cartCounter = () => {\n    const itemCounter = document.querySelector(\".items-added\");\n    itemCounter.textContent = `TOTAL ITEMS ADDED ${cartArray.length}`;\n  };\n  cartCounter();\n};\nstartCart();\n/* harmony default export */ __webpack_exports__[\"default\"] = (startCart);\n\n//# sourceURL=webpack://src/./src/js/Addtocart.js?");

/***/ }),

/***/ "./src/js/ExchangeRateApi.js":
/*!***********************************!*\
  !*** ./src/js/ExchangeRateApi.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apikey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apikey */ \"./src/js/apikey.js\");\n//IMPORTING KEY\n\n\n//VARIABLES FOR THE EXCHANGE RATE SITE\nconst nokInput = document.querySelector(\".currencyinput\");\nconst convertButton = document.querySelector(\".convertbutton\");\nconst ulList = document.querySelector(\".exchangelist\");\n\n//ASYNC FUNCTION FOR API\n\n////const fetchAPI = async () => {\n//\ttry {\n//\t\tconst response = await fetch(`https://v6.exchangerate-api.com/${API_key}/latest/USD`);\n//\t\tconst data = await response.json();\n//\t\tconsole.log(data.conversion_rates);\n//\n//\t\tconvertButton.addEventListener(\"click\", (event) => {\n//\t\t\tevent.preventDefault();\n//\t\t\trenderExchange(data.conversion_rates.NOK, Number(nokInput.value))\n//\t\t})\n//\t} catch (error) {\n//\t\tconsole.log(\"Something went wrong\", error);\n//\t}\n//\n//\n//\n//\n//}\n//\n////FUNCTION FOR RENDERING THE CURRENCY EXCHANGE \n//\n//const renderExchange = (currencynok, amount = 1) => {\n//\tulList.textContent = \"\";\n//\tconst NokLine = document.createElement(\"li\");\n//\n//\tulList.appendChild(NokLine);\n//\n//\tNokLine.textContent = `Norwegian NOK = ${currencynok * amount}`;\n//\tconsole.log(NokLine);\n//\n//}\n//\n//\n//\n//fetchAPI();\n//\n////EXPORTING THE FILE\n//\n//export { fetchAPI, renderExchange }\n//\n\n//# sourceURL=webpack://src/./src/js/ExchangeRateApi.js?");

/***/ }),

/***/ "./src/js/apikey.js":
/*!**************************!*\
  !*** ./src/js/apikey.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst API_key = \"v6/06a031a8a2b698dd2edb02c8\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (API_key);\n\n//# sourceURL=webpack://src/./src/js/apikey.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ExchangeRateApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExchangeRateApi */ \"./src/js/ExchangeRateApi.js\");\n/* harmony import */ var _Addtocart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Addtocart */ \"./src/js/Addtocart.js\");\n\n\n\n//VARIABLES FOR MAIN PAGE\n\nconst mainButtons = document.querySelectorAll(\".main-button\");\nconst pages = document.querySelectorAll(\".content\");\n\n//FUNCTIONS\n\n//SWITCHING THROUGH DIFFERENT PAGES\nmainButtons.forEach(button => {\n  button.addEventListener(\"click\", showPage);\n});\nfunction showPage(event) {\n  const button = event.currentTarget;\n  const pageToDisplay = button.dataset.button;\n  pages.forEach(page => {\n    page.classList.remove(\"content--visible\");\n    if (page.dataset.name === pageToDisplay) {\n      page.classList.add(\"content--visible\");\n    }\n  });\n  mainButtons.forEach(button => {\n    button.classList.remove(\"main-button__active\");\n    if (button.dataset.button === pageToDisplay) {\n      button.classList.add(\"main-button__active\");\n    }\n  });\n}\n\n//# sourceURL=webpack://src/./src/js/app.js?");

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