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
exports.id = "pages/api/growth";
exports.ids = ["pages/api/growth"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/growth.js":
/*!*****************************!*\
  !*** ./pages/api/growth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/mongodb */ \"(api)/./utils/mongodb.js\");\n\nasync function handler(req, res) {\n    const { db  } = await (0,_utils_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n    if (req.method === \"POST\") {\n        const { userId , metric , value  } = req.body;\n        const response = await db.collection(\"growth\").insertOne({\n            userId,\n            metric,\n            value\n        });\n        res.status(201).json(response.ops[0]);\n    } else if (req.method === \"GET\") {\n        const growthMetrics = await db.collection(\"growth\").find({}).toArray();\n        res.status(200).json(growthMetrics);\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\",\n            \"GET\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ3Jvd3RoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXVEO0FBRXBDLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsR0FBRSxFQUFFLEdBQUcsTUFBTUosaUVBQWlCQTtJQUV0QyxJQUFJRSxJQUFJRyxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVDLE9BQU0sRUFBRUMsT0FBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR04sSUFBSU8sSUFBSTtRQUMxQyxNQUFNQyxXQUFXLE1BQU1OLEdBQUdPLFVBQVUsQ0FBQyxVQUFVQyxTQUFTLENBQUM7WUFBRU47WUFBUUM7WUFBUUM7UUFBTTtRQUNqRkwsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0osU0FBU0ssR0FBRyxDQUFDLEVBQUU7SUFDdEMsT0FBTyxJQUFJYixJQUFJRyxNQUFNLEtBQUssT0FBTztRQUMvQixNQUFNVyxnQkFBZ0IsTUFBTVosR0FBR08sVUFBVSxDQUFDLFVBQVVNLElBQUksQ0FBQyxDQUFDLEdBQUdDLE9BQU87UUFDcEVmLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNFO0lBQ3ZCLE9BQU87UUFDTGIsSUFBSWdCLFNBQVMsQ0FBQyxTQUFTO1lBQUM7WUFBUTtTQUFNO1FBQ3RDaEIsSUFBSVUsTUFBTSxDQUFDLEtBQUtPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRWxCLElBQUlHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcHBvcnR1bml0eS15b3V0aC1tYW5hZ2VtZW50LXN5c3RlbS8uL3BhZ2VzL2FwaS9ncm93dGguanM/OWMwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gJy4uLy4uL3V0aWxzL21vbmdvZGInXG5cbiAgICBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpXG5cbiAgICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgY29uc3QgeyB1c2VySWQsIG1ldHJpYywgdmFsdWUgfSA9IHJlcS5ib2R5XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGIuY29sbGVjdGlvbignZ3Jvd3RoJykuaW5zZXJ0T25lKHsgdXNlcklkLCBtZXRyaWMsIHZhbHVlIH0pXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHJlc3BvbnNlLm9wc1swXSlcbiAgICAgIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgY29uc3QgZ3Jvd3RoTWV0cmljcyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2dyb3d0aCcpLmZpbmQoe30pLnRvQXJyYXkoKVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihncm93dGhNZXRyaWNzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnLCAnR0VUJ10pXG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IE5vdCBBbGxvd2VkYClcbiAgICAgIH1cbiAgICB9XG4iXSwibmFtZXMiOlsiY29ubmVjdFRvRGF0YWJhc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGIiLCJtZXRob2QiLCJ1c2VySWQiLCJtZXRyaWMiLCJ2YWx1ZSIsImJvZHkiLCJyZXNwb25zZSIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJzdGF0dXMiLCJqc29uIiwib3BzIiwiZ3Jvd3RoTWV0cmljcyIsImZpbmQiLCJ0b0FycmF5Iiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/growth.js\n");

/***/ }),

/***/ "(api)/./utils/mongodb.js":
/*!**************************!*\
  !*** ./utils/mongodb.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\nasync function connectToDatabase() {\n    const client = await clientPromise;\n    return {\n        client,\n        db: client.db(\"opportunity-youth\")\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tb25nb2RiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBcUM7QUFFakMsTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1DLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDTCxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlJLE1BQU0sMkNBQTBDO0FBQzVELENBQUM7QUFFRCxJQUFJTixJQUF5QixFQUFlO0lBQzFDLElBQUksQ0FBQ1EsT0FBT0MsbUJBQW1CLEVBQUU7UUFDL0JMLFNBQVMsSUFBSU4sZ0RBQVdBLENBQUNDLEtBQUtJO1FBQzlCSyxPQUFPQyxtQkFBbUIsR0FBR0wsT0FBT00sT0FBTztJQUM3QyxDQUFDO0lBQ0RMLGdCQUFnQkcsT0FBT0MsbUJBQW1CO0FBQzVDLE9BQU8sRUFHTjtBQUVELGlFQUFlSixhQUFhQSxFQUFBO0FBRXJCLGVBQWVNLG9CQUFvQjtJQUN4QyxNQUFNUCxTQUFTLE1BQU1DO0lBQ3JCLE9BQU87UUFDTEQ7UUFDQVEsSUFBSVIsT0FBT1EsRUFBRSxDQUFDO0lBQ2hCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wcG9ydHVuaXR5LXlvdXRoLW1hbmFnZW1lbnQtc3lzdGVtLy4vdXRpbHMvbW9uZ29kYi5qcz84ZmQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcblxuICAgIGNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXG4gICAgY29uc3Qgb3B0aW9ucyA9IHt9XG5cbiAgICBsZXQgY2xpZW50XG4gICAgbGV0IGNsaWVudFByb21pc2VcblxuICAgIGlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGFkZCB5b3VyIE1vbmdvIFVSSSB0byAuZW52LmxvY2FsJylcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICAgICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgICAgICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG4gICAgICB9XG4gICAgICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2VcbiAgICB9IGVsc2Uge1xuICAgICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgICAgIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG4gICAgfVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZVxuXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xpZW50LFxuICAgICAgICBkYjogY2xpZW50LmRiKCdvcHBvcnR1bml0eS15b3V0aCcpXG4gICAgICB9XG4gICAgfVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJFcnJvciIsIk5PREVfRU5WIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiLCJjb25uZWN0VG9EYXRhYmFzZSIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/growth.js"));
module.exports = __webpack_exports__;

})();