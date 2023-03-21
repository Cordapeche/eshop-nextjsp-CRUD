"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/admins";
exports.ids = ["pages/api/admins"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Articles.js":
/*!****************************!*\
  !*** ./models/Articles.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst articlesSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: String,\n    price: String,\n    description: String\n});\nconst Articles = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.articles) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"articles\", articlesSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Articles);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQXJ0aWNsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWMsR0FBRyxJQUFJRCx3REFBZSxDQUFDO0lBQ3pDRyxLQUFLLEVBQUVDLE1BQU07SUFDYkMsS0FBSyxFQUFFRCxNQUFNO0lBQ2JFLFdBQVcsRUFBRUYsTUFBTTtDQUNwQixDQUFDO0FBRUYsTUFBTUcsUUFBUSxHQUFHUCxpRUFBd0IsSUFBSUEscURBQWMsQ0FBQyxVQUFVLEVBQUVDLGNBQWMsQ0FBQztBQUV2RixpRUFBZU0sUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aGFwcC8uL21vZGVscy9BcnRpY2xlcy5qcz9jNTFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBhcnRpY2xlc1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIHRpdGxlOiBTdHJpbmcsXHJcbiAgcHJpY2U6IFN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogU3RyaW5nLFxyXG59KTtcclxuXHJcbmNvbnN0IEFydGljbGVzID0gbW9uZ29vc2UubW9kZWxzLmFydGljbGVzIHx8IG1vbmdvb3NlLm1vZGVsKCdhcnRpY2xlcycsIGFydGljbGVzU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImFydGljbGVzU2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJTdHJpbmciLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiQXJ0aWNsZXMiLCJtb2RlbHMiLCJhcnRpY2xlcyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Articles.js\n");

/***/ }),

/***/ "(api)/./pages/api/admins/index.js":
/*!***********************************!*\
  !*** ./pages/api/admins/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Articles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Articles */ \"(api)/./models/Articles.js\");\n// 1 importer mongoose (la librairie)\n\n// se connecter à mongodb\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb://localhost:27017/Articles\");\n// Importer notre model\n\n// Notre handler \nasync function handler(req, res) {\n    // On récupère les commentaires de la DB\n    const article = await _models_Articles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find().exec();\n    // On envoie le résultat au client\n    res.status(200).json(article);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW5zL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxxQ0FBcUM7QUFDTjtBQUMvQjtBQUNDQSx1REFBZSxDQUFDLG9DQUFvQyxDQUFDLENBQUM7QUFDdkQsdUJBQXVCO0FBQ3FCO0FBQzVDLGlCQUFpQjtBQUNGLGVBQWVHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUM7SUFDRSxNQUFJQyxPQUFPLEdBQUcsTUFBTUosNkRBQVMsRUFBRSxDQUFDTSxJQUFJLEVBQUU7SUFDeEM7SUFDQUgsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0osT0FBTyxDQUFDLENBQUM7Q0FDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoYXBwLy4vcGFnZXMvYXBpL2FkbWlucy9pbmRleC5qcz8wNTI0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIDEgaW1wb3J0ZXIgbW9uZ29vc2UgKGxhIGxpYnJhaXJpZSlcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG4vLyBzZSBjb25uZWN0ZXIgw6AgbW9uZ29kYlxyXG5tb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L0FydGljbGVzJyk7XHJcbi8vIEltcG9ydGVyIG5vdHJlIG1vZGVsXHJcbmltcG9ydCBFc2hwIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvQXJ0aWNsZXNcIjtcclxuLy8gTm90cmUgaGFuZGxlciBcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgLy8gT24gcsOpY3Vww6hyZSBsZXMgY29tbWVudGFpcmVzIGRlIGxhIERCXHJcbiAgICBjb25zdCBhcnRpY2xlID0gYXdhaXQgRXNocC5maW5kKCkuZXhlYygpO1xyXG4gICAgLy8gT24gZW52b2llIGxlIHLDqXN1bHRhdCBhdSBjbGllbnRcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFydGljbGUpO1xyXG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdCIsIkVzaHAiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYXJ0aWNsZSIsImZpbmQiLCJleGVjIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/admins/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/admins/index.js"));
module.exports = __webpack_exports__;

})();