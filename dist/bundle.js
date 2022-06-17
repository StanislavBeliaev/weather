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

/***/ "./js/date.js":
/*!********************!*\
  !*** ./js/date.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addzero\": () => (/* binding */ addzero),\n/* harmony export */   \"date_time1\": () => (/* binding */ date_time1),\n/* harmony export */   \"date_time2\": () => (/* binding */ date_time2)\n/* harmony export */ });\nfunction addzero(value){\r\n    if (value < 10){\r\n      value = '0' + value;\r\n    }\r\n    return value;\r\n  }\r\n  function date_time1(){\r\n    const current_datetime = new Date();\r\n    const day = addzero(current_datetime.getDate());\r\n    const month = addzero(current_datetime.getMonth()+1);\r\n    const year = current_datetime.getFullYear();\r\n    const hours = addzero(current_datetime.getHours());\r\n    const minutes = addzero(current_datetime.getMinutes());\r\n    return \"Time in\" + \" \" + day+\".\"+month+\".\"+year+\" \"+hours+\":\"+minutes\r\n  }\r\n  \r\nfunction date_time2(){\r\n    const current_datetime = new Date();\r\n    const hours1 = addzero(current_datetime.getUTCHours());\r\n    const minutes1 = addzero(current_datetime.getMinutes());\r\n    return \"Time UTC:\" + \" \" +hours1+\":\"+minutes1\r\n  }\r\n  \n\n//# sourceURL=webpack://the-weather-site/./js/date.js?");

/***/ }),

/***/ "./js/fivedays.js":
/*!************************!*\
  !*** ./js/fivedays.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"search\": () => (/* binding */ search),\n/* harmony export */   \"table\": () => (/* binding */ table),\n/* harmony export */   \"tableCreate\": () => (/* binding */ tableCreate),\n/* harmony export */   \"toTextualDescription\": () => (/* binding */ toTextualDescription)\n/* harmony export */ });\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today */ \"./js/today.js\");\nlet search = document.querySelector(\".search__input\");\r\nlet table = document.querySelector(\".content-2__fivedays\")\r\n;\r\nfunction tableCreate(){\r\n    for(let i = 0; i<39;i++){\r\n        let tr = document.createElement('tr')\r\n        table.append(tr)\r\n        for(let j = 0;j<8;j++){\r\n            let td = document.createElement('td')\r\n            let img = document.createElement('img')\r\n            if (j === 0){\r\n           td.classList.add(\"days1\")\r\n            }\r\n            if (j === 1){\r\n                td.classList.add(\"temps\")\r\n            }\r\n            if (j === 2){\r\n                td.classList.add(\"feels\")\r\n            }\r\n            if (j === 3){\r\n                td.append(img) \r\n                td.classList.add(\"icons\")\r\n                img.classList.add(\"weather__icons\")\r\n            }\r\n            if (j === 4){\r\n                td.classList.add(\"cloudandpres\")\r\n            }\r\n            if (j === 5){\r\n                td.classList.add(\"fivedays__winds\")\r\n\r\n            }\r\n            if (j === 6){\r\n                td.classList.add(\"fivedays__pressures\")\r\n            }\r\n            if (j === 7){\r\n                td.classList.add(\"fivedays__pressures\")\r\n            }\r\n           \r\n        tr.append(td)    \r\n       }\r\n\r\n    }\r\n}\r\nfunction  toTextualDescription(deg){\r\n    if(deg>292.5) return 'North Westerly';\r\n    if(deg>337.5) return 'Northerly';\r\n    if(deg>247.5) return 'Westerly';\r\n    if(deg>202.5) return 'South Westerly';\r\n    if(deg>157.5) return 'Southerly';\r\n    if(deg>122.5) return 'South Easterly';\r\n    if(deg>67.5) return 'Easterly';\r\n    if(deg>22.5){return 'North Easterly';}\r\n    return 'Northerly';\r\n}\r\n\r\n// ['temps','feels','cloudandpres','fivedays__winds','fivedays__pressures','fivedays__humiditys'].forEach(c => {let td = document.createElement('td');td.classList.add(c); tr.append(td); })\r\n_today__WEBPACK_IMPORTED_MODULE_0__.form.addEventListener(\"submit\", function (e) {\r\n    e.preventDefault();\r\nfetch(\r\n    \"http://api.openweathermap.org/data/2.5/forecast?q=\"+search.value+\"&appid=14112ae00131ef273ecde36d5985622d\"\r\n    )\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n        tableCreate()\r\n        toTextualDescription(data.list[3].wind.deg) \r\n        for(let i = 0; i<39; i++){\r\n            document.querySelectorAll('tr td:first-child')[i].innerHTML += data.list[i].dt_txt\r\n            document.querySelectorAll('tr td:nth-child(2)')[i].innerHTML += Number(data.list[i].main.temp).toFixed(0)\r\n            document.querySelectorAll('tr td:nth-child(3)')[i].innerHTML += Number(data.list[i].main.feels_like).toFixed(0)\r\n            document.querySelectorAll('tr img:nth-child(1)')[i].setAttribute('src', \"http://openweathermap.org/img/wn/\"+data.list[i].weather[0].icon+\".png\" )\r\n            document.querySelectorAll('tr td:nth-child(5)')[i].innerHTML += data.list[i].weather[0].main + \",\" +data.list[i].weather[0].description\r\n            document.querySelectorAll('tr td:nth-child(6)')[i].innerHTML += Number(data.list[i].wind.speed) +\",\" +toTextualDescription(data.list[i].wind.deg)\r\n            document.querySelectorAll('tr td:nth-child(7)')[i].innerHTML += Number(data.list[i].main.pressure)\r\n            document.querySelectorAll('tr td:nth-child(8)')[i].innerHTML += Number(data.list[i].main.humidity)\r\n        }\r\n    })\r\n\r\n})\r\n\n\n//# sourceURL=webpack://the-weather-site/./js/fivedays.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ \"./js/date.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ \"./js/today.js\");\n/* harmony import */ var _fivedays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fivedays */ \"./js/fivedays.js\");\n\r\nsetInterval(function () {\r\n    document.getElementById('date2').innerHTML = (0,_date__WEBPACK_IMPORTED_MODULE_0__.date_time2)();\r\n}, 1000);\r\nsetInterval(function () {\r\n    document.getElementById('date1').innerHTML = (0,_date__WEBPACK_IMPORTED_MODULE_0__.date_time1)();\r\n}, 1000);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://the-weather-site/./js/main.js?");

