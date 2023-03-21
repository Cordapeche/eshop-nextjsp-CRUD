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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./data/connect.js":
/*!*************************!*\
  !*** ./data/connect.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongo = async ()=>{\n    try {\n        const { connection  } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL);\n        if (connection.readyState == 1) {\n            return Promise.resolve(true);\n        }\n    } catch (error) {\n        return Promise.reject(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhL2Nvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRy9CLE1BQU1DLFlBQVksR0FBRyxVQUFZO0lBQzdCLElBQUk7UUFDQSxNQUFNLEVBQUVDLFVBQVUsR0FBRSxHQUFHLE1BQU1GLHVEQUFnQixDQUFDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO1FBRXBFLElBQUdKLFVBQVUsQ0FBQ0ssVUFBVSxJQUFHLENBQUMsRUFBQztZQUN6QixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDL0I7S0FDSixDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNaLE9BQU9GLE9BQU8sQ0FBQ0csTUFBTSxDQUFDRCxLQUFLLENBQUM7S0FDL0I7Q0FDSjtBQUVELGlFQUFlVCxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoYXBwLy4vZGF0YS9jb25uZWN0LmpzP2VhYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuXHJcbmNvbnN0IGNvbm5lY3RNb25nbyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBjb25uZWN0aW9uIH0gPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTCk7XHJcblxyXG4gICAgICAgIGlmKGNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA9PTEpe1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdE1vbmdvOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3RNb25nbyIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSTCIsInJlYWR5U3RhdGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImVycm9yIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./data/connect.js\n");

/***/ }),

