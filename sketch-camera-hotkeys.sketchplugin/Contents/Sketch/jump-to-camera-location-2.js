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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/camera/jump-to-camera-location-2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Helpers.js":
/*!************************!*\
  !*** ./src/Helpers.js ***!
  \************************/
/*! exports provided: getCurrentView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentView", function() { return getCurrentView; });
var getCurrentView = function getCurrentView(doc) {
  if (doc.currentView) {
    return doc.currentView();
  } else if (doc.contentDrawView) {
    return doc.contentDrawView();
  }

  log('ERROR: Can not get currentView');
  return null;
};

/***/ }),

/***/ "./src/JumpToCamera.js":
/*!*****************************!*\
  !*** ./src/JumpToCamera.js ***!
  \*****************************/
/*! exports provided: JumpToCamera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumpToCamera", function() { return JumpToCamera; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helpers */ "./src/Helpers.js");


var JumpToCamera = function JumpToCamera(context, index) {
  var currentView = _Helpers__WEBPACK_IMPORTED_MODULE_1__["getCurrentView"](context.document); // Retrieve saved data

  var camera = currentView.visibleContentRect(),
      cameraSave = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Settings.documentSettingForKey(context.document, "camera-location-".concat(index)),
      cameraZoom = context.document.zoomValue();

  if (cameraSave == null) {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Camera Location ".concat(index, " has not been created"));
  } else {
    // Set page before camera position
    var pages = context.document.pages();

    for (var i = 0; i < pages.length; i++) {
      if (cameraSave.pageID == pages[i].objectID()) {
        // log(`Page Index ${i} with ID ${pages[i].objectID()}`);
        context.document.setCurrentPage(pages[i]);
        break;
      }
    } // Calculate to make sure responsiveness and zoom settings


    var newWidth = camera.size.width / cameraSave.zoom * cameraZoom,
        newHeight = camera.size.height / cameraSave.zoom * cameraZoom; // Set object with camera position

    var cameraDest = new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(cameraSave.x - newWidth / 2, cameraSave.y - newHeight / 2, newWidth, newHeight).asCGRect();
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Jumped to Camera Location ".concat(index)); // sketch.UI.message(`${cameraSave.x - camera.size.width / 2} : ${cameraSave.y - camera.size.height / 2}`);

    currentView.zoomToFitRect(cameraDest);
  }
};

/***/ }),

/***/ "./src/camera/jump-to-camera-location-2.js":
/*!*************************************************!*\
  !*** ./src/camera/jump-to-camera-location-2.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JumpToCamera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../JumpToCamera */ "./src/JumpToCamera.js");

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  Object(_JumpToCamera__WEBPACK_IMPORTED_MODULE_0__["JumpToCamera"])(context, 2);
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

//# sourceMappingURL=jump-to-camera-location-2.js.map