(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ractive"), require("ractive-decorators-popper"));
	else if(typeof define === 'function' && define.amd)
		define(["ractive", "ractive-decorators-popper"], factory);
	else if(typeof exports === 'object')
		exports["RactiveDroplist"] = factory(require("ractive"), require("ractive-decorators-popper"));
	else
		root["RactiveDroplist"] = factory(root["Ractive"], root["RactiveDecoratorsPopper"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"ractive","commonjs2":"ractive","amd":"ractive","root":"Ractive"}
var external_commonjs_ractive_commonjs2_ractive_amd_ractive_root_Ractive_ = __webpack_require__(0);
var external_commonjs_ractive_commonjs2_ractive_amd_ractive_root_Ractive_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_ractive_commonjs2_ractive_amd_ractive_root_Ractive_);

// EXTERNAL MODULE: external {"commonjs":"ractive-decorators-popper","commonjs2":"ractive-decorators-popper","amd":"ractive-decorators-popper","root":"RactiveDecoratorsPopper"}
var external_commonjs_ractive_decorators_popper_commonjs2_ractive_decorators_popper_amd_ractive_decorators_popper_root_RactiveDecoratorsPopper_ = __webpack_require__(1);
var external_commonjs_ractive_decorators_popper_commonjs2_ractive_decorators_popper_amd_ractive_decorators_popper_root_RactiveDecoratorsPopper_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_ractive_decorators_popper_commonjs2_ractive_decorators_popper_amd_ractive_decorators_popper_root_RactiveDecoratorsPopper_);

// CONCATENATED MODULE: ../node_modules/compute-scroll-into-view/dist/index.module.js
function t(t){return null!=t&&"object"==typeof t&&1===t.nodeType}function e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return e(r.overflowY,n)||e(r.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function r(t,e,n,r,i,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-r:l>e&&d<n||o<t&&d>n?l-e+i:0}/* harmony default export */ var index_module = (function(e,i){var o=window,l=i.scrollMode,d=i.block,u=i.inline,h=i.boundary,a=i.skipOverflowHiddenElements,c="function"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,s=[],p=e;t(p)&&c(p);){if((p=p.parentNode)===f){s.push(p);break}p===document.body&&n(p)&&!n(document.documentElement)||n(p,a)&&s.push(p)}for(var g=o.visualViewport?o.visualViewport.width:innerWidth,m=o.visualViewport?o.visualViewport.height:innerHeight,w=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,W=e.getBoundingClientRect(),b=W.height,H=W.width,y=W.top,M=W.right,E=W.bottom,V=W.left,x="start"===d||"nearest"===d?y:"end"===d?E:y+b/2,I="center"===u?V+H/2:"end"===u?M:V,C=[],T=0;T<s.length;T++){var k=s[T],B=k.getBoundingClientRect(),D=B.height,O=B.width,R=B.top,X=B.right,Y=B.bottom,L=B.left;if("if-needed"===l&&y>=0&&V>=0&&E<=m&&M<=g&&y>=R&&E<=Y&&V>=L&&M<=X)return C;var S=getComputedStyle(k),j=parseInt(S.borderLeftWidth,10),N=parseInt(S.borderTopWidth,10),q=parseInt(S.borderRightWidth,10),z=parseInt(S.borderBottomWidth,10),A=0,F=0,G="offsetWidth"in k?k.offsetWidth-k.clientWidth-j-q:0,J="offsetHeight"in k?k.offsetHeight-k.clientHeight-N-z:0;if(f===k)A="start"===d?x:"end"===d?x-m:"nearest"===d?r(v,v+m,m,N,z,v+x,v+x+b,b):x-m/2,F="start"===u?I:"center"===u?I-g/2:"end"===u?I-g:r(w,w+g,g,j,q,w+I,w+I+H,H),A=Math.max(0,A+v),F=Math.max(0,F+w);else{A="start"===d?x-R-N:"end"===d?x-Y+z+J:"nearest"===d?r(R,Y,D,N,z+J,x,x+b,b):x-(R+D/2)+J/2,F="start"===u?I-L-j:"center"===u?I-(L+O/2)+G/2:"end"===u?I-X+q+G:r(L,X,O,j,q+G,I,I+H,H);var K=k.scrollLeft,P=k.scrollTop;x+=P-(A=Math.max(0,Math.min(P+A,k.scrollHeight-D+J))),I+=K-(F=Math.max(0,Math.min(K+F,k.scrollWidth-O+G)))}C.push({el:k,top:A,left:F})}return C});
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ../node_modules/scroll-into-view-if-needed/es/index.js


