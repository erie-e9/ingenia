(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./components/commons/footer/footer-content.tsx":
/*!******************************************************!*\
  !*** ./components/commons/footer/footer-content.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\code\\exp\\ingenia\\components\\commons\\footer\\footer-content.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** *
 * Component to show info about countries where Ingenia are.
* **/
var FooterContent = function FooterContent() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "footer-content-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\xA92014 Ingenia Group"), __jsx("div", {
    className: "footer-ingenia-locations",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "footer-ingenia-location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "footer-content-country",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "countryimage",
    id: "usa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("p", {
    className: "countryname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "USA")), __jsx("p", {
    className: "footer-content-street",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "1200 18th Street, NW"), __jsx("p", {
    className: "footer-content-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Suite 700"), __jsx("p", {
    className: "footer-content-address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Washington DC 20036 USA"), __jsx("p", {
    className: "footer-content-phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "50 22 09 00")), __jsx("div", {
    className: "footerDivider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("div", {
    className: "footer-ingenia-location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "footer-content-country",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "countryimage",
    id: "mexico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("p", {
    className: "countryname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Mexico")), __jsx("p", {
    className: "footer-content-street",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Anatole France 311"), __jsx("p", {
    className: "footer-content-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Polanco, Miguel Hidalgo"), __jsx("p", {
    className: "footer-content-address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "11560 Mexico D.F."), __jsx("p", {
    className: "footer-content-phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "50 22 09 00")))));
};

/* harmony default export */ __webpack_exports__["default"] = (FooterContent);

/***/ }),

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



/** *
 * Ingenia Social Networks links.
* **/

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
      lineNumber: 23
    },
    __self: this
  }, __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, footerlinks.map(function (item, i) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: i,
      href: item.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("span", {
      className: "footerlink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, item.section));
  })), __jsx("div", {
    className: "footer-content-sublinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("span", {
    className: "footersublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Terms of use")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("span", {
    className: "footersublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Privacy Policy"))), __jsx("div", {
    className: "socialnetworks-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
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
      lineNumber: 44
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
      lineNumber: 45
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
      lineNumber: 46
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
      lineNumber: 47
    },
    __self: this
  }))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (FooterLinks);

/***/ }),

/***/ "./components/pages/contact/favoriteplaces/index.tsx":
/*!***********************************************************!*\
  !*** ./components/pages/contact/favoriteplaces/index.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_styles_pages_contact_favoriteplaces_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../public/styles/pages/contact/favoriteplaces/index.scss */ "./public/styles/pages/contact/favoriteplaces/index.scss");
/* harmony import */ var _public_styles_pages_contact_favoriteplaces_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_styles_pages_contact_favoriteplaces_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_favoriteplaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/favoriteplaces */ "./utils/favoriteplaces.js");

var _jsxFileName = "D:\\code\\exp\\ingenia\\components\\pages\\contact\\favoriteplaces\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




/** *
Favorite places Component shows simple app to suggest a list of known 
places by category in both places where Ingenia are. 
* **/

var DynamicItem = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./item */ "./components/pages/contact/favoriteplaces/item.tsx"));
}, {
  ssr: false //   loading: () => <ComponentLoader />
  ,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./item */ "./components/pages/contact/favoriteplaces/item.tsx")];
    },
    modules: ["./item"]
  }
});

var ContactFavoritePlaces = function ContactFavoritePlaces() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_utils_favoriteplaces__WEBPACK_IMPORTED_MODULE_4__["default"].favoriteplaces),
      favoriteplaces = _useState[0];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("readbook"),
      selectedplace = _useState2[0],
      setselectedplace = _useState2[1]; // @ts-ignore


  var handleSelectOptions = function handleSelectOptions(event) {
    event.preventDefault();
    setselectedplace(event.target.value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "favoriteplaces-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "favoriteplaces-head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Coming to visit us?"), " Here are some of our favorite places arount town to"), __jsx("div", {
    className: "favoriteplaces-selector",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("select", {
    value: selectedplace,
    onChange: handleSelectOptions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("option", {
    value: "readbook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "A quiet place to read a book"), __jsx("option", {
    value: "meetpeople",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Meet new people"), __jsx("option", {
    value: "entertain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Entertain"), __jsx("option", {
    value: "exercise",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Exercise"), __jsx("option", {
    value: "healthyfood",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Eat healthy"), __jsx("option", {
    value: "shopping",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Shopping")))), favoriteplaces ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "countries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "country",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "favoriteplaces-cities",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "MEXICO CITY:")), __jsx("div", {
    className: "favoriteplaces-items-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, favoriteplaces.map(function (item) {
    if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(item[selectedplace])) {
      return item[selectedplace].map(function (element, i) {
        if (element.country === 'Mexico') {
          return __jsx(DynamicItem, {
            key: i,
            data: element,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          });
        }
      });
    }
  }))), __jsx("div", {
    className: "favoriteplacesdivider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("div", {
    className: "country",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: "favoriteplaces-cities",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "WASHINGTON DC:")), __jsx("div", {
    className: "favoriteplaces-items-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, favoriteplaces.map(function (item) {
    if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(item[selectedplace])) {
      return item[selectedplace].map(function (element, i) {
        if (element.country === 'USA') {
          return __jsx(DynamicItem, {
            key: i,
            data: element,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          });
        }
      });
    }
  }))))) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactFavoritePlaces);

/***/ }),

/***/ "./components/pages/contact/favoriteplaces/item.tsx":
/*!**********************************************************!*\
  !*** ./components/pages/contact/favoriteplaces/item.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\code\\exp\\ingenia\\components\\pages\\contact\\favoriteplaces\\item.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ContactFavoritePlaces = function ContactFavoritePlaces(_ref) {
  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      propdata = _useState[0],
      setpropdata = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      propcategory = _useState2[0],
      setpropcategory = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setpropdata(data);
    setpropcategory(data.category);
  }); // @ts-ignore

  var favoritePlaceIcon = function favoritePlaceIcon() {
    switch (propcategory) {
      case 'readbook':
        return 'favoriteplace-item-readbook';
        break;

      case 'meetpeople':
        return 'favoriteplace-item-meetpeople';
        break;

      case 'entertain':
        return 'favoriteplace-item-entertain';
        break;

      case 'exercise':
        return 'favoriteplace-item-exercise';
        break;

      case 'healthyfood':
        return 'favoriteplace-item-healthyfood';
        break;

      case 'shopping':
        return 'favoriteplace-item-shopping';
        break;

      default:
        return 'favoriteplace-item-readbook';
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, propdata ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "favoriteplace-item-wrapper",
    style: {
      textAlign: propdata.country === 'Mexico' ? 'end' : 'start',
      alignItems: propdata.country === 'Mexico' ? 'flex-end' : 'flex-start'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "favoriteplace-item-head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, propdata.country === 'Mexico' ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("a", {
    href: propdata.link,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, propdata.name)), __jsx("div", {
    id: favoritePlaceIcon(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    id: favoritePlaceIcon(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("a", {
    href: propdata.link,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, propdata.name)))), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, propdata.ubication, " ", propdata.country), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, propdata.info))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (ContactFavoritePlaces);

/***/ }),

/***/ "./components/pages/contact/form/form-content.tsx":
/*!********************************************************!*\
  !*** ./components/pages/contact/form/form-content.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_recaptcha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-recaptcha */ "./node_modules/react-recaptcha/dist/react-recaptcha.js");
