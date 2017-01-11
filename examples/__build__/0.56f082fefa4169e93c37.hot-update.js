webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _fp = __webpack_require__(1);

	var _fp2 = _interopRequireDefault(_fp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_fp2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _map = __webpack_require__(2);

	Object.defineProperty(exports, 'map', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_map).default;
	  }
	});

	var _filter = __webpack_require__(4);

	Object.defineProperty(exports, 'filter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_filter).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _curry = __webpack_require__(3);

	var _curry2 = _interopRequireDefault(_curry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var map = (0, _curry2.default)(function (fn, arr) {
	  return arr.map(fn);
	});

	exports.default = map;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function curry(fn) {
	    return function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return fn.bind.apply(fn, [null].concat(args));
	    };
	}

	exports.default = curry;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _curry = __webpack_require__(3);

	var _curry2 = _interopRequireDefault(_curry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var filter = (0, _curry2.default)(function (fn, arr) {
	  return arr.filter(fn);
	});

	exports.default = filter;

/***/ }
])