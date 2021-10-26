"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todo",{

/***/ "./src/features/todo/Todo.tsx":
/*!************************************!*\
  !*** ./src/features/todo/Todo.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _todoSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoSlice */ \"./src/features/todo/todoSlice.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Applications/MAMP/htdocs/vue-b/nb/src/features/todo/Todo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar TodoContainer = function TodoContainer(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var items = props.items,\n      onCreate = props.onCreate,\n      loading = props.loading;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [\"Loading: \", loading + '', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n      type: \"text\",\n      value: text,\n      onChange: function onChange(e) {\n        return setText(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n      onClick: function onClick() {\n        onCreate(text);\n        setText('');\n      },\n      children: \"Add\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n      children: items.map(function (todo, key) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n          children: todo\n        }, key, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 7\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(TodoContainer, \"3t0DFnMi16eB/7p7iIKtjG5r68g=\");\n\n_c = TodoContainer;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var todo = state.todo;\n  var items = todo.items,\n      loading = todo.loading;\n  return {\n    items: items,\n    loading: loading\n  };\n};\n\nvar mapActions = {\n  onCreate: _todoSlice__WEBPACK_IMPORTED_MODULE_2__.createTodo\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapActions)(TodoContainer));\n\nvar _c;\n\n$RefreshReg$(_c, \"TodoContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvdG9kby9Ub2RvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFnQjtBQUFBOztBQUNyQyxrQkFBd0JILCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9JLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLE1BQU9DLEtBQVAsR0FBbUNILEtBQW5DLENBQU9HLEtBQVA7QUFBQSxNQUFjQyxRQUFkLEdBQW1DSixLQUFuQyxDQUFjSSxRQUFkO0FBQUEsTUFBd0JDLE9BQXhCLEdBQW1DTCxLQUFuQyxDQUF3QkssT0FBeEI7QUFFQSxzQkFDQztBQUFBLDRCQUNXQSxPQUFPLEdBQUcsRUFEckIsZUFFQztBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFdBQUssRUFBRUosSUFBMUI7QUFDTyxjQUFRLEVBQUUsa0JBQUNLLENBQUQ7QUFBQSxlQUFPSixPQUFPLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQTtBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsZUFJQztBQUFRLGFBQU8sRUFBRSxtQkFBTTtBQUN0QkosUUFBQUEsUUFBUSxDQUFDSCxJQUFELENBQVI7QUFDQUMsUUFBQUEsT0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNBLE9BSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRCxlQVFDO0FBQUEsZ0JBRUVDLEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBZUMsR0FBZjtBQUFBLDRCQUNUO0FBQUEsb0JBQWVEO0FBQWYsV0FBU0MsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsT0FBVjtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWtCQSxDQXRCRDs7R0FBTVo7O0tBQUFBOztBQXdCTixJQUFNYSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBZ0I7QUFDdkMsTUFBT0gsSUFBUCxHQUFlRyxLQUFmLENBQU9ILElBQVA7QUFDQSxNQUFPUCxLQUFQLEdBQXlCTyxJQUF6QixDQUFPUCxLQUFQO0FBQUEsTUFBY0UsT0FBZCxHQUF5QkssSUFBekIsQ0FBY0wsT0FBZDtBQUNBLFNBQU87QUFBQ0YsSUFBQUEsS0FBSyxFQUFMQSxLQUFEO0FBQVFFLElBQUFBLE9BQU8sRUFBUEE7QUFBUixHQUFQO0FBQ0EsQ0FKRDs7QUFNQSxJQUFNUyxVQUFVLEdBQUc7QUFDbEJWLEVBQUFBLFFBQVEsRUFBRU4sa0RBQVVBO0FBREYsQ0FBbkI7QUFJQSwrREFBZUYsb0RBQU8sQ0FBQ2dCLGVBQUQsRUFBa0JFLFVBQWxCLENBQVAsQ0FBcUNmLGFBQXJDLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL3RvZG8vVG9kby50c3g/NWFmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVRvZG99IGZyb20gJy4vdG9kb1NsaWNlJ1xuXG5jb25zdCBUb2RvQ29udGFpbmVyID0gKHByb3BzOiBhbnkpID0+IHtcblx0Y29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIilcblx0Y29uc3Qge2l0ZW1zLCBvbkNyZWF0ZSwgbG9hZGluZ30gPSBwcm9wc1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdExvYWRpbmc6IHtsb2FkaW5nICsgJyd9XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGV4dH1cblx0XHRcdCAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfS8+XG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0b25DcmVhdGUodGV4dClcblx0XHRcdFx0c2V0VGV4dCgnJylcblx0XHRcdH19PkFkZDwvYnV0dG9uPlxuXHRcdFx0PHVsPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aXRlbXMubWFwKCh0b2RvOiBzdHJpbmcsIGtleTogbnVtYmVyKSA9PiAoXG5cdFx0XHRcdFx0XHQ8bGkga2V5PXtrZXl9Pnt0b2RvfTwvbGk+XG5cdFx0XHRcdFx0KSlcblx0XHRcdFx0fVxuXHRcdFx0PC91bD5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IGFueSkgPT4ge1xuXHRjb25zdCB7dG9kb30gPSBzdGF0ZVxuXHRjb25zdCB7aXRlbXMsIGxvYWRpbmd9ID0gdG9kb1xuXHRyZXR1cm4ge2l0ZW1zLCBsb2FkaW5nfVxufTtcblxuY29uc3QgbWFwQWN0aW9ucyA9IHtcblx0b25DcmVhdGU6IGNyZWF0ZVRvZG8sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBBY3Rpb25zKShUb2RvQ29udGFpbmVyKSJdLCJuYW1lcyI6WyJjb25uZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVUb2RvIiwiVG9kb0NvbnRhaW5lciIsInByb3BzIiwidGV4dCIsInNldFRleHQiLCJpdGVtcyIsIm9uQ3JlYXRlIiwibG9hZGluZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInRvZG8iLCJrZXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcEFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/todo/Todo.tsx\n");

/***/ })

});