/* harmony import */ var react_recaptcha__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_recaptcha__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\code\\exp\\ingenia\\components\\pages\\contact\\form\\form-content.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var FormContent = function FormContent() {
  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.errors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isVerified = _useState[0],
      setisVerified = _useState[1]; // @ts-ignore


  var onSubmit = function onSubmit(data) {
    var dataobj = {
      fullname: "".concat(data.name.replace(/\s/g, ''), " ").concat(data.lastname),
      email: data.email.replace(/\s/g, ''),
      phone: data.phone.replace(/\s/g, ''),
      comment: data.comment.trim()
    };
    console.log('form-data', dataobj); // HTTP request POST type to send email usign axios like middleman, 
    // with observables to catch responses
    // axios.post('http://ingenia.com/snippets/test/contact.php', {dataobj})
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: 'POST',
      url: 'https://ingenia.com/snippets/test/contact.php',
      data: dataobj,
      headers: {
        'Content-Type': 'multipart/form-data' // 'Content-Type': 'application/json;charset=UTF-8',
        // 'Access-Control-Allow-Origin': '*',

      }
    }).then(function (response) {
      console.log('exito we: ', response);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  console.log(watch('example')); // Function to know current status for Captcha, if is true it'll enable form button

  var handleClick = function handleClick() {
    if (!isVerified) {
      alert('Please verify you are human'); // alert('You have successfully registered like human')
    } // else {
    //     alert('You have successfully registered like human')
    // }

  }; // specifying your onload callback function


  var callback = function callback() {
    console.log('ReCaptcha has loaded');
  }; // specifying verify callback function


  var verifyCallback = function verifyCallback(response) {
    console.log(response);
    setisVerified(true);
  };

  var recaptchaInstance; // create a reset function

  var resetRecaptcha = function resetRecaptcha() {
    recaptchaInstance.reset();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "form-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: "fiels-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "1")), __jsx("div", {
    className: "form-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("input", {
    name: "name",
    ref: register({
      required: true,
      minLength: 3,
      pattern: /^[A-Za-z ]+([A-Za-z]+)$/i
    }),
    className: "forms-input-text",
    type: "text",
    placeholder: "Name",
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), errors.name && errors.name.type === 'required' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "This field is required"), errors.name && errors.name.type === 'minLength' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "This field require min 3 characters"), errors.name && errors.name.type === 'pattern' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Please insert only letters")), __jsx("div", {
    className: "form-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("input", {
    name: "lastname",
    ref: register({
      required: true,
      minLength: 4,
      pattern: /^[A-Za-z ]+([A-Za-z]+)+$/i
    }),
    className: "forms-input-text",
    type: "text",
    placeholder: "Last Name",
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), errors.lastname && errors.lastname.type === 'required' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "This field is required"), errors.lastname && errors.lastname.type === 'minLength' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "This field require min 4 characters"), errors.lastname && errors.lastname.type === 'pattern' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Please insert only letters"))), __jsx("div", {
    className: "form-steps-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "2")), __jsx("div", {
    className: "form-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("input", {
    name: "email",
    ref: register({
      required: true,
      pattern: /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/i
    }),
    className: "forms-input-text",
    type: "text",
    placeholder: "E-mail",
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), errors.email && errors.email.type === 'required' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "This field is required"), errors.email && errors.email.type === 'minLength' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "This field require min 5 characters"), errors.email && errors.email.type === 'pattern' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Please insert an email valited")), __jsx("div", {
    className: "form-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("input", {
    name: "phone",
    ref: register({
      required: true,
      pattern: /^[0-9]{10}/i
    }),
    className: "forms-input-text",
    type: "text",
    placeholder: "Phone",
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), errors.phone && errors.phone.type === 'required' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "This field is required"), errors.phone && errors.phone.type === 'minLength' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "This field require min 5 characters"), errors.phone && errors.phone.type === 'pattern' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Please insert a phone validated"))), __jsx("div", {
    className: "tellus-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "3")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Tell us about your challenge or opportunity")), __jsx("div", {
    className: "form-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("textarea", {
    ref: register({
      required: true,
      minLength: 5
    }),
    name: "comment",
    wrap: "hard",
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), errors.comment && errors.comment.type === 'required' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "This field is required"), errors.comment && errors.comment.type === 'minLength' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Please tell us more about your idea")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx("div", {
    className: "form-steps-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "4")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Captcha ", "  "), __jsx(react_recaptcha__WEBPACK_IMPORTED_MODULE_3___default.a, {
    ref: function ref(e) {
      return recaptchaInstance = e;
    } // sitekey="6LfS4scUAAAAAHDdoGJqYxi-3_7jmwlrwzbHG1PA"
    ,
    sitekey: "6LeB_8cUAAAAAHLRz5SwWGnsKIOcDyfjLuF4CKC0",
    theme: "light",
    render: "explicit",
    verifyCallback: verifyCallback,
    onloadCallback: callback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), __jsx("div", {
    className: "tellus-button-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("button", {
    className: "form-button",
    onClick: resetRecaptcha,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "RESET reCAPTCHA")), __jsx("button", {
    className: "form-button",
    type: "submit",
    onClick: function onClick() {
      return handleClick();
    },
    disabled: !isVerified,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "SEND"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FormContent);

/***/ }),

/***/ "./components/pages/contact/form/index.tsx":
/*!*************************************************!*\
  !*** ./components/pages/contact/form/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_pages_contact_form_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../public/styles/pages/contact/form/index.scss */ "./public/styles/pages/contact/form/index.scss");
/* harmony import */ var _public_styles_pages_contact_form_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_pages_contact_form_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-content */ "./components/pages/contact/form/form-content.tsx");
var _jsxFileName = "D:\\code\\exp\\ingenia\\components\\pages\\contact\\form\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/** *
 * Orange band show contact message
 * Contact form component
* **/

var ContactForm = function ContactForm() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "form-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "head-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Ingenia is located in two major business & goverment hubs in the Americas"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Contact us"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Send us an e-mail and we will get back to you:")), __jsx(_form_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./components/pages/contact/locations/index.tsx":
/*!******************************************************!*\
  !*** ./components/pages/contact/locations/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image_webp_dist_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-webp/dist/utils */ "./node_modules/react-image-webp/dist/utils/index.js");
/* harmony import */ var react_image_webp_dist_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_webp_dist_utils__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\code\\exp\\ingenia\\components\\pages\\contact\\locations\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** *
 * Component to show images of that places where Ingenia are and their info. 
 * It'll charge image webp if browser supports, if not it'll load am image png 
* **/

