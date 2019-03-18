var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/camera/create-camera-location-7.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CreateCamera.js":
/*!*****************************!*\
  !*** ./src/CreateCamera.js ***!
  \*****************************/
/*! exports provided: CreateCamera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCamera", function() { return CreateCamera; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helpers */ "./src/Helpers.js");


var CreateCamera = function CreateCamera(context, index) {
  var camera = _Helpers__WEBPACK_IMPORTED_MODULE_1__["getCurrentView"](context.document).visibleContentRect();
  var midpointX = camera.size.width / 2 + camera.origin.x,
      midpointY = camera.size.height / 2 + camera.origin.y,
      zoomValue = context.document.zoomValue();
  var location = {
    x: midpointX,
    y: midpointY,
    zoom: zoomValue,
    width: camera.size.width / 2,
    pageID: context.document.documentData().currentPage().objectID()
  };
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Settings.setDocumentSettingForKey(context.document, "camera-location-".concat(index), location);
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Created Camera Location ".concat(index));
};

/***/ }),

/***/ "./src/Helpers.js":
/*!************************!*\
  !*** ./src/Helpers.js ***!
  \************************/
/*! exports provided: getCurrentView, getSelectionCoordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentView", function() { return getCurrentView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectionCoordinates", function() { return getSelectionCoordinates; });
var getCurrentView = function getCurrentView(doc) {
  if (doc.currentView) {
    return doc.currentView();
  } else if (doc.contentDrawView) {
    return doc.contentDrawView();
  }

  log('ERROR: Can not get currentView');
  return null;
};
var getSelectionCoordinates = function getSelectionCoordinates(selection) {
  var coordinates = {
    x1: undefined,
    y2: undefined,
    x2: undefined,
    ["y2"]: undefined
  };

  for (var i = 0; i < selection.length; i++) {
    var absoluteRect = selection[i].absoluteRect();

    if (i == 0) {
      coordinates.x1 = absoluteRect.x();
      coordinates.y1 = absoluteRect.y();
      coordinates.x2 = absoluteRect.x() + absoluteRect.width();
      coordinates.y2 = absoluteRect.y() + absoluteRect.height();
    }

    if (coordinates.x1 > absoluteRect.x()) {
      coordinates.x1 = absoluteRect.x();
    }

    if (coordinates.y1 > absoluteRect.y()) {
      coordinates.y1 = absoluteRect.y();
    }

    if (coordinates.x2 < absoluteRect.x() + absoluteRect.width()) {
      coordinates.x2 = absoluteRect.x() + absoluteRect.width();
    }

    if (coordinates.y2 < absoluteRect.y() + absoluteRect.height()) {
      coordinates.y2 = absoluteRect.y() + absoluteRect.height();
    }
  }

  return coordinates;
};

/***/ }),

/***/ "./src/camera/create-camera-location-7.js":
/*!************************************************!*\
  !*** ./src/camera/create-camera-location-7.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateCamera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CreateCamera */ "./src/CreateCamera.js");

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  Object(_CreateCamera__WEBPACK_IMPORTED_MODULE_0__["CreateCamera"])(context, 7);
});

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=create-camera-location-7.js.map