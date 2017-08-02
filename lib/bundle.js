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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _levels = __webpack_require__(1);

var _levels2 = _interopRequireDefault(_levels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var level = new _levels2.default();
var currentLevel = 1;
var userInput = document.getElementById('css-input');
var enterButton = document.getElementById('enter-button');
var editors = document.getElementById('editors-container');

level.goToLevel(currentLevel);
userInput.focus();

var currentSelector = level.currentSelector;
document.querySelectorAll(currentSelector).forEach(function (el) {
  return el.classList.add('strobe');
});

setInterval(function () {
  userInput.classList.toggle('input-flash');
}, 300);

enterButton.addEventListener("click", function () {
  enterButton.classList.remove('pressEnter');
  enterButton.classList.add('pressEnter');
  editors.classList.remove('shake');
  checkSelector(userInput.value);
  userInput.value = "";
  userInput.focus();
});

userInput.addEventListener("keypress", function (event) {
  enterButton.classList.remove('pressEnter');
  editors.classList.remove('shake');
  if (event.keyCode === 13) {
    enterButton.classList.add('pressEnter');
    checkSelector(userInput.value);
    userInput.value = "";
  }
});

var images = document.querySelector('.gym-bench');
Array.from(images.children).forEach(function (child) {
  child.addEventListener("mouseover", function () {
    return console.log("hi");
  });
});

var checkSelector = function checkSelector(input) {
  if (input === currentSelector) {
    console.log(document.querySelectorAll('dumbbell'));
  } else {
    document.getElementById('editors-container').classList.add('shake');
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var level = document.getElementById('level');
var levelDescription = document.getElementById('level-description');
var levelHTML = document.getElementById('html-viewer');
var levelImages = document.getElementById('selector-images');

var Level = function () {
  function Level(levelNo) {
    _classCallCheck(this, Level);

    this.currentSelector = "";
    this.level = levelNo;
  }

  _createClass(Level, [{
    key: 'goToLevel',
    value: function goToLevel(levelNo) {
      if (levelNo === 1) {
        level.innerHTML = "Level 1 of ?";
        levelDescription.innerHTML = "BASIC SELECTORS<br />Type Selectors<br />Summary<br />This basic selector chooses all elements that match the given <i>name</i>.<br />Syntax<br /><code>element { style properties }</code><br />CSS<br /><code>span {<br /><code-indent>  background-color: DodgerBlue;<br />  color: #ffffff;</code-indent><br />}</code>";
        this.currentSelector = "dumbbell";
      }
      if (levelNo === 2) {
        this.currentSelector = ".kettlebell";
      }
      if (levelNo === 3) {
        this.currentSelector = "#orange";
      }
      if (levelNo === 4) {}
      if (levelNo === 5) {}
    }
  }]);

  return Level;
}();

exports.default = Level;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map