var ContactLocations = function ContactLocations() {
  return __jsx("div", {
    className: "location-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "locationimage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("img", {
    src: Object(react_image_webp_dist_utils__WEBPACK_IMPORTED_MODULE_1__["isWebpSupported"])() ? "/static/images/bg/bg_mexico_city.webp" : "/static/images/bg/bg_mexico_city.png",
    alt: "bg_mexico_city",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("div", {
    className: "location-card-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Mexico City"), __jsx("div", {
    className: "location-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("p", {
    className: "locations-content-street",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Anatole France 311"), __jsx("p", {
    className: "locations-content-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Polanco, Miguel Hidalgo"), __jsx("p", {
    className: "locations-content-address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "11560 Mexico D.F."), __jsx("a", {
    href: "tel:+525550220900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("p", {
    className: "locations-content-phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "50 22 09 00"))))), __jsx("div", {
    className: "locationimage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("img", {
    src: Object(react_image_webp_dist_utils__WEBPACK_IMPORTED_MODULE_1__["isWebpSupported"])() ? "/static/images/bg/bg_washington.webp" : "/static/images/bg/bg_washington.png",
    alt: "bg_washington",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("div", {
    className: "location-card-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Washington D.C."), __jsx("div", {
    className: "location-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("p", {
    className: "locations-content-street",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "1200 18th Street, NW"), __jsx("p", {
    className: "locations-content-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Suite 700"), __jsx("p", {
    className: "locations-content-address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Washington D.C. 20036 USA."), __jsx("a", {
    href: "tel:+525550220900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("p", {
    className: "locations-content-phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "50 22 09 00"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactLocations);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/axios/node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/next/dist/client/dev/noop.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/noop.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-hook-form/dist/react-hook-form.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-hook-form/dist/react-hook-form.es.js ***!
  \*****************************************************************/
/*! exports provided: default, FormContext, useFormContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContext", function() { return FormContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormContext", function() { return useFormContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
};
const RADIO_INPUT = 'radio';
const UNDEFINED = 'undefined';
const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
    INPUT: 'input',
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

function attachEventListeners({ field, handleChange, isRadioOrCheckbox, }) {
    const { ref } = field;
    if (!ref.addEventListener) {
        return;
    }
    ref.addEventListener(isRadioOrCheckbox ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
    ref.addEventListener(EVENTS.BLUR, handleChange);
}

var isUndefined = (val) => val === undefined;

var isNullOrUndefined = (value) => value === null || isUndefined(value);

var isArray = (value) => Array.isArray(value);

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) && !isArray(value) && isObjectType(value);

const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const reIsPlainProp = /^\w*$/;
const rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const reEscapeChar = /\\(\\)?/g;
const reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value) {
    return reIsUint.test(value) && value > -1;
}
function isKey(value) {
    if (isArray(value)) {
        return false;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value);
}
const stringToPath = (string) => {
    const result = [];
    string.replace(rePropName, (match, number, quote, string) => {
        result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
};
function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || isArray(objValue)
                    ? objValue
                    : isIndex(tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

var combineFieldValues = (data) => Object.entries(data).reduce((previous, [key, value]) => {
    if (!!key.match(/\[.+\]/gi) || key.indexOf('.') > 0) {
        set(previous, key, value);
        return previous;
    }
    return Object.assign(Object.assign({}, previous), { [key]: value });
}, {});

var removeAllEventListeners = (ref, validateWithStateUpdate) => {
    if (!ref.removeEventListener) {
        return;
    }
    ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
    ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
    ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
};

var isRadioInput = (type) => type === RADIO_INPUT;

var isCheckBoxInput = (type) => type === 'checkbox';

function isDetached(element) {
    if (!element) {
        return true;
    }
    if (!(element instanceof HTMLElement) ||
        element.nodeType === Node.DOCUMENT_NODE) {
        return false;
    }
    return isDetached(element.parentNode);
}

function findRemovedFieldAndRemoveListener(fields, handleChange, field, forceDelete) {
    if (!field) {
        return;
    }
    const { ref, mutationWatcher } = field;
    if (!ref.type || !fields[ref.name]) {
        return;
    }
    const { name, type } = ref;
    const fieldValue = fields[name];
    if ((isRadioInput(type) || isCheckBoxInput(type)) && fieldValue) {
        const { options } = fieldValue;
        if (isArray(options) && options.length) {
            options.forEach(({ ref }, index) => {
                const option = options[index];
                if ((option && isDetached(ref)) || forceDelete) {
                    const mutationWatcher = option.mutationWatcher;
                    removeAllEventListeners(option, handleChange);
                    if (mutationWatcher) {
                        mutationWatcher.disconnect();
                    }
                    options.splice(index, 1);
                }
            });
            if (options && !options.length) {
                delete fields[name];
            }
        }
        else {
            delete fields[name];
        }
    }
    else if (isDetached(ref) || forceDelete) {
        removeAllEventListeners(ref, handleChange);
        if (mutationWatcher) {
            mutationWatcher.disconnect();
        }
        delete fields[name];
    }
}

const defaultReturn = {
    isValid: false,
    value: '',
};
var getRadioValue = (options) => isArray(options)
    ? options.reduce((previous, { ref: { checked, value } }) => checked
        ? {
            isValid: true,
            value,
        }
        : previous, defaultReturn)
    : defaultReturn;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

var isMultipleSelect = (type) => type === 'select-multiple';

var isEmptyString = (value) => value === '';

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter(({ ref: { checked } }) => checked)
                .map(({ ref: { value } }) => value);
            return { value: values, isValid: !!values.length };
        }
        const { checked, value, attributes } = options[0].ref;
        return checked
            ? attributes && !isUndefined(attributes.value)
                ? isUndefined(value) || isEmptyString(value)
                    ? validResult
                    : { value: value, isValid: true }
                : validResult
            : defaultResult;
    }
    return defaultResult;
};

function getFieldValue(fields, ref) {
    const { type, name, options, value, files } = ref;
    const field = fields[name];
    if (type === 'file') {
        return files;
    }
    if (isRadioInput(type)) {
        return field ? getRadioValue(field.options).value : '';
    }
    if (isMultipleSelect(type)) {
        return getMultipleSelectValue(options);
    }
    if (isCheckBoxInput(type)) {
        return field ? getCheckboxValue(field.options).value : false;
    }
    return value;
}

var getFieldsValues = (fields) => Object.values(fields).reduce((previous, { ref, ref: { name } }) => (Object.assign(Object.assign({}, previous), { [name]: getFieldValue(fields, ref) })), {});

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var isSameError = (error, type, message) => isObject(error) && error.type === type && error.message === message;

function shouldUpdateWithError({ errors, name, error, validFields, fieldsWithValidation, }) {
    const isFieldValid = isEmptyObject(error);
    const isFormValid = isEmptyObject(errors);
    const currentFieldError = error[name];
    const existFieldError = errors[name];
    if ((isFieldValid && validFields.has(name)) ||
        (existFieldError && existFieldError.isManual)) {
        return false;
    }
    if (isFormValid !== isFieldValid ||
        (!isFormValid && !existFieldError) ||
        (isFieldValid && fieldsWithValidation.has(name) && !validFields.has(name))) {
        return true;
    }
    return (currentFieldError &&
        !isSameError(existFieldError, currentFieldError.type, currentFieldError.message));
}

var isRegex = (value) => value instanceof RegExp;

var getValueAndMessage = (validationData) => {
    const isPureObject = isObject(validationData) && !isRegex(validationData);
    return {
        value: isPureObject
            ? validationData.value
            : validationData,
        message: isPureObject
            ? validationData.message
            : '',
    };
};

var isString = (value) => typeof value === 'string';

var displayNativeError = (nativeValidation, ref, message) => {
    if (nativeValidation && isString(message)) {
        ref.setCustomValidity(message);
    }
};

var isFunction = (value) => typeof value === 'function';

var isBoolean = (value) => typeof value === 'boolean';

function getValidateError(result, ref, nativeError, type = 'validate') {
    const isStringValue = isString(result);
    if (isStringValue || (isBoolean(result) && !result)) {
        const message = isStringValue ? result : '';
        const error = {
            type,
            message,
            ref,
        };
        nativeError(message);
        return error;
    }
}

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => {
    if (!validateAllFieldCriteria) {
        return {};
    }
    const error = errors[name];
    return Object.assign(Object.assign({}, error), { types: Object.assign(Object.assign({}, (error && error.types ? error.types : {})), { [type]: message || true }) });
};

var validateField = async (fieldsRef, nativeValidation, validateAllFieldCriteria, { ref, ref: { type, value, name, valueAsNumber, valueAsDate }, options, required, maxLength, minLength, min, max, pattern, validate, }) => {
    const fields = fieldsRef.current;
    const error = {};
    const isRadio = isRadioInput(type);
    const isCheckBox = isCheckBoxInput(type);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = isEmptyString(value);
    const nativeError = displayNativeError.bind(null, nativeValidation, ref);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    if (required &&
        ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value))) ||
            (isCheckBox && !getCheckboxValue(options).isValid) ||
            (isRadio && !getRadioValue(options).isValid))) {
        const message = isString(required)
            ? required
            : getValueAndMessage(required).message;
        error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message, ref: isRadioOrCheckbox ? fields[name].options[0].ref : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, message));
        nativeError(message);
        if (!validateAllFieldCriteria) {
            return error;
        }
    }
    if (!isNullOrUndefined(min) || !isNullOrUndefined(max)) {
        let exceedMax;
        let exceedMin;
        const { value: maxValue, message: maxMessage } = getValueAndMessage(max);
        const { value: minValue, message: minMessage } = getValueAndMessage(min);
        if (type === 'number') {
            const valueNumber = valueAsNumber || parseFloat(value);
            if (!isNullOrUndefined(maxValue)) {
                exceedMax = valueNumber > maxValue;
            }
            if (!isNullOrUndefined(minValue)) {
                exceedMin = valueNumber < minValue;
            }
        }
        else {
            const valueDate = valueAsDate || new Date(value);
            if (isString(maxValue)) {
                exceedMax = valueDate > new Date(maxValue);
            }
            if (isString(minValue)) {
                exceedMin = valueDate < new Date(minValue);
            }
        }
        if (exceedMax || exceedMin) {
            const message = exceedMax ? maxMessage : minMessage;
            error[name] = Object.assign({ type: exceedMax
                    ? INPUT_VALIDATION_RULES.max
                    : INPUT_VALIDATION_RULES.min, message,
                ref }, (exceedMax
                ? appendErrorsCurry(INPUT_VALIDATION_RULES.max, message)
                : appendErrorsCurry(INPUT_VALIDATION_RULES.min, message)));
            nativeError(message);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(value) && !isEmpty && (maxLength || minLength)) {
        const { value: maxLengthValue, message: maxLengthMessage, } = getValueAndMessage(maxLength);
        const { value: minLengthValue, message: minLengthMessage, } = getValueAndMessage(minLength);
        const inputLength = value.toString().length;
        const exceedMax = maxLength && inputLength > maxLengthValue;
        const exceedMin = minLength && inputLength < minLengthValue;
        if (exceedMax || exceedMin) {
            const message = exceedMax ? maxLengthMessage : minLengthMessage;
            error[name] = Object.assign({ type: exceedMax
                    ? INPUT_VALIDATION_RULES.maxLength
                    : INPUT_VALIDATION_RULES.minLength, message,
                ref }, (exceedMax
                ? appendErrorsCurry(INPUT_VALIDATION_RULES.maxLength, message)
                : appendErrorsCurry(INPUT_VALIDATION_RULES.minLength, message)));
            nativeError(message);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (pattern && !isEmpty) {
        const { value: patternValue, message: patternMessage } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !patternValue.test(value)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message: patternMessage, ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, patternMessage));
            nativeError(patternMessage);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (validate) {
        const fieldValue = getFieldValue(fields, ref);
        const validateRef = isRadioOrCheckbox && options ? options[0].ref : ref;
        if (isFunction(validate)) {
            const result = await validate(fieldValue);
            const validateError = getValidateError(result, validateRef, nativeError);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            const validateFunctions = Object.entries(validate);
            const validationResult = await new Promise((resolve) => {
                validateFunctions.reduce(async (previous, [key, validate], index) => {
                    if ((!isEmptyObject(await previous) && !validateAllFieldCriteria) ||
                        !isFunction(validate)) {
                        return resolve(previous);
                    }
                    let result;
                    const validateResult = await validate(fieldValue);
                    const validateError = getValidateError(validateResult, validateRef, nativeError, key);
                    if (validateError) {
                        result = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                        if (validateAllFieldCriteria) {
                            error[name] = result;
                        }
                    }
                    else {
                        result = previous;
                    }
                    return validateFunctions.length - 1 === index
                        ? resolve(result)
                        : result;
                }, {});
            });
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: validateRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    if (nativeValidation) {
        ref.setCustomValidity('');
    }
    return error;
};

const parseErrorSchema = (error, validateAllFieldCriteria) => isArray(error.inner)
    ? error.inner.reduce((previous, { path, message, type }) => (Object.assign(Object.assign({}, previous), (previous[path] && validateAllFieldCriteria
        ? {
            [path]: appendErrors(path, validateAllFieldCriteria, previous, type, message),
        }
        : {
            [path]: Object.assign({ message,
                type }, (validateAllFieldCriteria
                ? {
                    types: { [type]: message || true },
                }
                : {})),
        }))), {})
    : {
        [error.path]: { message: error.message, type: error.type },
    };
async function validateWithSchema(validationSchema, validationSchemaOption, validateAllFieldCriteria, data) {
    try {
        return {
            values: await validationSchema.validate(data, validationSchemaOption),
            errors: {},
        };
    }
    catch (e) {
        return {
            values: {},
            errors: parseErrorSchema(e, validateAllFieldCriteria),
        };
    }
}

function attachNativeValidation(ref, rules) {
    Object.entries(rules).forEach(([key, ruleValue]) => {
        const { value } = getValueAndMessage(ruleValue);
        if (key === INPUT_VALIDATION_RULES.pattern && isRegex(value)) {
            ref[key] = value.source;
        }
        else {
            ref[key] = key === INPUT_VALIDATION_RULES.pattern || value;
        }
    });
}

var get = (obj, path, defaultValue) => {
    const result = path
        .split(/[,[\].]+?/)
        .filter(Boolean)
        .reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
    return isUndefined(result) || result === obj ? defaultValue : result;
};

var getDefaultValue = (defaultValues, name, defaultValue) => isUndefined(defaultValues[name])
    ? get(defaultValues, name, defaultValue)
    : defaultValues[name];

function flatArray(list) {
    return list.reduce((a, b) => a.concat(isArray(b) ? flatArray(b) : b), []);
}

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

const getPath = (path, values) => isArray(values)
    ? values.map((item, index) => {
        const pathWithIndex = `${path}[${index}]`;
        return isPrimitive(item) ? pathWithIndex : getPath(pathWithIndex, item);
    })
    : Object.entries(values).map(([key, objectValue]) => {
        const pathWithKey = `${path}.${key}`;
        return isPrimitive(objectValue)
            ? pathWithKey
            : getPath(pathWithKey, objectValue);
    });
var getPath$1 = (parentPath, value) => flatArray(getPath(parentPath, value));

var assignWatchFields = (fieldValues, fieldName, watchFields, combinedDefaultValues) => {
    let value;
    if (isEmptyObject(fieldValues)) {
        value = undefined;
    }
    else if (!isUndefined(fieldValues[fieldName])) {
        watchFields.add(fieldName);
        value = fieldValues[fieldName];
    }
    else {
        value = get(combineFieldValues(fieldValues), fieldName);
        if (!isUndefined(value)) {
            getPath$1(fieldName, value).forEach(name => watchFields.add(name));
        }
    }
    return isUndefined(value)
        ? isObject(combinedDefaultValues)
            ? getDefaultValue(combinedDefaultValues, fieldName)
            : combinedDefaultValues
        : value;
};

var omitValidFields = (errorFields, validFieldNames) => Object.entries(errorFields).reduce((previous, [name, error]) => validFieldNames.some(validFieldName => validFieldName === name)
    ? previous
    : Object.assign(Object.assign({}, previous), { [name]: error }), {});

function onDomRemove(element, onDetachCallback) {
    const observer = new MutationObserver(() => {
        if (isDetached(element)) {
            observer.disconnect();
            onDetachCallback();
        }
    });
    observer.observe(window.document, {
        childList: true,
        subtree: true,
    });
    return observer;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const omitObject = (obj, key) => {
    const _a = key, omitted = obj[_a], rest = __rest(obj, [typeof _a === "symbol" ? _a : _a + ""]);
    return rest;
};

var modeChecker = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
});

const { useRef, useState, useCallback, useEffect } = react__WEBPACK_IMPORTED_MODULE_0__;
function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, validationSchema, defaultValues = {}, nativeValidation = false, submitFocusError = true, validationSchemaOption = { abortEarly: false }, validateCriteriaMode, } = {}) {
    const fieldsRef = useRef({});
    const validateAllFieldCriteria = validateCriteriaMode === 'all';
    const errorsRef = useRef({});
    const touchedFieldsRef = useRef(new Set());
    const watchFieldsRef = useRef(new Set());
    const dirtyFieldsRef = useRef(new Set());
    const fieldsWithValidationRef = useRef(new Set());
    const validFieldsRef = useRef(new Set());
    const isValidRef = useRef(true);
    const defaultRenderValuesRef = useRef({});
    const defaultValuesRef = useRef(defaultValues);
    const isUnMount = useRef(false);
    const isWatchAllRef = useRef(false);
    const isSubmittedRef = useRef(false);
    const isDirtyRef = useRef(false);
    const submitCountRef = useRef(0);
    const isSubmittingRef = useRef(false);
    const handleChange = useRef();
    const [, render] = useState();
    const { isOnBlur, isOnSubmit } = useRef(modeChecker(mode)).current;
    const isWindowUndefined = typeof window === UNDEFINED;
    const isWeb = typeof document !== UNDEFINED &&
        !isWindowUndefined &&
        !isUndefined(window.HTMLElement);
    const isProxyEnabled = !isWindowUndefined && 'Proxy' in window;
    const readFormState = useRef({
        dirty: !isProxyEnabled,
        isSubmitted: isOnSubmit,
        submitCount: !isProxyEnabled,
        touched: !isProxyEnabled,
        isSubmitting: !isProxyEnabled,
        isValid: !isProxyEnabled,
    });
    const { isOnBlur: isReValidateOnBlur, isOnSubmit: isReValidateOnSubmit, } = useRef(modeChecker(reValidateMode)).current;
    const validationSchemaOptionRef = useRef(validationSchemaOption);
    defaultValuesRef.current = defaultValuesRef.current
        ? defaultValuesRef.current
        : defaultValues;
    const combineErrorsRef = (data) => (Object.assign(Object.assign({}, errorsRef.current), data));
    const reRender = useCallback(() => {
        if (!isUnMount.current) {
            render({});
        }
    }, []);
    const validateFieldCurry = useCallback(validateField.bind(null, fieldsRef, nativeValidation, validateAllFieldCriteria), []);
    const validateFieldsSchemaCurry = useCallback(validateWithSchema.bind(null, validationSchema, validationSchemaOptionRef.current, validateAllFieldCriteria), [validationSchema]);
    const renderBaseOnError = useCallback((name, error, shouldRender, skipReRender) => {
        let shouldReRender = shouldRender ||
            shouldUpdateWithError({
                errors: errorsRef.current,
                error,
                name,
                validFields: validFieldsRef.current,
                fieldsWithValidation: fieldsWithValidationRef.current,
            });
        if (isEmptyObject(error)) {
            if (fieldsWithValidationRef.current.has(name) || validationSchema) {
                validFieldsRef.current.add(name);
                shouldReRender = shouldReRender || errorsRef.current[name];
            }
            errorsRef.current = omitObject(errorsRef.current, name);
        }
        else {
            validFieldsRef.current.delete(name);
            shouldReRender = shouldReRender || !errorsRef.current[name];
        }
        errorsRef.current = combineErrorsRef(error);
        if (shouldReRender && !skipReRender) {
            reRender();
            return true;
        }
    }, [reRender, validationSchema]);
    const setFieldValue = useCallback((name, rawValue) => {
        const field = fieldsRef.current[name];
        if (!field) {
            return false;
        }
        const ref = field.ref;
        const { type } = ref;
        const options = field.options;
        const value = isWeb &&
            ref instanceof window.HTMLElement &&
            isNullOrUndefined(rawValue)
            ? ''
            : rawValue;
        if (isRadioInput(type) && options) {
            options.forEach(({ ref: radioRef }) => (radioRef.checked = radioRef.value === value));
        }
        else if (isMultipleSelect(type)) {
            [...ref.options].forEach(selectRef => (selectRef.selected = value.includes(selectRef.value)));
        }
        else if (isCheckBoxInput(type) && options) {
            options.length > 1
                ? options.forEach(({ ref: checkboxRef }) => (checkboxRef.checked = value.includes(checkboxRef.value)))
                : (options[0].ref.checked = !!value);
        }
        else {
            ref.value = value;
        }
        return type;
    }, [isWeb]);
    const setDirty = (name) => {
        if (!fieldsRef.current[name]) {
            return false;
        }
        const isDirty = defaultRenderValuesRef.current[name] !==
            getFieldValue(fieldsRef.current, fieldsRef.current[name].ref);
        const isDirtyChanged = dirtyFieldsRef.current.has(name) !== isDirty;
        if (isDirty) {
            dirtyFieldsRef.current.add(name);
        }
        else {
            dirtyFieldsRef.current.delete(name);
        }
        isDirtyRef.current = !!dirtyFieldsRef.current.size;
        return isDirtyChanged && readFormState.current.dirty;
    };
    const setInternalValue = useCallback((name, value) => {
        setFieldValue(name, value);
        if (setDirty(name) ||
            (!touchedFieldsRef.current.has(name) && readFormState.current.touched)) {
            return !!touchedFieldsRef.current.add(name);
        }
    }, [setFieldValue]);
    const executeValidation = useCallback(async ({ name, value, }, shouldRender, skipReRender) => {
        const field = fieldsRef.current[name];
        if (!field) {
            return false;
        }
        if (!isUndefined(value)) {
            setInternalValue(name, value);
        }
        if (shouldRender) {
            reRender();
        }
        const error = await validateField(fieldsRef, nativeValidation, validateAllFieldCriteria, field);
        renderBaseOnError(name, error, false, skipReRender);
        return isEmptyObject(error);
    }, [
        nativeValidation,
        reRender,
        renderBaseOnError,
        setInternalValue,
        validateAllFieldCriteria,
    ]);
    const executeSchemaValidation = useCallback(async (payload, shouldRender) => {
        const { errors } = await validateWithSchema(validationSchema, validationSchemaOptionRef.current, validateAllFieldCriteria, combineFieldValues(getFieldsValues(fieldsRef.current)));
        const isMultipleFields = isArray(payload);
        const names = isArray(payload)
            ? payload.map(({ name }) => name)
            : [payload.name];
        const validFieldNames = names.filter(name => !errors[name]);
        const previousFormIsValid = isValidRef.current;
        isValidRef.current = isEmptyObject(errors);
        if (isMultipleFields) {
            errorsRef.current = omitValidFields(combineErrorsRef(Object.entries(errors)
                .filter(([key]) => names.includes(key))
                .reduce((previous, [name, error]) => (Object.assign(Object.assign({}, previous), { [name]: error })), {})), validFieldNames);
            reRender();
        }
        else {
            const fieldName = names[0];
            renderBaseOnError(fieldName, errors[fieldName]
                ? { [fieldName]: errors[fieldName] }
                : {}, shouldRender || previousFormIsValid !== isValidRef.current);
        }
        return isEmptyObject(errorsRef.current);
    }, [reRender, renderBaseOnError, validateAllFieldCriteria, validationSchema]);
    const triggerValidation = useCallback(async (payload, shouldRender) => {
        const fields = payload || Object.keys(fieldsRef.current).map(name => ({ name }));
        if (validationSchema) {
            return executeSchemaValidation(fields, shouldRender);
        }
        if (isArray(fields)) {
            const result = await Promise.all(fields.map(async (data) => await executeValidation(data, false, true)));
            reRender();
            return result.every(Boolean);
        }
        return await executeValidation(fields, shouldRender);
    }, [executeSchemaValidation, executeValidation, reRender, validationSchema]);
    const setValue = useCallback((name, value, shouldValidate) => {
        const shouldRender = setInternalValue(name, value) ||
            isWatchAllRef.current ||
            watchFieldsRef.current.has(name);
        if (shouldValidate) {
            return triggerValidation({ name }, shouldRender);
        }
        if (shouldRender) {
            reRender();
        }
        return;
    }, [reRender, setInternalValue, triggerValidation]);
    handleChange.current = handleChange.current
        ? handleChange.current
        : async ({ type, target }) => {
            const name = target ? target.name : '';
            const fields = fieldsRef.current;
            const errors = errorsRef.current;
            const field = fields[name];
            const currentError = errors[name];
            let error;
            if (!field) {
                return;
            }
            const isBlurEvent = type === EVENTS.BLUR;
            const shouldSkipValidation = (isOnSubmit && isReValidateOnSubmit) ||
                (isOnSubmit && !isSubmittedRef.current) ||
                (isOnBlur && !isBlurEvent && !currentError) ||
                (isReValidateOnBlur && !isBlurEvent && currentError) ||
                (isReValidateOnSubmit && currentError);
            const shouldUpdateDirty = setDirty(name);
            let shouldUpdateState = isWatchAllRef.current ||
                watchFieldsRef.current.has(name) ||
                shouldUpdateDirty;
            if (isBlurEvent &&
                !touchedFieldsRef.current.has(name) &&
                readFormState.current.touched) {
                touchedFieldsRef.current.add(name);
                shouldUpdateState = true;
            }
            if (shouldSkipValidation) {
                return shouldUpdateState && reRender();
            }
            if (validationSchema) {
                const { errors } = await validateWithSchema(validationSchema, validationSchemaOptionRef.current, validateAllFieldCriteria, combineFieldValues(getFieldsValues(fields)));
                const validForm = isEmptyObject(errors);
                error = (errors[name] ? { [name]: errors[name] } : {});
                if (isValidRef.current !== validForm) {
                    shouldUpdateState = true;
                }
                isValidRef.current = validForm;
            }
            else {
                error = await validateField(fieldsRef, nativeValidation, validateAllFieldCriteria, field);
            }
            if (!renderBaseOnError(name, error) && shouldUpdateState) {
                reRender();
            }
        };
    const validateSchemaIsValid = useCallback(() => {
        const fieldValues = isEmptyObject(defaultValuesRef.current)
            ? getFieldsValues(fieldsRef.current)
            : defaultValuesRef.current;
        validateFieldsSchemaCurry(combineFieldValues(fieldValues)).then(({ errors }) => {
            const previousFormIsValid = isValidRef.current;
            isValidRef.current = isEmptyObject(errors);
            if (previousFormIsValid && previousFormIsValid !== isValidRef.current) {
                reRender();
            }
        });
    }, [reRender, validateFieldsSchemaCurry]);
    const resetFieldRef = useCallback((name) => {
        errorsRef.current = omitObject(errorsRef.current, name);
        fieldsRef.current = omitObject(fieldsRef.current, name);
        defaultRenderValuesRef.current = omitObject(defaultRenderValuesRef.current, name);
        [
            touchedFieldsRef,
            dirtyFieldsRef,
            fieldsWithValidationRef,
            validFieldsRef,
            watchFieldsRef,
        ].forEach(data => data.current.delete(name));
        if (readFormState.current.isValid || readFormState.current.touched) {
            reRender();
        }
        if (validationSchema) {
            validateSchemaIsValid();
        }
    }, [reRender]);
    const removeEventListenerAndRef = useCallback((field, forceDelete) => {
        if (!field) {
            return;
        }
        if (!isUndefined(handleChange.current)) {
            findRemovedFieldAndRemoveListener(fieldsRef.current, handleChange.current, field, forceDelete);
        }
        resetFieldRef(field.ref.name);
    }, [resetFieldRef]);
    function clearError(name) {
        if (isUndefined(name)) {
            errorsRef.current = {};
        }
        else {
            (isArray(name) ? name : [name]).forEach(fieldName => (errorsRef.current = omitObject(errorsRef.current, fieldName)));
        }
        reRender();
    }
    const setInternalError = ({ name, type, types, message, preventRender, }) => {
        const errors = errorsRef.current;
        const field = fieldsRef.current[name];
        if (!isSameError(errors[name], type, message)) {
            errors[name] = {
                type,
                types,
                message,
                ref: field ? field.ref : {},
                isManual: true,
            };
            if (!preventRender) {
                reRender();
            }
        }
    };
    function setError(name, type = '', message) {
        if (isString(name)) {
            setInternalError(Object.assign({ name }, (isObject(type)
                ? {
                    types: type,
                    type: '',
                }
                : {
                    type,
                    message,
                })));
        }
        else if (isArray(name)) {
            name.forEach(error => setInternalError(Object.assign(Object.assign({}, error), { preventRender: true })));
            reRender();
        }
    }
    function watch(fieldNames, defaultValue) {
        const combinedDefaultValues = isUndefined(defaultValue)
            ? isUndefined(defaultValues)
                ? {}
                : defaultValues
            : defaultValue;
        const fieldValues = getFieldsValues(fieldsRef.current);
        const watchFields = watchFieldsRef.current;
        if (isProxyEnabled) {
            readFormState.current.dirty = true;
        }
        if (isString(fieldNames)) {
            return assignWatchFields(fieldValues, fieldNames, watchFields, combinedDefaultValues);
        }
        if (isArray(fieldNames)) {
            return fieldNames.reduce((previous, name) => {
                let value;
                if (isEmptyObject(fieldsRef.current) &&
                    isObject(combinedDefaultValues)) {
                    value = getDefaultValue(combinedDefaultValues, name);
                }
                else {
                    value = assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues);
                }
                return Object.assign(Object.assign({}, previous), { [name]: value });
            }, {});
        }
        isWatchAllRef.current = true;
        return ((!isEmptyObject(fieldValues) && fieldValues) ||
            defaultValue ||
            defaultValues);
    }
    function unregister(names) {
        if (!isEmptyObject(fieldsRef.current)) {
            (isArray(names) ? names : [names]).forEach(fieldName => removeEventListenerAndRef(fieldsRef.current[fieldName], true));
        }
    }
    function registerFieldsRef(ref, validateOptions = {}) {
        if (!ref.name) {
            return console.warn('Missing name @', ref);
        }
        const { name, type, value } = ref;
        const fieldAttributes = Object.assign({ ref }, validateOptions);
        const fields = fieldsRef.current;
        const isRadioOrCheckbox = isRadioInput(type) || isCheckBoxInput(type);
        let currentField = fields[name];
        if (isRadioOrCheckbox
            ? currentField &&
                isArray(currentField.options) &&
                currentField.options.find(({ ref }) => value === ref.value)
            : currentField) {
            fields[name] = Object.assign(Object.assign({}, currentField), validateOptions);
            return;
        }
        if (type) {
            const mutationWatcher = onDomRemove(ref, () => removeEventListenerAndRef(fieldAttributes));
            if (isRadioOrCheckbox) {
                currentField = Object.assign({ options: [
                        ...((currentField && currentField.options) || []),
                        {
                            ref,
                            mutationWatcher,
                        },
                    ], ref: { type, name } }, validateOptions);
            }
            else {
                currentField = Object.assign(Object.assign({}, fieldAttributes), { mutationWatcher });
            }
        }
        else {
            currentField = fieldAttributes;
        }
        fields[name] = currentField;
        if (!isEmptyObject(defaultValuesRef.current)) {
            const defaultValue = getDefaultValue(defaultValuesRef.current, name);
            if (!isUndefined(defaultValue)) {
                setFieldValue(name, defaultValue);
            }
        }
        if (validationSchema) {
            validateSchemaIsValid();
        }
        else if (!isEmptyObject(validateOptions)) {
            fieldsWithValidationRef.current.add(name);
            if (!isOnSubmit && readFormState.current.isValid) {
                validateFieldCurry(currentField).then(error => {
                    const previousFormIsValid = isValidRef.current;
                    if (isEmptyObject(error)) {
                        validFieldsRef.current.add(name);
                    }
                    else {
                        isValidRef.current = false;
                    }
                    if (previousFormIsValid !== isValidRef.current) {
                        reRender();
                    }
                });
            }
        }
        if (!defaultRenderValuesRef.current[name]) {
            defaultRenderValuesRef.current[name] = getFieldValue(fields, currentField.ref);
        }
        if (!type) {
            return;
        }
        const fieldToAttachListener = isRadioOrCheckbox && currentField.options
            ? currentField.options[currentField.options.length - 1]
            : currentField;
        if (nativeValidation && validateOptions) {
            attachNativeValidation(ref, validateOptions);
        }
        else {
            attachEventListeners({
                field: fieldToAttachListener,
                isRadioOrCheckbox,
                handleChange: handleChange.current,
            });
        }
    }
    function register(refOrValidateRule, validationOptions) {
        if (isWindowUndefined || !refOrValidateRule) {
            return;
        }
        if (validationOptions && isString(validationOptions.name)) {
            registerFieldsRef({ name: validationOptions.name }, validationOptions);
            return;
        }
        if (isObject(refOrValidateRule) && 'name' in refOrValidateRule) {
            registerFieldsRef(refOrValidateRule, validationOptions);
            return;
        }
        return (ref) => ref && registerFieldsRef(ref, refOrValidateRule);
    }
    const handleSubmit = useCallback((callback) => async (e) => {
        if (e) {
            e.preventDefault();
            e.persist();
        }
        let fieldErrors;
        let fieldValues;
        const fields = fieldsRef.current;
        if (readFormState.current.isSubmitting) {
            isSubmittingRef.current = true;
            reRender();
        }
        try {
            if (validationSchema) {
                fieldValues = getFieldsValues(fields);
                const { errors, values } = await validateFieldsSchemaCurry(combineFieldValues(fieldValues));
                errorsRef.current = errors;
                fieldErrors = errors;
                fieldValues = values;
            }
            else {
                const { errors, values, } = await Object.values(fields).reduce(async (previous, field) => {
                    if (!field) {
                        return previous;
                    }
                    const resolvedPrevious = await previous;
                    const { ref, ref: { name }, } = field;
                    if (!fields[name]) {
                        return Promise.resolve(resolvedPrevious);
                    }
                    const fieldError = await validateFieldCurry(field);
                    if (fieldError[name]) {
                        resolvedPrevious.errors = Object.assign(Object.assign({}, resolvedPrevious.errors), fieldError);
                        validFieldsRef.current.delete(name);
                        return Promise.resolve(resolvedPrevious);
                    }
                    if (fieldsWithValidationRef.current.has(name)) {
                        validFieldsRef.current.add(name);
                    }
                    resolvedPrevious.values[name] = getFieldValue(fields, ref);
                    return Promise.resolve(resolvedPrevious);
                }, Promise.resolve({
                    errors: {},
                    values: {},
                }));
                fieldErrors = errors;
                fieldValues = values;
            }
            if (isEmptyObject(fieldErrors)) {
                errorsRef.current = {};
                await callback(combineFieldValues(fieldValues), e);
            }
            else {
                if (submitFocusError) {
                    Object.keys(fieldErrors).reduce((previous, current) => {
                        const field = fields[current];
                        if (field && previous) {
                            if (field.ref.focus) {
                                field.ref.focus();
                                return false;
                            }
                            else if (field.options) {
                                field.options[0].ref.focus();
                                return false;
                            }
                        }
                        return previous;
                    }, true);
                }
                errorsRef.current = fieldErrors;
            }
        }
        finally {
            isSubmittedRef.current = true;
            isSubmittingRef.current = false;
            submitCountRef.current = submitCountRef.current + 1;
            reRender();
        }
    }, [
        reRender,
        submitFocusError,
        validateFieldCurry,
        validateFieldsSchemaCurry,
        validationSchema,
    ]);
    const resetRefs = () => {
        errorsRef.current = {};
        fieldsRef.current = {};
        validFieldsRef.current = new Set();
        fieldsWithValidationRef.current = new Set();
        defaultRenderValuesRef.current = {};
        touchedFieldsRef.current = new Set();
        watchFieldsRef.current = new Set();
        dirtyFieldsRef.current = new Set();
        isWatchAllRef.current = false;
        isSubmittedRef.current = false;
        isDirtyRef.current = false;
        isValidRef.current = true;
        submitCountRef.current = 0;
    };
    const reset = useCallback((values) => {
        const fieldsKeyValue = Object.entries(fieldsRef.current);
        for (const [, value] of fieldsKeyValue) {
            if (value && value.ref && value.ref.closest) {
                try {
                    value.ref.closest('form').reset();
                    break;
                }
                catch (_a) { }
            }
        }
        resetRefs();
        if (values) {
            defaultValuesRef.current = values;
        }
        reRender();
    }, [reRender]);
    const getValues = useCallback((payload) => {
        const fieldValues = getFieldsValues(fieldsRef.current);
        const outputValues = isEmptyObject(fieldValues)
            ? defaultValues
            : fieldValues;
        return payload && payload.nest
            ? combineFieldValues(outputValues)
            : outputValues;
    }, [defaultValues]);
    useEffect(() => () => {
        isUnMount.current = true;
        fieldsRef.current &&
            Object.values(fieldsRef.current).forEach((field) => removeEventListenerAndRef(field, true));
    }, [removeEventListenerAndRef]);
    if (!validationSchema) {
        isValidRef.current =
            validFieldsRef.current.size >= fieldsWithValidationRef.current.size &&
                isEmptyObject(errorsRef.current);
    }
    const formState = {
        dirty: isDirtyRef.current,
        isSubmitted: isSubmittedRef.current,
        submitCount: submitCountRef.current,
        touched: [...touchedFieldsRef.current],
        isSubmitting: isSubmittingRef.current,
        isValid: isOnSubmit
            ? isSubmittedRef.current && isEmptyObject(errorsRef.current)
            : isEmptyObject(fieldsRef.current) || isValidRef.current,
    };
    return {
        register: useCallback(register, [
            defaultRenderValuesRef.current,
            defaultValuesRef.current,
        ]),
        unregister: useCallback(unregister, [removeEventListenerAndRef]),
        clearError: useCallback(clearError, []),
        setError: useCallback(setError, []),
        handleSubmit,
        watch,
        reset,
        setValue,
        triggerValidation,
        getValues,
        errors: errorsRef.current,
        formState: isProxyEnabled
            ? new Proxy(formState, {
                get: (obj, prop) => {
                    if (prop in obj) {
                        readFormState.current[prop] = true;
                        return obj[prop];
                    }
                    return {};
                },
            })
            : formState,
    };
}

const FormGlobalContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
function useFormContext() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(FormGlobalContext);
}
function FormContext(props) {
    const { children, formState, errors } = props, restMethods = __rest(props, ["children", "formState", "errors"]);
    const restRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(restMethods);
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormGlobalContext.Provider, { value: Object.assign(Object.assign({}, restRef.current), { formState, errors }) }, children));
}

/* harmony default export */ __webpack_exports__["default"] = (useForm);



/***/ }),

/***/ "./node_modules/react-image-webp/dist/utils/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-image-webp/dist/utils/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var support = void 0;

/**
 * Check browser webp support
 * @returns {boolean}
 */
var isWebpSupported = exports.isWebpSupported = function isWebpSupported() {

    if (typeof support !== "undefined") return support;

    var elem = (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object' ? document.createElement('canvas') : {};

    support = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;

    return support;
};

/***/ }),

/***/ "./node_modules/react-recaptcha/dist/react-recaptcha.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-recaptcha/dist/react-recaptcha.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(this,function(e){return function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),s=a(6),c=r(s),p=a(4),u=r(p),d={className:u.default.string,onloadCallbackName:u.default.string,elementID:u.default.string,onloadCallback:u.default.func,verifyCallback:u.default.func,expiredCallback:u.default.func,render:u.default.oneOf(["onload","explicit"]),sitekey:u.default.string,theme:u.default.oneOf(["light","dark"]),type:u.default.string,verifyCallbackName:u.default.string,expiredCallbackName:u.default.string,size:u.default.oneOf(["invisible","compact","normal"]),tabindex:u.default.string,hl:u.default.string,badge:u.default.oneOf(["bottomright","bottomleft","inline"])},f={elementID:"g-recaptcha",className:"g-recaptcha",onloadCallback:void 0,onloadCallbackName:"onloadCallback",verifyCallback:void 0,verifyCallbackName:"verifyCallback",expiredCallback:void 0,expiredCallbackName:"expiredCallback",render:"onload",theme:"light",type:"image",size:"normal",tabindex:"0",hl:"en",badge:"bottomright"},h=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.grecaptcha&&"function"==typeof window.grecaptcha.render},y=void 0,b=function(e){function t(e){n(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a._renderGrecaptcha=a._renderGrecaptcha.bind(a),a.reset=a.reset.bind(a),a.state={ready:h(),widget:null},a.state.ready||"undefined"==typeof window||(y=setInterval(a._updateReadyState.bind(a),1e3)),a}return i(t,e),l(t,[{key:"componentDidMount",value:function(){this.state.ready&&this._renderGrecaptcha()}},{key:"componentDidUpdate",value:function(e,t){var a=this.props,r=a.render,n=a.onloadCallback;"explicit"===r&&n&&this.state.ready&&!t.ready&&this._renderGrecaptcha()}},{key:"componentWillUnmount",value:function(){clearInterval(y)}},{key:"reset",value:function(){var e=this.state,t=e.ready,a=e.widget;t&&null!==a&&grecaptcha.reset(a)}},{key:"execute",value:function(){var e=this.state,t=e.ready,a=e.widget;t&&null!==a&&grecaptcha.execute(a)}},{key:"_updateReadyState",value:function(){h()&&(this.setState({ready:!0}),clearInterval(y))}},{key:"_renderGrecaptcha",value:function(){this.state.widget=grecaptcha.render(this.props.elementID,{sitekey:this.props.sitekey,callback:this.props.verifyCallback?this.props.verifyCallback:void 0,theme:this.props.theme,type:this.props.type,size:this.props.size,tabindex:this.props.tabindex,hl:this.props.hl,badge:this.props.badge,"expired-callback":this.props.expiredCallback?this.props.expiredCallback:void 0}),this.props.onloadCallback&&this.props.onloadCallback()}},{key:"render",value:function(){return"explicit"===this.props.render&&this.props.onloadCallback?c.default.createElement("div",{id:this.props.elementID,"data-onloadcallbackname":this.props.onloadCallbackName,"data-verifycallbackname":this.props.verifyCallbackName}):c.default.createElement("div",{id:this.props.elementID,className:this.props.className,"data-sitekey":this.props.sitekey,"data-theme":this.props.theme,"data-type":this.props.type,"data-size":this.props.size,"data-badge":this.props.badge,"data-tabindex":this.props.tabindex})}}]),t}(s.Component);t.default=b,b.propTypes=d,b.defaultProps=f,e.exports=t.default},function(e,t){"use strict";function a(e){return function(){return e}}var r=function(){};r.thatReturns=a,r.thatReturnsFalse=a(!1),r.thatReturnsTrue=a(!0),r.thatReturnsNull=a(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,a){"use strict";function r(e,t,a,r,o,i,l,s){if(n(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[a,r,o,i,l,s],u=0;c=new Error(t.replace(/%s/g,function(){return p[u++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var n=function(e){};e.exports=r},function(e,t,a){"use strict";var r=a(1),n=a(2),o=a(5);e.exports=function(){function e(e,t,a,r,i,l){l!==o&&n(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return a.checkPropTypes=r,a.PropTypes=a,a}},function(e,t,a){e.exports=a(3)()},function(e,t){"use strict";var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=a},function(t,a){t.exports=e}])});

/***/ }),

/***/ "./public/styles/commons/footer/index.scss":
/*!*************************************************!*\
  !*** ./public/styles/commons/footer/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1576525416739");
          });
      }
    }
  

/***/ }),

/***/ "./public/styles/commons/navbar/index.scss":
/*!*************************************************!*\
  !*** ./public/styles/commons/navbar/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1576525417174");
          });
      }
    }
  

/***/ }),

/***/ "./public/styles/pages/contact/favoriteplaces/index.scss":
/*!***************************************************************!*\
  !*** ./public/styles/pages/contact/favoriteplaces/index.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1576525417075");
          });
      }
    }
  

/***/ }),

/***/ "./public/styles/pages/contact/form/index.scss":
/*!*****************************************************!*\
  !*** ./public/styles/pages/contact/form/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1576525416991");
          });
      }
    }
  

/***/ }),

/***/ "./public/styles/pages/contact/index.scss":
/*!************************************************!*\
  !*** ./public/styles/pages/contact/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1576525418020");
          });
      }
    }
  

/***/ }),

