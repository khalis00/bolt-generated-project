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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/users.js":
/*!****************************!*\
  !*** ./pages/api/users.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/mongodb */ \"(api)/./utils/mongodb.js\");\n\nasync function handler(req, res) {\n    const { db  } = await (0,_utils_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n    if (req.method === \"POST\") {\n        const { name , age , details  } = req.body;\n        const response = await db.collection(\"users\").insertOne({\n            name,\n            age,\n            details\n        });\n        res.status(201).json(response.ops[0]);\n    } else if (req.method === \"GET\") {\n        const users = await db.collection(\"users\").find({}).toArray();\n        res.status(200).json(users);\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\",\n            \"GET\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBdUQ7QUFFcEMsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxFQUFFQyxHQUFFLEVBQUUsR0FBRyxNQUFNSixpRUFBaUJBO0lBRXRDLElBQUlFLElBQUlHLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxJQUFHLEVBQUVDLFFBQU8sRUFBRSxHQUFHTixJQUFJTyxJQUFJO1FBQ3ZDLE1BQU1DLFdBQVcsTUFBTU4sR0FBR08sVUFBVSxDQUFDLFNBQVNDLFNBQVMsQ0FBQztZQUFFTjtZQUFNQztZQUFLQztRQUFRO1FBQzdFTCxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSixTQUFTSyxHQUFHLENBQUMsRUFBRTtJQUN0QyxPQUFPLElBQUliLElBQUlHLE1BQU0sS0FBSyxPQUFPO1FBQy9CLE1BQU1XLFFBQVEsTUFBTVosR0FBR08sVUFBVSxDQUFDLFNBQVNNLElBQUksQ0FBQyxDQUFDLEdBQUdDLE9BQU87UUFDM0RmLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNFO0lBQ3ZCLE9BQU87UUFDTGIsSUFBSWdCLFNBQVMsQ0FBQyxTQUFTO1lBQUM7WUFBUTtTQUFNO1FBQ3RDaEIsSUFBSVUsTUFBTSxDQUFDLEtBQUtPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRWxCLElBQUlHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcHBvcnR1bml0eS15b3V0aC1tYW5hZ2VtZW50LXN5c3RlbS8uL3BhZ2VzL2FwaS91c2Vycy5qcz80OWY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbW9uZ29kYidcblxuICAgIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICAgIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKClcblxuICAgICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBjb25zdCB7IG5hbWUsIGFnZSwgZGV0YWlscyB9ID0gcmVxLmJvZHlcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmluc2VydE9uZSh7IG5hbWUsIGFnZSwgZGV0YWlscyB9KVxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihyZXNwb25zZS5vcHNbMF0pXG4gICAgICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5maW5kKHt9KS50b0FycmF5KClcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlcnMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCcsICdHRVQnXSlcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKVxuICAgICAgfVxuICAgIH1cbiJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYiIsIm1ldGhvZCIsIm5hbWUiLCJhZ2UiLCJkZXRhaWxzIiwiYm9keSIsInJlc3BvbnNlIiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsInN0YXR1cyIsImpzb24iLCJvcHMiLCJ1c2VycyIsImZpbmQiLCJ0b0FycmF5Iiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users.js"));
module.exports = __webpack_exports__;

})();