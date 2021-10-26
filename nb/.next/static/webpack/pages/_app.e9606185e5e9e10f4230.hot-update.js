"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/features/todo/todoSaga.ts":
/*!***************************************!*\
  !*** ./src/features/todo/todoSaga.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_MAMP_htdocs_vue_b_nb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Applications_MAMP_htdocs_vue_b_nb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_MAMP_htdocs_vue_b_nb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var _todoSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoSlice */ \"./src/features/todo/todoSlice.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _marked = /*#__PURE__*/_Applications_MAMP_htdocs_vue_b_nb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(createTodoSaga),\n    _marked2 = /*#__PURE__*/_Applications_MAMP_htdocs_vue_b_nb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(mySaga);\n\n/**\n * Chỉ là middleware trung gian, không chứa state hay reducer gì cả\n * Bắt sự kiện action và sử lý dữ liệu với bên khác ngoài reducer, Xử lý thành công gọi reducer để xử lý tiếp\n */\n\n\n\n\nvar api = function api(segment) {\n  return axios__WEBPACK_IMPORTED_MODULE_3___default().get('https://pokeapi.co/api/v2/' + segment);\n};\n\nvar Server = {\n  api: function api(segment) {\n    return axios__WEBPACK_IMPORTED_MODULE_3___default().get('https://pokeapi.co/api/v2/' + segment);\n  }\n};\n/**\n * Xử lý của middleware\n * @param action\n */\n\nfunction createTodoSaga(action) {\n  var res, payload;\n  return _Applications_MAMP_htdocs_vue_b_nb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function createTodoSaga$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.apply)(Server, Server.api, ['pokemon']);\n\n        case 2:\n          res = _context.sent;\n          // const res: any = yield call(api, 'pokemon')\n          // const res: any = yield api('pokemon')\n          console.log(res.status);\n          console.log(res.data);\n          action.payload = res.data.count;\n          payload = action.payload;\n          _context.prev = 7;\n          _context.next = 10;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _todoSlice__WEBPACK_IMPORTED_MODULE_2__.createTodoSuccess.toString(),\n            payload: payload\n          });\n\n        case 10:\n          _context.next = 16;\n          break;\n\n        case 12:\n          _context.prev = 12;\n          _context.t0 = _context[\"catch\"](7);\n          _context.next = 16;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _todoSlice__WEBPACK_IMPORTED_MODULE_2__.createTodoFail.toString(),\n            e: _context.t0\n          });\n\n        case 16:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[7, 12]]);\n}\n\nfunction mySaga() {\n  return _Applications_MAMP_htdocs_vue_b_nb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function mySaga$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeEvery)(_todoSlice__WEBPACK_IMPORTED_MODULE_2__.createTodo.toString(), createTodoSaga);\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mySaga);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvdG9kby90b2RvU2FnYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2lKQTJCVUE7a0pBcUJBQzs7QUFoRFY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7O0FBRUEsSUFBTVEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsT0FBRCxFQUFxQjtBQUNoQyxTQUFPRixnREFBQSxDQUFVLCtCQUErQkUsT0FBekMsQ0FBUDtBQUNBLENBRkQ7O0FBSUEsSUFBTUUsTUFBTSxHQUFHO0FBQ2RILEVBQUFBLEdBQUcsRUFBRSxhQUFDQyxPQUFELEVBQXFCO0FBQ3pCLFdBQU9GLGdEQUFBLENBQVUsK0JBQStCRSxPQUF6QyxDQUFQO0FBQ0E7QUFIYSxDQUFmO0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBVVYsY0FBVixDQUF5QmEsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLa0IsaUJBQU1YLHlEQUFLLENBQUNVLE1BQUQsRUFBU0EsTUFBTSxDQUFDSCxHQUFoQixFQUFxQixDQUFDLFNBQUQsQ0FBckIsQ0FBWDs7QUFMbEI7QUFLT0ssVUFBQUEsR0FMUDtBQU1DO0FBQ0E7QUFDQUMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csTUFBaEI7QUFDQUYsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0ksSUFBaEI7QUFFQUwsVUFBQUEsTUFBTSxDQUFDTSxPQUFQLEdBQWlCTCxHQUFHLENBQUNJLElBQUosQ0FBU0UsS0FBMUI7QUFDT0QsVUFBQUEsT0FaUixHQVltQk4sTUFabkIsQ0FZUU0sT0FaUjtBQUFBO0FBQUE7QUFlRSxpQkFBTWhCLHVEQUFHLENBQUM7QUFBQ2tCLFlBQUFBLElBQUksRUFBRWYsa0VBQUEsRUFBUDtBQUFxQ2EsWUFBQUEsT0FBTyxFQUFQQTtBQUFyQyxXQUFELENBQVQ7O0FBZkY7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUJFLGlCQUFNaEIsdURBQUcsQ0FBQztBQUFDa0IsWUFBQUEsSUFBSSxFQUFFZCwrREFBQSxFQUFQO0FBQWtDZ0IsWUFBQUEsQ0FBQztBQUFuQyxXQUFELENBQVQ7O0FBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXFCQSxTQUFVdEIsTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQyxpQkFBTUcsNkRBQVMsQ0FBQ0MsMkRBQUEsRUFBRCxFQUF3QkwsY0FBeEIsQ0FBZjs7QUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNQSwrREFBZUMsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvdG9kby90b2RvU2FnYS50cz80NzgxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2jhu4kgbMOgIG1pZGRsZXdhcmUgdHJ1bmcgZ2lhbiwga2jDtG5nIGNo4bupYSBzdGF0ZSBoYXkgcmVkdWNlciBnw6wgY+G6o1xuICogQuG6r3Qgc+G7sSBraeG7h24gYWN0aW9uIHbDoCBz4butIGzDvSBk4buvIGxp4buHdSB24bubaSBiw6puIGtow6FjIG5nb8OgaSByZWR1Y2VyLCBY4butIGzDvSB0aMOgbmggY8O0bmcgZ+G7jWkgcmVkdWNlciDEkeG7gyB44butIGzDvSB0aeG6v3BcbiAqL1xuaW1wb3J0IHthcHBseSwgY2FsbCwgcHV0LCB0YWtlRXZlcnl9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcbmltcG9ydCB7QWN0aW9ufSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7Y3JlYXRlVG9kbywgY3JlYXRlVG9kb1N1Y2Nlc3MsIGNyZWF0ZVRvZG9GYWlsIH0gZnJvbSAnLi90b2RvU2xpY2UnXG5cbmludGVyZmFjZSBJQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcblx0cGF5bG9hZDogc3RyaW5nXG59XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGFwaSA9IChzZWdtZW50OiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIGF4aW9zLmdldCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi8nICsgc2VnbWVudClcbn1cblxuY29uc3QgU2VydmVyID0ge1xuXHRhcGk6IChzZWdtZW50OiBzdHJpbmcpID0+IHtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyLycgKyBzZWdtZW50KVxuXHR9XG59XG5cbi8qKlxuICogWOG7rSBsw70gY+G7p2EgbWlkZGxld2FyZVxuICogQHBhcmFtIGFjdGlvblxuICovXG5mdW5jdGlvbiogY3JlYXRlVG9kb1NhZ2EoYWN0aW9uOiBJQWN0aW9uKSB7XG5cdC8qKlxuXHQgKiBHaeG7kW5nIGFzeW5jIGF3YWl0XG5cdCAqL1xuXHQvLyBjb25zdCByZXM6IGFueSA9IHlpZWxkIGF4aW9zLmdldCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLycpXG5cdGNvbnN0IHJlczogYW55ID0geWllbGQgYXBwbHkoU2VydmVyLCBTZXJ2ZXIuYXBpLCBbJ3Bva2Vtb24nXSlcblx0Ly8gY29uc3QgcmVzOiBhbnkgPSB5aWVsZCBjYWxsKGFwaSwgJ3Bva2Vtb24nKVxuXHQvLyBjb25zdCByZXM6IGFueSA9IHlpZWxkIGFwaSgncG9rZW1vbicpXG5cdGNvbnNvbGUubG9nKHJlcy5zdGF0dXMpXG5cdGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuXG5cdGFjdGlvbi5wYXlsb2FkID0gcmVzLmRhdGEuY291bnRcblx0Y29uc3Qge3BheWxvYWR9ID0gYWN0aW9uXG5cdHRyeSB7XG5cdFx0Ly8ga8OtY2ggcGjDoXQgaMOgbSBj4bunYSBzbGljZVxuXHRcdHlpZWxkIHB1dCh7dHlwZTogY3JlYXRlVG9kb1N1Y2Nlc3MudG9TdHJpbmcoKSwgcGF5bG9hZH0pXG5cdH0gY2F0Y2ggKGUpIHtcblx0XHR5aWVsZCBwdXQoe3R5cGU6IGNyZWF0ZVRvZG9GYWlsLnRvU3RyaW5nKCksIGV9KVxuXHR9XG59XG5cbmZ1bmN0aW9uKiBteVNhZ2EoKSB7XG5cdC8qKlxuXHQgKiBDaOG7kXQgY2jhurduIGzhuqFpIHPhu7Ega2nhu4duIGPhu6dhIHNsaWNlXG5cdCAqL1xuXHR5aWVsZCB0YWtlRXZlcnkoY3JlYXRlVG9kby50b1N0cmluZygpLCBjcmVhdGVUb2RvU2FnYSlcbn1cbmV4cG9ydCBkZWZhdWx0IG15U2FnYSJdLCJuYW1lcyI6WyJjcmVhdGVUb2RvU2FnYSIsIm15U2FnYSIsImFwcGx5IiwicHV0IiwidGFrZUV2ZXJ5IiwiY3JlYXRlVG9kbyIsImNyZWF0ZVRvZG9TdWNjZXNzIiwiY3JlYXRlVG9kb0ZhaWwiLCJheGlvcyIsImFwaSIsInNlZ21lbnQiLCJnZXQiLCJTZXJ2ZXIiLCJhY3Rpb24iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZGF0YSIsInBheWxvYWQiLCJjb3VudCIsInR5cGUiLCJ0b1N0cmluZyIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/todo/todoSaga.ts\n");

/***/ })

});