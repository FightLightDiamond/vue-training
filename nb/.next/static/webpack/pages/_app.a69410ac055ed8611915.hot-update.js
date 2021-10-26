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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_MAMP_htdocs_vue_b_nb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Applications_MAMP_htdocs_vue_b_nb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_MAMP_htdocs_vue_b_nb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var _todoSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoSlice */ \"./src/features/todo/todoSlice.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _marked = /*#__PURE__*/_Applications_MAMP_htdocs_vue_b_nb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(createTodoSaga),\n    _marked2 = /*#__PURE__*/_Applications_MAMP_htdocs_vue_b_nb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(mySaga);\n\n/**\n * Chỉ là middleware trung gian, không chứa state hay reducer gì cả\n * Bắt sự kiện action và sử lý dữ liệu với bên khác ngoài reducer, Xử lý thành công gọi reducer để xử lý tiếp\n */\n\n\n\n/**\n * Xử lý của middleware\n * @param action\n */\n\nfunction createTodoSaga(action) {\n  var res, payload;\n  return _Applications_MAMP_htdocs_vue_b_nb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function createTodoSaga$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return axios__WEBPACK_IMPORTED_MODULE_3___default().get('https://pokeapi.co/api/v2/pokemon/');\n\n        case 2:\n          res = _context.sent;\n          console.log(res.status);\n          console.log(res.data);\n          payload = action.payload;\n          _context.prev = 6;\n          _context.next = 9;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _todoSlice__WEBPACK_IMPORTED_MODULE_2__.createTodoSuccess.toString(),\n            payload: payload\n          });\n\n        case 9:\n          _context.next = 15;\n          break;\n\n        case 11:\n          _context.prev = 11;\n          _context.t0 = _context[\"catch\"](6);\n          _context.next = 15;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({\n            type: _todoSlice__WEBPACK_IMPORTED_MODULE_2__.createTodoFail.toString(),\n            e: _context.t0\n          });\n\n        case 15:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[6, 11]]);\n}\n\nfunction mySaga() {\n  return _Applications_MAMP_htdocs_vue_b_nb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function mySaga$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeEvery)(_todoSlice__WEBPACK_IMPORTED_MODULE_2__.createTodo.toString(), createTodoSaga);\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mySaga);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvdG9kby90b2RvU2FnYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2lKQWdCVUE7a0pBY0FDOztBQTlCVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVVELGNBQVYsQ0FBeUJRLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2tCLGlCQUFNRCxnREFBQSxDQUFVLG9DQUFWLENBQU47O0FBRGxCO0FBQ09HLFVBQUFBLEdBRFA7QUFFQ0MsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csTUFBaEI7QUFDQUYsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0ksSUFBaEI7QUFFT0MsVUFBQUEsT0FMUixHQUttQlAsTUFMbkIsQ0FLUU8sT0FMUjtBQUFBO0FBQUE7QUFRRSxpQkFBTWIsdURBQUcsQ0FBQztBQUFDYyxZQUFBQSxJQUFJLEVBQUVYLGtFQUFBLEVBQVA7QUFBcUNVLFlBQUFBLE9BQU8sRUFBUEE7QUFBckMsV0FBRCxDQUFUOztBQVJGO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVFLGlCQUFNYix1REFBRyxDQUFDO0FBQUNjLFlBQUFBLElBQUksRUFBRVYsK0RBQUEsRUFBUDtBQUFrQ1ksWUFBQUEsQ0FBQztBQUFuQyxXQUFELENBQVQ7O0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBY0EsU0FBVWpCLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUMsaUJBQU1FLDZEQUFTLENBQUNDLDJEQUFBLEVBQUQsRUFBd0JKLGNBQXhCLENBQWY7O0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTUEsK0RBQWVDLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL3RvZG8vdG9kb1NhZ2EudHM/NDc4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENo4buJIGzDoCBtaWRkbGV3YXJlIHRydW5nIGdpYW4sIGtow7RuZyBjaOG7qWEgc3RhdGUgaGF5IHJlZHVjZXIgZ8OsIGPhuqNcbiAqIELhuq90IHPhu7Ega2nhu4duIGFjdGlvbiB2w6Agc+G7rSBsw70gZOG7ryBsaeG7h3UgduG7m2kgYsOqbiBraMOhYyBuZ2/DoGkgcmVkdWNlciwgWOG7rSBsw70gdGjDoG5oIGPDtG5nIGfhu41pIHJlZHVjZXIgxJHhu4MgeOG7rSBsw70gdGnhur9wXG4gKi9cbmltcG9ydCB7cHV0LCB0YWtlRXZlcnl9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcbmltcG9ydCB7QWN0aW9ufSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7Y3JlYXRlVG9kbywgY3JlYXRlVG9kb1N1Y2Nlc3MsIGNyZWF0ZVRvZG9GYWlsIH0gZnJvbSAnLi90b2RvU2xpY2UnXG5cbmludGVyZmFjZSBJQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcblx0cGF5bG9hZDogc3RyaW5nXG59XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vKipcbiAqIFjhu60gbMO9IGPhu6dhIG1pZGRsZXdhcmVcbiAqIEBwYXJhbSBhY3Rpb25cbiAqL1xuZnVuY3Rpb24qIGNyZWF0ZVRvZG9TYWdhKGFjdGlvbjogSUFjdGlvbikge1xuXHRjb25zdCByZXM6IGFueSA9IHlpZWxkIGF4aW9zLmdldCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLycpXG5cdGNvbnNvbGUubG9nKHJlcy5zdGF0dXMpXG5cdGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuXG5cdGNvbnN0IHtwYXlsb2FkfSA9IGFjdGlvblxuXHR0cnkge1xuXHRcdC8vIGvDrWNoIHBow6F0IGjDoG0gY+G7p2Egc2xpY2Vcblx0XHR5aWVsZCBwdXQoe3R5cGU6IGNyZWF0ZVRvZG9TdWNjZXNzLnRvU3RyaW5nKCksIHBheWxvYWR9KVxuXHR9IGNhdGNoIChlKSB7XG5cdFx0eWllbGQgcHV0KHt0eXBlOiBjcmVhdGVUb2RvRmFpbC50b1N0cmluZygpLCBlfSlcblx0fVxufVxuXG5mdW5jdGlvbiogbXlTYWdhKCkge1xuXHQvKipcblx0ICogQ2jhu5F0IGNo4bq3biBs4bqhaSBz4buxIGtp4buHbiBj4bunYSBzbGljZVxuXHQgKi9cblx0eWllbGQgdGFrZUV2ZXJ5KGNyZWF0ZVRvZG8udG9TdHJpbmcoKSwgY3JlYXRlVG9kb1NhZ2EpXG59XG5leHBvcnQgZGVmYXVsdCBteVNhZ2EiXSwibmFtZXMiOlsiY3JlYXRlVG9kb1NhZ2EiLCJteVNhZ2EiLCJwdXQiLCJ0YWtlRXZlcnkiLCJjcmVhdGVUb2RvIiwiY3JlYXRlVG9kb1N1Y2Nlc3MiLCJjcmVhdGVUb2RvRmFpbCIsImF4aW9zIiwiYWN0aW9uIiwiZ2V0IiwicmVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImRhdGEiLCJwYXlsb2FkIiwidHlwZSIsInRvU3RyaW5nIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/todo/todoSaga.ts\n");

/***/ })

});