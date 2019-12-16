webpackHotUpdate(1,{

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
var _jsxFileName = "D:\\code\\exp\\ingenia\\components\\pages\\contact\\form\\form-content.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var FormContent = function FormContent() {
  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.errors; // @ts-ignore


  var onSubmit = function onSubmit(data) {
    console.log('dataform', data);
  };

  console.log(watch('example'));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "form-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "fiels-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "1")), __jsx("input", {
    name: "name",
    ref: register({
      required: true
    }),
    className: "forms-input-text",
    type: "text",
    placeholder: "Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), errors.exampleRequired && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "This field is required"), __jsx("input", {
    name: "lastname",
    ref: register({
      required: true
    }),
    className: "forms-input-text",
    type: "text",
    placeholder: "Last Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), errors.exampleRequired && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "This field is required")), __jsx("div", {
    className: "form-steps-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "2")), __jsx("input", {
    name: "email",
    ref: register({
      required: true
    }),
    className: "forms-input-text",
    type: "text",
    placeholder: "E-mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), errors.exampleRequired && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "This field is required"), __jsx("input", {
    name: "phone",
    ref: register({
      required: true
    }),
    className: "forms-input-text",
    type: "text",
    placeholder: "Phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), errors.exampleRequired && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "This field is required")), __jsx("div", {
    className: "tellus-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "3")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Tell us about your challenge or opportunity")), __jsx("textarea", {
    ref: register({
      required: true
    }),
    name: "comment",
    id: "",
    cols: 50,
    rows: 10,
    wrap: "hard",
    minLength: 10,
    maxLength: 500,
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("div", {
    className: "tellus-button-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("button", {
    ref: register,
    className: "form-button",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "SEND"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FormContent);

/***/ })

})
//# sourceMappingURL=1.85efcf1f3329b191f3b4.hot-update.js.map