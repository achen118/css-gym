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
var userInput = document.querySelector('.css-input');
var enterButton = document.querySelector('.enter-button');
var editors = document.querySelector('.editors-container');
var nextButton = document.querySelector('.fa-arrow-circle-right');
var prevButton = document.querySelector('.fa-arrow-circle-left');
var hamburger = document.querySelector('.fa-bars');
var levelDropdown = document.querySelector('.level-dropdown');

level.goToLevel(1);
userInput.focus();

var currentSelector = level.currentSelector;
var currentLevel = level.level;

setInterval(function () {
  userInput.classList.toggle('input-flash');
}, 300);

enterButton.addEventListener("click", function () {
  enterButton.classList.remove('pressEnter');
  enterButton.classList.add('pressEnter');
  editors.classList.remove('shake');
  if (isLevelNumber(userInput.value)) {
    level.goToLevel(parseInt(userInput.value));
    currentLevel = level.level;
    currentSelector = level.currentSelector;
  } else {
    checkSelector(userInput.value);
  }
  userInput.value = "";
  userInput.focus();
});

userInput.addEventListener("keypress", function (event) {
  enterButton.classList.remove('pressEnter');
  editors.classList.remove('shake');
  if (event.keyCode === 13) {
    enterButton.classList.add('pressEnter');
    if (isLevelNumber(userInput.value)) {
      level.goToLevel(parseInt(userInput.value));
      currentLevel = level.level;
      currentSelector = level.currentSelector;
    } else {
      checkSelector(userInput.value);
    }
    userInput.value = "";
  }
});

var checkSelector = function checkSelector(input) {
  if (input === currentSelector) {
    if (currentLevel === 5) {
      var gymBench = document.querySelector('.gym-bench');
      Array.from(gymBench.children).forEach(function (el) {
        return el.classList.add('correct');
      });
      document.querySelector('.winner').classList.add('visible');
    } else {
      document.querySelectorAll(currentSelector).forEach(function (el) {
        return el.classList.add('correct');
      });
      setTimeout(function () {
        currentLevel += 1;
        level.goToLevel(currentLevel);
        currentSelector = level.currentSelector;
      }, 500);
    }
  } else {
    document.querySelector('.editors-container').classList.add('shake');
  }
};

var isLevelNumber = function isLevelNumber(input) {
  var levelInt = parseInt(input);
  if (levelInt >= 1 && levelInt <= 5) {
    return true;
  }
};

nextButton.addEventListener("click", function () {
  if (currentLevel < 5) {
    currentLevel += 1;
    level.goToLevel(currentLevel);
    currentSelector = level.currentSelector;
  }
});

prevButton.addEventListener("click", function () {
  if (currentLevel > 1) {
    currentLevel -= 1;
    level.goToLevel(currentLevel);
    currentSelector = level.currentSelector;
  }
});

hamburger.addEventListener("click", function () {
  levelDropdown.classList.toggle('show');
});

document.addEventListener("click", function (event) {
  if (event.target !== hamburger) {
    levelDropdown.classList.remove("show");
  }
});

document.querySelector('.level1').addEventListener("click", function () {
  level.goToLevel(1);
  currentLevel = 1;
});

document.querySelector('.level2').addEventListener("click", function () {
  level.goToLevel(2);
  currentLevel = 2;
});

document.querySelector('.level3').addEventListener("click", function () {
  level.goToLevel(3);
  currentLevel = 3;
});

document.querySelector('.level4').addEventListener("click", function () {
  level.goToLevel(4);
  currentLevel = 4;
});

document.querySelector('.level5').addEventListener("click", function () {
  level.goToLevel(5);
  currentLevel = 5;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var level = document.querySelector('.level');
var levelDescription = document.querySelector('.level-description');
var levelHTML = document.querySelector('.html-viewer');
var selectorInstruction = document.querySelector('.selector-title');
var levelImages = document.querySelector('.selector-images');
var nextButton = document.querySelector('.fa-arrow-circle-right');
var prevButton = document.querySelector('.fa-arrow-circle-left');
var gymBench = document.querySelector('.gym-bench');

var Level = function () {
  function Level() {
    _classCallCheck(this, Level);

    this.currentSelector = "";
    this.level = "";
    this.mark = "";
  }

  _createClass(Level, [{
    key: 'goToLevel',
    value: function goToLevel(levelNo) {
      level.innerHTML = 'Level ' + levelNo + ' of 5';
      nextButton.classList.remove('disabled');
      prevButton.classList.remove('disabled');
      document.querySelector('.winner').classList.remove('visible');
      if (levelNo === 1) {
        prevButton.classList.add('disabled');
        this.currentSelector = "dumbbell";
        this.level = 1;
        selectorInstruction.innerHTML = "Select the dumbbells";
        levelDescription.innerHTML = "<h4>BASIC SELECTORS:<br />Type Selectors</h4><br />This basic selector chooses all elements that match the given <i>name</i>.<br /><br /><h5>Syntax</h5><br /><code>element { style properties }</code><br /><h5>CSS</h5><br /><code>span {<br />  background-color: DodgerBlue;<br />  color: #ffffff;<br />}</code><br /><h5>Result</h5><br /><code><span1>Here's a span with some text.</span1><p>Here's a p with some text.</p><span1>Here's a span with more text.</span1></code>";
        gymBench.innerHTML = "\n  <dumbbell></dumbbell>\n  <dumbbell></dumbbell>\n";
        levelHTML.innerHTML = document.querySelector('.gym-bench').outerHTML;
      }
      if (levelNo === 2) {
        this.currentSelector = "#orange";
        this.level = 2;
        selectorInstruction.innerHTML = "Select the orange dumbbell";
        levelDescription.innerHTML = '<h4>BASIC SELECTORS:<br />ID Selectors</h4><br />This basic selector chooses nodes based on the value of its id attribute. There should be only one element with a given ID in a document.<br /><br /><h5>Syntax</h5><br /><code>#id_value { style properties }  </code><br /><h5>CSS</h5><br /><code>span#identified {<br />  background-color: DodgerBlue;<br />}</code><br /><h5>HTML</h5><br /><code>&#60;span id="identified">Here\'s a span with some text.&#60;/span><br />&#60;span>Here\'s another.&#60;/span></code><br /><h5>Results</h5><br /><code><span id="identified">Here\'s a span with some text.</span><br /><span>Here\'s another.</span></code>';
        gymBench.innerHTML = '\n  <dumbbell></dumbbell>\n  <dumbbell id="orange"></dumbbell>\n';
        levelHTML.innerHTML = document.querySelector('.gym-bench').outerHTML;
      }
      if (levelNo === 3) {
        this.currentSelector = ".small";
        this.level = 3;
        selectorInstruction.innerHTML = "Select the small dumbbell";
        levelDescription.innerHTML = '<h4>BASIC SELECTORS:<br />Class Selectors</h4><br />This basic selector chooses elements based on the value of their class attribute.<br /><br /><h5>Syntax</h5><br /><code>.classname { style properties }</code><br /><h5>CSS</h5><br /><code>span.classy {<br />  background-color: DodgerBlue;<br />}</code><br /><h5>HTML</h5><br /><code>&#60;span class="classy">Here\'s a span with some text.&#60;/span><br />&#60;span>Here\'s another.&#60;/span></code><br /><h5>Result</h5><br /><code><span>Here\'s a span with some text.</span><p>Here\'s a p with some text.</p><span>Here\'s a span with more text.</span></code><br /><h5>Results</h5><br /><code><span class="classy">Here\'s a span with some text.</span><br /><span>Here\'s another.</span></code>';
        gymBench.innerHTML = '\n  <dumbbell></dumbbell>\n  <dumbbell class="small"></dumbbell>\n';
        levelHTML.innerHTML = document.querySelector('.gym-bench').outerHTML;
        document.querySelectorAll(this.currentSelector).forEach(function (el) {
          return el.classList.add('dumbell-hover');
        });
      }
      if (levelNo === 4) {
        this.currentSelector = "dumbbell + kettlebell";
        this.level = 4;
        selectorInstruction.innerHTML = "Select every kettlebell that's next to a dumbbell";
        levelDescription.innerHTML = '<h4>COMBINATORS:<br />Adjacent Sibling Selectors</h4><br />The adjacent sibling combinator (+) separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent element.<br /><br /><h5>Syntax</h5><br /><code>former_element + target_element { style properties }</code><br /><h5>CSS</h5><br /><code>li:first-of-type + li {<br />  color: red;<br />}</code><br /><h5>HTML</h5><br /><code>&#60;ul><br />  &#60;li>One</li><br />  &#60;li>Two!</li><br />  &#60;li>Three</li><br />&#60;/ul></code><br /><h5>Results</h5><br /><code><ul><li4>One</li4>\n<li4>Two!</li4>\n<li4>Three</li4></ul>';
        gymBench.innerHTML = '\n  <dumbbell class="small"></dumbbell>\n  <kettlebell></kettlebell>\n  <dumbbell class="small"></dumbbell>\n  <kettlebell></kettlebell>\n  <kettlebell></kettlebell>\n';
        levelHTML.innerHTML = document.querySelector('.gym-bench').outerHTML;
        document.querySelectorAll('dumbbell').forEach(function (el) {
          return el.classList.add('move-left');
        });
      }
      if (levelNo === 5) {
        nextButton.classList.add('disabled');
        this.currentSelector = "step > kettlebell";
        this.level = 5;
        selectorInstruction.innerHTML = "Select the kettlebell directly on a step";
        levelDescription.innerHTML = "<h4>COMBINATORS:<br />Child Selectors</h4><br />The child combinator (>) separates two selectors and matches only those elements matched by the second selector that are children of elements matched by the first.<br /><br /><h5>Syntax</h5><br /><code>selector1 > selector2 { style properties }</code><br /><h5>CSS</h5><br /><code>span { background-color: white; }<br />div > span {<br />  background-color: DodgerBlue;<br />}</code><br /><h5>HTML</h5><br /><code>&#60;div><br />  &#60;span>Span #1, in the div.<br />    &#60;span>Span #2, in the span that's in the div.&#60;/span><br />  &#60;/span><br />&#60;/div><br />&#60;span>Span #3, not in the div at all.&#60;/span></code><br /><h5>Result</h5><br /><code><div><span5>Span #1, in the div.<span5>Span #2, in the span5 that's in the div.</span5></span5></div><span5>Span #3, not in the div at all.</span5></code>";
        gymBench.innerHTML = '\n  <dumbbell class="small"></dumbbell>\n  <kettlebell></kettlebell>\n  <dumbbell class="small"></dumbbell>\n  <step>\n    <kettlebell></kettlebell>\n  </step>\n';
        levelHTML.innerHTML = document.querySelector('.gym-bench').outerHTML;
        document.querySelectorAll('dumbbell').forEach(function (el) {
          return el.classList.add('move-left');
        });
      }
      document.querySelectorAll('move-left').forEach(function (el) {
        return el.classList.remove('move-left');
      });
      document.querySelectorAll(this.currentSelector).forEach(function (el) {
        return el.classList.add('strobe');
      });
      document.querySelectorAll('dumbbell').forEach(function (el) {
        return el.classList.add('dumbell-hover');
      });
      this.hoverSelector();
    }
  }, {
    key: 'hoverSelector',
    value: function hoverSelector() {
      var _this = this;

      document.addEventListener("mouseover", function (event) {
        var visibleMark = document.querySelector('mark.visible');
        if (visibleMark) {
          visibleMark.classList.remove('visible');
        }
        if (event.target.tagName === "DUMBBELL") {
          if (event.target.classList.contains("small")) {
            _this.mark = document.querySelector('mark[name="small"]');
          } else if (event.target.id === "orange") {
            _this.mark = document.querySelector('mark[name="orange"]');
          } else {
            _this.mark = document.querySelector('mark[name="dumbbell"]');
          }
        }
        if (event.target.tagName === "KETTLEBELL") {
          _this.mark = document.querySelector('mark[name="kettlebell"]');
        }
        if (event.target.tagName === "STEP") {
          if (event.target.tagName === "KETTLEBELL") {
            _this.mark = document.querySelector('mark[name="kettlebell"]');
          }
          _this.mark = document.querySelector('mark[name="step"]');
        }
        if (_this.mark) {
          _this.mark.classList.add('visible');
        }
      });
      document.addEventListener("mouseover", function (event) {
        var tagNames = ["DUMBBELL", "KETTLEBELL", "STEP"];
        if (!tagNames.includes(event.target.tagName)) {
          document.querySelectorAll('mark.visible').forEach(function (el) {
            return el.classList.remove('visible');
          });
        }
      });
    }
  }]);

  return Level;
}();

exports.default = Level;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map