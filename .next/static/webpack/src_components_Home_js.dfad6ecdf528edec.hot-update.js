"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Home_js",{

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isotope-layout */ \"./node_modules/isotope-layout/js/isotope.js\");\n/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context */ \"./src/Context.js\");\n/* harmony import */ var _layout_SectionContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/SectionContainer */ \"./src/layout/SectionContainer.js\");\n/* harmony import */ var _AnimationText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimationText */ \"./src/components/AnimationText.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const { navChange  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_3__.CavaniContext);\n    const isotope = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const imagesLoaded = __webpack_require__(/*! imagesloaded */ \"./node_modules/imagesloaded/imagesloaded.js\");\n        var imgLoad = imagesLoaded(\".portfolio_list\");\n        imgLoad.on(\"done\", function(instance) {\n            isotope.current = new (isotope_layout__WEBPACK_IMPORTED_MODULE_1___default())(\".gallery_zoom\", {\n                itemSelector: \".item__\",\n                percentPosition: true,\n                masonry: {\n                    columnWidth: \".item__\"\n                },\n                animationOptions: {\n                    duration: 750,\n                    easing: \"linear\",\n                    queue: false\n                }\n            });\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_SectionContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        navName: \"home\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cavani_tm_home relative w-full h-full flex items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content pl-[100px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"name text-[72px] font-bold uppercase mb-[30px]\",\n                        children: \"Shukur Khilkhal\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Naram\\\\Desktop\\\\Shukur Github\\\\khilkhal\\\\khilkhal.github.io\\\\src\\\\components\\\\Home.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"line inline-block w-[70px] h-[5px] bg-[#333] mb-[30px]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Naram\\\\Desktop\\\\Shukur Github\\\\khilkhal\\\\khilkhal.github.io\\\\src\\\\components\\\\Home.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimationText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Naram\\\\Desktop\\\\Shukur Github\\\\khilkhal\\\\khilkhal.github.io\\\\src\\\\components\\\\Home.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cavani_tm_button transition_link\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#services\",\n                            onClick: ()=>navChange(\"services\"),\n                            children: \"Schedule your first Oud lesson!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Naram\\\\Desktop\\\\Shukur Github\\\\khilkhal\\\\khilkhal.github.io\\\\src\\\\components\\\\Home.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Naram\\\\Desktop\\\\Shukur Github\\\\khilkhal\\\\khilkhal.github.io\\\\src\\\\components\\\\Home.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Naram\\\\Desktop\\\\Shukur Github\\\\khilkhal\\\\khilkhal.github.io\\\\src\\\\components\\\\Home.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Naram\\\\Desktop\\\\Shukur Github\\\\khilkhal\\\\khilkhal.github.io\\\\src\\\\components\\\\Home.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Naram\\\\Desktop\\\\Shukur Github\\\\khilkhal\\\\khilkhal.github.io\\\\src\\\\components\\\\Home.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"nU5P4Zjk4GhjoXH4tWCJa684ekM=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxQztBQUNpQjtBQUNYO0FBQ2U7QUFDWjtBQUU5QyxNQUFNTyxPQUFPLElBQU07O0lBQ2pCLE1BQU0sRUFBRUMsVUFBUyxFQUFFLEdBQUdQLGlEQUFVQSxDQUFDRyxtREFBYUE7SUFDOUMsTUFBTUssVUFBVU4sNkNBQU1BO0lBQ3RCRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVEsZUFBZUMsbUJBQU9BLENBQUMsaUVBQWM7UUFDM0MsSUFBSUMsVUFBVUYsYUFBYTtRQUMzQkUsUUFBUUMsRUFBRSxDQUFDLFFBQVEsU0FBVUMsUUFBUSxFQUFFO1lBQ3JDTCxRQUFRTSxPQUFPLEdBQUcsSUFBSWYsdURBQU9BLENBQUMsaUJBQWlCO2dCQUM3Q2dCLGNBQWM7Z0JBQ2RDLGlCQUFpQixJQUFJO2dCQUNyQkMsU0FBUztvQkFDUEMsYUFBYTtnQkFDZjtnQkFDQUMsa0JBQWtCO29CQUNoQkMsVUFBVTtvQkFDVkMsUUFBUTtvQkFDUkMsT0FBTyxLQUFLO2dCQUNkO1lBQ0Y7UUFDRjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNsQixnRUFBZ0JBO1FBQUNtQixTQUFRO2tCQUN4Qiw0RUFBQ0M7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBaUQ7Ozs7OztrQ0FHL0QsOERBQUNFO3dCQUFLRixXQUFVOzs7Ozs7a0NBQ2hCLDhEQUFDcEIsc0RBQWVBOzs7OztrQ0FDaEIsOERBQUNtQjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0c7NEJBQUVDLE1BQUs7NEJBQVlDLFNBQVMsSUFBTXZCLFVBQVU7c0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF0RTtHQXZDTUQ7S0FBQUE7QUF3Q04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZS5qcz9lZmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJc290b3BlIGZyb20gXCJpc290b3BlLWxheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXZhbmlDb250ZXh0IH0gZnJvbSBcIi4uL0NvbnRleHRcIjtcclxuaW1wb3J0IFNlY3Rpb25Db250YWluZXIgZnJvbSBcIi4uL2xheW91dC9TZWN0aW9uQ29udGFpbmVyXCI7XHJcbmltcG9ydCBUeXBpbmdBbmltYXRpb24gZnJvbSBcIi4vQW5pbWF0aW9uVGV4dFwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCB7IG5hdkNoYW5nZSB9ID0gdXNlQ29udGV4dChDYXZhbmlDb250ZXh0KTtcclxuICBjb25zdCBpc290b3BlID0gdXNlUmVmKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGltYWdlc0xvYWRlZCA9IHJlcXVpcmUoXCJpbWFnZXNsb2FkZWRcIik7XHJcbiAgICB2YXIgaW1nTG9hZCA9IGltYWdlc0xvYWRlZChcIi5wb3J0Zm9saW9fbGlzdFwiKTtcclxuICAgIGltZ0xvYWQub24oXCJkb25lXCIsIGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICBpc290b3BlLmN1cnJlbnQgPSBuZXcgSXNvdG9wZShcIi5nYWxsZXJ5X3pvb21cIiwge1xyXG4gICAgICAgIGl0ZW1TZWxlY3RvcjogXCIuaXRlbV9fXCIsXHJcbiAgICAgICAgcGVyY2VudFBvc2l0aW9uOiB0cnVlLFxyXG4gICAgICAgIG1hc29ucnk6IHtcclxuICAgICAgICAgIGNvbHVtbldpZHRoOiBcIi5pdGVtX19cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuaW1hdGlvbk9wdGlvbnM6IHtcclxuICAgICAgICAgIGR1cmF0aW9uOiA3NTAsXHJcbiAgICAgICAgICBlYXNpbmc6IFwibGluZWFyXCIsXHJcbiAgICAgICAgICBxdWV1ZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlY3Rpb25Db250YWluZXIgbmF2TmFtZT1cImhvbWVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXZhbmlfdG1faG9tZSByZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHBsLVsxMDBweF1cIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lIHRleHQtWzcycHhdIGZvbnQtYm9sZCB1cHBlcmNhc2UgbWItWzMwcHhdXCI+XHJcbiAgICAgICAgICAgIFNodWt1ciBLaGlsa2hhbCBcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5lIGlubGluZS1ibG9jayB3LVs3MHB4XSBoLVs1cHhdIGJnLVsjMzMzXSBtYi1bMzBweF1cIiAvPlxyXG4gICAgICAgICAgPFR5cGluZ0FuaW1hdGlvbiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXZhbmlfdG1fYnV0dG9uIHRyYW5zaXRpb25fbGlua1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI3NlcnZpY2VzXCIgb25DbGljaz17KCkgPT4gbmF2Q2hhbmdlKFwic2VydmljZXNcIil9PlxyXG4gICAgICAgICAgICAgIFNjaGVkdWxlIHlvdXIgZmlyc3QgT3VkIGxlc3NvbiFcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TZWN0aW9uQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJJc290b3BlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNhdmFuaUNvbnRleHQiLCJTZWN0aW9uQ29udGFpbmVyIiwiVHlwaW5nQW5pbWF0aW9uIiwiSG9tZSIsIm5hdkNoYW5nZSIsImlzb3RvcGUiLCJpbWFnZXNMb2FkZWQiLCJyZXF1aXJlIiwiaW1nTG9hZCIsIm9uIiwiaW5zdGFuY2UiLCJjdXJyZW50IiwiaXRlbVNlbGVjdG9yIiwicGVyY2VudFBvc2l0aW9uIiwibWFzb25yeSIsImNvbHVtbldpZHRoIiwiYW5pbWF0aW9uT3B0aW9ucyIsImR1cmF0aW9uIiwiZWFzaW5nIiwicXVldWUiLCJuYXZOYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJzcGFuIiwiYSIsImhyZWYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Home.js\n"));

/***/ })

});