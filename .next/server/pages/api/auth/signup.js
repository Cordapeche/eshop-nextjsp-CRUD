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
exports.id = "pages/api/auth/signup";
exports.ids = ["pages/api/auth/signup"];
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

/***/ "(api)/./pages/api/auth/signup.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/connect */ \"(api)/./data/connect.js\");\n/* harmony import */ var _models_Users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Users */ \"(api)/./models/Users.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n// Model\n\n// Lib\n\nasync function handler(req, res) {\n    (0,_data_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().catch((error)=>res.json({\n            error: \"Connection Failed...!\"\n        }));\n    // only post method is accepted\n    if (req.method === \"POST\") {\n        if (!req.body) {\n            return res.status(404).json({\n                status: false,\n                message: \"Don't have form data...!\"\n            });\n        }\n        const { username , email , password  } = req.body;\n        // check duplicate users\n        const checkexisting = await _models_Users__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        if (checkexisting) {\n            return res.status(422).json({\n                status: false,\n                message: \"User Already Exists...!\"\n            });\n        }\n        const user = {\n            username,\n            email,\n            password: await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_2__.hash)(password, 12)\n        };\n        // hash password\n        const iscreated = await _models_Users__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(user);\n        console.log(iscreated);\n        if (iscreated) {\n            res.status(201).json({\n                status: true,\n                user: iscreated\n            });\n        } else {\n            return res.status(404).json({\n                status: false,\n                message: \"User creation failed\"\n            });\n        }\n    /*function(err, data){\r\n            if(err) \r\n            res.status(201).json({ status : true, user: data})\r\n        } */ } else {\n        res.status(500).json({\n            message: \"HTTP method not valid only POST Accepted\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUQ7QUFDakQsUUFBUTtBQUNrQztBQUMxQyxNQUFNO0FBQzBCO0FBRWpCLGVBQWVHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUM7SUFDM0NMLHlEQUFZLEVBQUUsQ0FBQ00sS0FBSyxDQUFDQyxDQUFBQSxLQUFLLEdBQUlGLEdBQUcsQ0FBQ0csSUFBSSxDQUFDO1lBQUVELEtBQUssRUFBRSx1QkFBdUI7U0FBQyxDQUFDLENBQUM7SUFFMUUsK0JBQStCO0lBQy9CLElBQUdILEdBQUcsQ0FBQ0ssTUFBTSxLQUFLLE1BQU0sRUFBQztRQUVyQixJQUFHLENBQUNMLEdBQUcsQ0FBQ00sSUFBSSxFQUFFO1lBQ1YsT0FBT0wsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNILElBQUksQ0FBQztnQkFBRUcsTUFBTSxFQUFFLEtBQUs7Z0JBQUVDLE9BQU8sRUFBRSwwQkFBMEI7YUFBQyxDQUFDLENBQUM7U0FDdEY7UUFDRCxNQUFNLEVBQUVDLFFBQVEsR0FBRUMsS0FBSyxHQUFFQyxRQUFRLEdBQUUsR0FBR1gsR0FBRyxDQUFDTSxJQUFJO1FBRTlDLHdCQUF3QjtRQUN4QixNQUFNTSxhQUFhLEdBQUcsTUFBTWYsNkRBQWEsQ0FBQztZQUFFYSxLQUFLO1NBQUUsQ0FBQztRQUNwRCxJQUFHRSxhQUFhLEVBQUM7WUFDYixPQUFPWCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0gsSUFBSSxDQUFDO2dCQUFFRyxNQUFNLEVBQUUsS0FBSztnQkFBRUMsT0FBTyxFQUFFLHlCQUF5QjthQUFDLENBQUMsQ0FBQztTQUNyRjtRQUVELE1BQU1NLElBQUksR0FBRztZQUNUTCxRQUFRO1lBQ1JDLEtBQUs7WUFDTEMsUUFBUSxFQUFHLE1BQU1iLDhDQUFJLENBQUNhLFFBQVEsRUFBRSxFQUFFLENBQUM7U0FDdEM7UUFFRCxnQkFBZ0I7UUFDaEIsTUFBTUksU0FBUyxHQUFHLE1BQU1sQiw0REFBWSxDQUFDaUIsSUFBSSxDQUFDO1FBRTFDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsU0FBUyxDQUFDLENBQUM7UUFFdkIsSUFBR0EsU0FBUyxFQUFDO1lBQ1RkLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSCxJQUFJLENBQUM7Z0JBQUVHLE1BQU0sRUFBRyxJQUFJO2dCQUFFTyxJQUFJLEVBQUVDLFNBQVM7YUFBRSxDQUFDO1NBQzNELE1BQ0c7WUFDQSxPQUFPZCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0gsSUFBSSxDQUFDO2dCQUFFRyxNQUFNLEVBQUcsS0FBSztnQkFBRUMsT0FBTyxFQUFFLHNCQUFzQjthQUFFLENBQUMsQ0FBQztTQUNwRjtJQUVEO1FBTUFQLEdBQUcsQ0FBQ00sTUFBTSxDQUFDO1lBQVlDLE9BQU8sRUFBRSwwQ0FBMEM7U0FBQyxDQUFDO0tBQy9FO0NBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoYXBwLy4vcGFnZXMvYXBpL2F1dGgvc2lnbnVwLmpzP2EyYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3RNb25nbyBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb25uZWN0XCI7XHJcbi8vIE1vZGVsXHJcbmltcG9ydCBVc2VycyBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1VzZXJzXCI7XHJcbi8vIExpYlxyXG5pbXBvcnQgeyBoYXNoIH0gZnJvbSAnYmNyeXB0anMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XHJcbiAgICBjb25uZWN0TW9uZ28oKS5jYXRjaChlcnJvciA9PiByZXMuanNvbih7IGVycm9yOiBcIkNvbm5lY3Rpb24gRmFpbGVkLi4uIVwifSkpXHJcblxyXG4gICAgLy8gb25seSBwb3N0IG1ldGhvZCBpcyBhY2NlcHRlZFxyXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcclxuXHJcbiAgICAgICAgaWYoIXJlcS5ib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IHN0YXR1czogZmFsc2UsIG1lc3NhZ2U6IFwiRG9uJ3QgaGF2ZSBmb3JtIGRhdGEuLi4hXCJ9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgZHVwbGljYXRlIHVzZXJzXHJcbiAgICAgICAgY29uc3QgY2hlY2tleGlzdGluZyA9IGF3YWl0IFVzZXJzLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuICAgICAgICBpZihjaGVja2V4aXN0aW5nKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgc3RhdHVzOiBmYWxzZSwgbWVzc2FnZTogXCJVc2VyIEFscmVhZHkgRXhpc3RzLi4uIVwifSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1c2VyID0geyBcclxuICAgICAgICAgICAgdXNlcm5hbWUsIFxyXG4gICAgICAgICAgICBlbWFpbCwgXHJcbiAgICAgICAgICAgIHBhc3N3b3JkIDogYXdhaXQgaGFzaChwYXNzd29yZCwgMTIpXHJcbiAgICAgICAgfTsgXHJcblxyXG4gICAgICAgIC8vIGhhc2ggcGFzc3dvcmRcclxuICAgICAgICBjb25zdCBpc2NyZWF0ZWQgPSBhd2FpdCBVc2Vycy5jcmVhdGUodXNlcik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlzY3JlYXRlZCk7XHJcblxyXG4gICAgICAgIGlmKGlzY3JlYXRlZCl7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3RhdHVzIDogdHJ1ZSwgdXNlcjogaXNjcmVhdGVkIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IHN0YXR1cyA6IGZhbHNlLCBtZXNzYWdlOiBcIlVzZXIgY3JlYXRpb24gZmFpbGVkXCIgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKmZ1bmN0aW9uKGVyciwgZGF0YSl7XHJcbiAgICAgICAgICAgIGlmKGVycikgXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3RhdHVzIDogdHJ1ZSwgdXNlcjogZGF0YX0pXHJcbiAgICAgICAgfSAqL1xyXG5cclxuICAgIH0gZWxzZXtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiSFRUUCBtZXRob2Qgbm90IHZhbGlkIG9ubHkgUE9TVCBBY2NlcHRlZFwifSlcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiY29ubmVjdE1vbmdvIiwiVXNlcnMiLCJoYXNoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNhdGNoIiwiZXJyb3IiLCJqc29uIiwibWV0aG9kIiwiYm9keSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjaGVja2V4aXN0aW5nIiwiZmluZE9uZSIsInVzZXIiLCJpc2NyZWF0ZWQiLCJjcmVhdGUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/signup.js"));
module.exports = __webpack_exports__;

})();