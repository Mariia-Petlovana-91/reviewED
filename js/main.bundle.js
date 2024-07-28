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

/***/ "./src/components-js/voiceSearch.js":
/*!******************************************!*\
  !*** ./src/components-js/voiceSearch.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initVoiceSearch: () => (/* binding */ initVoiceSearch)\n/* harmony export */ });\nfunction initVoiceSearch() {\n  console.log('Initializing voice search');\n  var voiceSearchBtn = document.getElementById('voiceSearchBtn');\n  if (!voiceSearchBtn) {\n    console.error('Element with ID \"voiceSearchBtn\" not found.');\n    return;\n  }\n  voiceSearchBtn.addEventListener('click', function () {\n    if ('webkitSpeechRecognition' in window) {\n      var recognition = new webkitSpeechRecognition();\n      recognition.lang = 'uk-UA';\n      recognition.interimResults = false;\n      recognition.maxAlternatives = 1;\n      recognition.start();\n      recognition.onresult = function (event) {\n        var transcript = event.results[0][0].transcript;\n        document.querySelector('.head__input').value = transcript;\n        console.log('Результат: ', transcript);\n      };\n      recognition.onerror = function (event) {\n        console.error('Помилка розпізнавання: ', event.error);\n      };\n      recognition.onend = function () {\n        console.log('Розпізнавання завершено');\n      };\n    } else {\n      alert('Ваш браузер не підтримує Web Speech API');\n    }\n  });\n}\n\n//# sourceURL=webpack://reviwED/./src/components-js/voiceSearch.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_js_voiceSearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components-js/voiceSearch.js */ \"./src/components-js/voiceSearch.js\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n// ІМПОРТ ФУНКЦІЙ У MEIN\n\n\n// ПІДКЛЮЧАЄМО СТИЛІ\n\n\n// ПІДКЛЮЧАЄМО ФАЙЛИ JS\n\n\n// ВИКЛИК ФУНКЦІЙ З ФАЙЛІВ\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  (0,_components_js_voiceSearch_js__WEBPACK_IMPORTED_MODULE_0__.initVoiceSearch)(); // Ініціалізує обробник події для голосового пошуку після завантаження DOM\n});\n\n//# sourceURL=webpack://reviwED/./src/js/main.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://reviwED/./src/scss/styles.scss?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;