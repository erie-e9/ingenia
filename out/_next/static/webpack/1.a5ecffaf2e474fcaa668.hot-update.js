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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\code\\exp\\ingenia\\components\\pages\\contact\\form\\form-content.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var FormContent = function FormContent() {
  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.errors; // @ts-ignore


  var onSubmit = function onSubmit(data) {
    var dataobj = {
      fullname: "".concat(data.name, " ").concat(data.lastname),
      email: data.email,
      phone: data.phone,
      comment: data.comment
    };
    console.log('dataform', dataobj); // axios.post('http://ingenia.com/snippets/test/contact.php', {dataobj})
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: 'post',
      url: 'http://ingenia.com/snippets/test/contact.php',
      data: dataobj
    }).then(function (response) {
      console.log(response);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  console.log(watch('example'));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "form-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "fiels-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "1")), __jsx("div", {
    className: "form-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
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
      lineNumber: 47
    },
    __self: this
  }), errors.name && errors.name.type === 'required' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "This field is required"), errors.name && errors.name.type === 'minLength' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "This field require min 5 characters"), errors.name && errors.name.type === 'pattern' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Please insert only letters")), __jsx("div", {
    className: "form-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
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
      lineNumber: 53
    },
    __self: this
  }), errors.lastname && errors.lastname.type === 'required' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "This field is required"), errors.lastname && errors.lastname.type === 'minLength' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "This field require min 5 characters"), errors.lastname && errors.lastname.type === 'pattern' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Please insert only letters"))), __jsx("div", {
    className: "form-steps-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "2")), __jsx("div", {
    className: "form-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
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
      lineNumber: 62
    },
    __self: this
  }), errors.email && errors.email.type === 'required' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "This field is required"), errors.email && errors.email.type === 'minLength' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "This field require min 5 characters"), errors.email && errors.email.type === 'pattern' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Please insert an email valited")), __jsx("div", {
    className: "form-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
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
      lineNumber: 68
    },
    __self: this
  }), errors.phone && errors.phone.type === 'required' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "This field is required"), errors.phone && errors.phone.type === 'minLength' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "This field require min 5 characters"), errors.phone && errors.phone.type === 'pattern' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Please insert a phone validated"))), __jsx("div", {
    className: "tellus-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "form-steps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "3")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Tell us about your challenge or opportunity")), __jsx("div", {
    className: "form-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
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
      lineNumber: 80
    },
    __self: this
  }), errors.comment && errors.comment.type === 'required' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "This field is required"), errors.comment && errors.comment.type === 'minLength' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Please tell us more about your idea")), __jsx("div", {
    className: "tellus-button-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("button", {
    className: "form-button",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "SEND"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FormContent);

/***/ })

})
//# sourceMappingURL=1.a5ecffaf2e474fcaa668.hot-update.js.map