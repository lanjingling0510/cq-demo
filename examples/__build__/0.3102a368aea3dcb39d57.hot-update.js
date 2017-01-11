webpackHotUpdate(0,{

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _map = __webpack_require__(2);

	var _map2 = _interopRequireDefault(_map);

	var _filter = __webpack_require__(4);

	var _filter2 = _interopRequireDefault(_filter);

	var _compose = __webpack_require__(5);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var fp = {
	    map: _map2.default,
	    filter: _filter2.default
	};

	exports.default = fp;

/***/ },

/***/ 5:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var compose = function compose() {
	  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
	    fns[_key] = arguments[_key];
	  }

	  return function (x) {
	    return fns.reduce(function (v, f) {
	      return f(v);
	    }, x);
	  };
	};

	exports.default = compose;

/***/ }

})