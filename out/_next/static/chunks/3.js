(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./components/commons/footer/footer-links.tsx":
/*!****************************************************!*\
  !*** ./components/commons/footer/footer-links.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/links */ "./utils/links.js");
var _jsxFileName = "D:\\code\\exp\\ingenia\\components\\commons\\footer\\footer-links.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var FooterLinks = function FooterLinks() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      footerlinks = _useState[0],
      setfooterlinks = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      socialnetwork_twitter = _useState2[0],
      setsocialnetwork_twitter = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      socialnetwork_facebook = _useState3[0],
      setsocialnetwork_facebook = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      socialnetwork_youtube = _useState4[0],
      setsocialnetwork_youtube = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      socialnetwork_linkedln = _useState5[0],
      setsocialnetwork_linkedln = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setfooterlinks(_utils_links__WEBPACK_IMPORTED_MODULE_2__["default"].footerlinks);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, footerlinks ? __jsx("div", {
    className: "footer-content-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, footerlinks.map(function (item, i) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: i,
      href: item.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("span", {
      className: "footerlink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, item.section));
  })), __jsx("div", {
    className: "footer-content-sublinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("span", {
    className: "footersublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Terms of use")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("span", {
    className: "footersublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Privacy Policy"))), __jsx("div", {
    className: "socialnetworks-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "socialnetwork-twitter",
    onMouseOver: function onMouseOver() {
      return setsocialnetwork_twitter(true);
    },
    onMouseOut: function onMouseOut() {
      return setsocialnetwork_twitter(false);
    },
    id: socialnetwork_twitter ? "socialnetwork-twitter-hover" : "socialnetwork-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("div", {
    className: "socialnetwork-facebook",
    onMouseOver: function onMouseOver() {
      return setsocialnetwork_facebook(true);
    },
    onMouseOut: function onMouseOut() {
      return setsocialnetwork_facebook(false);
    },
    id: socialnetwork_facebook ? "socialnetwork-facebook-hover" : "socialnetwork-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("div", {
    className: "socialnetwork-youtube",
    onMouseOver: function onMouseOver() {
      return setsocialnetwork_youtube(true);
    },
    onMouseOut: function onMouseOut() {
      return setsocialnetwork_youtube(false);
    },
    id: socialnetwork_youtube ? "socialnetwork-youtube-hover" : "socialnetwork-youtube",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("div", {
    className: "socialnetwork-linkedln",
    onMouseOver: function onMouseOver() {
      return setsocialnetwork_linkedln(true);
    },
    onMouseOut: function onMouseOut() {
      return setsocialnetwork_linkedln(false);
    },
    id: socialnetwork_linkedln ? "socialnetwork-linkedln-hover" : "socialnetwork-linkedln",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (FooterLinks);

/***/ })

}]);
//# sourceMappingURL=3.js.map