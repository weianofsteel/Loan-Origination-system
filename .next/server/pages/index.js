module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/Header.js":
/*!*****************************!*\
  !*** ./component/Header.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_Public_Header_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/Public/Header.module.css */ \"./css/Public/Header.module.css\");\n/* harmony import */ var _css_Public_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Public_Header_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/Users/wangweian/Desktop/weianwang/component/Header.js\";\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])({\n  button: {\n    fontFamily: 'Rosario'\n  },\n  button2: {\n    fontFamily: 'Rosario',\n    color: 'blue'\n  }\n});\n\nconst Header = () => {\n  const classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      type: \"button\",\n      className: classes.button,\n      onClick: () => _i18n__WEBPACK_IMPORTED_MODULE_2__[\"i18n\"].changeLanguage(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"i18n\"].language === 'en' ? 'zhHant' : 'en'),\n      children: \"language\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 14\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      type: \"button\",\n      className: classes.button2,\n      onClick: () => _i18n__WEBPACK_IMPORTED_MODULE_2__[\"i18n\"].changeLanguage(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"i18n\"].language === 'en' ? 'zhHant' : 'en'),\n      children: \"language\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      type: \"button\",\n      onClick: () => _i18n__WEBPACK_IMPORTED_MODULE_2__[\"i18n\"].changeLanguage(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"i18n\"].language === 'en' ? 'zhHant' : 'en'),\n      children: \"language\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _css_Public_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,\n      children: \"Learn More\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_6__[\"TransitionGroup\"], {\n      transitionName: \"styles.bounce\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Learn More\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 15\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"withTranslation\"])('common')(Header));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvSGVhZGVyLmpzP2IxZWIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImJ1dHRvbiIsImZvbnRGYW1pbHkiLCJidXR0b24yIiwiY29sb3IiLCJIZWFkZXIiLCJjbGFzc2VzIiwiaTE4biIsImNoYW5nZUxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzdHlsZXMiLCJiYWxsIiwid2l0aFRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLFFBQU0sRUFBRTtBQUNKQyxjQUFVLEVBQUM7QUFEUCxHQURtQjtBQUkzQkMsU0FBTyxFQUFFO0FBQ1BELGNBQVUsRUFBQyxTQURKO0FBRVBFLFNBQUssRUFBQztBQUZDO0FBSmtCLENBQUQsQ0FBNUI7O0FBVUEsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFFakIsUUFBTUMsT0FBTyxHQUFHUCxTQUFTLEVBQXpCO0FBRUEsc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBRUsscUVBQUMsK0RBQUQ7QUFDQyxVQUFJLEVBQUMsUUFETjtBQUVDLGVBQVMsRUFBRU8sT0FBTyxDQUFDTCxNQUZwQjtBQUdDLGFBQU8sRUFBRSxNQUFNTSwwQ0FBSSxDQUFDQyxjQUFMLENBQW9CRCwwQ0FBSSxDQUFDRSxRQUFMLEtBQWtCLElBQWxCLEdBQXlCLFFBQXpCLEdBQW9DLElBQXhELENBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZMLGVBU0kscUVBQUMsK0RBQUQ7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLGVBQVMsRUFBRUgsT0FBTyxDQUFDSCxPQUZyQjtBQUdFLGFBQU8sRUFBRSxNQUFNSSwwQ0FBSSxDQUFDQyxjQUFMLENBQW9CRCwwQ0FBSSxDQUFDRSxRQUFMLEtBQWtCLElBQWxCLEdBQXlCLFFBQXpCLEdBQW9DLElBQXhELENBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKLGVBZ0JJLHFFQUFDLCtEQUFEO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFPLEVBQUUsTUFBTUYsMENBQUksQ0FBQ0MsY0FBTCxDQUFvQkQsMENBQUksQ0FBQ0UsUUFBTCxLQUFrQixJQUFsQixHQUF5QixRQUF6QixHQUFvQyxJQUF4RCxDQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkosZUF1Qkk7QUFBRyxlQUFTLEVBQUVDLG9FQUFNLENBQUNDLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZCSixlQXlCSSxxRUFBQyxzRUFBRDtBQUNFLG9CQUFjLEVBQUMsZUFEakI7QUFBQSw2QkFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBa0NILENBdENEOztBQXlDZUMsNEhBQWUsQ0FBQyxRQUFELENBQWYsQ0FBMEJQLE1BQTFCLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnQvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaTE4bidcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXG5pbXBvcnQgeyBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jc3MvUHVibGljL0hlYWRlci5tb2R1bGUuY3NzJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgYnV0dG9uOiB7XG4gICAgICBmb250RmFtaWx5OidSb3NhcmlvJ1xuICB9LFxuICBidXR0b24yOiB7XG4gICAgZm9udEZhbWlseTonUm9zYXJpbycsXG4gICAgY29sb3I6J2JsdWUnXG59XG59KVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaTE4bi5jaGFuZ2VMYW5ndWFnZShpMThuLmxhbmd1YWdlID09PSAnZW4nID8gJ3poSGFudCcgOiAnZW4nKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b24yfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpMThuLmNoYW5nZUxhbmd1YWdlKGkxOG4ubGFuZ3VhZ2UgPT09ICdlbicgPyAnemhIYW50JyA6ICdlbicpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBsYW5ndWFnZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaTE4bi5jaGFuZ2VMYW5ndWFnZShpMThuLmxhbmd1YWdlID09PSAnZW4nID8gJ3poSGFudCcgOiAnZW4nKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5MZWFybiBNb3JlPC9wPlxuXG4gICAgICAgICAgICA8VHJhbnNpdGlvbkdyb3VwXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwic3R5bGVzLmJvdW5jZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwPkxlYXJuIE1vcmU8L3A+XG4gICAgICAgICAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgICAgICAgICAgICBcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdjb21tb24nKShIZWFkZXIpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/Header.js\n");