/***/ "(api)/./models/Users.js":
/*!*************************!*\
  !*** ./models/Users.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: String,\n    email: String,\n    password: String\n});\nconst Users = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.users || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"users\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEO0FBRWhELE1BQU1HLFVBQVUsR0FBRyxJQUFJSCw0Q0FBTSxDQUFFO0lBQzNCSSxRQUFRLEVBQUVDLE1BQU07SUFDaEJDLEtBQUssRUFBRUQsTUFBTTtJQUNiRSxRQUFRLEVBQUVGLE1BQU07Q0FDbkIsQ0FBQztBQUVGLE1BQU1HLEtBQUssR0FBR04sa0RBQVksSUFBSUQsK0NBQUssQ0FBQyxPQUFPLEVBQUVFLFVBQVUsQ0FBQztBQUV4RCxpRUFBZUssS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aGFwcC8uL21vZGVscy9Vc2Vycy5qcz82ZjdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEgKHtcclxuICAgIHVzZXJuYW1lOiBTdHJpbmcsXHJcbiAgICBlbWFpbDogU3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IFN0cmluZ1xyXG59KVxyXG5cclxuY29uc3QgVXNlcnMgPSBtb2RlbHMudXNlcnMgfHwgbW9kZWwoJ3VzZXJzJywgdXNlclNjaGVtYSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsInVzZXJTY2hlbWEiLCJ1c2VybmFtZSIsIlN0cmluZyIsImVtYWlsIiwicGFzc3dvcmQiLCJVc2VycyIsInVzZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Users.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/connect */ \"(api)/./data/connect.js\");\n/* harmony import */ var _models_Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/Users */ \"(api)/./models/Users.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n// Models\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        // Provider\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"Credentials\",\n            async authorize (credentials, req) {\n                (0,_data_connect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().catch((error)=>{\n                    error: \"Connection Failed...!\";\n                });\n                // check user existance\n                const result = await _models_Users__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                if (!result) {\n                    throw new Error(\"No user Found with Email Please Sign Up...!\");\n                //return res.status(404).json({ status : false, message: \"No user Found with Email Please Sign Up...!\" });\n                }\n                // compare()\n                const checkPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_4__.compare)(credentials.password, result.password);\n                // incorrect password\n                if (!checkPassword || result.email !== credentials.email) {\n                    throw new Error(\"Username or Password doesn't match\");\n                }\n                return result;\n            }\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNpQztBQUNqQjtBQUVqRCxTQUFTO0FBQ2lDO0FBRVA7QUFFbkMsaUVBQWVBLGdEQUFRLENBQUM7SUFDcEJLLFNBQVMsRUFBRztRQUNSLFdBQVc7UUFFWEosc0VBQW1CLENBQUM7WUFDaEJLLElBQUksRUFBRyxhQUFhO1lBQ3BCLE1BQU1DLFNBQVMsRUFBQ0MsV0FBVyxFQUFFQyxHQUFHLEVBQUM7Z0JBQzdCUCx5REFBWSxFQUFFLENBQUNRLEtBQUssQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFJO29CQUFFQSxLQUFLLEVBQUUsdUJBQXVCO2lCQUFDLENBQUM7Z0JBRWhFLHVCQUF1QjtnQkFDdkIsTUFBTUMsTUFBTSxHQUFHLE1BQU1ULDZEQUFhLENBQUU7b0JBQUVXLEtBQUssRUFBR04sV0FBVyxDQUFDTSxLQUFLO2lCQUFDLENBQUM7Z0JBQ2pFLElBQUcsQ0FBQ0YsTUFBTSxFQUFDO29CQUVQLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7Z0JBQy9ELDBHQUEwRztpQkFDN0c7Z0JBRUQsWUFBWTtnQkFDWixNQUFNQyxhQUFhLEdBQUcsTUFBTVosaURBQU8sQ0FBQ0ksV0FBVyxDQUFDUyxRQUFRLEVBQUVMLE1BQU0sQ0FBQ0ssUUFBUSxDQUFDO2dCQUUxRSxxQkFBcUI7Z0JBQ3JCLElBQUcsQ0FBQ0QsYUFBYSxJQUFJSixNQUFNLENBQUNFLEtBQUssS0FBS04sV0FBVyxDQUFDTSxLQUFLLEVBQUM7b0JBQ3BELE1BQU0sSUFBSUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7aUJBQ3pEO2dCQUVELE9BQU9ILE1BQU0sQ0FBQzthQUVqQjtTQUNKLENBQUM7S0FDTDtDQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoYXBwLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcclxuaW1wb3J0IGNvbm5lY3RNb25nbyBmcm9tICcuLi8uLi8uLi9kYXRhL2Nvbm5lY3QnO1xyXG5cclxuLy8gTW9kZWxzXHJcbmltcG9ydCBVc2VycyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvVXNlcnMnO1xyXG5cclxuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gJ2JjcnlwdGpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICAgIHByb3ZpZGVycyA6IFtcclxuICAgICAgICAvLyBQcm92aWRlclxyXG4gICAgICAgIFxyXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICBuYW1lIDogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSl7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0TW9uZ28oKS5jYXRjaChlcnJvciA9PiB7IGVycm9yOiBcIkNvbm5lY3Rpb24gRmFpbGVkLi4uIVwifSlcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayB1c2VyIGV4aXN0YW5jZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgVXNlcnMuZmluZE9uZSggeyBlbWFpbCA6IGNyZWRlbnRpYWxzLmVtYWlsfSlcclxuICAgICAgICAgICAgICAgIGlmKCFyZXN1bHQpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB1c2VyIEZvdW5kIHdpdGggRW1haWwgUGxlYXNlIFNpZ24gVXAuLi4hXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgc3RhdHVzIDogZmFsc2UsIG1lc3NhZ2U6IFwiTm8gdXNlciBGb3VuZCB3aXRoIEVtYWlsIFBsZWFzZSBTaWduIFVwLi4uIVwiIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNvbXBhcmUoKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tQYXNzd29yZCA9IGF3YWl0IGNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHJlc3VsdC5wYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGluY29ycmVjdCBwYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgaWYoIWNoZWNrUGFzc3dvcmQgfHwgcmVzdWx0LmVtYWlsICE9PSBjcmVkZW50aWFscy5lbWFpbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlcm5hbWUgb3IgUGFzc3dvcmQgZG9lc24ndCBtYXRjaFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICBdXHJcbn0pIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImNvbm5lY3RNb25nbyIsIlVzZXJzIiwiY29tcGFyZSIsInByb3ZpZGVycyIsIm5hbWUiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsInJlcSIsImNhdGNoIiwiZXJyb3IiLCJyZXN1bHQiLCJmaW5kT25lIiwiZW1haWwiLCJFcnJvciIsImNoZWNrUGFzc3dvcmQiLCJwYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();