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
 // import axios from 'axios'

var FormContent = function FormContent() {
  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.errors; // @ts-ignore


  var onSubmit = function onSubmit(data) {
    console.log('dataform', data); // axios.post('http://ingenia.com/snippets/test/contact.php', data)
  };

  console.log(watch('example'));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "form-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "fiels-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "1")), __jsx("div", {
    className: "form-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("input", {
    name: "name",
    ref: register({
      required: true,
      minLength: 5,
      pattern: /^[A-Za-z]+$/i
    }),
    className: "forms-input-text",
    type: "text",
    placeholder: "Name",
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), errors.name && errors.name.type === 'required' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "This field is required"), errors.name && errors.name.type === 'minLength' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "This field require min 5 characters")), __jsx("div", {
    className: "form-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("input", {
    name: "lastname",
    ref: register({
      required: true,
      minLength: 5,
      pattern: /^[A-Za-z]+$/i
    }),
    className: "forms-input-text",
    type: "text",
    placeholder: "Last Name",
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), errors.lastname && errors.lastname.type === 'required' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "This field is required"), errors.lastname && errors.lastname.type === 'minLength' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "This field require min 5 characters"))), __jsx("div", {
    className: "form-steps-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "2")), __jsx("div", {
    className: "form-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
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
      lineNumber: 33
    },
    __self: this
  }), errors.email && errors.email.type === 'required' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "This field is required"), errors.email && errors.email.type === 'minLength' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "This field require min 5 characters"), errors.email && errors.email.type === 'pattern' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Please insert an email valited")), __jsx("div", {
    className: "form-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
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
      lineNumber: 39
    },
    __self: this
  }), errors.phone && errors.phone.type === 'required' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "This field is required"), errors.phone && errors.phone.type === 'minLength' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "This field require min 5 characters"), errors.phone && errors.phone.type === 'pattern' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Please insert a phone validated"))), __jsx("div", {
    className: "tellus-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "3")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Tell us about your challenge or opportunity")), __jsx("textarea", {
    ref: register({
      required: true
    }),
    name: "comment",
    wrap: "hard",
    minLength: 10,
    maxLength: 500,
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("div", {
    className: "tellus-button-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("button", {
    className: "form-button",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "SEND"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FormContent);

/***/ })

})
//# sourceMappingURL=1.a4b6da52a047ebf4f97e.hot-update.js.map