/***/ }),

/***/ "./component/Test.js":
/*!***************************!*\
  !*** ./component/Test.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/wangweian/Desktop/weianwang/component/Test.js\";\n\n\n\nconst Test = ({\n  t\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('title2')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 14\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: () => {\n        console.log(888, t('content'), _i18n__WEBPACK_IMPORTED_MODULE_2__[\"i18n\"].language);\n      },\n      children: \"try\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 14\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"withTranslation\"])('common')(Test));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvVGVzdC5qcz85OGEwIl0sIm5hbWVzIjpbIlRlc3QiLCJ0IiwiY29uc29sZSIsImxvZyIsImkxOG4iLCJsYW5ndWFnZSIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBVztBQUVwQixzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFFSztBQUFBLGdCQUFJQSxDQUFDLENBQUMsUUFBRDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkwsZUFHSztBQUFRLGFBQU8sRUFBRSxNQUFJO0FBQUNDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVosRUFBaUJGLENBQUMsQ0FBQyxTQUFELENBQWxCLEVBQStCRywwQ0FBSSxDQUFDQyxRQUFwQztBQUE4QyxPQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVFILENBVkQ7O0FBYWVDLDRIQUFlLENBQUMsUUFBRCxDQUFmLENBQTBCTixJQUExQixDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50L1Rlc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2kxOG4nXG5cblxuY29uc3QgVGVzdCA9ICh7IHQgfSkgPT4ge1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgPHA+e3QoJ3RpdGxlMicpfTwvcD5cbiAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57Y29uc29sZS5sb2coODg4LCB0KCdjb250ZW50JyksIGkxOG4ubGFuZ3VhZ2UpfX0+dHJ5PC9idXR0b24+XG4gICAgICAgICAgICAgXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignY29tbW9uJykoVGVzdCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/Test.js\n");

/***/ }),