/***/ }),

/***/ "./js/today.js":
/*!*********************!*\
  !*** ./js/today.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"button\": () => (/* binding */ button),\n/* harmony export */   \"desc\": () => (/* binding */ desc),\n/* harmony export */   \"feelsLike\": () => (/* binding */ feelsLike),\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"humidity\": () => (/* binding */ humidity),\n/* harmony export */   \"pressure\": () => (/* binding */ pressure),\n/* harmony export */   \"searchInput\": () => (/* binding */ searchInput),\n/* harmony export */   \"temperature\": () => (/* binding */ temperature),\n/* harmony export */   \"weatherIcon\": () => (/* binding */ weatherIcon),\n/* harmony export */   \"weatherIn\": () => (/* binding */ weatherIn),\n/* harmony export */   \"wind\": () => (/* binding */ wind)\n/* harmony export */ });\nlet button = document.querySelector(\".search__button\");\r\nlet form = document.querySelector(\".search__form\");\r\nlet searchInput = document.querySelector(\".search__input\");\r\nlet temperature = document.querySelector(\".temperature\");\r\nlet feelsLike = document.querySelector(\".temperature__feels\");\r\nlet humidity = document.querySelector(\".humidity\");\r\nlet pressure = document.querySelector(\".pressure\");\r\nlet wind = document.querySelector(\".wind\");\r\nlet weatherIcon = document.querySelector(\".wether__icon\")\r\nlet desc = document.querySelector(\".clouds1\")\r\nlet weatherIn = document.querySelector(\".main__weather\")\r\n\r\nfunction  toTextualDescription(deg){\r\n  if(deg>292.5) return 'North Westerly';\r\n  if(deg>337.5) return 'Northerly';\r\n  if(deg>247.5) return 'Westerly';\r\n  if(deg>202.5) return 'South Westerly';\r\n  if(deg>157.5) return 'Southerly';\r\n  if(deg>122.5) return 'South Easterly';\r\n  if(deg>67.5) return 'Easterly';\r\n  if(deg>22.5){return 'North Easterly';}\r\n  return 'Northerly';\r\n}\r\nform.addEventListener(\"submit\", function (e) {\r\n  e.preventDefault();\r\n  fetch(\r\n    \"https://api.openweathermap.org/data/2.5/weather?q=\" +\r\n      searchInput.value +\r\n      \"&appid=2dace3ddd75462430dbb7b25127cf252\"\r\n  )\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      wind.innerHTML += data.wind.speed + \" m/s\" +\",\" +toTextualDescription(data.wind.deg);\r\n      temperature.innerHTML += data.main.temp + \" °F\";\r\n      humidity.innerHTML += data.main.humidity + \" %\";\r\n      feelsLike.innerHTML += data.main.feels_like + \" °F\";\r\n      pressure.innerHTML += data.main.pressure + \" gPa\";\r\n      weatherIcon.setAttribute('src',\"http://openweathermap.org/img/w/\" + data.weather[0].icon + \".png\" ) ;\r\n      desc.innerHTML += data.weather[0].description;\r\n      weatherIn.innerHTML = (\"Weather In\")+ \" \"+searchInput.value\r\n    })\r\n    .catch((err) => alert(\"Wrong city name!\"));\r\n});\r\n\r\n\n\n//# sourceURL=webpack://the-weather-site/./js/today.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;