function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}

function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = 'auto';
  }

  var canSmoothScroll = ('scrollBehavior' in document.body.style);
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;

    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top: top,
        left: left,
        behavior: behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}

function getOptions(options) {
  if (options === false) {
    return {
      block: 'end',
      inline: 'nearest'
    };
  }

  if (isOptionsObject(options)) {
    return options;
  }

  return {
    block: 'start',
    inline: 'nearest'
  };
}

function scrollIntoView(target, options) {
  var targetIsDetached = !target.ownerDocument.documentElement.contains(target);

  if (isOptionsObject(options) && typeof options.behavior === 'function') {
    return options.behavior(targetIsDetached ? [] : index_module(target, options));
  }

  if (targetIsDetached) {
    return;
  }

  var computeOptions = getOptions(options);
  return defaultBehavior(index_module(target, computeOptions), computeOptions.behavior);
}

/* harmony default export */ var es = (scrollIntoView);
// CONCATENATED MODULE: ./ractive-droplist.ractive.html




function uuid() {
  // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
  var lut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
  var d0 = Math.random() * 0x100000000 | 0;
  var d1 = Math.random() * 0x100000000 | 0;
  var d2 = Math.random() * 0x100000000 | 0;
  var d3 = Math.random() * 0x100000000 | 0;
  return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
}

function esc(string) {
  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };
  return String(string).replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
}

