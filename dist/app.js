webpackJsonp([0,1],{

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function multiply(a, b) {
    return a * b;
};

console.log("HELLO");

/* harmony default export */ __webpack_exports__["a"] = multiply;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiply__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_assets_images_favicon_16x16_png__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_assets_images_favicon_16x16_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__client_assets_images_favicon_16x16_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_assets_images_favicon_32x32_png__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_assets_images_favicon_32x32_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__client_assets_images_favicon_32x32_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_superagent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_superagent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);









const sayHello = (name = 'Mark') => `Hello ${__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.trim(name)}`;

sayHello();

function twoPlusThree() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__sum__["a" /* default */])(2, 3);
};

function twoTimesThree() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__multiply__["a" /* default */])(2, 3);
};

function doIt() {

    console.log('WEBPACK WORKS: ', twoPlusThree(), twoTimesThree());

    (() => {
        const hello = "hello world in my eyes";
        console.log("HELLO WORLD", hello);
    })();

    /*request
        .post('//localhost:3000/')
        .send({ name: 'Manny', species: 'cat' })
        .set('X-API-Key', 'foobar')
        .set('Accept', 'application/json')
        .end(function(err, res){
    });*/
}

doIt();

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function sum(a, b) {
    return a + b;
};

/* harmony default export */ __webpack_exports__["a"] = sum;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicon-16x16.png";

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicon-32x32.png";

/***/ })

},[15]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGVtcC9wbGF5Z3JvdW5kcy93ZWJwYWNrL211bHRpcGx5LmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wL3BsYXlncm91bmRzL3dlYnBhY2svY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcC9wbGF5Z3JvdW5kcy93ZWJwYWNrL3N1bS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi0xNngxNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9hc3NldHMvaW1hZ2VzL2Zhdmljb24tMzJ4MzIucG5nIl0sIm5hbWVzIjpbIm11bHRpcGx5IiwiYSIsImIiLCJjb25zb2xlIiwibG9nIiwic2F5SGVsbG8iLCJuYW1lIiwiXyIsInRyaW0iLCJ0d29QbHVzVGhyZWUiLCJzdW0iLCJ0d29UaW1lc1RocmVlIiwiZG9JdCIsImhlbGxvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxTQUFTQSxRQUFULENBQWtCQyxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0I7QUFDcEIsV0FBT0QsSUFBSUMsQ0FBWDtBQUNIOztBQUVEQyxRQUFRQyxHQUFSLENBQVksT0FBWjs7QUFFQSx3REFBZUosUUFBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsTUFBTUssV0FBVyxDQUFDQyxPQUFPLE1BQVIsS0FBb0IsU0FBUyw4Q0FBQUMsQ0FBRUMsSUFBRixDQUFPRixJQUFQLENBQWMsRUFBNUQ7O0FBRUFEOztBQUVBLFNBQVNJLFlBQVQsR0FBd0I7QUFDcEIsV0FBTyw0RUFBQUMsQ0FBSSxDQUFKLEVBQU8sQ0FBUCxDQUFQO0FBQ0g7O0FBRUQsU0FBU0MsYUFBVCxHQUF5QjtBQUNyQixXQUFPLGlGQUFBWCxDQUFTLENBQVQsRUFBVyxDQUFYLENBQVA7QUFDSDs7QUFFRCxTQUFTWSxJQUFULEdBQWdCOztBQUVaVCxZQUFRQyxHQUFSLENBQVksaUJBQVosRUFBK0JLLGNBQS9CLEVBQStDRSxlQUEvQzs7QUFFQSxLQUFDLE1BQU07QUFDSCxjQUFNRSxRQUFRLHdCQUFkO0FBQ0FWLGdCQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQlMsS0FBM0I7QUFDSCxLQUhEOztBQUtBOzs7Ozs7O0FBUUg7O0FBRURELE87Ozs7Ozs7O0FDeENBLFNBQVNGLEdBQVQsQ0FBYVQsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUI7QUFDZixXQUFPRCxJQUFJQyxDQUFYO0FBQ0g7O0FBRUQsd0RBQWVRLEdBQWYsQzs7Ozs7OztBQ0pBLDZEOzs7Ozs7O0FDQUEsNkQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbXVsdGlwbHkoYSwgYikge1xuICAgIHJldHVybiBhICogYjtcbn07XG5cbmNvbnNvbGUubG9nKFwiSEVMTE9cIilcblxuZXhwb3J0IGRlZmF1bHQgbXVsdGlwbHk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RlbXAvcGxheWdyb3VuZHMvd2VicGFjay9tdWx0aXBseS5qcyIsImltcG9ydCBtdWx0aXBseSBmcm9tICcuL211bHRpcGx5JztcbmltcG9ydCBzdW0gZnJvbSAnLi9zdW0nO1xuaW1wb3J0ICcuLi8uLi8uLi9jbGllbnQvYXNzZXRzL2ltYWdlcy9mYXZpY29uLTE2eDE2LnBuZyc7XG5pbXBvcnQgJy4uLy4uLy4uL2NsaWVudC9hc3NldHMvaW1hZ2VzL2Zhdmljb24tMzJ4MzIucG5nJztcblxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnc3VwZXJhZ2VudCc7XG5cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IHNheUhlbGxvID0gKG5hbWUgPSAnTWFyaycpID0+IGBIZWxsbyAkeyBfLnRyaW0obmFtZSkgfWA7XG5cbnNheUhlbGxvKCk7XG5cbmZ1bmN0aW9uIHR3b1BsdXNUaHJlZSgpIHtcbiAgICByZXR1cm4gc3VtKDIsIDMpO1xufTtcblxuZnVuY3Rpb24gdHdvVGltZXNUaHJlZSgpIHtcbiAgICByZXR1cm4gbXVsdGlwbHkoMiwzKTtcbn07XG5cbmZ1bmN0aW9uIGRvSXQoKSB7XG5cbiAgICBjb25zb2xlLmxvZygnV0VCUEFDSyBXT1JLUzogJywgdHdvUGx1c1RocmVlKCksIHR3b1RpbWVzVGhyZWUoKSk7XG5cbiAgICAoKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWxsbyA9IFwiaGVsbG8gd29ybGQgaW4gbXkgZXllc1wiXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSEVMTE8gV09STERcIiwgaGVsbG8pO1xuICAgIH0pKCk7XG5cbiAgICAvKnJlcXVlc3RcbiAgICAgICAgLnBvc3QoJy8vbG9jYWxob3N0OjMwMDAvJylcbiAgICAgICAgLnNlbmQoeyBuYW1lOiAnTWFubnknLCBzcGVjaWVzOiAnY2F0JyB9KVxuICAgICAgICAuc2V0KCdYLUFQSS1LZXknLCAnZm9vYmFyJylcbiAgICAgICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgICAgICAuZW5kKGZ1bmN0aW9uKGVyciwgcmVzKXtcbiAgICB9KTsqL1xuXG59XG5cbmRvSXQoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGVtcC9wbGF5Z3JvdW5kcy93ZWJwYWNrL2NhbGMuanMiLCJmdW5jdGlvbiBzdW0oYSwgYikge1xuICAgIHJldHVybiBhICsgYlxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3VtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZW1wL3BsYXlncm91bmRzL3dlYnBhY2svc3VtLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbi0xNngxNi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jbGllbnQvYXNzZXRzL2ltYWdlcy9mYXZpY29uLTE2eDE2LnBuZ1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29uLTMyeDMyLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsaWVudC9hc3NldHMvaW1hZ2VzL2Zhdmljb24tMzJ4MzIucG5nXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=