/***/ "./utils/favoriteplaces.js":
/*!*********************************!*\
  !*** ./utils/favoriteplaces.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");


var _ref, _ref2, _ref3, _ref4, _ref5;

/* harmony default export */ __webpack_exports__["default"] = ({
  "favoriteplaces": [{
    "readbook": [{
      "key": "placereadbook1",
      "name": "place to read 1",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "USA",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "readbook"
    }, {
      "key": "placereadbook2",
      "name": "place to read 2",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "Mexico",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "readbook"
    }, {
      "key": "placereadbook3",
      "name": "place to read 3",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "USA",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "readbook"
    }, {
      "key": "placereadbook4",
      "name": "place to read 4",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "Mexico",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "readbook"
    }, {
      "key": "placereadbook5",
      "name": "place to read 5",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "USA",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "readbook"
    }, {
      "key": "placereadbook6",
      "name": "place to read 6",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "Mexico",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "readbook"
    }],
    "meetpeople": [(_ref = {
      "key": "placemeetpeople1",
      "name": "place to meetpeople 1",
      "link": "https://www.facebook.com"
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "link", "https://www.facebook.com"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "ubication", "123 Main St"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "country", "Mexico"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "info", "amazing burgers, imprompteau jazz trios"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "category", "meetpeople"), _ref), {
      "key": "placemeetpeople2",
      "name": "place to meetpeople 2",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "USA",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "meetpeople"
    }, {
      "key": "placemeetpeople3",
      "name": "place to meetpeople 3",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "Mexico",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "meetpeople"
    }, {
      "key": "placemeetpeople4",
      "name": "place to meetpeople 4",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "USA",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "meetpeople"
    }, {
      "key": "placemeetpeople5",
      "name": "place to meetpeople 5",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "Mexico",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "meetpeople"
    }, {
      "key": "placemeetpeople6",
      "name": "place to meetpeople 6",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "USA",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "meetpeople"
    }],
    "entertain": [(_ref2 = {
      "key": "placeentertain1",
      "name": "place to entertain 1",
      "link": "https://www.facebook.com"
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "link", "https://www.facebook.com"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "ubication", "123 Main St"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "country", "USA"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "info", "amazing burgers, imprompteau jazz trios"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "category", "entertain"), _ref2), {
      "key": "placeentertain2",
      "name": "place to entertain 2",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "Mexico",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "entertain"
    }, {
      "key": "placeentertain3",
      "name": "place to entertain 3",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "USA",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "entertain"
    }, {
      "key": "placeentertain4",
      "name": "place to entertain 4",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "Mexico",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "entertain"
    }, {
      "key": "placeentertain5",
      "name": "place to entertain 5",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "USA",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "entertain"
    }, {
      "key": "placeentertain6",
      "name": "place to entertain 6",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "Mexico",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "entertain"
    }],
    "exercise": [(_ref3 = {
      "key": "placeexercise1",
      "name": "place to exercise 1",
      "link": "https://www.facebook.com"
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "link", "https://www.facebook.com"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "ubication", "123 Main St"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "country", "Mexico"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "info", "amazing burgers, imprompteau jazz trios"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "category", "exercise"), _ref3), {
      "key": "placeexercise2",
      "name": "place to exercise 2",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "USA",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "exercise"
    }, {
      "key": "placeexercise3",
      "name": "place to exercise 3",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "Mexico",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "exercise"
    }, {
      "key": "placeexercise4",
      "name": "place to exercise 4",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "USA",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "exercise"
    }, {
      "key": "placeexercise5",
      "name": "place to exercise 5",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "Mexico",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "exercise"
    }, {
      "key": "placeexercise6",
      "name": "place to exercise 6",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "USA",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "exercise"
    }],
    "healthyfood": [(_ref4 = {
      "key": "placehealthyfood1",
      "name": "place to healthyfood 1",
      "link": "https://www.facebook.com"
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "link", "https://www.facebook.com"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "ubication", "123 Main St"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "country", "USA"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "info", "amazing burgers, imprompteau jazz trios"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "category", "healthyfood"), _ref4), {
      "key": "placehealthyfood2",
      "name": "place to healthyfood 2",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "Mexico",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "healthyfood"
    }, {
      "key": "placehealthyfood3",
      "name": "place to healthyfood 3",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "USA",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "healthyfood"
    }, {
      "key": "placehealthyfood4",
      "name": "place to healthyfood 4",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "Mexico",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "healthyfood"
    }, {
      "key": "placehealthyfood5",
      "name": "place to healthyfood 5",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "USA",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "healthyfood"
    }, {
      "key": "placehealthyfood6",
      "name": "place to healthyfood 6",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "Mexico",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "healthyfood"
    }],
    "shopping": [(_ref5 = {
      "key": "placeshopping1",
      "name": "place to shopping 1",
      "link": "https://www.facebook.com"
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, "link", "https://www.facebook.com"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, "ubication", "123 Main St"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, "country", "Mexico"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, "info", "amazing burgers, imprompteau jazz trios"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, "category", "shopping"), _ref5), {
      "key": "placeshopping2",
      "name": "place to shopping 2",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "USA",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "shopping"
    }, {
      "key": "placeshopping3",
      "name": "place to shopping 3",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "Mexico",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "shopping"
    }, {
      "key": "placeshopping4",
      "name": "place to shopping 4",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "USA",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "shopping"
    }, {
      "key": "placeshopping5",
      "name": "place to shopping 5",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "Mexico",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "shopping"
    }, {
      "key": "placeshopping6",
      "name": "place to shopping 6",
      "link": "https://www.facebook.com",
      "ubication": "123 Main St",
      "country": "USA",
      "info": "amazing burgers, imprompteau jazz trios",
      "category": "shopping"
    }]
  }]
});

/***/ })

}]);
//# sourceMappingURL=styles.js.map