/* harmony default export */ var ractive_droplist_ractive = __webpack_exports__["default"] = (external_commonjs_ractive_commonjs2_ractive_amd_ractive_root_Ractive_default.a.extend({
  template: {
    v: 4,
    t: [{
      t: 7,
      e: "div",
      m: [{
        n: "class",
        f: [{
          t: 2,
          r: "class"
        }, " droplist-container"],
        t: 13
      }, {
        n: "class-hidden",
        t: 13,
        f: [{
          t: 2,
          r: "fp.hidden"
        }]
      }],
      f: [{
        t: 4,
        f: [{
          t: 7,
          e: "label",
          m: [{
            n: "class",
            f: ["text-truncate align-middle ", {
              t: 2,
              x: {
                r: ["fp.required"],
                s: "_0?\"required\":\"\""
              }
            }],
            t: 13
          }],
          f: [{
            t: 2,
            r: "label"
          }]
        }],
        n: 50,
        r: "label"
      }, " ", {
        t: 7,
        e: "input",
        m: [{
          n: "type",
          f: "text",
          t: 13
        }, {
          n: "name",
          f: [{
            t: 2,
            r: "name"
          }],
          t: 13
        }, {
          n: "value",
          f: [{
            t: 2,
            r: "value"
          }],
          t: 13
        }, {
          n: "class",
          f: "hidden-out-of-view",
          t: 13
        }, {
          n: "droplist-validator-field",
          f: 0,
          t: 13
        }, {
          t: 2,
          x: {
            r: ["fp.required"],
            s: "_0?\"required=\\\"true\\\" data-rule-not-zeros=\\\"true\\\"\":\"\""
          }
        }]
      }, " ", {
        t: 7,
        e: "div",
        m: [{
          t: 13,
          n: "class",
          f: "dropdown droplist",
          g: 1
        }, {
          n: "popper",
          t: 71,
          f: {
            r: [],
            s: "[{placement:\"bottom-start\",enable_arrows:false}]"
          }
        }],
        f: [{
          t: 7,
          e: "button",
          m: [{
            t: 13,
            n: "class",
            f: "btn btn-light dropdown-toggle w-100 text-left",
            g: 1
          }, {
            n: "type",
            f: "button",
            t: 13,
            g: 1
          }, {
            n: "popper-trigger",
            f: 0,
            t: 13
          }, {
            n: "aria-haspopup",
            f: "true",
            t: 13,
            g: 1
          }, {
            n: "aria-expanded",
            f: [{
              t: 2,
              x: {
                r: ["menu_open"],
                s: "_0?\"true\":\"false\""
              }
            }],
            t: 13
          }, {
            t: 2,
            x: {
              r: ["fp.disabled"],
              s: "_0?\"disabled\":\"\""
            }
          }],
          f: [{
            t: 3,
            x: {
              r: ["selected_text"],
              s: "_0?_0:\"&nbsp;\""
            }
          }]
        }, " ", {
          t: 7,
          e: "div",
          m: [{
            t: 13,
            n: "class",
            f: "dropdown-menu w-100 pt-0",
            g: 1
          }, {
            n: "popper",
            f: 0,
            t: 13
          }, {
            n: ["popper_before_open"],
            t: 70,
            f: ""
          }, {
            n: ["popper_open"],
            t: 70,
            f: {
              r: [],
              s: "[[\"open_menu\"]]"
            }
          }, {
            n: ["popper_before_close"],
            t: 70,
            f: ""
          }, {
            n: ["popper_close"],
            t: 70,
            f: {
              r: [],
              s: "[[\"close_menu\"]]"
            }
          }],
          f: [{
            t: 7,
            e: "div",
            m: [{
              t: 13,
              n: "class",
              f: "d-flex flex-column",
              g: 1
            }],
            f: [{
              t: 7,
              e: "div",
              m: [{
                t: 13,
                n: "class",
                f: "droplist-input-wrapper pt-2 pr-2 pb-0 pl-2",
                g: 1
              }],
              f: [{
                t: 7,
                e: "input",
                m: [{
                  n: "type",
                  f: "text",
                  t: 13
                }, {
                  n: "class",
                  f: "form-control",
                  t: 13
                }, {
                  n: "autocomplete",
                  f: "off",
                  t: 13
                }, {
                  n: "value",
                  f: [{
                    t: 2,
                    r: "text_value"
                  }],
                  t: 13
                }, {
                  n: ["keydown"],
                  t: 70,
                  f: {
                    r: [],
                    s: "[[\"keydown\"]]"
                  }
                }, {
                  n: ["click"],
                  t: 70,
                  f: {
                    r: ["@event"],
                    s: "[_0.stopPropagation()]"
                  }
                }, {
                  n: "placeholder",
                  f: [{
                    t: 2,
                    r: "type_to_search"
                  }],
                  t: 13
                }]
              }]
            }, " ", {
              t: 7,
              e: "div",
              m: [{
                t: 13,
                n: "class",
                f: "droplist-results mt-2",
                g: 1
              }, {
                n: "style",
                f: ["max-height: ", {
                  t: 2,
                  r: "maxheight"
                }, "px; ", {
                  t: 2,
                  x: {
                    r: ["show_list_on_open", "text_value"],
                    s: "_0||_1?\"\":\"height:0px; margin-top:0px !important;\""
                  }
                }],
                t: 13
              }],
              f: [{
                t: 4,
                f: [{
                  t: 7,
                  e: "a",
                  m: [{
                    t: 13,
                    n: "class",
                    f: "dropdown-item",
                    g: 1
                  }, {
                    n: "href",
                    f: "javascript:;",
                    t: 13,
                    g: 1
                  }, {
                    n: "class-selected",
                    t: 13,
                    f: [{
                      t: 2,
                      x: {
                        r: ["value", "~/value"],
                        s: "_0==_1"
                      }
                    }]
                  }, {
                    n: "class-active",
                    t: 13,
                    f: [{
                      t: 2,
                      x: {
                        r: ["value", "active_value"],
                        s: "_0==_1"
                      }
                    }]
                  }, {
                    n: ["click"],
                    t: 70,
                    f: {
                      r: [],
                      s: "[[\"set_selected\"]]"
                    }
                  }, {
                    n: ["mouseenter"],
                    t: 70,
                    f: {
                      r: [],
                      s: "[[\"set_active\"]]"
                    }
                  }, {
                    n: ["mouseup"],
                    t: 70,
                    f: {
                      r: [],
                      s: "[[\"set_active\"]]"
                    }
                  }],
                  f: [{
                    t: 8,
                    r: "content"
                  }]
                }],
                n: 52,
                r: "filtered"
              }, {
                t: 4,
                f: [{
                  t: 7,
                  e: "a",
                  m: [{
                    t: 13,
                    n: "class",
                    f: "dropdown-item",
                    g: 1
                  }, {
                    n: "href",
                    f: "javascript:;",
                    t: 13,
                    g: 1
                  }],
                  f: [{
                    t: 2,
                    x: {
                      r: ["text_value", "no_results"],
                      s: "_0?_1:\"\""
                    }
                  }]
                }],
                n: 51,
                l: 1
              }]
            }]
          }]
        }]
      }, " ", {
        t: 7,
        e: "div",
        m: [{
          n: "error-holder-for",
          f: [{
            t: 2,
            r: "name"
          }],
          t: 13
        }]
      }]
    }],
    e: {
      "_0?\"required\":\"\"": function _0Required(_0) {
        return _0 ? "required" : "";
      },
      "_0?\"required=\\\"true\\\" data-rule-not-zeros=\\\"true\\\"\":\"\"": function _0RequiredTrueDataRuleNotZerosTrue(_0) {
        return _0 ? "required=\"true\" data-rule-not-zeros=\"true\"" : "";
      },
      "[{placement:\"bottom-start\",enable_arrows:false}]": function placementBottomStartEnable_arrowsFalse() {
        return [{
          placement: "bottom-start",
          enable_arrows: false
        }];
      },
      "_0?\"true\":\"false\"": function _0TrueFalse(_0) {
        return _0 ? "true" : "false";
      },
      "_0?\"disabled\":\"\"": function _0Disabled(_0) {
        return _0 ? "disabled" : "";
      },
      "_0?_0:\"&nbsp;\"": function _0_0Nbsp(_0) {
        return _0 ? _0 : "&nbsp;";
      },
      "[[\"open_menu\"]]": function open_menu() {
        return [["open_menu"]];
      },
      "[[\"close_menu\"]]": function close_menu() {
        return [["close_menu"]];
      },
      "[[\"keydown\"]]": function keydown() {
        return [["keydown"]];
      },
      "[_0.stopPropagation()]": function _0StopPropagation(_0) {
        return [_0.stopPropagation()];
      },
      "_0||_1?\"\":\"height:0px; margin-top:0px !important;\"": function _0_1Height0pxMarginTop0pxImportant(_0, _1) {
        return _0 || _1 ? "" : "height:0px; margin-top:0px !important;";
      },
      "_0==_1": function _0_1(_0, _1) {
        return _0 == _1;
      },
      "[[\"set_selected\"]]": function set_selected() {
        return [["set_selected"]];
      },
      "[[\"set_active\"]]": function set_active() {
        return [["set_active"]];
      },
      "_0?_1:\"\"": function _0_1(_0, _1) {
        return _0 ? _1 : "";
      }
    }
  },
  css: " .hidden {display: none;} .hidden-out-of-view {position: absolute; top: -9999px; left: -9999px;} .droplist .btn.dropdown-toggle::after {float: right; margin-top:10px;} .droplist .droplist-results {height: auto; overflow-x: hidden;} .droplist .dropdown-menu a.active {background-color: #f8f9fa; color: #16181b;} .droplist .dropdown-menu a.selected, .droplist .dropdown-menu a.active.selected {background-color: #007bff; color: #fff;} .droplist .dropdown-menu[x-placement=\"top-start\"] .d-flex {flex-direction: column-reverse !important;} .droplist mark {background-color: #ffffcc; padding: 0;} input.is-invalid ~ .droplist > button {border: 1px solid #dc3545;} .droplist .droplist-results .dropdown-item:empty:before, .droplist-results .dropdown-item > span:empty:before {content: \"\\00a0\";}",
  data: function data() {
    return {
      no_results: 'No Results',
      type_to_search: 'Type to search',
      label: '',
      "class": '',
      menu_open: false,
      list: [],
      value: '',
      active_value: '',
      text_value: '',
      show_list_on_open: true,
      as_value: 'value',
      as_text: 'text',
      maxheight: 210,
      add_search: '',
      fp: {
        required: false,
        hidden: false,
        disabled: false
      },
      fp_event: null,
      selected_line: {}
    };
  },
  decorators: {
    popper: external_commonjs_ractive_decorators_popper_commonjs2_ractive_decorators_popper_amd_ractive_decorators_popper_root_RactiveDecoratorsPopper_default.a
  },
  computed: {
    filtered: function filtered() {
      // Bail if there is no list defined
      if (typeof this.get('list') === 'undefined') {
        return;
      }

      var show_list_on_open = this.get('show_list_on_open');
      var tosearch = this.get('text_value');
      var list = show_list_on_open || !show_list_on_open && tosearch.length > 0 ? this.get('list') : []; // Rename keys and filter at the same time

      return list.reduce(function (arr, o) {
        var k = {
          value: o[this.get('as_value')],
          text: o[this.get('as_text')]
        }; // If add_search doesnt exist then set it empty value.

        k.add_search = o[this.get('add_search')] ? o[this.get('add_search')] : ''; // add_search is an additional field to search in list. Search results based on two criteria.

        if (k.text.toUpperCase().indexOf(tosearch.toUpperCase()) >= 0 || k.add_search.toUpperCase().indexOf(tosearch.toUpperCase()) >= 0) {
          // Escape text so that it's safe
          k.text = esc(k.text); // Find mathed text from list based on text input.  We do that for text case. Matches both capital and lower case letters 

          var search_text = new RegExp(tosearch, 'i').exec(k.text); // TODO: Check this if else why needed now and not in the past

          if (search_text && search_text[0].length > 0) {
            if (search_text != null) {
              k.text_highlighted = k.text.replace(search_text[0], '<mark>' + search_text[0] + '</mark>');
            } else {
              k.text_highlighted = k.text.replace(tosearch, '<mark>' + tosearch + '</mark>');
            }
          } else {
            k.text_highlighted = k.text;
          }

          arr.push(k);
        }

        return arr;
      }.bind(this), []);
    },
    selected_text: function selected_text() {
      var value = this.get('value');
      var list = this.get('list');
      var toret = list.filter(function (o) {
        return o[this.get('as_value')] == value;
      }.bind(this));
      return toret.length > 0 ? toret[0][this.get('as_text')] : '';
    },
    name: function name() {
      return 'dl_' + uuid();
    }
  },
  observe: {
    'filtered': {
      handler: function handler(newValue, oldValue, keypath, idx) {
        if (newValue && this.find('[popper]').decorator.popper) {
          this.find('[popper]').decorator.popper.scheduleUpdate();
        }
      },
      init: false
    }
  },
  on: {
    keydown: function keydown(ctx) {
      var k = ctx.original.keyCode;

      if (k === 38 || k === 40) {
        ctx.original.preventDefault();
        var filtered = this.get('filtered');
        var selected = this.get('value');
        var active = this.get('active_value');
        var toselect = '';
        var active_found = false; // Find active a and then select previous or next a. If last a is selected, then select last a when down arrow pressed.

        for (var i = 0; i < filtered.length; i++) {
          if (filtered[i]['value'] == active) {
            var pr = k == 38 ? -1 : 1;
            toselect = typeof filtered[i + pr] != 'undefined' ? filtered[i + pr]['value'] : filtered[i]['value'];
            active_found = true;
            break;
          }
        }

        ;
        var value = active_found ? toselect : filtered.length > 0 ? filtered[0]['value'] : '';
        this.set('active_value', value);
        var selected_a = this.find('a.active');
        var next_or_prev = k === 38 ? 'previousSibling' : 'nextSibling'; // Up / down arrow keypress

        if (selected_a && selected_a[next_or_prev]) {
          es(selected_a[next_or_prev], {
            block: 'nearest',
            inline: 'nearest'
          });
        }
      } // Enter button pressed


      if (k === 13) {
        ctx.original.preventDefault();
        this.set('value', this.get('filtered').length == 1 ? this.get('filtered.0.value') : this.get('active_value'));
        this.fire('change');
        this.find('[popper]').decorator.close();
        this.find('button[popper-trigger]').focus();
      }
    },
    set_selected: function set_selected(ctx) {
      this.set('value', ctx.get('value'));
      this.fire('change');
      this.find('[popper]').decorator.close();
      this.find('button[popper-trigger]').focus();
    },
    set_active: function set_active(ctx) {
      this.set('active_value', ctx.get('value'));
    },
    open_menu: function open_menu(ctx) {
      this.set({
        active_value: this.get('value'),
        text_value: '',
        menu_open: true
      });
      this.find('.droplist-input-wrapper > input').focus();

      if (this.find('a.selected')) {
        es(this.find('a.selected'), {
          scrollMode: 'if-needed',
          block: 'nearest',
          inline: 'nearest'
        });
      }
    },
    close_menu: function close_menu() {
      this.set('menu_open', false);
    },
    change: function change(ctx) {
      var selected_line = this.get('filtered').filter(function (o) {
        return o.value == ctx.get('value');
      })[0];
      this.set('selected_line', selected_line);

      if (this.get('fp_event')) {
        this.exportFpData(this.find('input'), this.get('fp_event'));
      }
    }
  }
}));

/***/ })
/******/ ])["default"];
});