/***/ "./css/Public/Header.module.css":
/*!**************************************!*\
  !*** ./css/Public/Header.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"button2\": \"Header_button2__wF7XG\",\n\t\"bounce\": \"Header_bounce__24tU9\",\n\t\"ball\": \"Header_ball__3pRi7\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jc3MvUHVibGljL0hlYWRlci5tb2R1bGUuY3NzPzRmNWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY3NzL1B1YmxpYy9IZWFkZXIubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvbjJcIjogXCJIZWFkZXJfYnV0dG9uMl9fd0Y3WEdcIixcblx0XCJib3VuY2VcIjogXCJIZWFkZXJfYm91bmNlX18yNHRVOVwiLFxuXHRcImJhbGxcIjogXCJIZWFkZXJfYmFsbF9fM3BSaTdcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./css/Public/Header.module.css\n");

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const NextI18Next = __webpack_require__(/*! next-i18next */ \"next-i18next\").default;\n\nconst {\n  localeSubpaths\n} = __webpack_require__(/*! next/config */ \"next/config\").default().publicRuntimeConfig;\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nmodule.exports = new NextI18Next({\n  otherLanguages: ['zhHant'],\n  localeSubpaths,\n  localePath: path.resolve('./public/static/locales')\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pMThuLmpzPzkzYjQiXSwibmFtZXMiOlsiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImxvY2FsZVN1YnBhdGhzIiwicHVibGljUnVudGltZUNvbmZpZyIsInBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwib3RoZXJMYW5ndWFnZXMiLCJsb2NhbGVQYXRoIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQVAsQ0FBd0JDLE9BQTVDOztBQUNBLE1BQU07QUFBRUM7QUFBRixJQUFxQkYsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFQLENBQXVCQyxPQUF2QixHQUFpQ0UsbUJBQTVEOztBQUNBLE1BQU1DLElBQUksR0FBR0osbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFFQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCLElBQUlQLFdBQUosQ0FBZ0I7QUFDL0JRLGdCQUFjLEVBQUUsQ0FBQyxRQUFELENBRGU7QUFFL0JMLGdCQUYrQjtBQUcvQk0sWUFBVSxFQUFFSixJQUFJLENBQUNLLE9BQUwsQ0FBYSx5QkFBYjtBQUhtQixDQUFoQixDQUFqQiIsImZpbGUiOiIuL2kxOG4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IE5leHRJMThOZXh0ID0gcmVxdWlyZSgnbmV4dC1pMThuZXh0JykuZGVmYXVsdFxuY29uc3QgeyBsb2NhbGVTdWJwYXRocyB9ID0gcmVxdWlyZSgnbmV4dC9jb25maWcnKS5kZWZhdWx0KCkucHVibGljUnVudGltZUNvbmZpZ1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dCh7XG4gIG90aGVyTGFuZ3VhZ2VzOiBbJ3poSGFudCddLFxuICBsb2NhbGVTdWJwYXRocyxcbiAgbG9jYWxlUGF0aDogcGF0aC5yZXNvbHZlKCcuL3B1YmxpYy9zdGF0aWMvbG9jYWxlcycpXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_Test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Test */ \"./component/Test.js\");\n/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Header */ \"./component/Header.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_image_design_header_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/image/design-header.png */ \"./public/image/design-header.png\");\n/* harmony import */ var _public_image_design_header_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_image_design_header_png__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/wangweian/Desktop/weianwang/pages/index.js\";\n\n\n\n\n\n\n\nconst Homepage = ({\n  t\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_component_Test__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Welcome to Next.js! Weian!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_component_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('title')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, undefined);\n};\n\nHomepage.getInitialProps = async () => ({\n  namespacesRequired: ['article']\n});\n\nHomepage.propTypes = {\n  t: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_4__[\"withTranslation\"])('article')(Homepage));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVwYWdlIiwidCIsImdldEluaXRpYWxQcm9wcyIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQVU7QUFDdkIsc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0kscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0kscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQVVJO0FBQUEsZ0JBQUlBLENBQUMsQ0FBQyxPQUFEO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWdCSCxDQWpCRDs7QUFtQkFELFFBQVEsQ0FBQ0UsZUFBVCxHQUEyQixhQUFhO0FBQ3BDQyxvQkFBa0IsRUFBRSxDQUFDLFNBQUQ7QUFEZ0IsQ0FBYixDQUEzQjs7QUFJRUgsUUFBUSxDQUFDSSxTQUFULEdBQXFCO0FBQ25CSCxHQUFDLEVBQUVJLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFEQyxDQUFyQjtBQUllQyw0SEFBZSxDQUFDLFNBQUQsQ0FBZixDQUEyQlIsUUFBM0IsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRlc3QgZnJvbSAnLi4vY29tcG9uZW50L1Rlc3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudC9IZWFkZXInXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi9pMThuJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHBob3RvIGZyb20gJy4uL3B1YmxpYy9pbWFnZS9kZXNpZ24taGVhZGVyLnBuZydcblxuY29uc3QgSG9tZXBhZ2UgPSAoeyB0IH0pID0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxUZXN0Lz5cbiAgICAgICAgICAgIDxkaXY+V2VsY29tZSB0byBOZXh0LmpzISBXZWlhbiE8L2Rpdj5cbiAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICAgey8qIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpMThuLmNoYW5nZUxhbmd1YWdlKGkxOG4ubGFuZ3VhZ2UgPT09ICdlbicgPyAnemhIYW50JyA6ICdlbicpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dCgnY2hhbmdlLWxvY2FsZScpfVxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxuICAgICAgICAgICAgPHA+e3QoJ3RpdGxlJyl9PC9wPlxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtwaG90b30vPiAqL31cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gICAgXG59XG5cbkhvbWVwYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gICAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2FydGljbGUnXSxcbiAgfSlcbiAgXG4gIEhvbWVwYWdlLnByb3BUeXBlcyA9IHtcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2FydGljbGUnKShIb21lcGFnZSkgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./public/image/design-header.png":
/*!****************************************!*\
  !*** ./public/image/design-header.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/design-header-f747fff88730ba48fe078daa6429050b.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvZGVzaWduLWhlYWRlci5wbmc/ZDgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3B1YmxpYy9pbWFnZS9kZXNpZ24taGVhZGVyLnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9kZXNpZ24taGVhZGVyLWY3NDdmZmY4ODczMGJhNDhmZTA3OGRhYTY0MjkwNTBiLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/image/design-header.png\n");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIj81NzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Button\n");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Grid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI/ZjZmYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Grid\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-i18next\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIj9mMGZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtaTE4bmV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-i18next\n");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiP2Y4NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/config\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-transition-group\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI/ZGRlMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC10cmFuc2l0aW9uLWdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-transition-group\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });