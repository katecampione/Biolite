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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_windowLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/windowLoad.js */ "./src/js/components/windowLoad.js");
// import './components/preloader';
// import './components/mobileMenu';
// import './components/externalLinks';
// import './components/loadMailchimpScripts.js';
// import './components/smoothScroll.js';
// import './components/pinnedSubNav.js';
 // import './components/all.js';

/***/ }),

/***/ "./src/js/components/impactCounter.js":
/*!********************************************!*\
  !*** ./src/js/components/impactCounter.js ***!
  \********************************************/
/*! exports provided: counterUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterUp", function() { return counterUp; });
var counterUp = function counterUp() {
  var counterCount = function counterCount() {
    function numberWithCommas(n) {
      var parts = n.toString().split(".");
      return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var i = 1;
    $('.impact-counter-numbers').each(function () {
      var counter = {
        "var": 0
      }; // let theseNumbers = document.getElementById("tal-"+i);

      var theseNumbers = document.getElementById("impact-numbers-" + i);
      var endingCounterVar = $(theseNumbers).attr('data-count');
      gsap.to(counter, {
        duration: 4,
        delay: 0.5,
        "var": endingCounterVar,
        onUpdate: function onUpdate() {
          var nwc = numberWithCommas(counter["var"]);
          theseNumbers.innerHTML = nwc;
        },
        ease: Circ.easeOut
      });
      i++;
    });
  };

  ScrollTrigger.create({
    trigger: "#impact-tracker-trigger",
    start: "top bottom-=40",
    once: true,
    onEnter: function onEnter() {
      // alert('ok');
      counterCount();
    }
  });
};

/***/ }),

/***/ "./src/js/components/index.js":
/*!************************************!*\
  !*** ./src/js/components/index.js ***!
  \************************************/
/*! exports provided: setupPovertyPopups, clickPovertyPopups, counterUp, videoToggle, loadTheVideo, heroAnimation, whyExistAnimation, whereOperateAnimation, whatPovertyAnimation, ourImpactAnimation, yourImpactAnimation, persona1Animation, persona2Animation, persona3Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _povertyPopups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./povertyPopups */ "./src/js/components/povertyPopups.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupPovertyPopups", function() { return _povertyPopups__WEBPACK_IMPORTED_MODULE_0__["setupPovertyPopups"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clickPovertyPopups", function() { return _povertyPopups__WEBPACK_IMPORTED_MODULE_0__["clickPovertyPopups"]; });

/* harmony import */ var _impactCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impactCounter */ "./src/js/components/impactCounter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "counterUp", function() { return _impactCounter__WEBPACK_IMPORTED_MODULE_1__["counterUp"]; });

/* harmony import */ var _videoToggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videoToggle.js */ "./src/js/components/videoToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "videoToggle", function() { return _videoToggle_js__WEBPACK_IMPORTED_MODULE_2__["videoToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadTheVideo", function() { return _videoToggle_js__WEBPACK_IMPORTED_MODULE_2__["loadTheVideo"]; });

/* harmony import */ var _scrollingAnimations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollingAnimations.js */ "./src/js/components/scrollingAnimations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heroAnimation", function() { return _scrollingAnimations_js__WEBPACK_IMPORTED_MODULE_3__["heroAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whyExistAnimation", function() { return _scrollingAnimations_js__WEBPACK_IMPORTED_MODULE_3__["whyExistAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whereOperateAnimation", function() { return _scrollingAnimations_js__WEBPACK_IMPORTED_MODULE_3__["whereOperateAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whatPovertyAnimation", function() { return _scrollingAnimations_js__WEBPACK_IMPORTED_MODULE_3__["whatPovertyAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ourImpactAnimation", function() { return _scrollingAnimations_js__WEBPACK_IMPORTED_MODULE_3__["ourImpactAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yourImpactAnimation", function() { return _scrollingAnimations_js__WEBPACK_IMPORTED_MODULE_3__["yourImpactAnimation"]; });

/* harmony import */ var _personaAnimations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personaAnimations.js */ "./src/js/components/personaAnimations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persona1Animation", function() { return _personaAnimations_js__WEBPACK_IMPORTED_MODULE_4__["persona1Animation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persona2Animation", function() { return _personaAnimations_js__WEBPACK_IMPORTED_MODULE_4__["persona2Animation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persona3Animation", function() { return _personaAnimations_js__WEBPACK_IMPORTED_MODULE_4__["persona3Animation"]; });





 // export {
//   africaMapAnimations
// } from './africaMapAnimations.js'

/***/ }),

/***/ "./src/js/components/personaAnimations.js":
/*!************************************************!*\
  !*** ./src/js/components/personaAnimations.js ***!
  \************************************************/
/*! exports provided: persona1Animation, persona2Animation, persona3Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persona1Animation", function() { return persona1Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persona2Animation", function() { return persona2Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persona3Animation", function() { return persona3Animation; });
var persona1Animation = function persona1Animation() {
  var thisSection = $(".impactPersona1");
  var thisPersona = $(thisSection).find('svg');
  var p1Back = $(".persona1Background");
  var p1BackPath = $(p1Back).find('path');
  var p1Img = $(".persona1Image");
  var p1Tri = $(".persona1Triangles");
  var p1TriPoly = $(p1TriPoly).find('polygon');
  var p1Waves = $(".persona1Waves");
  var p1WavePath = p1Waves.find('path');
  var p1Wedge = $(".persona1Wedge");
  var p1WedgePath = $(p1Wedge).find('path');
  var p1Chart = $(".persona1Chart");
  var p1ChartPath = p1Chart.find('path');
  var p1ChartLine = p1Chart.find('line');
  var p1ChartText = $(".persona1ChartText");
  var p1ChartTextPath = $(p1ChartText).find('path');
  var p1Pieces = [p1Back, p1Tri, p1Waves, p1Chart, p1ChartText];
  var text = $(".impactPersona1Text").children();
  gsap.set(thisSection, {
    perspective: 1000
  });
  gsap.set([p1Pieces, p1Wedge], {
    opacity: 0
  });
  gsap.set(text, {
    opacity: 0,
    y: -3
  });
  gsap.set(thisPersona, {
    rotationY: 10,
    opacity: 0.3,
    transformOrigin: "40% 50%"
  });
  var tl = gsap.timeline({
    defaults: {
      duration: 0.5
    },
    scrollTrigger: {
      trigger: thisSection,
      start: "top center",
      ease: 'circ.out' // toggleActions:'play reverse play reverse',

    }
  });
  tl.to(thisPersona, {
    duration: 1,
    rotationY: 0,
    opacity: 1
  }, "pOut1");
  tl.to(text, {
    opacity: 1,
    y: 0,
    stagger: 0.1
  }, "pOut1+=0.2");
  tl.to(p1Pieces, {
    opacity: 1,
    stagger: {
      amount: 0.5,
      from: 'random'
    }
  }, "pOut1+=0.1");
  tl.to(p1Wedge, {
    opacity: .25
  }, "pOut1+=0.1");
};
var persona2Animation = function persona2Animation() {
  var thisSection = $(".impactPersona2");
  var thisPersona = $(thisSection).find('svg');
  var p2Back = $(".persona2Background");
  var p2BackRect = $(p2Back).find('rect');
  var p2BackPoly = $(p2Back).find('polygon');
  var p2Chart = $(".persona2Chart");
  var p2ChartPath = $(p2Chart).find('path');
  var p2ChartText = $(".persona2ChartText");
  var p2ChartTextPath = $(p2ChartText).find('path');
  var p2Img = $(".persona2Image");
  var p2Ruler = $(".persona2Ruler");
  var p2RulerPath = $(p2Ruler).find('path');
  var p2RulerLine = $(p2Ruler).find('line');
  var p2Pluses = $(".persona2Pluses");
  var p2PlusesPath = $(p2Pluses).find('path');
  var p2Pieces = [p2Back, p2Chart, p2ChartText, p2Ruler, p2Pluses];
  var text = $(".impactPersona2Text").children();
  gsap.set(thisSection, {
    perspective: 1000
  });
  gsap.set(p2Pieces, {
    opacity: 0
  });
  gsap.set(text, {
    opacity: 0,
    y: -3
  });
  gsap.set(thisPersona, {
    rotationY: -10,
    opacity: 0.3,
    transformOrigin: "100% 50%"
  });
  var tl = gsap.timeline({
    defaults: {
      duration: 0.5
    },
    scrollTrigger: {
      trigger: thisSection,
      start: "top center",
      ease: 'circ.out' // toggleActions:'play reverse play reverse',

    }
  });
  tl.to(thisPersona, {
    duration: 1,
    rotationY: 0,
    opacity: 1
  }, "pOut1");
  tl.to(text, {
    opacity: 1,
    y: 0,
    stagger: 0.1
  }, "pOut1+=0.2");
  tl.to(p2Pieces, {
    opacity: 1,
    stagger: {
      amount: 0.3,
      from: 'random'
    }
  }, "pOut1+=0.1");
};
var persona3Animation = function persona3Animation() {
  var thisSection = $(".impactPersona3");
  var thisPersona = $(thisSection).find('svg');
  var p3Back = $(".persona3Background");
  var p3BackPath = $(p3Back).find('path');
  var p3BackRect = $(p3Back).find('rect');
  var p3Img = $(".persona3Image");
  var p3Numbers = $(".persona3Numbers");
  var p3NumbersPath = $(p3Numbers).find('path');
  var p3Dial = $(".persona3Dial");
  var p3DialPath = $(p3Dial).find('path');
  var p3Dots = $(".persona3Dots");
  var p3DotsCircle = $(p3Dots).find('circle');
  var p3Pieces = [p3Back, p3Numbers, p3Dial, p3Dots];
  var text = $(".impactPersona3Text").children();
  gsap.set(thisSection, {
    perspective: 1000
  });
  gsap.set(p3Pieces, {
    opacity: 0
  });
  gsap.set(text, {
    opacity: 0,
    y: -3
  });
  gsap.set(thisPersona, {
    rotationY: 10,
    opacity: 0.3,
    transformOrigin: "50% 50%"
  });
  var tl = gsap.timeline({
    defaults: {
      duration: 0.5
    },
    scrollTrigger: {
      trigger: thisSection,
      start: "top center",
      ease: 'circ.out' // toggleActions:'play reverse play reverse',

    }
  });
  tl.to(thisPersona, {
    duration: 1,
    rotationY: 0,
    opacity: 1
  }, "pOut1");
  tl.to(text, {
    opacity: 1,
    y: 0,
    stagger: 0.1
  }, "pOut1+=0.2");
  tl.to(p3Pieces, {
    opacity: 1,
    stagger: {
      amount: 0.3,
      from: 'random'
    }
  }, "pOut1+=0.1");
};

/***/ }),

/***/ "./src/js/components/povertyPopups.js":
/*!********************************************!*\
  !*** ./src/js/components/povertyPopups.js ***!
  \********************************************/
/*! exports provided: setupPovertyPopups, clickPovertyPopups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupPovertyPopups", function() { return setupPovertyPopups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickPovertyPopups", function() { return clickPovertyPopups; });
// Add A Data Attribure to each slide to setup for reveal
var setupPovertyPopups = function setupPovertyPopups() {
  var i = 1;
  gsap.set('.single-poverty-pop-up', {
    transformOrigin: 'center left',
    opacity: 0,
    rotationY: 20,
    x: -80,
    //scale:0.7,
    zIndex: 1
  });
  $('.single-poverty-pop-up').each(function () {
    $(this).attr('data-pop-up', i);
    i++;
  });
};
var clickPovertyPopups = function clickPovertyPopups() {
  $('.povertyPopupTrigger').each(function () {
    // Get The Manually Added Pop Up Trigger Number
    var thisPopup = $(this).attr('data-pop-up-trigger'); // Get The Coresponding Popup which is created automatically in setupPovertyPopups(); above

    var thisPopupModal = $('*[data-pop-up="' + thisPopup + '"]');
    $(this).on('click', function () {
      // Setup the TL To animate the one out
      var oneTL = gsap.timeline({
        paused: true
      }); // Setup the TL for All to close

      var allTL = gsap.timeline({
        paused: true,
        onComplete: function onComplete() {
          // After it's done play out the new one
          oneTL.play();
          $('.poverty-popup-container').addClass('openModal');
        }
      }); // Setup a close Animation

      var closeTL = gsap.timeline({
        paused: true
      }); // Reverse them all on close

      closeTL.to('.single-poverty-pop-up', {
        opacity: 0,
        rotationY: 20,
        x: -80,
        //scale:0.7,
        // zIndex:1,
        duration: 0.3,
        ease: "circ.out",
        onComplete: function onComplete() {
          gsap.set('.single-poverty-pop-up', {
            zIndex: 1
          });
          $('.poverty-popup-container').removeClass('openModal');
        }
      }); // Reverse Them All Before Playing a new one

      allTL.to('.single-poverty-pop-up', {
        opacity: 0,
        rotationY: 20,
        x: -80,
        //scale:0.7,
        // zIndex:1,
        duration: 0.3,
        ease: "circ.out",
        onComplete: function onComplete() {
          gsap.set('.single-poverty-pop-up', {
            zIndex: 1
          });
          $('.poverty-popup-container').removeClass('openModal');
        }
      }); // Play Out the One that weas clicked

      oneTL.to(thisPopupModal, {
        opacity: 1,
        rotationY: 0,
        x: 0,
        scale: 1,
        zIndex: 2,
        duration: 0.3,
        ease: "circ.out",
        onComplete: function onComplete() {
          $('.poverty-popup-container').addClass('openModal');
        }
      }); // If There's an open modal close it and then play the new modal Timeline

      if ($('.poverty-popup-container').hasClass('openModal')) {
        allTL.play(); // If Nothing is open just play it out  
      } else {
        oneTL.play();
      } // Play the Close all Timeline on clicking Close


      $('.povertyPopupClose').on('click', function () {
        closeTL.play();
      });
    });
  });
};

/***/ }),

/***/ "./src/js/components/scrollingAnimations.js":
/*!**************************************************!*\
  !*** ./src/js/components/scrollingAnimations.js ***!
  \**************************************************/
/*! exports provided: heroAnimation, whyExistAnimation, whereOperateAnimation, whatPovertyAnimation, ourImpactAnimation, yourImpactAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heroAnimation", function() { return heroAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whyExistAnimation", function() { return whyExistAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whereOperateAnimation", function() { return whereOperateAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whatPovertyAnimation", function() { return whatPovertyAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ourImpactAnimation", function() { return ourImpactAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yourImpactAnimation", function() { return yourImpactAnimation; });
var heroAnimation = function heroAnimation() {
  var tl = gsap.timeline({
    defaults: {
      duration: 0.8,
      delay: 0.3,
      ease: 'circ.in'
    }
  });
  var thisSection = $('.hero-section');
  var text = $('.hero-section-text');
  tl.to('.hero-section-overlay', {
    opacity: 0
  }, "heroIn");
  tl.to(text, {
    y: 0,
    opacity: 1,
    duration: 0.6
  }, 'heroIn+=0.2');
};
var whyExistAnimation = function whyExistAnimation() {
  var thisSection = $('.why-we-exist-section');
  var globe = $('.exist-globe-background img');
  gsap.set(globe, {
    scale: 0.9,
    rotate: 6
  });
  var tl = gsap.timeline({
    defaults: {
      duration: 1.3,
      ease: 'none'
    },
    scrollTrigger: {
      trigger: thisSection,
      start: "top bottom",
      end: "top top",
      scrub: true
    }
  });
  tl.to(globe, {
    rotate: 0,
    scale: 1
  });
};
var whereOperateAnimation = function whereOperateAnimation() {
  var thisSection = $('.where-we-operate-section');
  var headline = $('.where-we-operate-intro').find('h2');
  var subheadline = $('.where-we-operate-intro').find('h5');
  var theBody = $('.where-we-operate-intro').find('p');
  var category = $('.operate-list-single-item');
  var mapKey = $('.single-map-key');
  var nextLink = $('.operate-next-section-link');
  var outline = $('.africaMapOutline');
  var mapFills = $('.africaMapBlueFills');
  var mapBorders = $('.africaMapCountryLines');
  var marker = $('.africaMapMarker');
  var hatches = $('.africaMapHatchLines');
  var oneHash = $(hatches).find('path');
  gsap.set([mapFills, mapBorders, oneHash, outline], {
    opacity: 0
  });
  gsap.set(marker, {
    opacity: 0,
    y: -4
  });
  gsap.set([headline, subheadline, theBody], {
    y: -0,
    opacity: 0
  });
  gsap.set([category, mapKey, nextLink], {
    opacity: 0
  });
  var tl = gsap.timeline({
    defaults: {
      duration: 0.3,
      ease: 'circ.out'
    },
    scrollTrigger: {
      trigger: thisSection,
      start: "top center+=200" // toggleActions:'play reverse play reverse',

    } // onComplete: function(){
    //   repeatTL.play();
    // }

  });

  if ($(window).width() <= 767) {
    tl.to([subheadline, headline, theBody], {
      opacity: 1,
      y: 0,
      stagger: 0.1
    }, "p3Out+=0.2");
    tl.to(category, {
      opacity: 1,
      y: 0
    }, "p3Out1-=0.2");
    tl.to(outline, {
      opacity: 1
    }, "p3Out2");
    tl.to(mapBorders, {
      opacity: 1
    }, "p3Out2+=0.2");
    tl.to(oneHash, {
      opacity: 1,
      stagger: 0.1
    }, "p3Out3+=0.3");
    tl.to(mapFills, {
      opacity: 1
    }, "p3Out3+=0.3");
    tl.to([mapKey, nextLink], {
      opacity: 1,
      stagger: 0.1
    }, "p3Out3+=0.5");
    tl.to(marker, {
      ease: 'circ.out',
      opacity: 1,
      y: 0
    }, "p3Out3+=0.4");
  } else {
    tl.to(outline, {
      opacity: 1
    }, "p3Out");
    tl.to(mapBorders, {
      opacity: 1
    }, "p3Out");
    tl.to(oneHash, {
      opacity: 1,
      stagger: 0.1
    }, "p3Out2");
    tl.to(mapFills, {
      opacity: 1
    }, "p3Out2+=0.2");
    tl.to([subheadline, headline, theBody], {
      opacity: 1,
      y: 0,
      stagger: 0.1
    }, "p3Out3");
    tl.to(category, {
      opacity: 1,
      y: 0
    }, "p3Out3+=0.3");
    tl.to(marker, {
      opacity: 1,
      y: 0
    }, "p3Out3");
    tl.to([mapKey, nextLink], {
      opacity: 1,
      stagger: 0.1
    }, "p3Out4");
  }
};
var whatPovertyAnimation = function whatPovertyAnimation() {
  var thisSection = $('.what-is-energy-poverty-section');
  var overlay = $('.lightsOverlay');
  var headline = $('.energy-poverty-intro').find('h2');
  var subheadline = $('.energy-poverty-intro').find('h5');
  var theBody = $('.energy-poverty-intro').find('p');
  var category = $('.energy-poverty-intro').find('.section-vert-category');
  gsap.set([headline, subheadline, theBody], {
    y: -5,
    opacity: 0
  });
  gsap.set(category, {
    y: -15,
    opacity: 0
  });
  var tl = gsap.timeline({
    defaults: {
      duration: 0.4,
      ease: 'circ.out'
    },
    scrollTrigger: {
      trigger: thisSection,
      start: "top center"
    },
    onComplete: function onComplete() {
      repeatTL.play();
    }
  });
  tl.to(overlay, {
    opacity: 0,
    duration: 0.5
  });
  tl.to([subheadline, headline, theBody], {
    opacity: 1,
    y: 0,
    stagger: 0.1
  });
  tl.to(category, {
    opacity: 1,
    y: 0,
    stagger: 0.1
  }, '-=0.3');
  var repeatTL = gsap.timeline({
    paused: true,
    repeat: -1,
    yoyo: true
  });
  repeatTL.to($(overlay), {
    duration: 5,
    opacity: 0.4,
    ease: 'circ.inout'
  });
};
var ourImpactAnimation = function ourImpactAnimation() {
  var thisSection = $('.our-impact-section');
  var headline = $(thisSection).find('h2');
  var subheadline = $(thisSection).find('h5');
  var theBody = $(thisSection).find('p');
  var theButton = $(thisSection).find('.mission-button'); // gsap.set([headline, subheadline, theBody,theButton], {y:-5, opacity:0});

  var tl = gsap.timeline({
    defaults: {
      duration: 0.15,
      ease: 'circ.in'
    },
    scrollTrigger: {
      trigger: thisSection,
      start: "top center"
    } // onComplete: function(){
    //   repeatTL.play();
    // }

  }); // tl.to(overlay, {opacity:0, duration:0.5});
  // tl.to([subheadline, headline,theBody,theButton], {opacity:1, y:0});
};
var yourImpactAnimation = function yourImpactAnimation() {
  var thisSection = $('.your-impact-images');
  var leftImg = $(".your-impact-left-image img");
  var rightImg = $(".your-impact-right-image img");
  var logo = $(".your-impact-logo");
  gsap.set([leftImg, rightImg, logo], {
    scale: 1.05,
    opacity: 0
  });
  var tl = gsap.timeline({
    defaults: {
      duration: 0.3
    },
    scrollTrigger: {
      trigger: thisSection,
      start: "center bottom",
      ease: 'circ.in'
    }
  });
  tl.to(leftImg, {
    scale: 1,
    opacity: 1
  });
  tl.to(rightImg, {
    scale: 1,
    opacity: 1
  }, "-=.15");
  tl.to(logo, {
    scale: 1,
    opacity: 1
  }, "-=.15");
};

/***/ }),

/***/ "./src/js/components/videoToggle.js":
/*!******************************************!*\
  !*** ./src/js/components/videoToggle.js ***!
  \******************************************/
/*! exports provided: loadTheVideo, videoToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTheVideo", function() { return loadTheVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoToggle", function() { return videoToggle; });
// Setup The Video Player so the First Video is loaded
var loadTheVideo = function loadTheVideo() {
  var firstVideoLink = $(".firstSingleBioliteTVCard").attr('data-video-link');
  $('.tvPlayButton').attr('data-video-active', firstVideoLink);
};
var videoToggle = function videoToggle() {
  var teal1 = '#008fa1';
  var teal2 = '#20a09d';
  var yellow1 = '#d9ab27';
  var yellow2 = '#ecb351';
  var orange = '#C24D00';
  var red = '#e73f34;';
  var purple = '#8e90b4';
  var gray1 = '#444444';
  var gray2 = '#2e2e2f';
  var gray3 = '#747475';
  var gray4 = '#a8a8a8';
  var gray5 = '#d7d7d7';
  var gray6 = '#e4e4e4';
  var gray7 = '#f3f3f3';
  var offwhite = '#f1f1f1';

  var swapImage = function swapImage(theImageNumber) {
    var tl = gsap.timeline({
      defaults: {
        duration: 0.65,
        ease: 'power4.out'
      }
    });
    var thisImage = $('[data-preview-image=' + theImageNumber + ']');
    var otherImages = $('.bioliteTvVideoPreviewImage').not(thisImage); // console.log(thisImage);

    tl.to(thisImage, {
      duration: 0.65,
      opacity: 1
    }, "imageSwap");
    tl.to(otherImages, {
      duration: 0.65,
      opacity: 0
    }, "imageSwap");
  };

  $('.single-biolite-tv-card').on('click', function () {
    var allTL = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.65,
        ease: 'power4.out',
        onComplete: function onComplete() {// Set the Paragrahs back to reanimte
          // gsap.set(allP, {y:30, opacity:0});
        }
      }
    });
    var topHeight = $(this).outerHeight() - 80;
    var allCard = $('.single-biolite-tv-card').not(this);
    var allP = allCard.find('p');
    var allTealIcon = allCard.find('.tvIconTeal');
    var allWhiteIcon = allCard.find('.tvIconWhite');
    var $this = $(this);
    var thisP = $(this).find('p');
    var tealIcon = $(this).find('.tvIconTeal');
    var whiteIcon = $(this).find('.tvIconWhite');
    var imageTrigger = $(this).attr('data-preview-image-trigger');
    var videoLink = $(this).attr('data-video-link');
    var playButton = $('.tvPlayButton');
    var previewImg = $('.bioliteTvVideoPreviewImageContainer');
    allTL.set(previewImg, {
      zIndex: 2
    });
    allTL.set(thisP, {
      y: 30,
      opacity: 0
    });
    allTL.to(allCard, {
      color: gray1,
      background: "white",
      y: topHeight
    }, 'cardUp');
    allTL.to(allTealIcon, {
      opacity: 1
    }, 'cardUp');
    allTL.to(allWhiteIcon, {
      opacity: 0
    }, 'cardUp'); // The Selected Card Animations    

    allTL.to($this, {
      color: "white",
      background: teal1,
      y: 0
    }, 'cardUp');
    allTL.to(thisP, {
      y: 0,
      opacity: 1
    }, 'cardUp');
    allTL.to(tealIcon, {
      opacity: 0
    }, 'cardUp');
    allTL.to(whiteIcon, {
      opacity: 1
    }, 'cardUp');
    allTL.to(playButton, {
      scale: 1
    }, 'cardUp');
    allTL.to(previewImg, {
      opacity: 1
    }, 'cardUp');

    if ($(window).width() > 1024) {
      allTL.play();
      swapImage(imageTrigger);
    }

    $('.biolite-tv-video-frame iframe').remove();
    $('.tvPlayButton').attr('data-video-active', videoLink);
  });

  if ($(window).width() <= 1024) {
    $('.bioliteTvCardContainer').slick({
      infinite: true,
      slidesToShow: 1,
      asNavFor: ".bioliteTvVideoPreviewImageContainer",
      arrows: false,
      // prevArrow:'.sliderPrevNavArrow',
      // nextArrow:'.sliderNextNavArrow',
      speed: 500,
      cssEase: 'cubic-bezier(.17,.67,.28,1)',
      // autoplay: true,
      autoplaySpeed: 4000
    });
    $('.bioliteTvVideoPreviewImageContainer').slick({
      infinite: true,
      slidesToShow: 1,
      asNavFor: ".bioliteTvCardContainer",
      arrows: false,
      speed: 500,
      cssEase: 'cubic-bezier(.17,.67,.28,1)'
    });
    $('.single-biolite-tv-card').on('click', function () {
      var thisKey = $(this).attr('data-video-link');
      var previewImg = $('.bioliteTvVideoPreviewImageContainer');
      var previewCards = $('.bioliteTvCardContainer');
      var bioliteTvCardContainerBack = $('.bioliteTvCardContainerBack');
      var playButton = $('.tvPlayButton');
      var clearOutTL = gsap.timeline({
        paused: true,
        duration: 0.3,
        ease: "circ.out",
        onComplete: function onComplete() {
          gsap.set(previewImg, {
            zIndex: -1
          }); // gsap.killTweensOf(playButton);
          // gsap.set(playButton, {rotate:0});
        }
      });
      var backInTL = gsap.timeline({
        paused: true,
        duration: 0.3,
        ease: "circ.out",
        onComplete: function onComplete() {
          $('.biolite-tv-video-frame iframe').remove();
        }
      });
      clearOutTL.to(playButton, {
        scale: 0
      }, 'playit');
      clearOutTL.to(previewImg, {
        opacity: 0,
        zIndex: -1
      }, 'playit');
      clearOutTL.to(previewCards, {
        opacity: 0,
        zIndex: -1
      }, 'playit');
      clearOutTL.to(bioliteTvCardContainerBack, {
        opacity: 0,
        zIndex: -1
      }, 'playit');
      backInTL.to(previewImg, {
        opacity: 1,
        zIndex: 14
      }, 'playit2');
      backInTL.to(previewCards, {
        opacity: 1,
        zIndex: 14
      }, 'playit2');
      backInTL.to(bioliteTvCardContainerBack, {
        opacity: 1,
        zIndex: 12
      }, 'playit2');
      backInTL.to(playButton, {
        scale: 1,
        zIndex: 14
      }, 'playit2+=0.3');
      $('.biolite-tv-video-frame iframe').remove();
      $('.biolite-tv-video-frame').prepend("<div id='" + thisKey + "'></div>");
      $(".bioliteTvVideoPreviewImageContainer").slick('slickPause');
      $(".bioliteTvCardContainer").slick('slickPause');
      clearOutTL.play();

      function callYoutube(videoKey) {
        // LOAD THE NEW, SELECTED YOUTUBE VIDEO / PLAYER VIA YOUTUBE API
        player = new YT.Player(thisKey, {
          height: '100%',
          width: '100%',
          playerVars: {
            rel: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            autohide: 1,
            modestbranding: 1
          },
          videoId: thisKey,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        }); // HIDE OR SHOW OTHER VIDEOS DEPENDING ON YOTUBE PLAYER STATE

        function onPlayerStateChange(event) {
          if (event.data == YT.PlayerState.BUFFERING) {// $(".bioliteTvVideoPreviewImageContainer").slick('slickPause');
            // $(".bioliteTvCardContainer").slick('slickPause');
            // clearOutTL.play();
          } else if (event.data == YT.PlayerState.PLAYING) {
            // IF PLAYING
            $(".bioliteTvVideoPreviewImageContainer").slick('slickPlay');
            $(".bioliteTvCardContainer").slick('slickPlay');
            clearOutTL.play();
          } else if (event.data == YT.PlayerState.PAUSED) {
            // IF PAUSED
            $(".bioliteTvVideoPreviewImageContainer").slick('slickPlay');
            $(".bioliteTvCardContainer").slick('slickPlay');
            backInTL.play();
          } else if (event.data == YT.PlayerState.ENDED) {
            // IF FINISHED
            $(".bioliteTvVideoPreviewImageContainer").slick('slickPlay');
            $(".bioliteTvCardContainer").slick('slickPlay');
            backInTL.play();
          }
        } //STATE CHANGE

      } //callYoutube()
      // if ($(window).width() > 1024) {


      callYoutube();
    });
  } else {
    $('.tvPlayButton').on('click', function () {
      var thisKey = $(this).attr('data-video-active');
      var playButton = $('.tvPlayButton');
      gsap.to(playButton, {
        rotate: 360,
        duration: 0.75,
        repeat: -1,
        ease: 'none'
      });
      $('.biolite-tv-video-frame iframe').remove();
      $('.biolite-tv-video-frame').prepend("<div id='" + thisKey + "'></div>");

      function callYoutube(videoKey) {
        // LOAD THE NEW, SELECTED YOUTUBE VIDEO / PLAYER VIA YOUTUBE API
        player = new YT.Player(thisKey, {
          height: '100%',
          width: '100%',
          playerVars: {
            rel: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            autohide: 1,
            modestbranding: 1
          },
          videoId: thisKey,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        }); // HIDE OR SHOW OTHER VIDEOS DEPENDING ON YOTUBE PLAYER STATE

        function onPlayerStateChange(event) {
          var previewImg = $('.bioliteTvVideoPreviewImageContainer');
          var previewCards = $('.bioliteTvCardContainer');
          var bioliteTvCardContainerBack = $('.bioliteTvCardContainerBack');
          var tl = gsap.timeline({
            paused: true,
            duration: 0.3,
            ease: "circ.out",
            onComplete: function onComplete() {
              gsap.set(previewImg, {
                zIndex: -1
              });
              gsap.killTweensOf(playButton);
              gsap.set(playButton, {
                rotate: 0
              });
            }
          });
          var tl2 = gsap.timeline({
            paused: true,
            duration: 0.3,
            ease: "circ.out",
            onComplete: function onComplete() {// gsap.set(previewImg, {zIndex:9})
            }
          });
          tl.to(playButton, {
            scale: 0
          }, 'playit');
          tl.to(previewImg, {
            opacity: 0
          }, 'playit');
          tl.to(previewCards, {
            y: '100%'
          }, 'playit');
          tl.to(bioliteTvCardContainerBack, {
            opacity: 0
          }, 'playit');
          tl2.to(previewCards, {
            y: '0%'
          }, 'playit2');
          tl2.to(bioliteTvCardContainerBack, {
            opacity: 1
          }, 'playit2');

          if (event.data == YT.PlayerState.BUFFERING) {
            // IF BUFFERING   
            // curtainsDown();
            tl.play();
          } else if (event.data == YT.PlayerState.PLAYING) {
            // IF PLAYING
            tl.play(); // curtainsDown();
          } else if (event.data == YT.PlayerState.PAUSED) {
            // IF PAUSED
            tl2.play(); // curtainsUp();
          } else if (event.data == YT.PlayerState.ENDED) {
            // IF FINISHED
            tl2.play(); // curtainsUp();
          }
        } //STATE CHANGE

      } //callYoutube()
      // if ($(window).width() > 1024) {


      callYoutube();
    });
  } //End 1024 Media Query

};

/***/ }),

/***/ "./src/js/components/windowLoad.js":
/*!*****************************************!*\
  !*** ./src/js/components/windowLoad.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js/components/index.js");

window.addEventListener('load', function () {
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["setupPovertyPopups"])();
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["clickPovertyPopups"])();
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["counterUp"])();
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["loadTheVideo"])();
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["videoToggle"])();
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["heroAnimation"])();
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["whyExistAnimation"])();
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["whereOperateAnimation"])();
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["whatPovertyAnimation"])();
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["ourImpactAnimation"])();
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["yourImpactAnimation"])();
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["persona1Animation"])();
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["persona2Animation"])();
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["persona3Animation"])(); // africaMapAnimations();

  $('.whatWeMakeSliderContainer').slick({
    infinite: true,
    slidesToShow: 1,
    asNavFor: ".lifestyleImageSlider",
    arrows: true,
    dots: true,
    prevArrow: '.sliderPrevNavArrow',
    nextArrow: '.sliderNextNavArrow',
    appendDots: '.sliderNavProgressBar',
    speed: 500,
    cssEase: 'cubic-bezier(.17,.67,.28,1)',
    autoplay: true,
    autoplaySpeed: 4000
  });
  $('.lifestyleImageSlider').slick({
    infinite: true,
    slidesToShow: 1,
    asNavFor: ".whatWeMakeSliderContainer",
    arrows: false,
    speed: 500,
    cssEase: 'cubic-bezier(.17,.67,.28,1)',
    rtl: true
  });
  $('.weMakeCategory[data-slide]').on('click', function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.whatWeMakeSliderContainer').slick('slickGoTo', slideno - 1);
  });

  if ($(window).width() <= 767) {} else {}
});
window.addEventListener('resize', function () {
  if ($(window).width() < 1024) {} else {}
});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seemax/code/biolite/wp-content/themes/seemax-theme/src/js/bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9pbXBhY3RDb3VudGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3BlcnNvbmFBbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3BvdmVydHlQb3B1cHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2Nyb2xsaW5nQW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy92aWRlb1RvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy93aW5kb3dMb2FkLmpzIl0sIm5hbWVzIjpbImNvdW50ZXJVcCIsImNvdW50ZXJDb3VudCIsIm51bWJlcldpdGhDb21tYXMiLCJuIiwicGFydHMiLCJ0b1N0cmluZyIsInNwbGl0IiwicmVwbGFjZSIsImkiLCIkIiwiZWFjaCIsImNvdW50ZXIiLCJ0aGVzZU51bWJlcnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZW5kaW5nQ291bnRlclZhciIsImF0dHIiLCJnc2FwIiwidG8iLCJkdXJhdGlvbiIsImRlbGF5Iiwib25VcGRhdGUiLCJud2MiLCJpbm5lckhUTUwiLCJlYXNlIiwiQ2lyYyIsImVhc2VPdXQiLCJTY3JvbGxUcmlnZ2VyIiwiY3JlYXRlIiwidHJpZ2dlciIsInN0YXJ0Iiwib25jZSIsIm9uRW50ZXIiLCJwZXJzb25hMUFuaW1hdGlvbiIsInRoaXNTZWN0aW9uIiwidGhpc1BlcnNvbmEiLCJmaW5kIiwicDFCYWNrIiwicDFCYWNrUGF0aCIsInAxSW1nIiwicDFUcmkiLCJwMVRyaVBvbHkiLCJwMVdhdmVzIiwicDFXYXZlUGF0aCIsInAxV2VkZ2UiLCJwMVdlZGdlUGF0aCIsInAxQ2hhcnQiLCJwMUNoYXJ0UGF0aCIsInAxQ2hhcnRMaW5lIiwicDFDaGFydFRleHQiLCJwMUNoYXJ0VGV4dFBhdGgiLCJwMVBpZWNlcyIsInRleHQiLCJjaGlsZHJlbiIsInNldCIsInBlcnNwZWN0aXZlIiwib3BhY2l0eSIsInkiLCJyb3RhdGlvblkiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0bCIsInRpbWVsaW5lIiwiZGVmYXVsdHMiLCJzY3JvbGxUcmlnZ2VyIiwic3RhZ2dlciIsImFtb3VudCIsImZyb20iLCJwZXJzb25hMkFuaW1hdGlvbiIsInAyQmFjayIsInAyQmFja1JlY3QiLCJwMkJhY2tQb2x5IiwicDJDaGFydCIsInAyQ2hhcnRQYXRoIiwicDJDaGFydFRleHQiLCJwMkNoYXJ0VGV4dFBhdGgiLCJwMkltZyIsInAyUnVsZXIiLCJwMlJ1bGVyUGF0aCIsInAyUnVsZXJMaW5lIiwicDJQbHVzZXMiLCJwMlBsdXNlc1BhdGgiLCJwMlBpZWNlcyIsInBlcnNvbmEzQW5pbWF0aW9uIiwicDNCYWNrIiwicDNCYWNrUGF0aCIsInAzQmFja1JlY3QiLCJwM0ltZyIsInAzTnVtYmVycyIsInAzTnVtYmVyc1BhdGgiLCJwM0RpYWwiLCJwM0RpYWxQYXRoIiwicDNEb3RzIiwicDNEb3RzQ2lyY2xlIiwicDNQaWVjZXMiLCJzZXR1cFBvdmVydHlQb3B1cHMiLCJ4IiwiekluZGV4IiwiY2xpY2tQb3ZlcnR5UG9wdXBzIiwidGhpc1BvcHVwIiwidGhpc1BvcHVwTW9kYWwiLCJvbiIsIm9uZVRMIiwicGF1c2VkIiwiYWxsVEwiLCJvbkNvbXBsZXRlIiwicGxheSIsImFkZENsYXNzIiwiY2xvc2VUTCIsInJlbW92ZUNsYXNzIiwic2NhbGUiLCJoYXNDbGFzcyIsImhlcm9BbmltYXRpb24iLCJ3aHlFeGlzdEFuaW1hdGlvbiIsImdsb2JlIiwicm90YXRlIiwiZW5kIiwic2NydWIiLCJ3aGVyZU9wZXJhdGVBbmltYXRpb24iLCJoZWFkbGluZSIsInN1YmhlYWRsaW5lIiwidGhlQm9keSIsImNhdGVnb3J5IiwibWFwS2V5IiwibmV4dExpbmsiLCJvdXRsaW5lIiwibWFwRmlsbHMiLCJtYXBCb3JkZXJzIiwibWFya2VyIiwiaGF0Y2hlcyIsIm9uZUhhc2giLCJ3aW5kb3ciLCJ3aWR0aCIsIndoYXRQb3ZlcnR5QW5pbWF0aW9uIiwib3ZlcmxheSIsInJlcGVhdFRMIiwicmVwZWF0IiwieW95byIsIm91ckltcGFjdEFuaW1hdGlvbiIsInRoZUJ1dHRvbiIsInlvdXJJbXBhY3RBbmltYXRpb24iLCJsZWZ0SW1nIiwicmlnaHRJbWciLCJsb2dvIiwibG9hZFRoZVZpZGVvIiwiZmlyc3RWaWRlb0xpbmsiLCJ2aWRlb1RvZ2dsZSIsInRlYWwxIiwidGVhbDIiLCJ5ZWxsb3cxIiwieWVsbG93MiIsIm9yYW5nZSIsInJlZCIsInB1cnBsZSIsImdyYXkxIiwiZ3JheTIiLCJncmF5MyIsImdyYXk0IiwiZ3JheTUiLCJncmF5NiIsImdyYXk3Iiwib2Zmd2hpdGUiLCJzd2FwSW1hZ2UiLCJ0aGVJbWFnZU51bWJlciIsInRoaXNJbWFnZSIsIm90aGVySW1hZ2VzIiwibm90IiwidG9wSGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJhbGxDYXJkIiwiYWxsUCIsImFsbFRlYWxJY29uIiwiYWxsV2hpdGVJY29uIiwiJHRoaXMiLCJ0aGlzUCIsInRlYWxJY29uIiwid2hpdGVJY29uIiwiaW1hZ2VUcmlnZ2VyIiwidmlkZW9MaW5rIiwicGxheUJ1dHRvbiIsInByZXZpZXdJbWciLCJjb2xvciIsImJhY2tncm91bmQiLCJyZW1vdmUiLCJzbGljayIsImluZmluaXRlIiwic2xpZGVzVG9TaG93IiwiYXNOYXZGb3IiLCJhcnJvd3MiLCJzcGVlZCIsImNzc0Vhc2UiLCJhdXRvcGxheVNwZWVkIiwidGhpc0tleSIsInByZXZpZXdDYXJkcyIsImJpb2xpdGVUdkNhcmRDb250YWluZXJCYWNrIiwiY2xlYXJPdXRUTCIsImJhY2tJblRMIiwicHJlcGVuZCIsImNhbGxZb3V0dWJlIiwidmlkZW9LZXkiLCJwbGF5ZXIiLCJZVCIsIlBsYXllciIsImhlaWdodCIsInBsYXllclZhcnMiLCJyZWwiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwic2hvd2luZm8iLCJhdXRvaGlkZSIsIm1vZGVzdGJyYW5kaW5nIiwidmlkZW9JZCIsImV2ZW50cyIsIm9uUGxheWVyUmVhZHkiLCJvblBsYXllclN0YXRlQ2hhbmdlIiwiZXZlbnQiLCJkYXRhIiwiUGxheWVyU3RhdGUiLCJCVUZGRVJJTkciLCJQTEFZSU5HIiwiUEFVU0VEIiwiRU5ERUQiLCJraWxsVHdlZW5zT2YiLCJ0bDIiLCJhZGRFdmVudExpc3RlbmVyIiwiZG90cyIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImFwcGVuZERvdHMiLCJydGwiLCJlIiwicHJldmVudERlZmF1bHQiLCJzbGlkZW5vIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQSxnQzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFPLElBQUlBLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFHM0IsTUFBSUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUV2QixhQUFTQyxnQkFBVCxDQUEwQkMsQ0FBMUIsRUFBNkI7QUFDM0IsVUFBSUMsS0FBSyxHQUFDRCxDQUFDLENBQUNFLFFBQUYsR0FBYUMsS0FBYixDQUFtQixHQUFuQixDQUFWO0FBQ0EsYUFBT0YsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxPQUFULENBQWlCLHVCQUFqQixFQUEwQyxHQUExQyxDQUFQO0FBQ0Q7O0FBRUQsUUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFFQUMsS0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJDLElBQTdCLENBQWtDLFlBQVc7QUFFM0MsVUFBSUMsT0FBTyxHQUFHO0FBQUUsZUFBSztBQUFQLE9BQWQsQ0FGMkMsQ0FHM0M7O0FBQ0EsVUFBSUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQWtCTixDQUExQyxDQUFuQjtBQUNBLFVBQUlPLGdCQUFnQixHQUFHTixDQUFDLENBQUNHLFlBQUQsQ0FBRCxDQUFnQkksSUFBaEIsQ0FBcUIsWUFBckIsQ0FBdkI7QUFHQUMsVUFBSSxDQUFDQyxFQUFMLENBQVFQLE9BQVIsRUFBaUI7QUFDZlEsZ0JBQVEsRUFBQyxDQURNO0FBRWZDLGFBQUssRUFBQyxHQUZTO0FBR2YsZUFBS0wsZ0JBSFU7QUFJZk0sZ0JBQVEsRUFBRSxvQkFBWTtBQUNsQixjQUFJQyxHQUFHLEdBQUdwQixnQkFBZ0IsQ0FBQ1MsT0FBTyxPQUFSLENBQTFCO0FBQ0FDLHNCQUFZLENBQUNXLFNBQWIsR0FBeUJELEdBQXpCO0FBQ0gsU0FQYztBQVFmRSxZQUFJLEVBQUNDLElBQUksQ0FBQ0M7QUFSSyxPQUFqQjtBQVVBbEIsT0FBQztBQUNGLEtBbkJEO0FBb0JELEdBN0JEOztBQStCQW1CLGVBQWEsQ0FBQ0MsTUFBZCxDQUFxQjtBQUNuQkMsV0FBTyxFQUFFLHlCQURVO0FBRW5CQyxTQUFLLEVBQUUsZ0JBRlk7QUFHbkJDLFFBQUksRUFBQyxJQUhjO0FBS25CQyxXQUFPLEVBQUUsbUJBQVc7QUFDbEI7QUFDQS9CLGtCQUFZO0FBQ2I7QUFSa0IsR0FBckI7QUFVRCxDQTVDTSxDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFJQTtBQUtBO0NBZ0JBO0FBQ0E7QUFDQSxvQzs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBSWdDLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNuQyxNQUFJQyxXQUFXLEdBQUd6QixDQUFDLENBQUMsaUJBQUQsQ0FBbkI7QUFDQSxNQUFJMEIsV0FBVyxHQUFHMUIsQ0FBQyxDQUFDeUIsV0FBRCxDQUFELENBQWVFLElBQWYsQ0FBb0IsS0FBcEIsQ0FBbEI7QUFDQSxNQUFJQyxNQUFNLEdBQUc1QixDQUFDLENBQUMscUJBQUQsQ0FBZDtBQUNBLE1BQUk2QixVQUFVLEdBQUc3QixDQUFDLENBQUM0QixNQUFELENBQUQsQ0FBVUQsSUFBVixDQUFlLE1BQWYsQ0FBakI7QUFFQSxNQUFJRyxLQUFLLEdBQUc5QixDQUFDLENBQUMsZ0JBQUQsQ0FBYjtBQUVBLE1BQUkrQixLQUFLLEdBQUcvQixDQUFDLENBQUMsb0JBQUQsQ0FBYjtBQUNBLE1BQUlnQyxTQUFTLEdBQUdoQyxDQUFDLENBQUNnQyxTQUFELENBQUQsQ0FBYUwsSUFBYixDQUFrQixTQUFsQixDQUFoQjtBQUVBLE1BQUlNLE9BQU8sR0FBR2pDLENBQUMsQ0FBQyxnQkFBRCxDQUFmO0FBQ0EsTUFBSWtDLFVBQVUsR0FBSUQsT0FBRCxDQUFVTixJQUFWLENBQWUsTUFBZixDQUFqQjtBQUVBLE1BQUlRLE9BQU8sR0FBR25DLENBQUMsQ0FBQyxnQkFBRCxDQUFmO0FBQ0EsTUFBSW9DLFdBQVcsR0FBR3BDLENBQUMsQ0FBQ21DLE9BQUQsQ0FBRCxDQUFXUixJQUFYLENBQWdCLE1BQWhCLENBQWxCO0FBRUEsTUFBSVUsT0FBTyxHQUFHckMsQ0FBQyxDQUFDLGdCQUFELENBQWY7QUFDQSxNQUFJc0MsV0FBVyxHQUFHRCxPQUFPLENBQUNWLElBQVIsQ0FBYSxNQUFiLENBQWxCO0FBQ0EsTUFBSVksV0FBVyxHQUFHRixPQUFPLENBQUNWLElBQVIsQ0FBYSxNQUFiLENBQWxCO0FBRUEsTUFBSWEsV0FBVyxHQUFHeEMsQ0FBQyxDQUFDLG9CQUFELENBQW5CO0FBQ0EsTUFBSXlDLGVBQWUsR0FBR3pDLENBQUMsQ0FBQ3dDLFdBQUQsQ0FBRCxDQUFlYixJQUFmLENBQW9CLE1BQXBCLENBQXRCO0FBRUEsTUFBSWUsUUFBUSxHQUFHLENBQUNkLE1BQUQsRUFBU0csS0FBVCxFQUFnQkUsT0FBaEIsRUFBeUJJLE9BQXpCLEVBQWtDRyxXQUFsQyxDQUFmO0FBRUEsTUFBSUcsSUFBSSxHQUFHM0MsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUI0QyxRQUF6QixFQUFYO0FBRUFwQyxNQUFJLENBQUNxQyxHQUFMLENBQVNwQixXQUFULEVBQXNCO0FBQUNxQixlQUFXLEVBQUM7QUFBYixHQUF0QjtBQUNBdEMsTUFBSSxDQUFDcUMsR0FBTCxDQUFTLENBQUNILFFBQUQsRUFBVVAsT0FBVixDQUFULEVBQTZCO0FBQUNZLFdBQU8sRUFBQztBQUFULEdBQTdCO0FBQ0F2QyxNQUFJLENBQUNxQyxHQUFMLENBQVNGLElBQVQsRUFBZTtBQUFDSSxXQUFPLEVBQUMsQ0FBVDtBQUFZQyxLQUFDLEVBQUMsQ0FBQztBQUFmLEdBQWY7QUFDQXhDLE1BQUksQ0FBQ3FDLEdBQUwsQ0FBU25CLFdBQVQsRUFBc0I7QUFBQ3VCLGFBQVMsRUFBQyxFQUFYO0FBQWVGLFdBQU8sRUFBQyxHQUF2QjtBQUE0QkcsbUJBQWUsRUFBQztBQUE1QyxHQUF0QjtBQUVBLE1BQUlDLEVBQUUsR0FBRzNDLElBQUksQ0FBQzRDLFFBQUwsQ0FBYztBQUNyQkMsWUFBUSxFQUFDO0FBQ1AzQyxjQUFRLEVBQUM7QUFERixLQURZO0FBSXJCNEMsaUJBQWEsRUFBRTtBQUNibEMsYUFBTyxFQUFFSyxXQURJO0FBRWJKLFdBQUssRUFBRSxZQUZNO0FBR2JOLFVBQUksRUFBQyxVQUhRLENBSWI7O0FBSmE7QUFKTSxHQUFkLENBQVQ7QUFXQW9DLElBQUUsQ0FBQzFDLEVBQUgsQ0FBTWlCLFdBQU4sRUFBbUI7QUFBQ2hCLFlBQVEsRUFBQyxDQUFWO0FBQWF1QyxhQUFTLEVBQUMsQ0FBdkI7QUFBMEJGLFdBQU8sRUFBQztBQUFsQyxHQUFuQixFQUF5RCxPQUF6RDtBQUNBSSxJQUFFLENBQUMxQyxFQUFILENBQU1rQyxJQUFOLEVBQVk7QUFBQ0ksV0FBTyxFQUFDLENBQVQ7QUFBWUMsS0FBQyxFQUFDLENBQWQ7QUFBaUJPLFdBQU8sRUFBQztBQUF6QixHQUFaLEVBQTJDLFlBQTNDO0FBQ0FKLElBQUUsQ0FBQzFDLEVBQUgsQ0FBTWlDLFFBQU4sRUFBZ0I7QUFBQ0ssV0FBTyxFQUFDLENBQVQ7QUFBWVEsV0FBTyxFQUFDO0FBQ2hDQyxZQUFNLEVBQUMsR0FEeUI7QUFFaENDLFVBQUksRUFBQztBQUYyQjtBQUFwQixHQUFoQixFQUlHLFlBSkg7QUFLQU4sSUFBRSxDQUFDMUMsRUFBSCxDQUFNMEIsT0FBTixFQUFlO0FBQUNZLFdBQU8sRUFBQztBQUFULEdBQWYsRUFBOEIsWUFBOUI7QUFHRCxDQXRETTtBQXdEQSxJQUFJVyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDbkMsTUFBSWpDLFdBQVcsR0FBR3pCLENBQUMsQ0FBQyxpQkFBRCxDQUFuQjtBQUNBLE1BQUkwQixXQUFXLEdBQUcxQixDQUFDLENBQUN5QixXQUFELENBQUQsQ0FBZUUsSUFBZixDQUFvQixLQUFwQixDQUFsQjtBQUNBLE1BQUlnQyxNQUFNLEdBQUUzRCxDQUFDLENBQUMscUJBQUQsQ0FBYjtBQUNBLE1BQUk0RCxVQUFVLEdBQUc1RCxDQUFDLENBQUMyRCxNQUFELENBQUQsQ0FBVWhDLElBQVYsQ0FBZSxNQUFmLENBQWpCO0FBQ0EsTUFBSWtDLFVBQVUsR0FBRzdELENBQUMsQ0FBQzJELE1BQUQsQ0FBRCxDQUFVaEMsSUFBVixDQUFlLFNBQWYsQ0FBakI7QUFHQSxNQUFJbUMsT0FBTyxHQUFFOUQsQ0FBQyxDQUFDLGdCQUFELENBQWQ7QUFDQSxNQUFJK0QsV0FBVyxHQUFHL0QsQ0FBQyxDQUFDOEQsT0FBRCxDQUFELENBQVduQyxJQUFYLENBQWdCLE1BQWhCLENBQWxCO0FBRUEsTUFBSXFDLFdBQVcsR0FBR2hFLENBQUMsQ0FBQyxvQkFBRCxDQUFuQjtBQUNBLE1BQUlpRSxlQUFlLEdBQUdqRSxDQUFDLENBQUNnRSxXQUFELENBQUQsQ0FBZXJDLElBQWYsQ0FBb0IsTUFBcEIsQ0FBdEI7QUFFQSxNQUFJdUMsS0FBSyxHQUFHbEUsQ0FBQyxDQUFDLGdCQUFELENBQWI7QUFFQSxNQUFJbUUsT0FBTyxHQUFHbkUsQ0FBQyxDQUFDLGdCQUFELENBQWY7QUFDQSxNQUFJb0UsV0FBVyxHQUFHcEUsQ0FBQyxDQUFDbUUsT0FBRCxDQUFELENBQVd4QyxJQUFYLENBQWdCLE1BQWhCLENBQWxCO0FBQ0EsTUFBSTBDLFdBQVcsR0FBR3JFLENBQUMsQ0FBQ21FLE9BQUQsQ0FBRCxDQUFXeEMsSUFBWCxDQUFnQixNQUFoQixDQUFsQjtBQUVBLE1BQUkyQyxRQUFRLEdBQUd0RSxDQUFDLENBQUMsaUJBQUQsQ0FBaEI7QUFDQSxNQUFJdUUsWUFBWSxHQUFHdkUsQ0FBQyxDQUFDc0UsUUFBRCxDQUFELENBQVkzQyxJQUFaLENBQWlCLE1BQWpCLENBQW5CO0FBRUEsTUFBSTZDLFFBQVEsR0FBRyxDQUFDYixNQUFELEVBQVNHLE9BQVQsRUFBa0JFLFdBQWxCLEVBQStCRyxPQUEvQixFQUF3Q0csUUFBeEMsQ0FBZjtBQUVBLE1BQUkzQixJQUFJLEdBQUczQyxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QjRDLFFBQXpCLEVBQVg7QUFFQXBDLE1BQUksQ0FBQ3FDLEdBQUwsQ0FBU3BCLFdBQVQsRUFBc0I7QUFBQ3FCLGVBQVcsRUFBQztBQUFiLEdBQXRCO0FBQ0F0QyxNQUFJLENBQUNxQyxHQUFMLENBQVMyQixRQUFULEVBQW1CO0FBQUN6QixXQUFPLEVBQUM7QUFBVCxHQUFuQjtBQUNBdkMsTUFBSSxDQUFDcUMsR0FBTCxDQUFTRixJQUFULEVBQWU7QUFBQ0ksV0FBTyxFQUFDLENBQVQ7QUFBWUMsS0FBQyxFQUFDLENBQUM7QUFBZixHQUFmO0FBQ0F4QyxNQUFJLENBQUNxQyxHQUFMLENBQVNuQixXQUFULEVBQXNCO0FBQUN1QixhQUFTLEVBQUMsQ0FBQyxFQUFaO0FBQWdCRixXQUFPLEVBQUMsR0FBeEI7QUFBNkJHLG1CQUFlLEVBQUM7QUFBN0MsR0FBdEI7QUFFQSxNQUFJQyxFQUFFLEdBQUczQyxJQUFJLENBQUM0QyxRQUFMLENBQWM7QUFDckJDLFlBQVEsRUFBQztBQUNQM0MsY0FBUSxFQUFDO0FBREYsS0FEWTtBQUlyQjRDLGlCQUFhLEVBQUU7QUFDYmxDLGFBQU8sRUFBRUssV0FESTtBQUViSixXQUFLLEVBQUUsWUFGTTtBQUdiTixVQUFJLEVBQUMsVUFIUSxDQUliOztBQUphO0FBSk0sR0FBZCxDQUFUO0FBV0FvQyxJQUFFLENBQUMxQyxFQUFILENBQU1pQixXQUFOLEVBQW1CO0FBQUNoQixZQUFRLEVBQUMsQ0FBVjtBQUFhdUMsYUFBUyxFQUFDLENBQXZCO0FBQTBCRixXQUFPLEVBQUM7QUFBbEMsR0FBbkIsRUFBeUQsT0FBekQ7QUFDQUksSUFBRSxDQUFDMUMsRUFBSCxDQUFNa0MsSUFBTixFQUFZO0FBQUNJLFdBQU8sRUFBQyxDQUFUO0FBQVlDLEtBQUMsRUFBQyxDQUFkO0FBQWlCTyxXQUFPLEVBQUM7QUFBekIsR0FBWixFQUEyQyxZQUEzQztBQUNBSixJQUFFLENBQUMxQyxFQUFILENBQU0rRCxRQUFOLEVBQWdCO0FBQUN6QixXQUFPLEVBQUMsQ0FBVDtBQUFZUSxXQUFPLEVBQUM7QUFDaENDLFlBQU0sRUFBQyxHQUR5QjtBQUVoQ0MsVUFBSSxFQUFDO0FBRjJCO0FBQXBCLEdBQWhCLEVBSUcsWUFKSDtBQU1ELENBbkRNO0FBcURBLElBQUlnQixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDbkMsTUFBSWhELFdBQVcsR0FBR3pCLENBQUMsQ0FBQyxpQkFBRCxDQUFuQjtBQUNBLE1BQUkwQixXQUFXLEdBQUcxQixDQUFDLENBQUN5QixXQUFELENBQUQsQ0FBZUUsSUFBZixDQUFvQixLQUFwQixDQUFsQjtBQUNBLE1BQUkrQyxNQUFNLEdBQUUxRSxDQUFDLENBQUMscUJBQUQsQ0FBYjtBQUNBLE1BQUkyRSxVQUFVLEdBQUczRSxDQUFDLENBQUMwRSxNQUFELENBQUQsQ0FBVS9DLElBQVYsQ0FBZSxNQUFmLENBQWpCO0FBQ0EsTUFBSWlELFVBQVUsR0FBRzVFLENBQUMsQ0FBQzBFLE1BQUQsQ0FBRCxDQUFVL0MsSUFBVixDQUFlLE1BQWYsQ0FBakI7QUFFQSxNQUFJa0QsS0FBSyxHQUFHN0UsQ0FBQyxDQUFDLGdCQUFELENBQWI7QUFFQSxNQUFJOEUsU0FBUyxHQUFHOUUsQ0FBQyxDQUFDLGtCQUFELENBQWpCO0FBQ0EsTUFBSStFLGFBQWEsR0FBRy9FLENBQUMsQ0FBQzhFLFNBQUQsQ0FBRCxDQUFhbkQsSUFBYixDQUFrQixNQUFsQixDQUFwQjtBQUVBLE1BQUlxRCxNQUFNLEdBQUdoRixDQUFDLENBQUMsZUFBRCxDQUFkO0FBQ0EsTUFBSWlGLFVBQVUsR0FBR2pGLENBQUMsQ0FBQ2dGLE1BQUQsQ0FBRCxDQUFVckQsSUFBVixDQUFlLE1BQWYsQ0FBakI7QUFFQSxNQUFJdUQsTUFBTSxHQUFHbEYsQ0FBQyxDQUFDLGVBQUQsQ0FBZDtBQUNBLE1BQUltRixZQUFZLEdBQUduRixDQUFDLENBQUNrRixNQUFELENBQUQsQ0FBVXZELElBQVYsQ0FBZSxRQUFmLENBQW5CO0FBRUEsTUFBSXlELFFBQVEsR0FBRyxDQUFDVixNQUFELEVBQVNJLFNBQVQsRUFBb0JFLE1BQXBCLEVBQTRCRSxNQUE1QixDQUFmO0FBRUEsTUFBSXZDLElBQUksR0FBRzNDLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCNEMsUUFBekIsRUFBWDtBQUVBcEMsTUFBSSxDQUFDcUMsR0FBTCxDQUFTcEIsV0FBVCxFQUFzQjtBQUFDcUIsZUFBVyxFQUFDO0FBQWIsR0FBdEI7QUFDQXRDLE1BQUksQ0FBQ3FDLEdBQUwsQ0FBU3VDLFFBQVQsRUFBbUI7QUFBQ3JDLFdBQU8sRUFBQztBQUFULEdBQW5CO0FBQ0F2QyxNQUFJLENBQUNxQyxHQUFMLENBQVNGLElBQVQsRUFBZTtBQUFDSSxXQUFPLEVBQUMsQ0FBVDtBQUFZQyxLQUFDLEVBQUMsQ0FBQztBQUFmLEdBQWY7QUFDQXhDLE1BQUksQ0FBQ3FDLEdBQUwsQ0FBU25CLFdBQVQsRUFBc0I7QUFBQ3VCLGFBQVMsRUFBQyxFQUFYO0FBQWVGLFdBQU8sRUFBQyxHQUF2QjtBQUE0QkcsbUJBQWUsRUFBQztBQUE1QyxHQUF0QjtBQUVBLE1BQUlDLEVBQUUsR0FBRzNDLElBQUksQ0FBQzRDLFFBQUwsQ0FBYztBQUNyQkMsWUFBUSxFQUFDO0FBQ1AzQyxjQUFRLEVBQUM7QUFERixLQURZO0FBSXJCNEMsaUJBQWEsRUFBRTtBQUNibEMsYUFBTyxFQUFFSyxXQURJO0FBRWJKLFdBQUssRUFBRSxZQUZNO0FBR2JOLFVBQUksRUFBQyxVQUhRLENBSWI7O0FBSmE7QUFKTSxHQUFkLENBQVQ7QUFXQW9DLElBQUUsQ0FBQzFDLEVBQUgsQ0FBTWlCLFdBQU4sRUFBbUI7QUFBQ2hCLFlBQVEsRUFBQyxDQUFWO0FBQWF1QyxhQUFTLEVBQUMsQ0FBdkI7QUFBMEJGLFdBQU8sRUFBQztBQUFsQyxHQUFuQixFQUF5RCxPQUF6RDtBQUNBSSxJQUFFLENBQUMxQyxFQUFILENBQU1rQyxJQUFOLEVBQVk7QUFBQ0ksV0FBTyxFQUFDLENBQVQ7QUFBWUMsS0FBQyxFQUFDLENBQWQ7QUFBaUJPLFdBQU8sRUFBQztBQUF6QixHQUFaLEVBQTJDLFlBQTNDO0FBQ0FKLElBQUUsQ0FBQzFDLEVBQUgsQ0FBTTJFLFFBQU4sRUFBZ0I7QUFBQ3JDLFdBQU8sRUFBQyxDQUFUO0FBQVlRLFdBQU8sRUFBQztBQUNoQ0MsWUFBTSxFQUFDLEdBRHlCO0FBRWhDQyxVQUFJLEVBQUM7QUFGMkI7QUFBcEIsR0FBaEIsRUFJRyxZQUpIO0FBS0QsQ0E3Q00sQzs7Ozs7Ozs7Ozs7O0FDN0dQO0FBQUE7QUFBQTtBQUFBO0FBQ08sSUFBSTRCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUNwQyxNQUFJdEYsQ0FBQyxHQUFHLENBQVI7QUFDQVMsTUFBSSxDQUFDcUMsR0FBTCxDQUFTLHdCQUFULEVBQW1DO0FBQ2pDSyxtQkFBZSxFQUFDLGFBRGlCO0FBRWpDSCxXQUFPLEVBQUMsQ0FGeUI7QUFHakNFLGFBQVMsRUFBQyxFQUh1QjtBQUlqQ3FDLEtBQUMsRUFBQyxDQUFDLEVBSjhCO0FBS2pDO0FBQ0FDLFVBQU0sRUFBQztBQU4wQixHQUFuQztBQVFBdkYsR0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJDLElBQTVCLENBQWlDLFlBQVc7QUFDMUNELEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sSUFBUixDQUFhLGFBQWIsRUFBNEJSLENBQTVCO0FBQ0FBLEtBQUM7QUFDRixHQUhEO0FBSUQsQ0FkTTtBQWdCQSxJQUFJeUYsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQ3BDeEYsR0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJDLElBQTFCLENBQWdDLFlBQVU7QUFFeEM7QUFDQSxRQUFJd0YsU0FBUyxHQUFHekYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxJQUFSLENBQWEscUJBQWIsQ0FBaEIsQ0FId0MsQ0FJdEM7O0FBQ0YsUUFBSW1GLGNBQWMsR0FBRzFGLENBQUMsQ0FBQyxvQkFBbUJ5RixTQUFuQixHQUE2QixJQUE5QixDQUF0QjtBQUlBekYsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMkYsRUFBUixDQUFXLE9BQVgsRUFBb0IsWUFBVTtBQUU1QjtBQUNBLFVBQUlDLEtBQUssR0FBR3BGLElBQUksQ0FBQzRDLFFBQUwsQ0FBYztBQUFDeUMsY0FBTSxFQUFDO0FBQVIsT0FBZCxDQUFaLENBSDRCLENBSzVCOztBQUNBLFVBQUlDLEtBQUssR0FBR3RGLElBQUksQ0FBQzRDLFFBQUwsQ0FBYztBQUFDeUMsY0FBTSxFQUFDLElBQVI7QUFDeEJFLGtCQUFVLEVBQUUsc0JBQVc7QUFDckI7QUFDQUgsZUFBSyxDQUFDSSxJQUFOO0FBQ0FoRyxXQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QmlHLFFBQTlCLENBQXVDLFdBQXZDO0FBQ0Q7QUFMdUIsT0FBZCxDQUFaLENBTjRCLENBYzVCOztBQUNBLFVBQUlDLE9BQU8sR0FBRzFGLElBQUksQ0FBQzRDLFFBQUwsQ0FBYztBQUFDeUMsY0FBTSxFQUFDO0FBQVIsT0FBZCxDQUFkLENBZjRCLENBaUI1Qjs7QUFDQUssYUFBTyxDQUFDekYsRUFBUixDQUFXLHdCQUFYLEVBQXFDO0FBQ25Dc0MsZUFBTyxFQUFDLENBRDJCO0FBRW5DRSxpQkFBUyxFQUFDLEVBRnlCO0FBR25DcUMsU0FBQyxFQUFDLENBQUMsRUFIZ0M7QUFJbkM7QUFDQTtBQUNBNUUsZ0JBQVEsRUFBQyxHQU4wQjtBQU9uQ0ssWUFBSSxFQUFDLFVBUDhCO0FBUW5DZ0Ysa0JBQVUsRUFBRSxzQkFBVztBQUNyQnZGLGNBQUksQ0FBQ3FDLEdBQUwsQ0FBUyx3QkFBVCxFQUFtQztBQUFDMEMsa0JBQU0sRUFBQztBQUFSLFdBQW5DO0FBQ0F2RixXQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1HLFdBQTlCLENBQTBDLFdBQTFDO0FBQ0Q7QUFYa0MsT0FBckMsRUFsQjRCLENBZ0M1Qjs7QUFDQUwsV0FBSyxDQUFDckYsRUFBTixDQUFTLHdCQUFULEVBQW1DO0FBQ2pDc0MsZUFBTyxFQUFDLENBRHlCO0FBRWpDRSxpQkFBUyxFQUFDLEVBRnVCO0FBR2pDcUMsU0FBQyxFQUFDLENBQUMsRUFIOEI7QUFJakM7QUFDQTtBQUNBNUUsZ0JBQVEsRUFBQyxHQU53QjtBQU9qQ0ssWUFBSSxFQUFDLFVBUDRCO0FBUWpDZ0Ysa0JBQVUsRUFBRSxzQkFBVztBQUNyQnZGLGNBQUksQ0FBQ3FDLEdBQUwsQ0FBUyx3QkFBVCxFQUFtQztBQUFDMEMsa0JBQU0sRUFBQztBQUFSLFdBQW5DO0FBQ0F2RixXQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1HLFdBQTlCLENBQTBDLFdBQTFDO0FBQ0Q7QUFYZ0MsT0FBbkMsRUFqQzRCLENBK0M1Qjs7QUFDQVAsV0FBSyxDQUFDbkYsRUFBTixDQUFTaUYsY0FBVCxFQUF5QjtBQUN2QjNDLGVBQU8sRUFBQyxDQURlO0FBRXZCRSxpQkFBUyxFQUFDLENBRmE7QUFHdkJxQyxTQUFDLEVBQUMsQ0FIcUI7QUFJdkJjLGFBQUssRUFBQyxDQUppQjtBQUt2QmIsY0FBTSxFQUFDLENBTGdCO0FBTXZCN0UsZ0JBQVEsRUFBQyxHQU5jO0FBT3ZCSyxZQUFJLEVBQUMsVUFQa0I7QUFRdkJnRixrQkFBVSxFQUFFLHNCQUFXO0FBQ3JCL0YsV0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJpRyxRQUE5QixDQUF1QyxXQUF2QztBQUNEO0FBVnNCLE9BQXpCLEVBaEQ0QixDQThENUI7O0FBQ0EsVUFBR2pHLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCcUcsUUFBOUIsQ0FBdUMsV0FBdkMsQ0FBSCxFQUF1RDtBQUNyRFAsYUFBSyxDQUFDRSxJQUFOLEdBRHFELENBRXZEO0FBQ0MsT0FIRCxNQUdPO0FBQ0xKLGFBQUssQ0FBQ0ksSUFBTjtBQUNELE9BcEUyQixDQXNFNUI7OztBQUNBaEcsT0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IyRixFQUF4QixDQUEyQixPQUEzQixFQUFvQyxZQUFXO0FBQzdDTyxlQUFPLENBQUNGLElBQVI7QUFDRCxPQUZEO0FBSUQsS0EzRUQ7QUE0RUQsR0FyRkQ7QUFzRkQsQ0F2Rk0sQzs7Ozs7Ozs7Ozs7O0FDakJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBSU0sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBRS9CLE1BQUluRCxFQUFFLEdBQUczQyxJQUFJLENBQUM0QyxRQUFMLENBQWM7QUFDckJDLFlBQVEsRUFBQztBQUNQM0MsY0FBUSxFQUFDLEdBREY7QUFFUEMsV0FBSyxFQUFDLEdBRkM7QUFHUEksVUFBSSxFQUFDO0FBSEU7QUFEWSxHQUFkLENBQVQ7QUFPQSxNQUFJVSxXQUFXLEdBQUd6QixDQUFDLENBQUMsZUFBRCxDQUFuQjtBQUNBLE1BQUkyQyxJQUFJLEdBQUczQyxDQUFDLENBQUMsb0JBQUQsQ0FBWjtBQUVBbUQsSUFBRSxDQUFDMUMsRUFBSCxDQUFNLHVCQUFOLEVBQStCO0FBQUNzQyxXQUFPLEVBQUM7QUFBVCxHQUEvQixFQUEyQyxRQUEzQztBQUNBSSxJQUFFLENBQUMxQyxFQUFILENBQU1rQyxJQUFOLEVBQVk7QUFBQ0ssS0FBQyxFQUFDLENBQUg7QUFBTUQsV0FBTyxFQUFDLENBQWQ7QUFBaUJyQyxZQUFRLEVBQUM7QUFBMUIsR0FBWixFQUEyQyxhQUEzQztBQUNELENBZE07QUFnQkEsSUFBSTZGLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUVuQyxNQUFJOUUsV0FBVyxHQUFHekIsQ0FBQyxDQUFDLHVCQUFELENBQW5CO0FBQ0EsTUFBSXdHLEtBQUssR0FBR3hHLENBQUMsQ0FBQyw2QkFBRCxDQUFiO0FBRUFRLE1BQUksQ0FBQ3FDLEdBQUwsQ0FBUzJELEtBQVQsRUFBZ0I7QUFBQ0osU0FBSyxFQUFDLEdBQVA7QUFBWUssVUFBTSxFQUFDO0FBQW5CLEdBQWhCO0FBRUEsTUFBSXRELEVBQUUsR0FBRzNDLElBQUksQ0FBQzRDLFFBQUwsQ0FBYztBQUNyQkMsWUFBUSxFQUFDO0FBQ1AzQyxjQUFRLEVBQUMsR0FERjtBQUVQSyxVQUFJLEVBQUM7QUFGRSxLQURZO0FBS3JCdUMsaUJBQWEsRUFBRTtBQUNibEMsYUFBTyxFQUFFSyxXQURJO0FBRWJKLFdBQUssRUFBRSxZQUZNO0FBR2JxRixTQUFHLEVBQUMsU0FIUztBQUliQyxXQUFLLEVBQUM7QUFKTztBQUxNLEdBQWQsQ0FBVDtBQVlBeEQsSUFBRSxDQUFDMUMsRUFBSCxDQUFNK0YsS0FBTixFQUFhO0FBQUNDLFVBQU0sRUFBQyxDQUFSO0FBQVdMLFNBQUssRUFBQztBQUFqQixHQUFiO0FBQ0QsQ0FwQk07QUFzQkEsSUFBSVEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBRXZDLE1BQUluRixXQUFXLEdBQUd6QixDQUFDLENBQUMsMkJBQUQsQ0FBbkI7QUFFQSxNQUFJNkcsUUFBUSxHQUFHN0csQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkIyQixJQUE3QixDQUFrQyxJQUFsQyxDQUFmO0FBQ0EsTUFBSW1GLFdBQVcsR0FBRzlHLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCMkIsSUFBN0IsQ0FBa0MsSUFBbEMsQ0FBbEI7QUFDQSxNQUFJb0YsT0FBTyxHQUFHL0csQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkIyQixJQUE3QixDQUFrQyxHQUFsQyxDQUFkO0FBQ0EsTUFBSXFGLFFBQVEsR0FBR2hILENBQUMsQ0FBQywyQkFBRCxDQUFoQjtBQUNBLE1BQUlpSCxNQUFNLEdBQUdqSCxDQUFDLENBQUMsaUJBQUQsQ0FBZDtBQUNBLE1BQUlrSCxRQUFRLEdBQUdsSCxDQUFDLENBQUMsNEJBQUQsQ0FBaEI7QUFDQSxNQUFJbUgsT0FBTyxHQUFHbkgsQ0FBQyxDQUFDLG1CQUFELENBQWY7QUFDQSxNQUFJb0gsUUFBUSxHQUFHcEgsQ0FBQyxDQUFDLHFCQUFELENBQWhCO0FBQ0EsTUFBSXFILFVBQVUsR0FBR3JILENBQUMsQ0FBQyx3QkFBRCxDQUFsQjtBQUNBLE1BQUlzSCxNQUFNLEdBQUd0SCxDQUFDLENBQUMsa0JBQUQsQ0FBZDtBQUNBLE1BQUl1SCxPQUFPLEdBQUd2SCxDQUFDLENBQUMsc0JBQUQsQ0FBZjtBQUNBLE1BQUl3SCxPQUFPLEdBQUd4SCxDQUFDLENBQUN1SCxPQUFELENBQUQsQ0FBVzVGLElBQVgsQ0FBZ0IsTUFBaEIsQ0FBZDtBQUVBbkIsTUFBSSxDQUFDcUMsR0FBTCxDQUFTLENBQUN1RSxRQUFELEVBQVdDLFVBQVgsRUFBdUJHLE9BQXZCLEVBQWdDTCxPQUFoQyxDQUFULEVBQW1EO0FBQUNwRSxXQUFPLEVBQUM7QUFBVCxHQUFuRDtBQUNBdkMsTUFBSSxDQUFDcUMsR0FBTCxDQUFTeUUsTUFBVCxFQUFpQjtBQUFDdkUsV0FBTyxFQUFDLENBQVQ7QUFBWUMsS0FBQyxFQUFDLENBQUM7QUFBZixHQUFqQjtBQUVBeEMsTUFBSSxDQUFDcUMsR0FBTCxDQUFTLENBQUNnRSxRQUFELEVBQVdDLFdBQVgsRUFBd0JDLE9BQXhCLENBQVQsRUFBMkM7QUFBQy9ELEtBQUMsRUFBQyxDQUFDLENBQUo7QUFBT0QsV0FBTyxFQUFDO0FBQWYsR0FBM0M7QUFDQXZDLE1BQUksQ0FBQ3FDLEdBQUwsQ0FBUyxDQUFDbUUsUUFBRCxFQUFVQyxNQUFWLEVBQWtCQyxRQUFsQixDQUFULEVBQXNDO0FBQUNuRSxXQUFPLEVBQUM7QUFBVCxHQUF0QztBQUVBLE1BQUlJLEVBQUUsR0FBRzNDLElBQUksQ0FBQzRDLFFBQUwsQ0FBYztBQUNyQkMsWUFBUSxFQUFDO0FBQ1AzQyxjQUFRLEVBQUMsR0FERjtBQUVQSyxVQUFJLEVBQUM7QUFGRSxLQURZO0FBS3JCdUMsaUJBQWEsRUFBRTtBQUNibEMsYUFBTyxFQUFFSyxXQURJO0FBRWJKLFdBQUssRUFBRSxpQkFGTSxDQUdiOztBQUhhLEtBTE0sQ0FVckI7QUFDQTtBQUNBOztBQVpxQixHQUFkLENBQVQ7O0FBZUEsTUFBSXJCLENBQUMsQ0FBQ3lILE1BQUQsQ0FBRCxDQUFVQyxLQUFWLE1BQXFCLEdBQXpCLEVBQThCO0FBQzVCdkUsTUFBRSxDQUFDMUMsRUFBSCxDQUFNLENBQUNxRyxXQUFELEVBQWNELFFBQWQsRUFBdUJFLE9BQXZCLENBQU4sRUFBdUM7QUFBQ2hFLGFBQU8sRUFBQyxDQUFUO0FBQVlDLE9BQUMsRUFBQyxDQUFkO0FBQWlCTyxhQUFPLEVBQUM7QUFBekIsS0FBdkMsRUFBcUUsWUFBckU7QUFDQUosTUFBRSxDQUFDMUMsRUFBSCxDQUFNdUcsUUFBTixFQUFnQjtBQUFDakUsYUFBTyxFQUFDLENBQVQ7QUFBWUMsT0FBQyxFQUFDO0FBQWQsS0FBaEIsRUFBaUMsYUFBakM7QUFDQUcsTUFBRSxDQUFDMUMsRUFBSCxDQUFNMEcsT0FBTixFQUFlO0FBQUNwRSxhQUFPLEVBQUM7QUFBVCxLQUFmLEVBQTRCLFFBQTVCO0FBQ0FJLE1BQUUsQ0FBQzFDLEVBQUgsQ0FBTTRHLFVBQU4sRUFBa0I7QUFBQ3RFLGFBQU8sRUFBQztBQUFULEtBQWxCLEVBQStCLGFBQS9CO0FBQ0FJLE1BQUUsQ0FBQzFDLEVBQUgsQ0FBTStHLE9BQU4sRUFBZTtBQUFDekUsYUFBTyxFQUFDLENBQVQ7QUFBWVEsYUFBTyxFQUFDO0FBQXBCLEtBQWYsRUFBeUMsYUFBekM7QUFDQUosTUFBRSxDQUFDMUMsRUFBSCxDQUFNMkcsUUFBTixFQUFnQjtBQUFDckUsYUFBTyxFQUFDO0FBQVQsS0FBaEIsRUFBNkIsYUFBN0I7QUFDQUksTUFBRSxDQUFDMUMsRUFBSCxDQUFNLENBQUN3RyxNQUFELEVBQVNDLFFBQVQsQ0FBTixFQUEwQjtBQUFDbkUsYUFBTyxFQUFDLENBQVQ7QUFBWVEsYUFBTyxFQUFDO0FBQXBCLEtBQTFCLEVBQW1ELGFBQW5EO0FBQ0FKLE1BQUUsQ0FBQzFDLEVBQUgsQ0FBTTZHLE1BQU4sRUFBYztBQUFDdkcsVUFBSSxFQUFDLFVBQU47QUFBa0JnQyxhQUFPLEVBQUMsQ0FBMUI7QUFBNkJDLE9BQUMsRUFBQztBQUEvQixLQUFkLEVBQWlELGFBQWpEO0FBQ0QsR0FURCxNQVVLO0FBQ0hHLE1BQUUsQ0FBQzFDLEVBQUgsQ0FBTTBHLE9BQU4sRUFBZTtBQUFDcEUsYUFBTyxFQUFDO0FBQVQsS0FBZixFQUE0QixPQUE1QjtBQUNBSSxNQUFFLENBQUMxQyxFQUFILENBQU00RyxVQUFOLEVBQWtCO0FBQUN0RSxhQUFPLEVBQUM7QUFBVCxLQUFsQixFQUErQixPQUEvQjtBQUNBSSxNQUFFLENBQUMxQyxFQUFILENBQU0rRyxPQUFOLEVBQWU7QUFBQ3pFLGFBQU8sRUFBQyxDQUFUO0FBQVlRLGFBQU8sRUFBQztBQUFwQixLQUFmLEVBQXlDLFFBQXpDO0FBQ0FKLE1BQUUsQ0FBQzFDLEVBQUgsQ0FBTTJHLFFBQU4sRUFBZ0I7QUFBQ3JFLGFBQU8sRUFBQztBQUFULEtBQWhCLEVBQTZCLGFBQTdCO0FBQ0FJLE1BQUUsQ0FBQzFDLEVBQUgsQ0FBTSxDQUFDcUcsV0FBRCxFQUFjRCxRQUFkLEVBQXVCRSxPQUF2QixDQUFOLEVBQXVDO0FBQUNoRSxhQUFPLEVBQUMsQ0FBVDtBQUFZQyxPQUFDLEVBQUMsQ0FBZDtBQUFpQk8sYUFBTyxFQUFDO0FBQXpCLEtBQXZDLEVBQXFFLFFBQXJFO0FBQ0FKLE1BQUUsQ0FBQzFDLEVBQUgsQ0FBTXVHLFFBQU4sRUFBZ0I7QUFBQ2pFLGFBQU8sRUFBQyxDQUFUO0FBQVlDLE9BQUMsRUFBQztBQUFkLEtBQWhCLEVBQWlDLGFBQWpDO0FBQ0FHLE1BQUUsQ0FBQzFDLEVBQUgsQ0FBTTZHLE1BQU4sRUFBYztBQUFDdkUsYUFBTyxFQUFDLENBQVQ7QUFBWUMsT0FBQyxFQUFDO0FBQWQsS0FBZCxFQUFnQyxRQUFoQztBQUNBRyxNQUFFLENBQUMxQyxFQUFILENBQU0sQ0FBQ3dHLE1BQUQsRUFBU0MsUUFBVCxDQUFOLEVBQTBCO0FBQUNuRSxhQUFPLEVBQUMsQ0FBVDtBQUFZUSxhQUFPLEVBQUM7QUFBcEIsS0FBMUIsRUFBbUQsUUFBbkQ7QUFFRDtBQUNGLENBM0RNO0FBNkRBLElBQUlvRSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFFdEMsTUFBSWxHLFdBQVcsR0FBR3pCLENBQUMsQ0FBQyxpQ0FBRCxDQUFuQjtBQUNBLE1BQUk0SCxPQUFPLEdBQUc1SCxDQUFDLENBQUMsZ0JBQUQsQ0FBZjtBQUNBLE1BQUk2RyxRQUFRLEdBQUc3RyxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQjJCLElBQTNCLENBQWdDLElBQWhDLENBQWY7QUFDQSxNQUFJbUYsV0FBVyxHQUFHOUcsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkIyQixJQUEzQixDQUFnQyxJQUFoQyxDQUFsQjtBQUNBLE1BQUlvRixPQUFPLEdBQUcvRyxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQjJCLElBQTNCLENBQWdDLEdBQWhDLENBQWQ7QUFDQSxNQUFJcUYsUUFBUSxHQUFHaEgsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkIyQixJQUEzQixDQUFnQyx3QkFBaEMsQ0FBZjtBQUVBbkIsTUFBSSxDQUFDcUMsR0FBTCxDQUFTLENBQUNnRSxRQUFELEVBQVdDLFdBQVgsRUFBd0JDLE9BQXhCLENBQVQsRUFBMkM7QUFBQy9ELEtBQUMsRUFBQyxDQUFDLENBQUo7QUFBT0QsV0FBTyxFQUFDO0FBQWYsR0FBM0M7QUFDQXZDLE1BQUksQ0FBQ3FDLEdBQUwsQ0FBU21FLFFBQVQsRUFBbUI7QUFBQ2hFLEtBQUMsRUFBQyxDQUFDLEVBQUo7QUFBUUQsV0FBTyxFQUFDO0FBQWhCLEdBQW5CO0FBRUEsTUFBSUksRUFBRSxHQUFHM0MsSUFBSSxDQUFDNEMsUUFBTCxDQUFjO0FBQ3JCQyxZQUFRLEVBQUM7QUFDUDNDLGNBQVEsRUFBQyxHQURGO0FBRVBLLFVBQUksRUFBQztBQUZFLEtBRFk7QUFLckJ1QyxpQkFBYSxFQUFFO0FBQ2JsQyxhQUFPLEVBQUVLLFdBREk7QUFFYkosV0FBSyxFQUFFO0FBRk0sS0FMTTtBQVNyQjBFLGNBQVUsRUFBRSxzQkFBVTtBQUNwQjhCLGNBQVEsQ0FBQzdCLElBQVQ7QUFDRDtBQVhvQixHQUFkLENBQVQ7QUFhQTdDLElBQUUsQ0FBQzFDLEVBQUgsQ0FBTW1ILE9BQU4sRUFBZTtBQUFDN0UsV0FBTyxFQUFDLENBQVQ7QUFBWXJDLFlBQVEsRUFBQztBQUFyQixHQUFmO0FBQ0F5QyxJQUFFLENBQUMxQyxFQUFILENBQU0sQ0FBQ3FHLFdBQUQsRUFBY0QsUUFBZCxFQUF1QkUsT0FBdkIsQ0FBTixFQUF1QztBQUFDaEUsV0FBTyxFQUFDLENBQVQ7QUFBWUMsS0FBQyxFQUFDLENBQWQ7QUFBaUJPLFdBQU8sRUFBQztBQUF6QixHQUF2QztBQUNBSixJQUFFLENBQUMxQyxFQUFILENBQU11RyxRQUFOLEVBQWdCO0FBQUNqRSxXQUFPLEVBQUMsQ0FBVDtBQUFZQyxLQUFDLEVBQUMsQ0FBZDtBQUFpQk8sV0FBTyxFQUFDO0FBQXpCLEdBQWhCLEVBQThDLE9BQTlDO0FBRUEsTUFBSXNFLFFBQVEsR0FBR3JILElBQUksQ0FBQzRDLFFBQUwsQ0FBYztBQUMzQnlDLFVBQU0sRUFBQyxJQURvQjtBQUUzQmlDLFVBQU0sRUFBQyxDQUFDLENBRm1CO0FBRzNCQyxRQUFJLEVBQUM7QUFIc0IsR0FBZCxDQUFmO0FBS0FGLFVBQVEsQ0FBQ3BILEVBQVQsQ0FBWVQsQ0FBQyxDQUFDNEgsT0FBRCxDQUFiLEVBQXdCO0FBQUNsSCxZQUFRLEVBQUMsQ0FBVjtBQUFhcUMsV0FBTyxFQUFDLEdBQXJCO0FBQTBCaEMsUUFBSSxFQUFDO0FBQS9CLEdBQXhCO0FBRUQsQ0FwQ007QUFzQ0EsSUFBSWlILGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUVwQyxNQUFJdkcsV0FBVyxHQUFHekIsQ0FBQyxDQUFDLHFCQUFELENBQW5CO0FBQ0EsTUFBSTZHLFFBQVEsR0FBRzdHLENBQUMsQ0FBQ3lCLFdBQUQsQ0FBRCxDQUFlRSxJQUFmLENBQW9CLElBQXBCLENBQWY7QUFDQSxNQUFJbUYsV0FBVyxHQUFHOUcsQ0FBQyxDQUFDeUIsV0FBRCxDQUFELENBQWVFLElBQWYsQ0FBb0IsSUFBcEIsQ0FBbEI7QUFDQSxNQUFJb0YsT0FBTyxHQUFHL0csQ0FBQyxDQUFDeUIsV0FBRCxDQUFELENBQWVFLElBQWYsQ0FBb0IsR0FBcEIsQ0FBZDtBQUNBLE1BQUlzRyxTQUFTLEdBQUdqSSxDQUFDLENBQUN5QixXQUFELENBQUQsQ0FBZUUsSUFBZixDQUFvQixpQkFBcEIsQ0FBaEIsQ0FOb0MsQ0FRcEM7O0FBRUEsTUFBSXdCLEVBQUUsR0FBRzNDLElBQUksQ0FBQzRDLFFBQUwsQ0FBYztBQUNyQkMsWUFBUSxFQUFDO0FBQ1AzQyxjQUFRLEVBQUMsSUFERjtBQUVQSyxVQUFJLEVBQUM7QUFGRSxLQURZO0FBS3JCdUMsaUJBQWEsRUFBRTtBQUNibEMsYUFBTyxFQUFFSyxXQURJO0FBRWJKLFdBQUssRUFBRTtBQUZNLEtBTE0sQ0FTckI7QUFDQTtBQUNBOztBQVhxQixHQUFkLENBQVQsQ0FWb0MsQ0F1QnBDO0FBQ0E7QUFDRCxDQXpCTTtBQTJCQSxJQUFJNkcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBRXJDLE1BQUl6RyxXQUFXLEdBQUd6QixDQUFDLENBQUMscUJBQUQsQ0FBbkI7QUFDQSxNQUFJbUksT0FBTyxHQUFHbkksQ0FBQyxDQUFDLDZCQUFELENBQWY7QUFDQSxNQUFJb0ksUUFBUSxHQUFHcEksQ0FBQyxDQUFDLDhCQUFELENBQWhCO0FBQ0EsTUFBSXFJLElBQUksR0FBR3JJLENBQUMsQ0FBQyxtQkFBRCxDQUFaO0FBRUFRLE1BQUksQ0FBQ3FDLEdBQUwsQ0FBUyxDQUFDc0YsT0FBRCxFQUFVQyxRQUFWLEVBQW9CQyxJQUFwQixDQUFULEVBQW9DO0FBQUNqQyxTQUFLLEVBQUMsSUFBUDtBQUFhckQsV0FBTyxFQUFDO0FBQXJCLEdBQXBDO0FBRUEsTUFBSUksRUFBRSxHQUFHM0MsSUFBSSxDQUFDNEMsUUFBTCxDQUFjO0FBQ3JCQyxZQUFRLEVBQUM7QUFDUDNDLGNBQVEsRUFBQztBQURGLEtBRFk7QUFJckI0QyxpQkFBYSxFQUFFO0FBQ2JsQyxhQUFPLEVBQUVLLFdBREk7QUFFYkosV0FBSyxFQUFFLGVBRk07QUFHYk4sVUFBSSxFQUFDO0FBSFE7QUFKTSxHQUFkLENBQVQ7QUFVQW9DLElBQUUsQ0FBQzFDLEVBQUgsQ0FBTTBILE9BQU4sRUFBZTtBQUFDL0IsU0FBSyxFQUFDLENBQVA7QUFBVXJELFdBQU8sRUFBQztBQUFsQixHQUFmO0FBQ0FJLElBQUUsQ0FBQzFDLEVBQUgsQ0FBTTJILFFBQU4sRUFBZ0I7QUFBQ2hDLFNBQUssRUFBQyxDQUFQO0FBQVVyRCxXQUFPLEVBQUM7QUFBbEIsR0FBaEIsRUFBcUMsT0FBckM7QUFDQUksSUFBRSxDQUFDMUMsRUFBSCxDQUFNNEgsSUFBTixFQUFZO0FBQUNqQyxTQUFLLEVBQUMsQ0FBUDtBQUFVckQsV0FBTyxFQUFDO0FBQWxCLEdBQVosRUFBaUMsT0FBakM7QUFDRCxDQXRCTSxDOzs7Ozs7Ozs7Ozs7QUNwS1A7QUFBQTtBQUFBO0FBQUE7QUFDTyxJQUFJdUYsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUM5QixNQUFJQyxjQUFjLEdBQUd2SSxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQk8sSUFBL0IsQ0FBb0MsaUJBQXBDLENBQXJCO0FBQ0FQLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJPLElBQW5CLENBQXdCLG1CQUF4QixFQUE2Q2dJLGNBQTdDO0FBQ0QsQ0FITTtBQUtBLElBQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFFN0IsTUFBSUMsS0FBSyxHQUFHLFNBQVo7QUFDQSxNQUFJQyxLQUFLLEdBQUcsU0FBWjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxTQUFkO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLFNBQWQ7QUFDQSxNQUFJQyxNQUFNLEdBQUcsU0FBYjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxVQUFWO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLFNBQWI7QUFDQSxNQUFJQyxLQUFLLEdBQUcsU0FBWjtBQUNBLE1BQUlDLEtBQUssR0FBRyxTQUFaO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLFNBQVo7QUFDQSxNQUFJQyxLQUFLLEdBQUcsU0FBWjtBQUNBLE1BQUlDLEtBQUssR0FBRyxTQUFaO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLFNBQVo7QUFDQSxNQUFJQyxLQUFLLEdBQUcsU0FBWjtBQUNBLE1BQUlDLFFBQVEsR0FBRyxTQUFmOztBQUVBLE1BQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLGNBQUQsRUFBb0I7QUFDbEMsUUFBSXRHLEVBQUUsR0FBRzNDLElBQUksQ0FBQzRDLFFBQUwsQ0FBYztBQUNyQkMsY0FBUSxFQUFDO0FBQ1AzQyxnQkFBUSxFQUFDLElBREY7QUFFUEssWUFBSSxFQUFDO0FBRkU7QUFEWSxLQUFkLENBQVQ7QUFNQSxRQUFJMkksU0FBUyxHQUFHMUosQ0FBQyxDQUFDLHlCQUF1QnlKLGNBQXZCLEdBQXNDLEdBQXZDLENBQWpCO0FBQ0EsUUFBSUUsV0FBVyxHQUFHM0osQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUM0SixHQUFqQyxDQUFxQ0YsU0FBckMsQ0FBbEIsQ0FSa0MsQ0FTbEM7O0FBQ0F2RyxNQUFFLENBQUMxQyxFQUFILENBQU1pSixTQUFOLEVBQWlCO0FBQUNoSixjQUFRLEVBQUMsSUFBVjtBQUFnQnFDLGFBQU8sRUFBQztBQUF4QixLQUFqQixFQUE2QyxXQUE3QztBQUNBSSxNQUFFLENBQUMxQyxFQUFILENBQU1rSixXQUFOLEVBQW1CO0FBQUNqSixjQUFRLEVBQUMsSUFBVjtBQUFnQnFDLGFBQU8sRUFBQztBQUF4QixLQUFuQixFQUErQyxXQUEvQztBQUNELEdBWkQ7O0FBZUEvQyxHQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QjJGLEVBQTdCLENBQWdDLE9BQWhDLEVBQXdDLFlBQVU7QUFFaEQsUUFBSUcsS0FBSyxHQUFHdEYsSUFBSSxDQUFDNEMsUUFBTCxDQUFjO0FBQ3hCeUMsWUFBTSxFQUFDLElBRGlCO0FBRXhCeEMsY0FBUSxFQUFDO0FBQ1AzQyxnQkFBUSxFQUFDLElBREY7QUFFUEssWUFBSSxFQUFDLFlBRkU7QUFHUGdGLGtCQUFVLEVBQUUsc0JBQVUsQ0FDcEI7QUFDQTtBQUNEO0FBTk07QUFGZSxLQUFkLENBQVo7QUFXQSxRQUFJOEQsU0FBUyxHQUFHN0osQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFROEosV0FBUixLQUF3QixFQUF4QztBQUNBLFFBQUlDLE9BQU8sR0FBRy9KLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCNEosR0FBN0IsQ0FBaUMsSUFBakMsQ0FBZDtBQUNBLFFBQUlJLElBQUksR0FBR0QsT0FBTyxDQUFDcEksSUFBUixDQUFhLEdBQWIsQ0FBWDtBQUNBLFFBQUlzSSxXQUFXLEdBQUdGLE9BQU8sQ0FBQ3BJLElBQVIsQ0FBYSxhQUFiLENBQWxCO0FBQ0EsUUFBSXVJLFlBQVksR0FBR0gsT0FBTyxDQUFDcEksSUFBUixDQUFhLGNBQWIsQ0FBbkI7QUFDQSxRQUFJd0ksS0FBSyxHQUFHbkssQ0FBQyxDQUFDLElBQUQsQ0FBYjtBQUNBLFFBQUlvSyxLQUFLLEdBQUdwSyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEyQixJQUFSLENBQWEsR0FBYixDQUFaO0FBQ0EsUUFBSTBJLFFBQVEsR0FBR3JLLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTJCLElBQVIsQ0FBYSxhQUFiLENBQWY7QUFDQSxRQUFJMkksU0FBUyxHQUFHdEssQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMkIsSUFBUixDQUFhLGNBQWIsQ0FBaEI7QUFDQSxRQUFJNEksWUFBWSxHQUFHdkssQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxJQUFSLENBQWEsNEJBQWIsQ0FBbkI7QUFDQSxRQUFJaUssU0FBUyxHQUFHeEssQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxJQUFSLENBQWEsaUJBQWIsQ0FBaEI7QUFDQSxRQUFJa0ssVUFBVSxHQUFHekssQ0FBQyxDQUFDLGVBQUQsQ0FBbEI7QUFDQSxRQUFJMEssVUFBVSxHQUFHMUssQ0FBQyxDQUFDLHNDQUFELENBQWxCO0FBRUE4RixTQUFLLENBQUNqRCxHQUFOLENBQVU2SCxVQUFWLEVBQXNCO0FBQUNuRixZQUFNLEVBQUM7QUFBUixLQUF0QjtBQUNBTyxTQUFLLENBQUNqRCxHQUFOLENBQVV1SCxLQUFWLEVBQWlCO0FBQUNwSCxPQUFDLEVBQUMsRUFBSDtBQUFPRCxhQUFPLEVBQUM7QUFBZixLQUFqQjtBQUNBK0MsU0FBSyxDQUFDckYsRUFBTixDQUFTc0osT0FBVCxFQUFrQjtBQUFDWSxXQUFLLEVBQUMzQixLQUFQO0FBQWM0QixnQkFBVSxFQUFDLE9BQXpCO0FBQWtDNUgsT0FBQyxFQUFDNkc7QUFBcEMsS0FBbEIsRUFBa0UsUUFBbEU7QUFDQS9ELFNBQUssQ0FBQ3JGLEVBQU4sQ0FBU3dKLFdBQVQsRUFBc0I7QUFBQ2xILGFBQU8sRUFBQztBQUFULEtBQXRCLEVBQW1DLFFBQW5DO0FBQ0ErQyxTQUFLLENBQUNyRixFQUFOLENBQVN5SixZQUFULEVBQXVCO0FBQUNuSCxhQUFPLEVBQUM7QUFBVCxLQUF2QixFQUFvQyxRQUFwQyxFQS9CZ0QsQ0FnQ2hEOztBQUNBK0MsU0FBSyxDQUFDckYsRUFBTixDQUFTMEosS0FBVCxFQUFnQjtBQUFDUSxXQUFLLEVBQUMsT0FBUDtBQUFnQkMsZ0JBQVUsRUFBQ25DLEtBQTNCO0FBQWtDekYsT0FBQyxFQUFDO0FBQXBDLEtBQWhCLEVBQXdELFFBQXhEO0FBQ0E4QyxTQUFLLENBQUNyRixFQUFOLENBQVMySixLQUFULEVBQWdCO0FBQUNwSCxPQUFDLEVBQUMsQ0FBSDtBQUFNRCxhQUFPLEVBQUM7QUFBZCxLQUFoQixFQUFrQyxRQUFsQztBQUNBK0MsU0FBSyxDQUFDckYsRUFBTixDQUFTNEosUUFBVCxFQUFtQjtBQUFDdEgsYUFBTyxFQUFDO0FBQVQsS0FBbkIsRUFBZ0MsUUFBaEM7QUFDQStDLFNBQUssQ0FBQ3JGLEVBQU4sQ0FBUzZKLFNBQVQsRUFBb0I7QUFBQ3ZILGFBQU8sRUFBQztBQUFULEtBQXBCLEVBQWlDLFFBQWpDO0FBQ0ErQyxTQUFLLENBQUNyRixFQUFOLENBQVNnSyxVQUFULEVBQXFCO0FBQUNyRSxXQUFLLEVBQUM7QUFBUCxLQUFyQixFQUFnQyxRQUFoQztBQUNBTixTQUFLLENBQUNyRixFQUFOLENBQVNpSyxVQUFULEVBQXFCO0FBQUMzSCxhQUFPLEVBQUM7QUFBVCxLQUFyQixFQUFrQyxRQUFsQzs7QUFFQSxRQUFJL0MsQ0FBQyxDQUFDeUgsTUFBRCxDQUFELENBQVVDLEtBQVYsS0FBb0IsSUFBeEIsRUFBOEI7QUFDNUI1QixXQUFLLENBQUNFLElBQU47QUFDQXdELGVBQVMsQ0FBQ2UsWUFBRCxDQUFUO0FBQ0Q7O0FBQ0R2SyxLQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQzZLLE1BQXBDO0FBQ0E3SyxLQUFDLENBQUMsZUFBRCxDQUFELENBQW1CTyxJQUFuQixDQUF3QixtQkFBeEIsRUFBNkNpSyxTQUE3QztBQUNELEdBOUNEOztBQWlEQSxNQUFJeEssQ0FBQyxDQUFDeUgsTUFBRCxDQUFELENBQVVDLEtBQVYsTUFBcUIsSUFBekIsRUFBK0I7QUFFN0IxSCxLQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QjhLLEtBQTdCLENBQW1DO0FBQ2pDQyxjQUFRLEVBQUUsSUFEdUI7QUFFakNDLGtCQUFZLEVBQUUsQ0FGbUI7QUFHakNDLGNBQVEsRUFBRSxzQ0FIdUI7QUFJakNDLFlBQU0sRUFBQyxLQUowQjtBQUtqQztBQUNBO0FBQ0FDLFdBQUssRUFBQyxHQVAyQjtBQVFqQ0MsYUFBTyxFQUFFLDZCQVJ3QjtBQVNqQztBQUNBQyxtQkFBYSxFQUFFO0FBVmtCLEtBQW5DO0FBYUFyTCxLQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQzhLLEtBQTFDLENBQWdEO0FBQzlDQyxjQUFRLEVBQUUsSUFEb0M7QUFFOUNDLGtCQUFZLEVBQUUsQ0FGZ0M7QUFHOUNDLGNBQVEsRUFBRSx5QkFIb0M7QUFJOUNDLFlBQU0sRUFBQyxLQUp1QztBQUs5Q0MsV0FBSyxFQUFDLEdBTHdDO0FBTTlDQyxhQUFPLEVBQUU7QUFOcUMsS0FBaEQ7QUFTQXBMLEtBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCMkYsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBVTtBQUNqRCxVQUFJMkYsT0FBTyxHQUFHdEwsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxJQUFSLENBQWEsaUJBQWIsQ0FBZDtBQUNBLFVBQUltSyxVQUFVLEdBQUcxSyxDQUFDLENBQUMsc0NBQUQsQ0FBbEI7QUFDQSxVQUFJdUwsWUFBWSxHQUFHdkwsQ0FBQyxDQUFDLHlCQUFELENBQXBCO0FBQ0EsVUFBSXdMLDBCQUEwQixHQUFHeEwsQ0FBQyxDQUFDLDZCQUFELENBQWxDO0FBQ0EsVUFBSXlLLFVBQVUsR0FBR3pLLENBQUMsQ0FBQyxlQUFELENBQWxCO0FBRUEsVUFBSXlMLFVBQVUsR0FBR2pMLElBQUksQ0FBQzRDLFFBQUwsQ0FBYztBQUM3QnlDLGNBQU0sRUFBQyxJQURzQjtBQUU3Qm5GLGdCQUFRLEVBQUMsR0FGb0I7QUFHN0JLLFlBQUksRUFBQyxVQUh3QjtBQUk3QmdGLGtCQUFVLEVBQUUsc0JBQVU7QUFDcEJ2RixjQUFJLENBQUNxQyxHQUFMLENBQVM2SCxVQUFULEVBQXFCO0FBQUNuRixrQkFBTSxFQUFDLENBQUM7QUFBVCxXQUFyQixFQURvQixDQUVwQjtBQUNBO0FBQ0Q7QUFSNEIsT0FBZCxDQUFqQjtBQVdBLFVBQUltRyxRQUFRLEdBQUdsTCxJQUFJLENBQUM0QyxRQUFMLENBQWM7QUFDM0J5QyxjQUFNLEVBQUMsSUFEb0I7QUFFM0JuRixnQkFBUSxFQUFDLEdBRmtCO0FBRzNCSyxZQUFJLEVBQUMsVUFIc0I7QUFJM0JnRixrQkFBVSxFQUFFLHNCQUFVO0FBQ3BCL0YsV0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0M2SyxNQUFwQztBQUNEO0FBTjBCLE9BQWQsQ0FBZjtBQVNBWSxnQkFBVSxDQUFDaEwsRUFBWCxDQUFjZ0ssVUFBZCxFQUEwQjtBQUFDckUsYUFBSyxFQUFDO0FBQVAsT0FBMUIsRUFBcUMsUUFBckM7QUFDQXFGLGdCQUFVLENBQUNoTCxFQUFYLENBQWNpSyxVQUFkLEVBQTBCO0FBQUMzSCxlQUFPLEVBQUMsQ0FBVDtBQUFZd0MsY0FBTSxFQUFDLENBQUM7QUFBcEIsT0FBMUIsRUFBa0QsUUFBbEQ7QUFDQWtHLGdCQUFVLENBQUNoTCxFQUFYLENBQWM4SyxZQUFkLEVBQTRCO0FBQUN4SSxlQUFPLEVBQUMsQ0FBVDtBQUFXd0MsY0FBTSxFQUFDLENBQUM7QUFBbkIsT0FBNUIsRUFBbUQsUUFBbkQ7QUFDQWtHLGdCQUFVLENBQUNoTCxFQUFYLENBQWMrSywwQkFBZCxFQUEwQztBQUFDekksZUFBTyxFQUFDLENBQVQ7QUFBWXdDLGNBQU0sRUFBQyxDQUFDO0FBQXBCLE9BQTFDLEVBQWlFLFFBQWpFO0FBR0FtRyxjQUFRLENBQUNqTCxFQUFULENBQVlpSyxVQUFaLEVBQXdCO0FBQUMzSCxlQUFPLEVBQUMsQ0FBVDtBQUFZd0MsY0FBTSxFQUFDO0FBQW5CLE9BQXhCLEVBQWdELFNBQWhEO0FBQ0FtRyxjQUFRLENBQUNqTCxFQUFULENBQVk4SyxZQUFaLEVBQTBCO0FBQUN4SSxlQUFPLEVBQUMsQ0FBVDtBQUFZd0MsY0FBTSxFQUFDO0FBQW5CLE9BQTFCLEVBQWlELFNBQWpEO0FBQ0FtRyxjQUFRLENBQUNqTCxFQUFULENBQVkrSywwQkFBWixFQUF3QztBQUFDekksZUFBTyxFQUFDLENBQVQ7QUFBWXdDLGNBQU0sRUFBQztBQUFuQixPQUF4QyxFQUErRCxTQUEvRDtBQUNBbUcsY0FBUSxDQUFDakwsRUFBVCxDQUFZZ0ssVUFBWixFQUF3QjtBQUFDckUsYUFBSyxFQUFDLENBQVA7QUFBVWIsY0FBTSxFQUFDO0FBQWpCLE9BQXhCLEVBQThDLGNBQTlDO0FBR0F2RixPQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQzZLLE1BQXBDO0FBQ0E3SyxPQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QjJMLE9BQTdCLENBQXFDLGNBQVlMLE9BQVosR0FBb0IsVUFBekQ7QUFFQXRMLE9BQUMsQ0FBQyxzQ0FBRCxDQUFELENBQTBDOEssS0FBMUMsQ0FBZ0QsWUFBaEQ7QUFDQTlLLE9BQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCOEssS0FBN0IsQ0FBbUMsWUFBbkM7QUFFQVcsZ0JBQVUsQ0FBQ3pGLElBQVg7O0FBRUEsZUFBUzRGLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCO0FBQzdCO0FBQ0FDLGNBQU0sR0FBRyxJQUFJQyxFQUFFLENBQUNDLE1BQVAsQ0FBY1YsT0FBZCxFQUF1QjtBQUM5QlcsZ0JBQU0sRUFBRSxNQURzQjtBQUU5QnZFLGVBQUssRUFBRSxNQUZ1QjtBQUc5QndFLG9CQUFVLEVBQUU7QUFDVkMsZUFBRyxFQUFDLENBRE07QUFFVkMsb0JBQVEsRUFBRSxDQUZBO0FBR1ZDLG9CQUFRLEVBQUUsQ0FIQTtBQUlWQyxvQkFBUSxFQUFFLENBSkE7QUFLVkMsb0JBQVEsRUFBRSxDQUxBO0FBTVZDLDBCQUFjLEVBQUU7QUFOTixXQUhrQjtBQVc5QkMsaUJBQU8sRUFBRW5CLE9BWHFCO0FBWTlCb0IsZ0JBQU0sRUFBRTtBQUNOLHVCQUFXQyxhQURMO0FBRU4sNkJBQWlCQztBQUZYO0FBWnNCLFNBQXZCLENBQVQsQ0FGNkIsQ0FvQjdCOztBQUNBLGlCQUFTQSxtQkFBVCxDQUE2QkMsS0FBN0IsRUFBb0M7QUFFbEMsY0FBSUEsS0FBSyxDQUFDQyxJQUFOLElBQWNmLEVBQUUsQ0FBQ2dCLFdBQUgsQ0FBZUMsU0FBakMsRUFBNEMsQ0FDMUM7QUFDQTtBQUNBO0FBQ0QsV0FKRCxNQUlPLElBQUlILEtBQUssQ0FBQ0MsSUFBTixJQUFjZixFQUFFLENBQUNnQixXQUFILENBQWVFLE9BQWpDLEVBQTBDO0FBQy9DO0FBQ0FqTixhQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQzhLLEtBQTFDLENBQWdELFdBQWhEO0FBQ0E5SyxhQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QjhLLEtBQTdCLENBQW1DLFdBQW5DO0FBQ0FXLHNCQUFVLENBQUN6RixJQUFYO0FBQ0QsV0FMTSxNQUtBLElBQUk2RyxLQUFLLENBQUNDLElBQU4sSUFBY2YsRUFBRSxDQUFDZ0IsV0FBSCxDQUFlRyxNQUFqQyxFQUF5QztBQUM5QztBQUNBbE4sYUFBQyxDQUFDLHNDQUFELENBQUQsQ0FBMEM4SyxLQUExQyxDQUFnRCxXQUFoRDtBQUNBOUssYUFBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkI4SyxLQUE3QixDQUFtQyxXQUFuQztBQUNBWSxvQkFBUSxDQUFDMUYsSUFBVDtBQUNELFdBTE0sTUFLQSxJQUFJNkcsS0FBSyxDQUFDQyxJQUFOLElBQWNmLEVBQUUsQ0FBQ2dCLFdBQUgsQ0FBZUksS0FBakMsRUFBd0M7QUFDN0M7QUFDQW5OLGFBQUMsQ0FBQyxzQ0FBRCxDQUFELENBQTBDOEssS0FBMUMsQ0FBZ0QsV0FBaEQ7QUFDQTlLLGFBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCOEssS0FBN0IsQ0FBbUMsV0FBbkM7QUFDQVksb0JBQVEsQ0FBQzFGLElBQVQ7QUFFRDtBQUNGLFNBNUM0QixDQTRDM0I7O0FBQ0gsT0E1RmdELENBNEYvQztBQUVGOzs7QUFFRTRGLGlCQUFXO0FBQ2QsS0FqR0Q7QUFrR0QsR0ExSEQsTUEySEs7QUFFSDVMLEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIyRixFQUFuQixDQUFzQixPQUF0QixFQUErQixZQUFVO0FBQ3ZDLFVBQUkyRixPQUFPLEdBQUd0TCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLElBQVIsQ0FBYSxtQkFBYixDQUFkO0FBQ0EsVUFBSWtLLFVBQVUsR0FBR3pLLENBQUMsQ0FBQyxlQUFELENBQWxCO0FBRUFRLFVBQUksQ0FBQ0MsRUFBTCxDQUFRZ0ssVUFBUixFQUFvQjtBQUFDaEUsY0FBTSxFQUFDLEdBQVI7QUFBYS9GLGdCQUFRLEVBQUMsSUFBdEI7QUFBNEJvSCxjQUFNLEVBQUMsQ0FBQyxDQUFwQztBQUF1Qy9HLFlBQUksRUFBQztBQUE1QyxPQUFwQjtBQUVBZixPQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQzZLLE1BQXBDO0FBQ0E3SyxPQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QjJMLE9BQTdCLENBQXFDLGNBQVlMLE9BQVosR0FBb0IsVUFBekQ7O0FBR0EsZUFBU00sV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDN0I7QUFDQUMsY0FBTSxHQUFHLElBQUlDLEVBQUUsQ0FBQ0MsTUFBUCxDQUFjVixPQUFkLEVBQXVCO0FBQzlCVyxnQkFBTSxFQUFFLE1BRHNCO0FBRTlCdkUsZUFBSyxFQUFFLE1BRnVCO0FBRzlCd0Usb0JBQVUsRUFBRTtBQUNWQyxlQUFHLEVBQUMsQ0FETTtBQUVWQyxvQkFBUSxFQUFFLENBRkE7QUFHVkMsb0JBQVEsRUFBRSxDQUhBO0FBSVZDLG9CQUFRLEVBQUUsQ0FKQTtBQUtWQyxvQkFBUSxFQUFFLENBTEE7QUFNVkMsMEJBQWMsRUFBRTtBQU5OLFdBSGtCO0FBVzlCQyxpQkFBTyxFQUFFbkIsT0FYcUI7QUFZOUJvQixnQkFBTSxFQUFFO0FBQ04sdUJBQVdDLGFBREw7QUFFTiw2QkFBaUJDO0FBRlg7QUFac0IsU0FBdkIsQ0FBVCxDQUY2QixDQW9CN0I7O0FBQ0EsaUJBQVNBLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUVsQyxjQUFJbkMsVUFBVSxHQUFHMUssQ0FBQyxDQUFDLHNDQUFELENBQWxCO0FBQ0EsY0FBSXVMLFlBQVksR0FBR3ZMLENBQUMsQ0FBQyx5QkFBRCxDQUFwQjtBQUNBLGNBQUl3TCwwQkFBMEIsR0FBR3hMLENBQUMsQ0FBQyw2QkFBRCxDQUFsQztBQUVBLGNBQUltRCxFQUFFLEdBQUczQyxJQUFJLENBQUM0QyxRQUFMLENBQWM7QUFDckJ5QyxrQkFBTSxFQUFDLElBRGM7QUFFckJuRixvQkFBUSxFQUFDLEdBRlk7QUFHckJLLGdCQUFJLEVBQUMsVUFIZ0I7QUFJckJnRixzQkFBVSxFQUFFLHNCQUFVO0FBQ3BCdkYsa0JBQUksQ0FBQ3FDLEdBQUwsQ0FBUzZILFVBQVQsRUFBcUI7QUFBQ25GLHNCQUFNLEVBQUMsQ0FBQztBQUFULGVBQXJCO0FBQ0EvRSxrQkFBSSxDQUFDNE0sWUFBTCxDQUFrQjNDLFVBQWxCO0FBQ0FqSyxrQkFBSSxDQUFDcUMsR0FBTCxDQUFTNEgsVUFBVCxFQUFxQjtBQUFDaEUsc0JBQU0sRUFBQztBQUFSLGVBQXJCO0FBQ0Q7QUFSb0IsV0FBZCxDQUFUO0FBV0EsY0FBSTRHLEdBQUcsR0FBRzdNLElBQUksQ0FBQzRDLFFBQUwsQ0FBYztBQUN0QnlDLGtCQUFNLEVBQUMsSUFEZTtBQUV0Qm5GLG9CQUFRLEVBQUMsR0FGYTtBQUd0QkssZ0JBQUksRUFBQyxVQUhpQjtBQUl0QmdGLHNCQUFVLEVBQUUsc0JBQVUsQ0FDcEI7QUFDRDtBQU5xQixXQUFkLENBQVY7QUFTQTVDLFlBQUUsQ0FBQzFDLEVBQUgsQ0FBTWdLLFVBQU4sRUFBa0I7QUFBQ3JFLGlCQUFLLEVBQUM7QUFBUCxXQUFsQixFQUE2QixRQUE3QjtBQUNBakQsWUFBRSxDQUFDMUMsRUFBSCxDQUFNaUssVUFBTixFQUFrQjtBQUFDM0gsbUJBQU8sRUFBQztBQUFULFdBQWxCLEVBQStCLFFBQS9CO0FBQ0FJLFlBQUUsQ0FBQzFDLEVBQUgsQ0FBTThLLFlBQU4sRUFBb0I7QUFBQ3ZJLGFBQUMsRUFBQztBQUFILFdBQXBCLEVBQWdDLFFBQWhDO0FBQ0FHLFlBQUUsQ0FBQzFDLEVBQUgsQ0FBTStLLDBCQUFOLEVBQWtDO0FBQUN6SSxtQkFBTyxFQUFDO0FBQVQsV0FBbEMsRUFBOEMsUUFBOUM7QUFFQXNLLGFBQUcsQ0FBQzVNLEVBQUosQ0FBTzhLLFlBQVAsRUFBcUI7QUFBQ3ZJLGFBQUMsRUFBQztBQUFILFdBQXJCLEVBQThCLFNBQTlCO0FBQ0FxSyxhQUFHLENBQUM1TSxFQUFKLENBQU8rSywwQkFBUCxFQUFtQztBQUFDekksbUJBQU8sRUFBQztBQUFULFdBQW5DLEVBQStDLFNBQS9DOztBQUdBLGNBQUk4SixLQUFLLENBQUNDLElBQU4sSUFBY2YsRUFBRSxDQUFDZ0IsV0FBSCxDQUFlQyxTQUFqQyxFQUE0QztBQUMxQztBQUNBO0FBQ0E3SixjQUFFLENBQUM2QyxJQUFIO0FBQ0QsV0FKRCxNQUlPLElBQUk2RyxLQUFLLENBQUNDLElBQU4sSUFBY2YsRUFBRSxDQUFDZ0IsV0FBSCxDQUFlRSxPQUFqQyxFQUEwQztBQUMvQztBQUNBOUosY0FBRSxDQUFDNkMsSUFBSCxHQUYrQyxDQUcvQztBQUNELFdBSk0sTUFJQSxJQUFJNkcsS0FBSyxDQUFDQyxJQUFOLElBQWNmLEVBQUUsQ0FBQ2dCLFdBQUgsQ0FBZUcsTUFBakMsRUFBeUM7QUFDOUM7QUFDQUcsZUFBRyxDQUFDckgsSUFBSixHQUY4QyxDQUc5QztBQUNELFdBSk0sTUFJQSxJQUFJNkcsS0FBSyxDQUFDQyxJQUFOLElBQWNmLEVBQUUsQ0FBQ2dCLFdBQUgsQ0FBZUksS0FBakMsRUFBd0M7QUFDN0M7QUFDQUUsZUFBRyxDQUFDckgsSUFBSixHQUY2QyxDQUc3QztBQUNEO0FBQ0YsU0F6RTRCLENBeUUzQjs7QUFDSCxPQXBGc0MsQ0FvRnJDO0FBRUY7OztBQUVFNEYsaUJBQVc7QUFDZCxLQXpGRDtBQTBGRCxHQXpTNEIsQ0F5UzNCOztBQUVILENBM1NNLEM7Ozs7Ozs7Ozs7OztBQ05QO0FBQUE7QUFBQTtBQW1CQW5FLE1BQU0sQ0FBQzZGLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQVc7QUFFekNqSSxtRUFBa0I7QUFDbEJHLG1FQUFrQjtBQUNsQmpHLDBEQUFTO0FBQ1QrSSw2REFBWTtBQUNaRSw0REFBVztBQUNYbEMsOERBQWE7QUFDYkMsa0VBQWlCO0FBQ2pCSyxzRUFBcUI7QUFDckJlLHFFQUFvQjtBQUNwQkssbUVBQWtCO0FBQ2xCRSxvRUFBbUI7QUFDbkIxRyxrRUFBaUI7QUFDakJrQyxrRUFBaUI7QUFDakJlLGtFQUFpQixHQWZ3QixDQWdCekM7O0FBR0F6RSxHQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQzhLLEtBQWhDLENBQXNDO0FBQ3BDQyxZQUFRLEVBQUUsSUFEMEI7QUFFcENDLGdCQUFZLEVBQUUsQ0FGc0I7QUFHcENDLFlBQVEsRUFBRSx1QkFIMEI7QUFJcENDLFVBQU0sRUFBQyxJQUo2QjtBQUtwQ3FDLFFBQUksRUFBQyxJQUwrQjtBQU1wQ0MsYUFBUyxFQUFDLHFCQU4wQjtBQU9wQ0MsYUFBUyxFQUFDLHFCQVAwQjtBQVFwQ0MsY0FBVSxFQUFDLHVCQVJ5QjtBQVNwQ3ZDLFNBQUssRUFBQyxHQVQ4QjtBQVVwQ0MsV0FBTyxFQUFFLDZCQVYyQjtBQVdwQ2dCLFlBQVEsRUFBRSxJQVgwQjtBQVlwQ2YsaUJBQWEsRUFBRTtBQVpxQixHQUF0QztBQWVBckwsR0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkI4SyxLQUEzQixDQUFpQztBQUMvQkMsWUFBUSxFQUFFLElBRHFCO0FBRS9CQyxnQkFBWSxFQUFFLENBRmlCO0FBRy9CQyxZQUFRLEVBQUUsNEJBSHFCO0FBSS9CQyxVQUFNLEVBQUMsS0FKd0I7QUFLL0JDLFNBQUssRUFBQyxHQUx5QjtBQU0vQkMsV0FBTyxFQUFFLDZCQU5zQjtBQU8vQnVDLE9BQUcsRUFBRTtBQVAwQixHQUFqQztBQVVBM04sR0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUMyRixFQUFqQyxDQUFvQyxPQUFwQyxFQUE2QyxVQUFTaUksQ0FBVCxFQUFZO0FBQ3ZEQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFJQyxPQUFPLEdBQUc5TixDQUFDLENBQUMsSUFBRCxDQUFELENBQVE4TSxJQUFSLENBQWEsT0FBYixDQUFkO0FBQ0E5TSxLQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQzhLLEtBQWhDLENBQXNDLFdBQXRDLEVBQW1EZ0QsT0FBTyxHQUFHLENBQTdEO0FBQ0QsR0FKRDs7QUFVQSxNQUFJOU4sQ0FBQyxDQUFDeUgsTUFBRCxDQUFELENBQVVDLEtBQVYsTUFBcUIsR0FBekIsRUFBOEIsQ0FFN0IsQ0FGRCxNQUdLLENBRUo7QUFFRixDQTdERDtBQStEQUQsTUFBTSxDQUFDNkYsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVztBQUUzQyxNQUFJdE4sQ0FBQyxDQUFDeUgsTUFBRCxDQUFELENBQVVDLEtBQVYsS0FBb0IsSUFBeEIsRUFBOEIsQ0FFN0IsQ0FGRCxNQUdLLENBRUw7QUFDRCxDQVJELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gaW1wb3J0ICcuL2NvbXBvbmVudHMvcHJlbG9hZGVyJztcbi8vIGltcG9ydCAnLi9jb21wb25lbnRzL21vYmlsZU1lbnUnO1xuLy8gaW1wb3J0ICcuL2NvbXBvbmVudHMvZXh0ZXJuYWxMaW5rcyc7XG4vLyBpbXBvcnQgJy4vY29tcG9uZW50cy9sb2FkTWFpbGNoaW1wU2NyaXB0cy5qcyc7XG4vLyBpbXBvcnQgJy4vY29tcG9uZW50cy9zbW9vdGhTY3JvbGwuanMnO1xuLy8gaW1wb3J0ICcuL2NvbXBvbmVudHMvcGlubmVkU3ViTmF2LmpzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3dpbmRvd0xvYWQuanMnO1xuLy8gaW1wb3J0ICcuL2NvbXBvbmVudHMvYWxsLmpzJztcblxuXG4iLCJleHBvcnQgbGV0IGNvdW50ZXJVcCA9ICgpID0+IHtcblxuXG4gIGxldCBjb3VudGVyQ291bnQgPSAoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiBudW1iZXJXaXRoQ29tbWFzKG4pIHtcbiAgICAgIHZhciBwYXJ0cz1uLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO1xuICAgICAgcmV0dXJuIHBhcnRzWzBdLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgICB9XG5cbiAgICBsZXQgaSA9IDE7XG4gICAgXG4gICAgJCgnLmltcGFjdC1jb3VudGVyLW51bWJlcnMnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICBsZXQgY291bnRlciA9IHsgdmFyOiAwIH07XG4gICAgICAvLyBsZXQgdGhlc2VOdW1iZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWwtXCIraSk7XG4gICAgICBsZXQgdGhlc2VOdW1iZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbXBhY3QtbnVtYmVycy1cIitpKTtcbiAgICAgIGxldCBlbmRpbmdDb3VudGVyVmFyID0gJCh0aGVzZU51bWJlcnMpLmF0dHIoJ2RhdGEtY291bnQnKTtcblxuICAgICAgICBcbiAgICAgIGdzYXAudG8oY291bnRlciwge1xuICAgICAgICBkdXJhdGlvbjo0LFxuICAgICAgICBkZWxheTowLjUsXG4gICAgICAgIHZhcjogZW5kaW5nQ291bnRlclZhciwgXG4gICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbndjID0gbnVtYmVyV2l0aENvbW1hcyhjb3VudGVyLnZhcik7XG4gICAgICAgICAgICB0aGVzZU51bWJlcnMuaW5uZXJIVE1MID0gbndjO1xuICAgICAgICB9LFxuICAgICAgICBlYXNlOkNpcmMuZWFzZU91dFxuICAgICAgfSk7XG4gICAgICBpKytcbiAgICB9KTtcbiAgfVxuXG4gIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICB0cmlnZ2VyOiBcIiNpbXBhY3QtdHJhY2tlci10cmlnZ2VyXCIsXG4gICAgc3RhcnQ6IFwidG9wIGJvdHRvbS09NDBcIixcbiAgICBvbmNlOnRydWUsXG4gICAgXG4gICAgb25FbnRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhbGVydCgnb2snKTtcbiAgICAgIGNvdW50ZXJDb3VudCgpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJleHBvcnQgeyBcbiAgc2V0dXBQb3ZlcnR5UG9wdXBzLFxuICBjbGlja1BvdmVydHlQb3B1cHMsXG59IGZyb20gJy4vcG92ZXJ0eVBvcHVwcydcblxuZXhwb3J0IHsgXG4gIGNvdW50ZXJVcCxcbn0gZnJvbSAnLi9pbXBhY3RDb3VudGVyJ1xuXG5leHBvcnQge1xuICB2aWRlb1RvZ2dsZSxcbiAgbG9hZFRoZVZpZGVvLFxufSBmcm9tICcuL3ZpZGVvVG9nZ2xlLmpzJ1xuXG5leHBvcnQge1xuICBoZXJvQW5pbWF0aW9uLFxuICB3aHlFeGlzdEFuaW1hdGlvbixcbiAgd2hlcmVPcGVyYXRlQW5pbWF0aW9uLFxuICB3aGF0UG92ZXJ0eUFuaW1hdGlvbixcbiAgb3VySW1wYWN0QW5pbWF0aW9uLFxuICB5b3VySW1wYWN0QW5pbWF0aW9uXG59IGZyb20gJy4vc2Nyb2xsaW5nQW5pbWF0aW9ucy5qcydcblxuZXhwb3J0IHtcbiAgcGVyc29uYTFBbmltYXRpb24sXG4gIHBlcnNvbmEyQW5pbWF0aW9uLFxuICBwZXJzb25hM0FuaW1hdGlvblxufSBmcm9tICcuL3BlcnNvbmFBbmltYXRpb25zLmpzJ1xuXG5cbi8vIGV4cG9ydCB7XG4vLyAgIGFmcmljYU1hcEFuaW1hdGlvbnNcbi8vIH0gZnJvbSAnLi9hZnJpY2FNYXBBbmltYXRpb25zLmpzJ1xuIiwiZXhwb3J0IGxldCBwZXJzb25hMUFuaW1hdGlvbiA9ICgpID0+IHtcbiAgbGV0IHRoaXNTZWN0aW9uID0gJChcIi5pbXBhY3RQZXJzb25hMVwiKTtcbiAgbGV0IHRoaXNQZXJzb25hID0gJCh0aGlzU2VjdGlvbikuZmluZCgnc3ZnJyk7XG4gIGxldCBwMUJhY2sgPSAkKFwiLnBlcnNvbmExQmFja2dyb3VuZFwiKTtcbiAgbGV0IHAxQmFja1BhdGggPSAkKHAxQmFjaykuZmluZCgncGF0aCcpO1xuXG4gIGxldCBwMUltZyA9ICQoXCIucGVyc29uYTFJbWFnZVwiKVxuXG4gIGxldCBwMVRyaSA9ICQoXCIucGVyc29uYTFUcmlhbmdsZXNcIilcbiAgbGV0IHAxVHJpUG9seSA9ICQocDFUcmlQb2x5KS5maW5kKCdwb2x5Z29uJyk7XG5cbiAgbGV0IHAxV2F2ZXMgPSAkKFwiLnBlcnNvbmExV2F2ZXNcIilcbiAgbGV0IHAxV2F2ZVBhdGggPSAocDFXYXZlcykuZmluZCgncGF0aCcpO1xuXG4gIGxldCBwMVdlZGdlID0gJChcIi5wZXJzb25hMVdlZGdlXCIpXG4gIGxldCBwMVdlZGdlUGF0aCA9ICQocDFXZWRnZSkuZmluZCgncGF0aCcpO1xuXG4gIGxldCBwMUNoYXJ0ID0gJChcIi5wZXJzb25hMUNoYXJ0XCIpXG4gIGxldCBwMUNoYXJ0UGF0aCA9IHAxQ2hhcnQuZmluZCgncGF0aCcpXG4gIGxldCBwMUNoYXJ0TGluZSA9IHAxQ2hhcnQuZmluZCgnbGluZScpXG5cbiAgbGV0IHAxQ2hhcnRUZXh0ID0gJChcIi5wZXJzb25hMUNoYXJ0VGV4dFwiKVxuICBsZXQgcDFDaGFydFRleHRQYXRoID0gJChwMUNoYXJ0VGV4dCkuZmluZCgncGF0aCcpO1xuICBcbiAgbGV0IHAxUGllY2VzID0gW3AxQmFjaywgcDFUcmksIHAxV2F2ZXMsIHAxQ2hhcnQsIHAxQ2hhcnRUZXh0XTtcblxuICBsZXQgdGV4dCA9ICQoXCIuaW1wYWN0UGVyc29uYTFUZXh0XCIpLmNoaWxkcmVuKCk7XG4gIFxuICBnc2FwLnNldCh0aGlzU2VjdGlvbiwge3BlcnNwZWN0aXZlOjEwMDB9KTtcbiAgZ3NhcC5zZXQoW3AxUGllY2VzLHAxV2VkZ2VdLCB7b3BhY2l0eTowfSk7XG4gIGdzYXAuc2V0KHRleHQsIHtvcGFjaXR5OjAsIHk6LTN9KTtcbiAgZ3NhcC5zZXQodGhpc1BlcnNvbmEsIHtyb3RhdGlvblk6MTAsIG9wYWNpdHk6MC4zLCB0cmFuc2Zvcm1PcmlnaW46XCI0MCUgNTAlXCJ9KTtcblxuICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBkZWZhdWx0czp7XG4gICAgICBkdXJhdGlvbjowLjUsXG4gICAgfSxcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiB0aGlzU2VjdGlvbixcbiAgICAgIHN0YXJ0OiBcInRvcCBjZW50ZXJcIixcbiAgICAgIGVhc2U6J2NpcmMub3V0JyxcbiAgICAgIC8vIHRvZ2dsZUFjdGlvbnM6J3BsYXkgcmV2ZXJzZSBwbGF5IHJldmVyc2UnLFxuICAgIH1cbiAgfSk7XG4gIHRsLnRvKHRoaXNQZXJzb25hLCB7ZHVyYXRpb246MSwgcm90YXRpb25ZOjAsIG9wYWNpdHk6MX0sIFwicE91dDFcIik7XG4gIHRsLnRvKHRleHQsIHtvcGFjaXR5OjEsIHk6MCwgc3RhZ2dlcjowLjF9LCBcInBPdXQxKz0wLjJcIik7XG4gIHRsLnRvKHAxUGllY2VzLCB7b3BhY2l0eToxLCBzdGFnZ2VyOntcbiAgICAgIGFtb3VudDowLjUsXG4gICAgICBmcm9tOidyYW5kb20nLFxuICAgIH1cbiAgfSwgXCJwT3V0MSs9MC4xXCIpO1xuICB0bC50byhwMVdlZGdlLCB7b3BhY2l0eTouMjV9LCBcInBPdXQxKz0wLjFcIik7XG4gIFxuXG59XG5cbmV4cG9ydCBsZXQgcGVyc29uYTJBbmltYXRpb24gPSAoKSA9PiB7XG4gIGxldCB0aGlzU2VjdGlvbiA9ICQoXCIuaW1wYWN0UGVyc29uYTJcIik7XG4gIGxldCB0aGlzUGVyc29uYSA9ICQodGhpc1NlY3Rpb24pLmZpbmQoJ3N2ZycpO1xuICBsZXQgcDJCYWNrPSAkKFwiLnBlcnNvbmEyQmFja2dyb3VuZFwiKVxuICBsZXQgcDJCYWNrUmVjdCA9ICQocDJCYWNrKS5maW5kKCdyZWN0Jyk7XG4gIGxldCBwMkJhY2tQb2x5ID0gJChwMkJhY2spLmZpbmQoJ3BvbHlnb24nKTtcblxuXG4gIGxldCBwMkNoYXJ0PSAkKFwiLnBlcnNvbmEyQ2hhcnRcIilcbiAgbGV0IHAyQ2hhcnRQYXRoID0gJChwMkNoYXJ0KS5maW5kKCdwYXRoJyk7XG5cbiAgbGV0IHAyQ2hhcnRUZXh0ID0gJChcIi5wZXJzb25hMkNoYXJ0VGV4dFwiKVxuICBsZXQgcDJDaGFydFRleHRQYXRoID0gJChwMkNoYXJ0VGV4dCkuZmluZCgncGF0aCcpO1xuXG4gIGxldCBwMkltZyA9ICQoXCIucGVyc29uYTJJbWFnZVwiKVxuXG4gIGxldCBwMlJ1bGVyID0gJChcIi5wZXJzb25hMlJ1bGVyXCIpXG4gIGxldCBwMlJ1bGVyUGF0aCA9ICQocDJSdWxlcikuZmluZCgncGF0aCcpO1xuICBsZXQgcDJSdWxlckxpbmUgPSAkKHAyUnVsZXIpLmZpbmQoJ2xpbmUnKTtcblxuICBsZXQgcDJQbHVzZXMgPSAkKFwiLnBlcnNvbmEyUGx1c2VzXCIpXG4gIGxldCBwMlBsdXNlc1BhdGggPSAkKHAyUGx1c2VzKS5maW5kKCdwYXRoJyk7XG5cbiAgbGV0IHAyUGllY2VzID0gW3AyQmFjaywgcDJDaGFydCwgcDJDaGFydFRleHQsIHAyUnVsZXIsIHAyUGx1c2VzXTtcblxuICBsZXQgdGV4dCA9ICQoXCIuaW1wYWN0UGVyc29uYTJUZXh0XCIpLmNoaWxkcmVuKCk7XG4gIFxuICBnc2FwLnNldCh0aGlzU2VjdGlvbiwge3BlcnNwZWN0aXZlOjEwMDB9KTtcbiAgZ3NhcC5zZXQocDJQaWVjZXMsIHtvcGFjaXR5OjB9KTtcbiAgZ3NhcC5zZXQodGV4dCwge29wYWNpdHk6MCwgeTotM30pO1xuICBnc2FwLnNldCh0aGlzUGVyc29uYSwge3JvdGF0aW9uWTotMTAsIG9wYWNpdHk6MC4zLCB0cmFuc2Zvcm1PcmlnaW46XCIxMDAlIDUwJVwifSk7XG5cbiAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgZGVmYXVsdHM6e1xuICAgICAgZHVyYXRpb246MC41LFxuICAgIH0sXG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogdGhpc1NlY3Rpb24sXG4gICAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXG4gICAgICBlYXNlOidjaXJjLm91dCcsXG4gICAgICAvLyB0b2dnbGVBY3Rpb25zOidwbGF5IHJldmVyc2UgcGxheSByZXZlcnNlJyxcbiAgICB9XG4gIH0pO1xuICB0bC50byh0aGlzUGVyc29uYSwge2R1cmF0aW9uOjEsIHJvdGF0aW9uWTowLCBvcGFjaXR5OjF9LCBcInBPdXQxXCIpO1xuICB0bC50byh0ZXh0LCB7b3BhY2l0eToxLCB5OjAsIHN0YWdnZXI6MC4xfSwgXCJwT3V0MSs9MC4yXCIpO1xuICB0bC50byhwMlBpZWNlcywge29wYWNpdHk6MSwgc3RhZ2dlcjp7XG4gICAgICBhbW91bnQ6MC4zLFxuICAgICAgZnJvbToncmFuZG9tJyxcbiAgICB9XG4gIH0sIFwicE91dDErPTAuMVwiKTtcblxufVxuXG5leHBvcnQgbGV0IHBlcnNvbmEzQW5pbWF0aW9uID0gKCkgPT4ge1xuICBsZXQgdGhpc1NlY3Rpb24gPSAkKFwiLmltcGFjdFBlcnNvbmEzXCIpO1xuICBsZXQgdGhpc1BlcnNvbmEgPSAkKHRoaXNTZWN0aW9uKS5maW5kKCdzdmcnKTtcbiAgbGV0IHAzQmFjaz0gJChcIi5wZXJzb25hM0JhY2tncm91bmRcIilcbiAgbGV0IHAzQmFja1BhdGggPSAkKHAzQmFjaykuZmluZCgncGF0aCcpO1xuICBsZXQgcDNCYWNrUmVjdCA9ICQocDNCYWNrKS5maW5kKCdyZWN0Jyk7XG5cbiAgbGV0IHAzSW1nID0gJChcIi5wZXJzb25hM0ltYWdlXCIpXG5cbiAgbGV0IHAzTnVtYmVycyA9ICQoXCIucGVyc29uYTNOdW1iZXJzXCIpO1xuICBsZXQgcDNOdW1iZXJzUGF0aCA9ICQocDNOdW1iZXJzKS5maW5kKCdwYXRoJyk7XG5cbiAgbGV0IHAzRGlhbCA9ICQoXCIucGVyc29uYTNEaWFsXCIpXG4gIGxldCBwM0RpYWxQYXRoID0gJChwM0RpYWwpLmZpbmQoJ3BhdGgnKTtcblxuICBsZXQgcDNEb3RzID0gJChcIi5wZXJzb25hM0RvdHNcIilcbiAgbGV0IHAzRG90c0NpcmNsZSA9ICQocDNEb3RzKS5maW5kKCdjaXJjbGUnKTtcblxuICBsZXQgcDNQaWVjZXMgPSBbcDNCYWNrLCBwM051bWJlcnMsIHAzRGlhbCwgcDNEb3RzXTtcblxuICBsZXQgdGV4dCA9ICQoXCIuaW1wYWN0UGVyc29uYTNUZXh0XCIpLmNoaWxkcmVuKCk7XG4gIFxuICBnc2FwLnNldCh0aGlzU2VjdGlvbiwge3BlcnNwZWN0aXZlOjEwMDB9KTtcbiAgZ3NhcC5zZXQocDNQaWVjZXMsIHtvcGFjaXR5OjB9KTtcbiAgZ3NhcC5zZXQodGV4dCwge29wYWNpdHk6MCwgeTotM30pO1xuICBnc2FwLnNldCh0aGlzUGVyc29uYSwge3JvdGF0aW9uWToxMCwgb3BhY2l0eTowLjMsIHRyYW5zZm9ybU9yaWdpbjpcIjUwJSA1MCVcIn0pO1xuXG4gIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIGRlZmF1bHRzOntcbiAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICB9LFxuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IHRoaXNTZWN0aW9uLFxuICAgICAgc3RhcnQ6IFwidG9wIGNlbnRlclwiLFxuICAgICAgZWFzZTonY2lyYy5vdXQnLFxuICAgICAgLy8gdG9nZ2xlQWN0aW9uczoncGxheSByZXZlcnNlIHBsYXkgcmV2ZXJzZScsXG4gICAgfVxuICB9KTtcbiAgdGwudG8odGhpc1BlcnNvbmEsIHtkdXJhdGlvbjoxLCByb3RhdGlvblk6MCwgb3BhY2l0eToxfSwgXCJwT3V0MVwiKTtcbiAgdGwudG8odGV4dCwge29wYWNpdHk6MSwgeTowLCBzdGFnZ2VyOjAuMX0sIFwicE91dDErPTAuMlwiKTtcbiAgdGwudG8ocDNQaWVjZXMsIHtvcGFjaXR5OjEsIHN0YWdnZXI6e1xuICAgICAgYW1vdW50OjAuMyxcbiAgICAgIGZyb206J3JhbmRvbScsXG4gICAgfVxuICB9LCBcInBPdXQxKz0wLjFcIik7XG59IiwiLy8gQWRkIEEgRGF0YSBBdHRyaWJ1cmUgdG8gZWFjaCBzbGlkZSB0byBzZXR1cCBmb3IgcmV2ZWFsXG5leHBvcnQgbGV0IHNldHVwUG92ZXJ0eVBvcHVwcyA9ICgpID0+IHtcbiAgbGV0IGkgPSAxO1xuICBnc2FwLnNldCgnLnNpbmdsZS1wb3ZlcnR5LXBvcC11cCcsIHtcbiAgICB0cmFuc2Zvcm1PcmlnaW46J2NlbnRlciBsZWZ0JyxcbiAgICBvcGFjaXR5OjAsXG4gICAgcm90YXRpb25ZOjIwLFxuICAgIHg6LTgwLFxuICAgIC8vc2NhbGU6MC43LFxuICAgIHpJbmRleDoxLFxuICB9KTtcbiAgJCgnLnNpbmdsZS1wb3ZlcnR5LXBvcC11cCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5hdHRyKCdkYXRhLXBvcC11cCcsIGkpO1xuICAgIGkrK1xuICB9KVxufVxuXG5leHBvcnQgbGV0IGNsaWNrUG92ZXJ0eVBvcHVwcyA9ICgpID0+IHtcbiAgJCgnLnBvdmVydHlQb3B1cFRyaWdnZXInKS5lYWNoKCBmdW5jdGlvbigpe1xuXG4gICAgLy8gR2V0IFRoZSBNYW51YWxseSBBZGRlZCBQb3AgVXAgVHJpZ2dlciBOdW1iZXJcbiAgICBsZXQgdGhpc1BvcHVwID0gJCh0aGlzKS5hdHRyKCdkYXRhLXBvcC11cC10cmlnZ2VyJyk7XG4gICAgICAvLyBHZXQgVGhlIENvcmVzcG9uZGluZyBQb3B1cCB3aGljaCBpcyBjcmVhdGVkIGF1dG9tYXRpY2FsbHkgaW4gc2V0dXBQb3ZlcnR5UG9wdXBzKCk7IGFib3ZlXG4gICAgbGV0IHRoaXNQb3B1cE1vZGFsID0gJCgnKltkYXRhLXBvcC11cD1cIicrIHRoaXNQb3B1cCsnXCJdJyk7ICAgICAgIFxuICAgIFxuICAgIFxuXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgXG4gICAgICAvLyBTZXR1cCB0aGUgVEwgVG8gYW5pbWF0ZSB0aGUgb25lIG91dFxuICAgICAgbGV0IG9uZVRMID0gZ3NhcC50aW1lbGluZSh7cGF1c2VkOnRydWV9KVxuXG4gICAgICAvLyBTZXR1cCB0aGUgVEwgZm9yIEFsbCB0byBjbG9zZVxuICAgICAgbGV0IGFsbFRMID0gZ3NhcC50aW1lbGluZSh7cGF1c2VkOnRydWUsXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIEFmdGVyIGl0J3MgZG9uZSBwbGF5IG91dCB0aGUgbmV3IG9uZVxuICAgICAgICAgIG9uZVRMLnBsYXkoKTtcbiAgICAgICAgICAkKCcucG92ZXJ0eS1wb3B1cC1jb250YWluZXInKS5hZGRDbGFzcygnb3Blbk1vZGFsJyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIFNldHVwIGEgY2xvc2UgQW5pbWF0aW9uXG4gICAgICBsZXQgY2xvc2VUTCA9IGdzYXAudGltZWxpbmUoe3BhdXNlZDp0cnVlfSlcblxuICAgICAgLy8gUmV2ZXJzZSB0aGVtIGFsbCBvbiBjbG9zZVxuICAgICAgY2xvc2VUTC50bygnLnNpbmdsZS1wb3ZlcnR5LXBvcC11cCcsIHtcbiAgICAgICAgb3BhY2l0eTowLFxuICAgICAgICByb3RhdGlvblk6MjAsXG4gICAgICAgIHg6LTgwLFxuICAgICAgICAvL3NjYWxlOjAuNyxcbiAgICAgICAgLy8gekluZGV4OjEsXG4gICAgICAgIGR1cmF0aW9uOjAuMywgXG4gICAgICAgIGVhc2U6XCJjaXJjLm91dFwiLFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBnc2FwLnNldCgnLnNpbmdsZS1wb3ZlcnR5LXBvcC11cCcsIHt6SW5kZXg6MX0pO1xuICAgICAgICAgICQoJy5wb3ZlcnR5LXBvcHVwLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdvcGVuTW9kYWwnKTtcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gUmV2ZXJzZSBUaGVtIEFsbCBCZWZvcmUgUGxheWluZyBhIG5ldyBvbmVcbiAgICAgIGFsbFRMLnRvKCcuc2luZ2xlLXBvdmVydHktcG9wLXVwJywge1xuICAgICAgICBvcGFjaXR5OjAsIFxuICAgICAgICByb3RhdGlvblk6MjAsXG4gICAgICAgIHg6LTgwLFxuICAgICAgICAvL3NjYWxlOjAuNyxcbiAgICAgICAgLy8gekluZGV4OjEsXG4gICAgICAgIGR1cmF0aW9uOjAuMywgXG4gICAgICAgIGVhc2U6XCJjaXJjLm91dFwiLFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBnc2FwLnNldCgnLnNpbmdsZS1wb3ZlcnR5LXBvcC11cCcsIHt6SW5kZXg6MX0pO1xuICAgICAgICAgICQoJy5wb3ZlcnR5LXBvcHVwLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdvcGVuTW9kYWwnKTtcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gUGxheSBPdXQgdGhlIE9uZSB0aGF0IHdlYXMgY2xpY2tlZFxuICAgICAgb25lVEwudG8odGhpc1BvcHVwTW9kYWwsIHtcbiAgICAgICAgb3BhY2l0eToxLCBcbiAgICAgICAgcm90YXRpb25ZOjAsXG4gICAgICAgIHg6MCwgXG4gICAgICAgIHNjYWxlOjEsXG4gICAgICAgIHpJbmRleDoyLFxuICAgICAgICBkdXJhdGlvbjowLjMsIFxuICAgICAgICBlYXNlOlwiY2lyYy5vdXRcIixcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnLnBvdmVydHktcG9wdXAtY29udGFpbmVyJykuYWRkQ2xhc3MoJ29wZW5Nb2RhbCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgXG4gICAgICAvLyBJZiBUaGVyZSdzIGFuIG9wZW4gbW9kYWwgY2xvc2UgaXQgYW5kIHRoZW4gcGxheSB0aGUgbmV3IG1vZGFsIFRpbWVsaW5lXG4gICAgICBpZigkKCcucG92ZXJ0eS1wb3B1cC1jb250YWluZXInKS5oYXNDbGFzcygnb3Blbk1vZGFsJykpe1xuICAgICAgICBhbGxUTC5wbGF5KClcbiAgICAgIC8vIElmIE5vdGhpbmcgaXMgb3BlbiBqdXN0IHBsYXkgaXQgb3V0ICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uZVRMLnBsYXkoKTtcbiAgICAgIH1cblxuICAgICAgLy8gUGxheSB0aGUgQ2xvc2UgYWxsIFRpbWVsaW5lIG9uIGNsaWNraW5nIENsb3NlXG4gICAgICAkKCcucG92ZXJ0eVBvcHVwQ2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY2xvc2VUTC5wbGF5KCk7XG4gICAgICB9KVxuICAgICAgXG4gICAgfSlcbiAgfSlcbn0iLCJleHBvcnQgbGV0IGhlcm9BbmltYXRpb24gPSAoKSA9PiB7XG4gIFxuICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBkZWZhdWx0czp7XG4gICAgICBkdXJhdGlvbjowLjgsXG4gICAgICBkZWxheTowLjMsXG4gICAgICBlYXNlOidjaXJjLmluJ1xuICAgIH1cbiAgfSk7XG4gIGxldCB0aGlzU2VjdGlvbiA9ICQoJy5oZXJvLXNlY3Rpb24nKTtcbiAgbGV0IHRleHQgPSAkKCcuaGVyby1zZWN0aW9uLXRleHQnKTtcbiAgXG4gIHRsLnRvKCcuaGVyby1zZWN0aW9uLW92ZXJsYXknLCB7b3BhY2l0eTowfSxcImhlcm9JblwiKTtcbiAgdGwudG8odGV4dCwge3k6MCwgb3BhY2l0eToxLCBkdXJhdGlvbjowLjZ9LCdoZXJvSW4rPTAuMicpO1xufVxuXG5leHBvcnQgbGV0IHdoeUV4aXN0QW5pbWF0aW9uID0gKCkgPT4ge1xuICBcbiAgbGV0IHRoaXNTZWN0aW9uID0gJCgnLndoeS13ZS1leGlzdC1zZWN0aW9uJyk7XG4gIGxldCBnbG9iZSA9ICQoJy5leGlzdC1nbG9iZS1iYWNrZ3JvdW5kIGltZycpO1xuICBcbiAgZ3NhcC5zZXQoZ2xvYmUsIHtzY2FsZTowLjksIHJvdGF0ZTo2fSk7XG5cbiAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgZGVmYXVsdHM6e1xuICAgICAgZHVyYXRpb246MS4zLFxuICAgICAgZWFzZTonbm9uZSdcbiAgICB9LFxuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IHRoaXNTZWN0aW9uLFxuICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxuICAgICAgZW5kOlwidG9wIHRvcFwiLFxuICAgICAgc2NydWI6dHJ1ZSxcbiAgICB9XG4gIH0pO1xuICB0bC50byhnbG9iZSwge3JvdGF0ZTowLCBzY2FsZToxfSk7XG59XG5cbmV4cG9ydCBsZXQgd2hlcmVPcGVyYXRlQW5pbWF0aW9uID0gKCkgPT4ge1xuICBcbiAgbGV0IHRoaXNTZWN0aW9uID0gJCgnLndoZXJlLXdlLW9wZXJhdGUtc2VjdGlvbicpO1xuICBcbiAgbGV0IGhlYWRsaW5lID0gJCgnLndoZXJlLXdlLW9wZXJhdGUtaW50cm8nKS5maW5kKCdoMicpO1xuICBsZXQgc3ViaGVhZGxpbmUgPSAkKCcud2hlcmUtd2Utb3BlcmF0ZS1pbnRybycpLmZpbmQoJ2g1Jyk7XG4gIGxldCB0aGVCb2R5ID0gJCgnLndoZXJlLXdlLW9wZXJhdGUtaW50cm8nKS5maW5kKCdwJyk7XG4gIGxldCBjYXRlZ29yeSA9ICQoJy5vcGVyYXRlLWxpc3Qtc2luZ2xlLWl0ZW0nKTtcbiAgbGV0IG1hcEtleSA9ICQoJy5zaW5nbGUtbWFwLWtleScpO1xuICBsZXQgbmV4dExpbmsgPSAkKCcub3BlcmF0ZS1uZXh0LXNlY3Rpb24tbGluaycpO1xuICBsZXQgb3V0bGluZSA9ICQoJy5hZnJpY2FNYXBPdXRsaW5lJyk7XG4gIGxldCBtYXBGaWxscyA9ICQoJy5hZnJpY2FNYXBCbHVlRmlsbHMnKTtcbiAgbGV0IG1hcEJvcmRlcnMgPSAkKCcuYWZyaWNhTWFwQ291bnRyeUxpbmVzJyk7XG4gIGxldCBtYXJrZXIgPSAkKCcuYWZyaWNhTWFwTWFya2VyJyk7XG4gIGxldCBoYXRjaGVzID0gJCgnLmFmcmljYU1hcEhhdGNoTGluZXMnKTtcbiAgbGV0IG9uZUhhc2ggPSAkKGhhdGNoZXMpLmZpbmQoJ3BhdGgnKTtcbiAgXG4gIGdzYXAuc2V0KFttYXBGaWxscywgbWFwQm9yZGVycywgb25lSGFzaCwgb3V0bGluZV0sIHtvcGFjaXR5OjB9KTtcbiAgZ3NhcC5zZXQobWFya2VyLCB7b3BhY2l0eTowLCB5Oi00fSk7XG5cbiAgZ3NhcC5zZXQoW2hlYWRsaW5lLCBzdWJoZWFkbGluZSwgdGhlQm9keV0sIHt5Oi0wLCBvcGFjaXR5OjB9KTtcbiAgZ3NhcC5zZXQoW2NhdGVnb3J5LG1hcEtleSwgbmV4dExpbmtdLCB7b3BhY2l0eTowfSk7XG5cbiAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgZGVmYXVsdHM6e1xuICAgICAgZHVyYXRpb246MC4zLFxuICAgICAgZWFzZTonY2lyYy5vdXQnXG4gICAgfSxcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiB0aGlzU2VjdGlvbixcbiAgICAgIHN0YXJ0OiBcInRvcCBjZW50ZXIrPTIwMFwiLFxuICAgICAgLy8gdG9nZ2xlQWN0aW9uczoncGxheSByZXZlcnNlIHBsYXkgcmV2ZXJzZScsXG4gICAgfSxcbiAgICAvLyBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgIC8vICAgcmVwZWF0VEwucGxheSgpO1xuICAgIC8vIH1cbiAgfSk7XG5cbiAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDc2Nykge1xuICAgIHRsLnRvKFtzdWJoZWFkbGluZSwgaGVhZGxpbmUsdGhlQm9keV0sIHtvcGFjaXR5OjEsIHk6MCwgc3RhZ2dlcjowLjF9LFwicDNPdXQrPTAuMlwiKTtcbiAgICB0bC50byhjYXRlZ29yeSwge29wYWNpdHk6MSwgeTowfSxcInAzT3V0MS09MC4yXCIpO1xuICAgIHRsLnRvKG91dGxpbmUsIHtvcGFjaXR5OjF9LCBcInAzT3V0MlwiKTtcbiAgICB0bC50byhtYXBCb3JkZXJzLCB7b3BhY2l0eToxfSwgXCJwM091dDIrPTAuMlwiKTtcbiAgICB0bC50byhvbmVIYXNoLCB7b3BhY2l0eToxLCBzdGFnZ2VyOjAuMX0sIFwicDNPdXQzKz0wLjNcIik7XG4gICAgdGwudG8obWFwRmlsbHMsIHtvcGFjaXR5OjF9LCBcInAzT3V0Mys9MC4zXCIpO1xuICAgIHRsLnRvKFttYXBLZXksIG5leHRMaW5rXSwge29wYWNpdHk6MSwgc3RhZ2dlcjowLjF9LFwicDNPdXQzKz0wLjVcIik7XG4gICAgdGwudG8obWFya2VyLCB7ZWFzZTonY2lyYy5vdXQnLCBvcGFjaXR5OjEsIHk6MH0sIFwicDNPdXQzKz0wLjRcIik7XG4gIH1cbiAgZWxzZSB7ICBcbiAgICB0bC50byhvdXRsaW5lLCB7b3BhY2l0eToxfSwgXCJwM091dFwiKTtcbiAgICB0bC50byhtYXBCb3JkZXJzLCB7b3BhY2l0eToxfSwgXCJwM091dFwiKTtcbiAgICB0bC50byhvbmVIYXNoLCB7b3BhY2l0eToxLCBzdGFnZ2VyOjAuMX0sIFwicDNPdXQyXCIpO1xuICAgIHRsLnRvKG1hcEZpbGxzLCB7b3BhY2l0eToxfSwgXCJwM091dDIrPTAuMlwiKTtcbiAgICB0bC50byhbc3ViaGVhZGxpbmUsIGhlYWRsaW5lLHRoZUJvZHldLCB7b3BhY2l0eToxLCB5OjAsIHN0YWdnZXI6MC4xfSxcInAzT3V0M1wiKTtcbiAgICB0bC50byhjYXRlZ29yeSwge29wYWNpdHk6MSwgeTowfSxcInAzT3V0Mys9MC4zXCIpO1xuICAgIHRsLnRvKG1hcmtlciwge29wYWNpdHk6MSwgeTowfSwgXCJwM091dDNcIik7XG4gICAgdGwudG8oW21hcEtleSwgbmV4dExpbmtdLCB7b3BhY2l0eToxLCBzdGFnZ2VyOjAuMX0sXCJwM091dDRcIik7XG4gICAgXG4gIH0gIFxufVxuXG5leHBvcnQgbGV0IHdoYXRQb3ZlcnR5QW5pbWF0aW9uID0gKCkgPT4ge1xuICBcbiAgbGV0IHRoaXNTZWN0aW9uID0gJCgnLndoYXQtaXMtZW5lcmd5LXBvdmVydHktc2VjdGlvbicpO1xuICBsZXQgb3ZlcmxheSA9ICQoJy5saWdodHNPdmVybGF5Jyk7XG4gIGxldCBoZWFkbGluZSA9ICQoJy5lbmVyZ3ktcG92ZXJ0eS1pbnRybycpLmZpbmQoJ2gyJyk7XG4gIGxldCBzdWJoZWFkbGluZSA9ICQoJy5lbmVyZ3ktcG92ZXJ0eS1pbnRybycpLmZpbmQoJ2g1Jyk7XG4gIGxldCB0aGVCb2R5ID0gJCgnLmVuZXJneS1wb3ZlcnR5LWludHJvJykuZmluZCgncCcpO1xuICBsZXQgY2F0ZWdvcnkgPSAkKCcuZW5lcmd5LXBvdmVydHktaW50cm8nKS5maW5kKCcuc2VjdGlvbi12ZXJ0LWNhdGVnb3J5Jyk7XG5cbiAgZ3NhcC5zZXQoW2hlYWRsaW5lLCBzdWJoZWFkbGluZSwgdGhlQm9keV0sIHt5Oi01LCBvcGFjaXR5OjB9KTtcbiAgZ3NhcC5zZXQoY2F0ZWdvcnksIHt5Oi0xNSwgb3BhY2l0eTowfSk7XG5cbiAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgZGVmYXVsdHM6e1xuICAgICAgZHVyYXRpb246MC40LFxuICAgICAgZWFzZTonY2lyYy5vdXQnXG4gICAgfSxcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiB0aGlzU2VjdGlvbixcbiAgICAgIHN0YXJ0OiBcInRvcCBjZW50ZXJcIixcbiAgICB9LFxuICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICByZXBlYXRUTC5wbGF5KCk7XG4gICAgfVxuICB9KTtcbiAgdGwudG8ob3ZlcmxheSwge29wYWNpdHk6MCwgZHVyYXRpb246MC41fSk7XG4gIHRsLnRvKFtzdWJoZWFkbGluZSwgaGVhZGxpbmUsdGhlQm9keV0sIHtvcGFjaXR5OjEsIHk6MCwgc3RhZ2dlcjowLjF9KTtcbiAgdGwudG8oY2F0ZWdvcnksIHtvcGFjaXR5OjEsIHk6MCwgc3RhZ2dlcjowLjF9LCctPTAuMycpO1xuXG4gIGxldCByZXBlYXRUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHBhdXNlZDp0cnVlLFxuICAgIHJlcGVhdDotMSwgXG4gICAgeW95bzp0cnVlXG4gIH0pO1xuICByZXBlYXRUTC50bygkKG92ZXJsYXkpLCB7ZHVyYXRpb246NSwgb3BhY2l0eTowLjQsIGVhc2U6J2NpcmMuaW5vdXQnfSk7XG5cbn1cblxuZXhwb3J0IGxldCBvdXJJbXBhY3RBbmltYXRpb24gPSAoKSA9PiB7XG4gIFxuICBsZXQgdGhpc1NlY3Rpb24gPSAkKCcub3VyLWltcGFjdC1zZWN0aW9uJyk7XG4gIGxldCBoZWFkbGluZSA9ICQodGhpc1NlY3Rpb24pLmZpbmQoJ2gyJyk7XG4gIGxldCBzdWJoZWFkbGluZSA9ICQodGhpc1NlY3Rpb24pLmZpbmQoJ2g1Jyk7XG4gIGxldCB0aGVCb2R5ID0gJCh0aGlzU2VjdGlvbikuZmluZCgncCcpO1xuICBsZXQgdGhlQnV0dG9uID0gJCh0aGlzU2VjdGlvbikuZmluZCgnLm1pc3Npb24tYnV0dG9uJyk7XG5cbiAgLy8gZ3NhcC5zZXQoW2hlYWRsaW5lLCBzdWJoZWFkbGluZSwgdGhlQm9keSx0aGVCdXR0b25dLCB7eTotNSwgb3BhY2l0eTowfSk7XG4gIFxuICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBkZWZhdWx0czp7XG4gICAgICBkdXJhdGlvbjowLjE1LFxuICAgICAgZWFzZTonY2lyYy5pbidcbiAgICB9LFxuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IHRoaXNTZWN0aW9uLFxuICAgICAgc3RhcnQ6IFwidG9wIGNlbnRlclwiLFxuICAgIH0sXG4gICAgLy8gb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAvLyAgIHJlcGVhdFRMLnBsYXkoKTtcbiAgICAvLyB9XG4gIH0pO1xuICAvLyB0bC50byhvdmVybGF5LCB7b3BhY2l0eTowLCBkdXJhdGlvbjowLjV9KTtcbiAgLy8gdGwudG8oW3N1YmhlYWRsaW5lLCBoZWFkbGluZSx0aGVCb2R5LHRoZUJ1dHRvbl0sIHtvcGFjaXR5OjEsIHk6MH0pO1xufVxuXG5leHBvcnQgbGV0IHlvdXJJbXBhY3RBbmltYXRpb24gPSAoKSA9PiB7XG4gIFxuICBsZXQgdGhpc1NlY3Rpb24gPSAkKCcueW91ci1pbXBhY3QtaW1hZ2VzJyk7XG4gIGxldCBsZWZ0SW1nID0gJChcIi55b3VyLWltcGFjdC1sZWZ0LWltYWdlIGltZ1wiKTtcbiAgbGV0IHJpZ2h0SW1nID0gJChcIi55b3VyLWltcGFjdC1yaWdodC1pbWFnZSBpbWdcIik7XG4gIGxldCBsb2dvID0gJChcIi55b3VyLWltcGFjdC1sb2dvXCIpO1xuICBcbiAgZ3NhcC5zZXQoW2xlZnRJbWcsIHJpZ2h0SW1nLCBsb2dvXSwge3NjYWxlOjEuMDUsIG9wYWNpdHk6MH0pO1xuXG4gIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIGRlZmF1bHRzOntcbiAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICB9LFxuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IHRoaXNTZWN0aW9uLFxuICAgICAgc3RhcnQ6IFwiY2VudGVyIGJvdHRvbVwiLFxuICAgICAgZWFzZTonY2lyYy5pbicsXG4gICAgfVxuICB9KTtcbiAgdGwudG8obGVmdEltZywge3NjYWxlOjEsIG9wYWNpdHk6MX0pO1xuICB0bC50byhyaWdodEltZywge3NjYWxlOjEsIG9wYWNpdHk6MX0sXCItPS4xNVwiKTtcbiAgdGwudG8obG9nbywge3NjYWxlOjEsIG9wYWNpdHk6MX0sXCItPS4xNVwiKTtcbn1cbiIsIi8vIFNldHVwIFRoZSBWaWRlbyBQbGF5ZXIgc28gdGhlIEZpcnN0IFZpZGVvIGlzIGxvYWRlZFxuZXhwb3J0IGxldCBsb2FkVGhlVmlkZW8gPSAoKSA9PiB7XG4gIHZhciBmaXJzdFZpZGVvTGluayA9ICQoXCIuZmlyc3RTaW5nbGVCaW9saXRlVFZDYXJkXCIpLmF0dHIoJ2RhdGEtdmlkZW8tbGluaycpO1xuICAkKCcudHZQbGF5QnV0dG9uJykuYXR0cignZGF0YS12aWRlby1hY3RpdmUnLCBmaXJzdFZpZGVvTGluayk7XG59XG5cbmV4cG9ydCBsZXQgdmlkZW9Ub2dnbGUgPSAoKSA9PiB7XG5cbiAgbGV0IHRlYWwxID0gJyMwMDhmYTEnO1xuICBsZXQgdGVhbDIgPSAnIzIwYTA5ZCc7XG4gIGxldCB5ZWxsb3cxID0gJyNkOWFiMjcnO1xuICBsZXQgeWVsbG93MiA9ICcjZWNiMzUxJztcbiAgbGV0IG9yYW5nZSA9ICcjQzI0RDAwJztcbiAgbGV0IHJlZCA9ICcjZTczZjM0Oyc7XG4gIGxldCBwdXJwbGUgPSAnIzhlOTBiNCc7XG4gIGxldCBncmF5MSA9ICcjNDQ0NDQ0JztcbiAgbGV0IGdyYXkyID0gJyMyZTJlMmYnO1xuICBsZXQgZ3JheTMgPSAnIzc0NzQ3NSc7XG4gIGxldCBncmF5NCA9ICcjYThhOGE4JztcbiAgbGV0IGdyYXk1ID0gJyNkN2Q3ZDcnO1xuICBsZXQgZ3JheTYgPSAnI2U0ZTRlNCc7XG4gIGxldCBncmF5NyA9ICcjZjNmM2YzJztcbiAgbGV0IG9mZndoaXRlID0gJyNmMWYxZjEnO1xuXG4gIGxldCBzd2FwSW1hZ2UgPSAodGhlSW1hZ2VOdW1iZXIpID0+IHtcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIGRlZmF1bHRzOntcbiAgICAgICAgZHVyYXRpb246MC42NSxcbiAgICAgICAgZWFzZToncG93ZXI0Lm91dCcsXG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IHRoaXNJbWFnZSA9ICQoJ1tkYXRhLXByZXZpZXctaW1hZ2U9Jyt0aGVJbWFnZU51bWJlcisnXScpOyBcbiAgICBsZXQgb3RoZXJJbWFnZXMgPSAkKCcuYmlvbGl0ZVR2VmlkZW9QcmV2aWV3SW1hZ2UnKS5ub3QodGhpc0ltYWdlKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzSW1hZ2UpO1xuICAgIHRsLnRvKHRoaXNJbWFnZSwge2R1cmF0aW9uOjAuNjUsIG9wYWNpdHk6MX0sIFwiaW1hZ2VTd2FwXCIpO1xuICAgIHRsLnRvKG90aGVySW1hZ2VzLCB7ZHVyYXRpb246MC42NSwgb3BhY2l0eTowfSwgXCJpbWFnZVN3YXBcIik7XG4gIH1cblxuXG4gICQoJy5zaW5nbGUtYmlvbGl0ZS10di1jYXJkJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgbGV0IGFsbFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgIGRlZmF1bHRzOntcbiAgICAgICAgZHVyYXRpb246MC42NSxcbiAgICAgICAgZWFzZToncG93ZXI0Lm91dCcsXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gU2V0IHRoZSBQYXJhZ3JhaHMgYmFjayB0byByZWFuaW10ZVxuICAgICAgICAgIC8vIGdzYXAuc2V0KGFsbFAsIHt5OjMwLCBvcGFjaXR5OjB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgICBsZXQgdG9wSGVpZ2h0ID0gJCh0aGlzKS5vdXRlckhlaWdodCgpIC0gODA7XG4gICAgbGV0IGFsbENhcmQgPSAkKCcuc2luZ2xlLWJpb2xpdGUtdHYtY2FyZCcpLm5vdCh0aGlzKTtcbiAgICBsZXQgYWxsUCA9IGFsbENhcmQuZmluZCgncCcpO1xuICAgIGxldCBhbGxUZWFsSWNvbiA9IGFsbENhcmQuZmluZCgnLnR2SWNvblRlYWwnKTtcbiAgICBsZXQgYWxsV2hpdGVJY29uID0gYWxsQ2FyZC5maW5kKCcudHZJY29uV2hpdGUnKTtcbiAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuICAgIGxldCB0aGlzUCA9ICQodGhpcykuZmluZCgncCcpO1xuICAgIGxldCB0ZWFsSWNvbiA9ICQodGhpcykuZmluZCgnLnR2SWNvblRlYWwnKTtcbiAgICBsZXQgd2hpdGVJY29uID0gJCh0aGlzKS5maW5kKCcudHZJY29uV2hpdGUnKTtcbiAgICBsZXQgaW1hZ2VUcmlnZ2VyID0gJCh0aGlzKS5hdHRyKCdkYXRhLXByZXZpZXctaW1hZ2UtdHJpZ2dlcicpO1xuICAgIGxldCB2aWRlb0xpbmsgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdmlkZW8tbGluaycpO1xuICAgIGxldCBwbGF5QnV0dG9uID0gJCgnLnR2UGxheUJ1dHRvbicpO1xuICAgIGxldCBwcmV2aWV3SW1nID0gJCgnLmJpb2xpdGVUdlZpZGVvUHJldmlld0ltYWdlQ29udGFpbmVyJyk7XG5cbiAgICBhbGxUTC5zZXQocHJldmlld0ltZywge3pJbmRleDoyfSk7XG4gICAgYWxsVEwuc2V0KHRoaXNQLCB7eTozMCwgb3BhY2l0eTowfSk7XG4gICAgYWxsVEwudG8oYWxsQ2FyZCwge2NvbG9yOmdyYXkxLCBiYWNrZ3JvdW5kOlwid2hpdGVcIiwgeTp0b3BIZWlnaHR9LCAnY2FyZFVwJyk7XG4gICAgYWxsVEwudG8oYWxsVGVhbEljb24sIHtvcGFjaXR5OjF9LCAnY2FyZFVwJyk7XG4gICAgYWxsVEwudG8oYWxsV2hpdGVJY29uLCB7b3BhY2l0eTowfSwgJ2NhcmRVcCcpO1xuICAgIC8vIFRoZSBTZWxlY3RlZCBDYXJkIEFuaW1hdGlvbnMgICAgXG4gICAgYWxsVEwudG8oJHRoaXMsIHtjb2xvcjpcIndoaXRlXCIsIGJhY2tncm91bmQ6dGVhbDEsIHk6MH0sICdjYXJkVXAnKTtcbiAgICBhbGxUTC50byh0aGlzUCwge3k6MCwgb3BhY2l0eToxfSwgJ2NhcmRVcCcpO1xuICAgIGFsbFRMLnRvKHRlYWxJY29uLCB7b3BhY2l0eTowfSwgJ2NhcmRVcCcpO1xuICAgIGFsbFRMLnRvKHdoaXRlSWNvbiwge29wYWNpdHk6MX0sICdjYXJkVXAnKTtcbiAgICBhbGxUTC50byhwbGF5QnV0dG9uLCB7c2NhbGU6MX0sICdjYXJkVXAnKTtcbiAgICBhbGxUTC50byhwcmV2aWV3SW1nLCB7b3BhY2l0eToxfSwgJ2NhcmRVcCcpO1xuXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xuICAgICAgYWxsVEwucGxheSgpO1xuICAgICAgc3dhcEltYWdlKGltYWdlVHJpZ2dlcik7XG4gICAgfVxuICAgICQoJy5iaW9saXRlLXR2LXZpZGVvLWZyYW1lIGlmcmFtZScpLnJlbW92ZSgpO1xuICAgICQoJy50dlBsYXlCdXR0b24nKS5hdHRyKCdkYXRhLXZpZGVvLWFjdGl2ZScsIHZpZGVvTGluayk7XG4gIH0pO1xuICBcblxuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCkge1xuICAgICAgXG4gICAgJCgnLmJpb2xpdGVUdkNhcmRDb250YWluZXInKS5zbGljayh7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIGFzTmF2Rm9yOiBcIi5iaW9saXRlVHZWaWRlb1ByZXZpZXdJbWFnZUNvbnRhaW5lclwiLFxuICAgICAgYXJyb3dzOmZhbHNlLFxuICAgICAgLy8gcHJldkFycm93Oicuc2xpZGVyUHJldk5hdkFycm93JyxcbiAgICAgIC8vIG5leHRBcnJvdzonLnNsaWRlck5leHROYXZBcnJvdycsXG4gICAgICBzcGVlZDo1MDAsXG4gICAgICBjc3NFYXNlOiAnY3ViaWMtYmV6aWVyKC4xNywuNjcsLjI4LDEpJyxcbiAgICAgIC8vIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgYXV0b3BsYXlTcGVlZDogNDAwMCxcbiAgICB9KTtcblxuICAgICQoJy5iaW9saXRlVHZWaWRlb1ByZXZpZXdJbWFnZUNvbnRhaW5lcicpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgYXNOYXZGb3I6IFwiLmJpb2xpdGVUdkNhcmRDb250YWluZXJcIixcbiAgICAgIGFycm93czpmYWxzZSxcbiAgICAgIHNwZWVkOjUwMCxcbiAgICAgIGNzc0Vhc2U6ICdjdWJpYy1iZXppZXIoLjE3LC42NywuMjgsMSknLFxuICAgIH0pO1xuXG4gICAgJCgnLnNpbmdsZS1iaW9saXRlLXR2LWNhcmQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgbGV0IHRoaXNLZXkgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdmlkZW8tbGluaycpO1xuICAgICAgbGV0IHByZXZpZXdJbWcgPSAkKCcuYmlvbGl0ZVR2VmlkZW9QcmV2aWV3SW1hZ2VDb250YWluZXInKTtcbiAgICAgIGxldCBwcmV2aWV3Q2FyZHMgPSAkKCcuYmlvbGl0ZVR2Q2FyZENvbnRhaW5lcicpO1xuICAgICAgbGV0IGJpb2xpdGVUdkNhcmRDb250YWluZXJCYWNrID0gJCgnLmJpb2xpdGVUdkNhcmRDb250YWluZXJCYWNrJyk7XG4gICAgICBsZXQgcGxheUJ1dHRvbiA9ICQoJy50dlBsYXlCdXR0b24nKTtcblxuICAgICAgbGV0IGNsZWFyT3V0VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOnRydWUsXG4gICAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICAgICAgZWFzZTpcImNpcmMub3V0XCIsXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgZ3NhcC5zZXQocHJldmlld0ltZywge3pJbmRleDotMX0pXG4gICAgICAgICAgLy8gZ3NhcC5raWxsVHdlZW5zT2YocGxheUJ1dHRvbik7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQocGxheUJ1dHRvbiwge3JvdGF0ZTowfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgYmFja0luVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOnRydWUsXG4gICAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICAgICAgZWFzZTpcImNpcmMub3V0XCIsXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJCgnLmJpb2xpdGUtdHYtdmlkZW8tZnJhbWUgaWZyYW1lJykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjbGVhck91dFRMLnRvKHBsYXlCdXR0b24sIHtzY2FsZTowfSwgJ3BsYXlpdCcpO1xuICAgICAgY2xlYXJPdXRUTC50byhwcmV2aWV3SW1nLCB7b3BhY2l0eTowLCB6SW5kZXg6LTF9LCAncGxheWl0Jyk7XG4gICAgICBjbGVhck91dFRMLnRvKHByZXZpZXdDYXJkcywge29wYWNpdHk6MCx6SW5kZXg6LTF9LCAncGxheWl0Jyk7XG4gICAgICBjbGVhck91dFRMLnRvKGJpb2xpdGVUdkNhcmRDb250YWluZXJCYWNrLCB7b3BhY2l0eTowLCB6SW5kZXg6LTF9LCdwbGF5aXQnKTtcbiAgICAgIFxuICAgICAgXG4gICAgICBiYWNrSW5UTC50byhwcmV2aWV3SW1nLCB7b3BhY2l0eToxLCB6SW5kZXg6MTR9LCAncGxheWl0MicpO1xuICAgICAgYmFja0luVEwudG8ocHJldmlld0NhcmRzLCB7b3BhY2l0eToxLCB6SW5kZXg6MTR9LCdwbGF5aXQyJyk7XG4gICAgICBiYWNrSW5UTC50byhiaW9saXRlVHZDYXJkQ29udGFpbmVyQmFjaywge29wYWNpdHk6MSwgekluZGV4OjEyfSwncGxheWl0MicpO1xuICAgICAgYmFja0luVEwudG8ocGxheUJ1dHRvbiwge3NjYWxlOjEsIHpJbmRleDoxNH0sICdwbGF5aXQyKz0wLjMnKTtcbiAgICAgIFxuICAgIFxuICAgICAgJCgnLmJpb2xpdGUtdHYtdmlkZW8tZnJhbWUgaWZyYW1lJykucmVtb3ZlKCk7XG4gICAgICAkKCcuYmlvbGl0ZS10di12aWRlby1mcmFtZScpLnByZXBlbmQoXCI8ZGl2IGlkPSdcIit0aGlzS2V5K1wiJz48L2Rpdj5cIik7XG4gICAgICBcbiAgICAgICQoXCIuYmlvbGl0ZVR2VmlkZW9QcmV2aWV3SW1hZ2VDb250YWluZXJcIikuc2xpY2soJ3NsaWNrUGF1c2UnKTtcbiAgICAgICQoXCIuYmlvbGl0ZVR2Q2FyZENvbnRhaW5lclwiKS5zbGljaygnc2xpY2tQYXVzZScpO1xuXG4gICAgICBjbGVhck91dFRMLnBsYXkoKTtcbiAgXG4gICAgICBmdW5jdGlvbiBjYWxsWW91dHViZSh2aWRlb0tleSkge1xuICAgICAgICAvLyBMT0FEIFRIRSBORVcsIFNFTEVDVEVEIFlPVVRVQkUgVklERU8gLyBQTEFZRVIgVklBIFlPVVRVQkUgQVBJXG4gICAgICAgIHBsYXllciA9IG5ldyBZVC5QbGF5ZXIodGhpc0tleSwge1xuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAgICAgcmVsOjAsXG4gICAgICAgICAgICBhdXRvcGxheTogMSxcbiAgICAgICAgICAgIGNvbnRyb2xzOiAwLFxuICAgICAgICAgICAgc2hvd2luZm86IDAsXG4gICAgICAgICAgICBhdXRvaGlkZTogMSxcbiAgICAgICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlkZW9JZDogdGhpc0tleSxcbiAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICdvblJlYWR5Jzogb25QbGF5ZXJSZWFkeSxcbiAgICAgICAgICAgICdvblN0YXRlQ2hhbmdlJzogb25QbGF5ZXJTdGF0ZUNoYW5nZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIFxuICAgICAgICAvLyBISURFIE9SIFNIT1cgT1RIRVIgVklERU9TIERFUEVORElORyBPTiBZT1RVQkUgUExBWUVSIFNUQVRFXG4gICAgICAgIGZ1bmN0aW9uIG9uUGxheWVyU3RhdGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIGlmIChldmVudC5kYXRhID09IFlULlBsYXllclN0YXRlLkJVRkZFUklORykge1xuICAgICAgICAgICAgLy8gJChcIi5iaW9saXRlVHZWaWRlb1ByZXZpZXdJbWFnZUNvbnRhaW5lclwiKS5zbGljaygnc2xpY2tQYXVzZScpO1xuICAgICAgICAgICAgLy8gJChcIi5iaW9saXRlVHZDYXJkQ29udGFpbmVyXCIpLnNsaWNrKCdzbGlja1BhdXNlJyk7XG4gICAgICAgICAgICAvLyBjbGVhck91dFRMLnBsYXkoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEgPT0gWVQuUGxheWVyU3RhdGUuUExBWUlORykge1xuICAgICAgICAgICAgLy8gSUYgUExBWUlOR1xuICAgICAgICAgICAgJChcIi5iaW9saXRlVHZWaWRlb1ByZXZpZXdJbWFnZUNvbnRhaW5lclwiKS5zbGljaygnc2xpY2tQbGF5Jyk7XG4gICAgICAgICAgICAkKFwiLmJpb2xpdGVUdkNhcmRDb250YWluZXJcIikuc2xpY2soJ3NsaWNrUGxheScpO1xuICAgICAgICAgICAgY2xlYXJPdXRUTC5wbGF5KCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC5kYXRhID09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuICAgICAgICAgICAgLy8gSUYgUEFVU0VEXG4gICAgICAgICAgICAkKFwiLmJpb2xpdGVUdlZpZGVvUHJldmlld0ltYWdlQ29udGFpbmVyXCIpLnNsaWNrKCdzbGlja1BsYXknKTtcbiAgICAgICAgICAgICQoXCIuYmlvbGl0ZVR2Q2FyZENvbnRhaW5lclwiKS5zbGljaygnc2xpY2tQbGF5Jyk7XG4gICAgICAgICAgICBiYWNrSW5UTC5wbGF5KCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC5kYXRhID09IFlULlBsYXllclN0YXRlLkVOREVEKSB7XG4gICAgICAgICAgICAvLyBJRiBGSU5JU0hFRFxuICAgICAgICAgICAgJChcIi5iaW9saXRlVHZWaWRlb1ByZXZpZXdJbWFnZUNvbnRhaW5lclwiKS5zbGljaygnc2xpY2tQbGF5Jyk7XG4gICAgICAgICAgICAkKFwiLmJpb2xpdGVUdkNhcmRDb250YWluZXJcIikuc2xpY2soJ3NsaWNrUGxheScpO1xuICAgICAgICAgICAgYmFja0luVEwucGxheSgpO1xuICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy9TVEFURSBDSEFOR0VcbiAgICAgIH0gLy9jYWxsWW91dHViZSgpXG4gIFxuICAgICAgLy8gaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xuICBcbiAgICAgICAgY2FsbFlvdXR1YmUoKTtcbiAgICB9KTtcbiAgfVxuICBlbHNlIHtcbiAgXG4gICAgJCgnLnR2UGxheUJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICBsZXQgdGhpc0tleSA9ICQodGhpcykuYXR0cignZGF0YS12aWRlby1hY3RpdmUnKTtcbiAgICAgIGxldCBwbGF5QnV0dG9uID0gJCgnLnR2UGxheUJ1dHRvbicpO1xuXG4gICAgICBnc2FwLnRvKHBsYXlCdXR0b24sIHtyb3RhdGU6MzYwLCBkdXJhdGlvbjowLjc1LCByZXBlYXQ6LTEsIGVhc2U6J25vbmUnfSk7XG4gICAgXG4gICAgICAkKCcuYmlvbGl0ZS10di12aWRlby1mcmFtZSBpZnJhbWUnKS5yZW1vdmUoKTtcbiAgICAgICQoJy5iaW9saXRlLXR2LXZpZGVvLWZyYW1lJykucHJlcGVuZChcIjxkaXYgaWQ9J1wiK3RoaXNLZXkrXCInPjwvZGl2PlwiKTtcblxuXG4gICAgICBmdW5jdGlvbiBjYWxsWW91dHViZSh2aWRlb0tleSkge1xuICAgICAgICAvLyBMT0FEIFRIRSBORVcsIFNFTEVDVEVEIFlPVVRVQkUgVklERU8gLyBQTEFZRVIgVklBIFlPVVRVQkUgQVBJXG4gICAgICAgIHBsYXllciA9IG5ldyBZVC5QbGF5ZXIodGhpc0tleSwge1xuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAgICAgcmVsOjAsXG4gICAgICAgICAgICBhdXRvcGxheTogMSxcbiAgICAgICAgICAgIGNvbnRyb2xzOiAwLFxuICAgICAgICAgICAgc2hvd2luZm86IDAsXG4gICAgICAgICAgICBhdXRvaGlkZTogMSxcbiAgICAgICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlkZW9JZDogdGhpc0tleSxcbiAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICdvblJlYWR5Jzogb25QbGF5ZXJSZWFkeSxcbiAgICAgICAgICAgICdvblN0YXRlQ2hhbmdlJzogb25QbGF5ZXJTdGF0ZUNoYW5nZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSElERSBPUiBTSE9XIE9USEVSIFZJREVPUyBERVBFTkRJTkcgT04gWU9UVUJFIFBMQVlFUiBTVEFURVxuICAgICAgICBmdW5jdGlvbiBvblBsYXllclN0YXRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgXG4gICAgICAgICAgbGV0IHByZXZpZXdJbWcgPSAkKCcuYmlvbGl0ZVR2VmlkZW9QcmV2aWV3SW1hZ2VDb250YWluZXInKTtcbiAgICAgICAgICBsZXQgcHJldmlld0NhcmRzID0gJCgnLmJpb2xpdGVUdkNhcmRDb250YWluZXInKTtcbiAgICAgICAgICBsZXQgYmlvbGl0ZVR2Q2FyZENvbnRhaW5lckJhY2sgPSAkKCcuYmlvbGl0ZVR2Q2FyZENvbnRhaW5lckJhY2snKTtcbiAgICAgICAgICBcbiAgICAgICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICAgICAgZHVyYXRpb246MC4zLFxuICAgICAgICAgICAgZWFzZTpcImNpcmMub3V0XCIsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICBnc2FwLnNldChwcmV2aWV3SW1nLCB7ekluZGV4Oi0xfSlcbiAgICAgICAgICAgICAgZ3NhcC5raWxsVHdlZW5zT2YocGxheUJ1dHRvbik7XG4gICAgICAgICAgICAgIGdzYXAuc2V0KHBsYXlCdXR0b24sIHtyb3RhdGU6MH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbGV0IHRsMiA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgICAgcGF1c2VkOnRydWUsXG4gICAgICAgICAgICBkdXJhdGlvbjowLjMsXG4gICAgICAgICAgICBlYXNlOlwiY2lyYy5vdXRcIixcbiAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgIC8vIGdzYXAuc2V0KHByZXZpZXdJbWcsIHt6SW5kZXg6OX0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgdGwudG8ocGxheUJ1dHRvbiwge3NjYWxlOjB9LCAncGxheWl0Jyk7XG4gICAgICAgICAgdGwudG8ocHJldmlld0ltZywge29wYWNpdHk6MH0sICdwbGF5aXQnKTtcbiAgICAgICAgICB0bC50byhwcmV2aWV3Q2FyZHMsIHt5OicxMDAlJ30sICdwbGF5aXQnKTtcbiAgICAgICAgICB0bC50byhiaW9saXRlVHZDYXJkQ29udGFpbmVyQmFjaywge29wYWNpdHk6MH0sJ3BsYXlpdCcpO1xuICAgICAgICAgIFxuICAgICAgICAgIHRsMi50byhwcmV2aWV3Q2FyZHMsIHt5OicwJSd9LCdwbGF5aXQyJyk7XG4gICAgICAgICAgdGwyLnRvKGJpb2xpdGVUdkNhcmRDb250YWluZXJCYWNrLCB7b3BhY2l0eToxfSwncGxheWl0MicpO1xuICAgIFxuXG4gICAgICAgICAgaWYgKGV2ZW50LmRhdGEgPT0gWVQuUGxheWVyU3RhdGUuQlVGRkVSSU5HKSB7XG4gICAgICAgICAgICAvLyBJRiBCVUZGRVJJTkcgICBcbiAgICAgICAgICAgIC8vIGN1cnRhaW5zRG93bigpO1xuICAgICAgICAgICAgdGwucGxheSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YSA9PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HKSB7XG4gICAgICAgICAgICAvLyBJRiBQTEFZSU5HXG4gICAgICAgICAgICB0bC5wbGF5KCk7XG4gICAgICAgICAgICAvLyBjdXJ0YWluc0Rvd24oKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEgPT0gWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG4gICAgICAgICAgICAvLyBJRiBQQVVTRURcbiAgICAgICAgICAgIHRsMi5wbGF5KCk7XG4gICAgICAgICAgICAvLyBjdXJ0YWluc1VwKCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC5kYXRhID09IFlULlBsYXllclN0YXRlLkVOREVEKSB7XG4gICAgICAgICAgICAvLyBJRiBGSU5JU0hFRFxuICAgICAgICAgICAgdGwyLnBsYXkoKTtcbiAgICAgICAgICAgIC8vIGN1cnRhaW5zVXAoKTtcbiAgICAgICAgICB9ICAgIFxuICAgICAgICB9IC8vU1RBVEUgQ0hBTkdFXG4gICAgICB9IC8vY2FsbFlvdXR1YmUoKVxuXG4gICAgICAvLyBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XG5cbiAgICAgICAgY2FsbFlvdXR1YmUoKTtcbiAgICB9KTtcbiAgfSAvL0VuZCAxMDI0IE1lZGlhIFF1ZXJ5XG4gIFxufSIsImltcG9ydCB7IFxuICBzZXR1cFBvdmVydHlQb3B1cHMsXG4gIGNsaWNrUG92ZXJ0eVBvcHVwcyxcbiAgY291bnRlclVwLFxuICBsb2FkVGhlVmlkZW8sXG4gIHZpZGVvVG9nZ2xlLFxuICBoZXJvQW5pbWF0aW9uLFxuICB3aHlFeGlzdEFuaW1hdGlvbixcbiAgd2hlcmVPcGVyYXRlQW5pbWF0aW9uLFxuICB3aGF0UG92ZXJ0eUFuaW1hdGlvbixcbiAgb3VySW1wYWN0QW5pbWF0aW9uLFxuICB5b3VySW1wYWN0QW5pbWF0aW9uLFxuICBwZXJzb25hMUFuaW1hdGlvbixcbiAgcGVyc29uYTJBbmltYXRpb24sXG4gIHBlcnNvbmEzQW5pbWF0aW9uLFxuICAvLyBhZnJpY2FNYXBBbmltYXRpb25zLFxufSBmcm9tICcuL2luZGV4JztcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXG4gIHNldHVwUG92ZXJ0eVBvcHVwcygpO1xuICBjbGlja1BvdmVydHlQb3B1cHMoKTtcbiAgY291bnRlclVwKCk7XG4gIGxvYWRUaGVWaWRlbygpO1xuICB2aWRlb1RvZ2dsZSgpO1xuICBoZXJvQW5pbWF0aW9uKCk7XG4gIHdoeUV4aXN0QW5pbWF0aW9uKCk7XG4gIHdoZXJlT3BlcmF0ZUFuaW1hdGlvbigpO1xuICB3aGF0UG92ZXJ0eUFuaW1hdGlvbigpO1xuICBvdXJJbXBhY3RBbmltYXRpb24oKTtcbiAgeW91ckltcGFjdEFuaW1hdGlvbigpO1xuICBwZXJzb25hMUFuaW1hdGlvbigpO1xuICBwZXJzb25hMkFuaW1hdGlvbigpO1xuICBwZXJzb25hM0FuaW1hdGlvbigpO1xuICAvLyBhZnJpY2FNYXBBbmltYXRpb25zKCk7XG5cbiAgXG4gICQoJy53aGF0V2VNYWtlU2xpZGVyQ29udGFpbmVyJykuc2xpY2soe1xuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBhc05hdkZvcjogXCIubGlmZXN0eWxlSW1hZ2VTbGlkZXJcIixcbiAgICBhcnJvd3M6dHJ1ZSxcbiAgICBkb3RzOnRydWUsXG4gICAgcHJldkFycm93Oicuc2xpZGVyUHJldk5hdkFycm93JyxcbiAgICBuZXh0QXJyb3c6Jy5zbGlkZXJOZXh0TmF2QXJyb3cnLFxuICAgIGFwcGVuZERvdHM6Jy5zbGlkZXJOYXZQcm9ncmVzc0JhcicsXG4gICAgc3BlZWQ6NTAwLFxuICAgIGNzc0Vhc2U6ICdjdWJpYy1iZXppZXIoLjE3LC42NywuMjgsMSknLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGF1dG9wbGF5U3BlZWQ6IDQwMDAsXG4gIH0pO1xuXG4gICQoJy5saWZlc3R5bGVJbWFnZVNsaWRlcicpLnNsaWNrKHtcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgYXNOYXZGb3I6IFwiLndoYXRXZU1ha2VTbGlkZXJDb250YWluZXJcIixcbiAgICBhcnJvd3M6ZmFsc2UsXG4gICAgc3BlZWQ6NTAwLFxuICAgIGNzc0Vhc2U6ICdjdWJpYy1iZXppZXIoLjE3LC42NywuMjgsMSknLFxuICAgIHJ0bDogdHJ1ZSxcbiAgfSk7XG5cbiAgJCgnLndlTWFrZUNhdGVnb3J5W2RhdGEtc2xpZGVdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgc2xpZGVubyA9ICQodGhpcykuZGF0YSgnc2xpZGUnKTtcbiAgICAkKCcud2hhdFdlTWFrZVNsaWRlckNvbnRhaW5lcicpLnNsaWNrKCdzbGlja0dvVG8nLCBzbGlkZW5vIC0gMSk7XG4gIH0pO1xuXG5cbiAgIFxuICAgXG4gIFxuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gNzY3KSB7XG4gICAgICBcbiAgfVxuICBlbHNlIHtcbiAgXG4gIH0gIFxuICBcbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcblxuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMDI0KSB7XG5cbiAgfVxuICBlbHNlIHtcblxuIH1cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=